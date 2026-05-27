import { Controller, Get, Query, InternalServerErrorException, HttpCode, HttpStatus, Logger, UseInterceptors } from '@nestjs/common';
import { CacheInterceptor, CacheKey, CacheTTL } from '@nestjs/cache-manager';
import { HomeService } from '@/home/home.service';
import { GetHomeCategoriesDto, GetFeaturedProductsDto } from '@/home/dto/home.dto';
import { CACHE_KEY, CACHE_TTL } from '@/constants/cache.constant';

@Controller('api/v1/home')
@UseInterceptors(CacheInterceptor)
export class HomeController {
  private readonly logger = new Logger(HomeController.name);

  constructor(private readonly homeService: HomeService) {}

  @Get('banners')
  @CacheKey(CACHE_KEY.HOME_V1.BANNERS)
  @CacheTTL(CACHE_TTL.HOME_V1.BANNERS)
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
  @CacheKey(CACHE_KEY.HOME_V1.CATEGORIES)
  @CacheTTL(CACHE_TTL.HOME_V1.CATEGORIES)
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
  @CacheKey(CACHE_KEY.HOME_V1.FEATURED_PRODUCTS)
  @CacheTTL(CACHE_TTL.HOME_V1.FEATURED_PRODUCTS)
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
