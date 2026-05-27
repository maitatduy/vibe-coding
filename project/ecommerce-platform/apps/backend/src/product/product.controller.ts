import { Controller, Get, Query, InternalServerErrorException, HttpCode, HttpStatus, Logger, UseInterceptors } from '@nestjs/common';
import { CacheInterceptor, CacheKey, CacheTTL } from '@nestjs/cache-manager';
import { ProductService } from '@/product/product.service';
import { GetProductsDto } from '@/product/dto/get-products.dto';
import { CACHE_KEY, CACHE_TTL } from '@/constants/cache.constant';

@Controller('api/v1/products')
export class ProductController {
  private readonly logger = new Logger(ProductController.name);

  constructor(private readonly productService: ProductService) {}

  @Get('filters-meta')
  @UseInterceptors(CacheInterceptor)
  @CacheKey(CACHE_KEY.PRODUCT_V1.FILTERS_META)
  @CacheTTL(CACHE_TTL.PRODUCT_V1.FILTERS_META)
  @HttpCode(HttpStatus.OK)
  async getFiltersMeta() {
    try {
      return await this.productService.getFiltersMeta();
    } catch (error) {
      this.logger.error('Failed to get filters meta', error);
      throw new InternalServerErrorException('Failed to retrieve filter metadata');
    }
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  async getProducts(@Query() query: GetProductsDto) {
    try {
      return await this.productService.getProducts(query);
    } catch (error) {
      this.logger.error('Failed to get products', error);
      throw new InternalServerErrorException('Failed to retrieve products');
    }
  }
}
