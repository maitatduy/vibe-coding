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
}
