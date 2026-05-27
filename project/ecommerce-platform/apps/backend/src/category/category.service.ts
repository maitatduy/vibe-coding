import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/prisma/prisma.service';

@Injectable()
export class CategoryService {
  constructor(private prisma: PrismaService) {}

  async getHomeCategories(limit?: number) {
    return this.prisma.category.findMany({
      where: { isActive: true, parentId: null },
      ...(limit ? { take: limit } : {}),
      select: {
        id: true,
        name: true,
        slug: true,
        icon: true,
      },
    });
  }
}
