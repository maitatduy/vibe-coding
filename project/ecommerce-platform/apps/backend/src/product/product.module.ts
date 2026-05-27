import { Module } from '@nestjs/common';
import { ProductService } from '@/product/product.service';

@Module({
  providers: [ProductService],
  exports: [ProductService],
})
export class ProductModule {}
