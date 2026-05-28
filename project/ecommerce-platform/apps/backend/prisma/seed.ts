import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Start seeding...');

  // 1. Seed Banners
  const banner = await prisma.banner.upsert({
    where: { id: 'banner-1' },
    update: {},
    create: {
      id: 'banner-1',
      title: 'Nạp Năng Lượng - Code Phê Hơn',
      subtitle: 'Combo Thức Khuya giảm giá 20% từ 22h – 2h sáng',
      imageUrl: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=1200&h=400',
      ctaText: 'Mua ngay',
      order: 1,
      isActive: true,
    },
  });
  console.log(`Created banner: ${banner.title}`);

  // 2. Seed Categories
  const categoriesData = [
    { id: 'cat-1', name: 'Đồ Ăn Vặt', slug: 'do-an-vat', icon: 'Pizza' },
    { id: 'cat-2', name: 'Nước Uống', slug: 'nuoc-uong', icon: 'CupSoda' },
    { id: 'cat-3', name: 'Trái Cây Tô', slug: 'trai-cay-to', icon: 'Apple' },
    { id: 'cat-4', name: 'Combo Deadline', slug: 'combo-deadline', icon: 'Laptop' },
  ];

  for (const cat of categoriesData) {
    await prisma.category.upsert({
      where: { slug: cat.slug },
      update: {},
      create: cat,
    });
    console.log(`Created category: ${cat.name}`);
  }

  // 3. Seed Products
  const productsData = [
    {
      name: 'Khô Gà Lá Chanh Xé Cay',
      slug: 'kho-ga-la-chanh-xe-cay',
      description: 'Giòn rụm, cay cay, thơm phức mùi lá chanh. Món nhậu không thể thiếu cho các coder thức khuya.',
      price: 45000,
      stock: 100,
      imageUrl: 'https://images.unsplash.com/photo-1585238342024-78d387f4a707?auto=format&fit=crop&q=80&w=400&h=400',
      isFeatured: true,
      categoryId: 'cat-1',
    },
    {
      name: 'Trà Sữa Oolong Nướng Full Topping',
      slug: 'tra-sua-oolong-nuong-full-topping',
      description: 'Đậm vị trà oolong nướng kết hợp trân châu đen dai giòn.',
      price: 35000,
      stock: 50,
      imageUrl: 'https://images.unsplash.com/photo-1558857563-b37102e99e00?auto=format&fit=crop&q=80&w=400&h=400',
      isFeatured: true,
      categoryId: 'cat-2',
    },
    {
      name: 'Bánh Tráng Trộn Xa Lộ',
      slug: 'banh-trang-tron-xa-lo',
      description: 'Bánh tráng dai dai với khô bò, trứng cút, xoài chua siêu bắt vị.',
      price: 25000,
      stock: 200,
      imageUrl: 'https://images.unsplash.com/photo-1626804475297-4160eb083b42?auto=format&fit=crop&q=80&w=400&h=400',
      isFeatured: true,
      categoryId: 'cat-1',
    },
    {
      name: 'Combo Mì Cay 7 Cấp Độ + Coca',
      slug: 'combo-mi-cay-7-cap-do-coca',
      description: 'Giải tỏa stress với mì cay xé lưỡi, đính kèm Coca mát lạnh.',
      price: 65000,
      salePrice: 55000,
      stock: 30,
      imageUrl: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&q=80&w=400&h=400',
      isFeatured: true,
      categoryId: 'cat-4',
    },
  ];

  for (const prod of productsData) {
    await prisma.product.upsert({
      where: { slug: prod.slug },
      update: {},
      create: prod,
    });
    console.log(`Created product: ${prod.name}`);
  }

  console.log('Seeding finished.');
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
