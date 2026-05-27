import { Controller, Get, Query, InternalServerErrorException, HttpCode, HttpStatus, Logger, UseInterceptors } from '@nestjs/common';
import { CacheInterceptor, CacheTTL } from '@nestjs/cache-manager';
import { ProductService } from '@/product/product.service';
import { GetProductsDto } from '@/product/dto/get-products.dto';

@Controller('api/v1/products')
export class ProductController {
  private readonly logger = new Logger(ProductController.name);

  constructor(private readonly productService: ProductService) {}

  @Get('filters-meta')
  @UseInterceptors(CacheInterceptor)
  @CacheTTL(86400000) // Cache 1 day for filters meta (in ms) as per plan
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
