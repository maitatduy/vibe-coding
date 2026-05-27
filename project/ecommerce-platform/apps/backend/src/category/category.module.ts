import { Module } from '@nestjs/common';
import { CategoryService } from '@/category/category.service';

@Module({
  providers: [CategoryService],
  exports: [CategoryService],
})
export class CategoryModule {}
