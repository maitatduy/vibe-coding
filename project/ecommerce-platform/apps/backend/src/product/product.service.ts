import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/prisma/prisma.service';

@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService) {}

  async getFeaturedProducts(limit: number) {
    const products = await this.prisma.product.findMany({
      where: { isFeatured: true, isActive: true },
      take: limit,
      select: {
        id: true,
        name: true,
        slug: true,
        price: true,
        salePrice: true,
        imageUrl: true,
        stock: true,
      },
    });
    
    return products.map((p) => ({
      ...p,
      price: Number(p.price),
      salePrice: p.salePrice ? Number(p.salePrice) : null,
    }));
  }

  async getProducts(query: any) {
    const {
      page = 1,
      limit = 12,
      categoryId,
      minPrice,
      maxPrice,
      sortBy = 'createdAt',
      sortOrder = 'desc',
      search,
    } = query;

    const skip = (page - 1) * limit;
    const where: any = { isActive: true };

    if (categoryId) {
      where.categoryId = categoryId;
    }

    if (search) {
      where.name = { contains: search };
    }

    if (minPrice !== undefined || maxPrice !== undefined) {
      where.price = {};
      if (minPrice !== undefined) where.price.gte = minPrice;
      if (maxPrice !== undefined) where.price.lte = maxPrice;
    }

    const orderBy: any = {};
    if (sortBy === 'price') {
      orderBy.price = sortOrder;
    } else if (sortBy === 'isFeatured') {
      orderBy.isFeatured = sortOrder;
    } else {
      orderBy.createdAt = sortOrder;
    }

    const [totalItems, products] = await Promise.all([
      this.prisma.product.count({ where }),
      this.prisma.product.findMany({
        where,
        orderBy,
        skip,
        take: limit,
        select: {
          id: true,
          name: true,
          slug: true,
          price: true,
          salePrice: true,
          imageUrl: true,
          stock: true,
          isFeatured: true,
          categoryId: true,
        },
      }),
    ]);

    return {
      data: products.map((p) => ({
        ...p,
        price: Number(p.price),
        salePrice: p.salePrice ? Number(p.salePrice) : null,
      })),
      meta: {
        page,
        limit,
        totalItems,
        totalPages: Math.ceil(totalItems / limit),
      },
    };
  }

  async getFiltersMeta() {
    const categories = await this.prisma.category.findMany({
      where: { isActive: true },
      select: {
        id: true,
        name: true,
        _count: {
          select: { products: { where: { isActive: true } } },
        },
      },
    });

    const aggregations = await this.prisma.product.aggregate({
      where: { isActive: true },
      _min: { price: true },
      _max: { price: true },
    });

    return {
      data: {
        categories: categories.map((c) => ({
          id: c.id,
          name: c.name,
          count: c._count.products,
        })),
        priceRange: {
          min: Number(aggregations._min.price || 0),
          max: Number(aggregations._max.price || 0),
        },
      },
    };
  }
}
