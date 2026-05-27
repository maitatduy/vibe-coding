import { Injectable } from '@nestjs/common';
import { BannerService } from '@/banner/banner.service';
import { CategoryService } from '@/category/category.service';
import { ProductService } from '@/product/product.service';

@Injectable()
export class HomeService {
  constructor(
    private readonly bannerService: BannerService,
    private readonly categoryService: CategoryService,
    private readonly productService: ProductService,
  ) {}

  async getBanners() {
    const banners = await this.bannerService.getActiveBanners();
    return { data: banners };
  }

  async getCategories(limit?: number) {
    const categories = await this.categoryService.getHomeCategories(limit);
    return { data: categories };
  }

  async getFeaturedProducts(limit: number) {
    const products = await this.productService.getFeaturedProducts(limit);
    return { data: products };
  }
}
