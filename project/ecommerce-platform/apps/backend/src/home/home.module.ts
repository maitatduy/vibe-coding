import { Module } from '@nestjs/common';
import { HomeController } from '@/home/home.controller';
import { HomeService } from '@/home/home.service';
import { BannerModule } from '@/banner/banner.module';
import { CategoryModule } from '@/category/category.module';
import { ProductModule } from '@/product/product.module';

@Module({
  imports: [BannerModule, CategoryModule, ProductModule],
  controllers: [HomeController],
  providers: [HomeService],
})
export class HomeModule {}
