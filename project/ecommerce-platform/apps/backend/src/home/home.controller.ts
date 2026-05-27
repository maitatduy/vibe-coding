import { Controller, Get, Query, InternalServerErrorException, HttpCode, HttpStatus, Logger, UseInterceptors } from '@nestjs/common';
import { CacheInterceptor, CacheTTL } from '@nestjs/cache-manager';
import { HomeService } from '@/home/home.service';
import { GetHomeCategoriesDto, GetFeaturedProductsDto } from '@/home/dto/home.dto';

@Controller('api/v1/home')
@UseInterceptors(CacheInterceptor)
@CacheTTL(3600000) // 1 hour in ms
export class HomeController {
  private readonly logger = new Logger(HomeController.name);

  constructor(private readonly homeService: HomeService) {}

  @Get('banners')
  @HttpCode(HttpStatus.OK)
  async getBanners() {
    try {
      return await this.homeService.getBanners();
    } catch (error) {
      this.logger.error('Failed to get banners', error);
      throw new InternalServerErrorException('Failed to retrieve banners');
    }
  }

  @Get('categories')
  @HttpCode(HttpStatus.OK)
  async getCategories(@Query() query: GetHomeCategoriesDto) {
    try {
      return await this.homeService.getCategories(query.limit);
    } catch (error) {
      this.logger.error('Failed to get categories', error);
      throw new InternalServerErrorException('Failed to retrieve categories');
    }
  }

  @Get('featured-products')
  @HttpCode(HttpStatus.OK)
  async getFeaturedProducts(@Query() query: GetFeaturedProductsDto) {
    try {
      return await this.homeService.getFeaturedProducts(query.limit || 8);
    } catch (error) {
      this.logger.error('Failed to get featured products', error);
      throw new InternalServerErrorException('Failed to retrieve featured products');
    }
  }
}
