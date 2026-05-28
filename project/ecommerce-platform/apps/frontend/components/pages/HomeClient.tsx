"use client";

import { useState } from "react";
import HeroBanner from "@/components/ui/HeroBanner";
import CategoryList from "@/components/ui/CategoryList";
import ProductGrid from "@/components/ui/ProductGrid";
import SocialProofBanner from "@/components/ui/SocialProofBanner";
import { useCartStore } from "@/store/cartStore";
import { Pizza } from "lucide-react";
import * as LucideIcons from "lucide-react";
import { useRouter } from "next/navigation";
import { Banner, Category, Product } from "@/types";

interface HomeClientProps {
    banners: any[];
    categories: any[];
    products: any[];
}

export default function HomeClient({ banners, categories, products }: HomeClientProps) {
    const { addToCart, openCart } = useCartStore();
    const router = useRouter();
    
    const [addingProductIds, setAddingProductIds] = useState<
        Record<string, boolean>
    >({});

    const handleCtaClick = (link?: string) => {
        if (link) {
            router.push(link);
        }
    };

    const handleCategoryClick = (id: string) => {
        router.push(`/category/${id}`);
    };

    const handleAddToCart = (product: Product) => {
        setAddingProductIds((prev) => ({ ...prev, [product.id]: true }));
        setTimeout(() => {
            setAddingProductIds((prev) => ({ ...prev, [product.id]: false }));
            addToCart({
                id: Math.random().toString(),
                productId: product.id,
                name: product.name,
                thumbnailUrl: product.imageUrl,
                currentPrice: product.price,
                quantity: 1,
            });
            openCart();
        }, 500);
    };

    const handleProductClick = (id: string) => {
        router.push(`/product/${id}`);
    };

    const firstBanner = banners[0];

    const mappedCategories: Category[] = categories.map((cat: any) => {
        const IconComponent = cat.icon && (LucideIcons as any)[cat.icon] 
            ? (LucideIcons as any)[cat.icon] 
            : Pizza;
            
        return {
            id: cat.id,
            name: cat.name,
            icon: cat.icon?.startsWith("http") ? (
                <img src={cat.icon} alt={cat.name} className="w-8 h-8 object-contain" />
            ) : (
                <IconComponent size={32} className="text-orange-500" />
            )
        };
    });

    const mappedProducts: Product[] = products.map((p: any) => ({
        id: p.id,
        name: p.name,
        price: p.salePrice ? Number(p.salePrice) : Number(p.price),
        originalPrice: p.salePrice ? Number(p.price) : undefined,
        imageUrl: p.imageUrl,
        badges: p.stock < 10 ? ["Sắp hết hàng"] : undefined,
    }));

    return (
        <div className="flex flex-col gap-12">
            {firstBanner ? (
                <HeroBanner
                    title={firstBanner.title}
                    subtitle={firstBanner.subtitle || ""}
                    backgroundImageUrl={firstBanner.imageUrl}
                    ctaText={firstBanner.ctaText}
                    onCtaClick={() => handleCtaClick(firstBanner.ctaLink)}
                />
            ) : (
                 <HeroBanner
                    title="Nạp Năng Lượng Code Phê Hơn"
                    subtitle="Combo Thức Khuya giảm giá 20% từ 22h – 2h sáng"
                    backgroundImageUrl="https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=1200&h=500"
                    onCtaClick={() => {}}
                />
            )}

            {mappedCategories.length > 0 ? (
                <CategoryList
                    categories={mappedCategories}
                    onCategoryClick={handleCategoryClick}
                />
            ) : (
                <div className="text-center text-gray-400 py-8 font-medium">Chưa có danh mục nào.</div>
            )}

            {mappedProducts.length > 0 ? (
                <ProductGrid
                    title="Sản phẩm nổi bật"
                    products={mappedProducts}
                    addingProductIds={addingProductIds}
                    onAddToCart={handleAddToCart}
                    onProductClick={handleProductClick}
                />
            ) : (
                <div className="text-center text-gray-400 py-8 font-medium">Chưa có sản phẩm nào nổi bật.</div>
            )}

            <SocialProofBanner
                message={
                    <>
                        Hơn{" "}
                        <span className="text-orange-600 font-bold">
                            500+ anh em dev
                        </span>{" "}
                        đã nạp năng lượng tại đây đêm nay!
                    </>
                }
            />
        </div>
    );
}
