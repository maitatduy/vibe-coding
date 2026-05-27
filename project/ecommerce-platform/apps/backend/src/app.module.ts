import { Module } from '@nestjs/common';
import { CacheModule } from '@nestjs/cache-manager';
import { redisStore } from 'cache-manager-redis-yet';
import { AppController } from '@/app.controller';
import { AppService } from '@/app.service';
import { PrismaModule } from '@/prisma/prisma.module';
import { HomeModule } from '@/home/home.module';
import { CategoryModule } from '@/category/category.module';
import { ProductModule } from '@/product/product.module';
import { BannerModule } from '@/banner/banner.module';

@Module({
  imports: [
    CacheModule.registerAsync({
      isGlobal: true,
      useFactory: async () => {
        if (process.env.USE_REDIS === 'true') {
          return {
            store: await redisStore({
              socket: {
                host: process.env.REDIS_HOST || 'localhost',
                port: parseInt(process.env.REDIS_PORT || '6379', 10),
              },
            }),
          };
        }
        return {};
      },
    }),
    PrismaModule,
    HomeModule,
    CategoryModule,
    ProductModule,
    BannerModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
