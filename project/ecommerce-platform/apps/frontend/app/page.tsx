"use client";

import { useState } from "react";
import HeroBanner from "../components/ui/HeroBanner";
import CategoryList from "../components/ui/CategoryList";
import ProductGrid from "../components/ui/ProductGrid";
import SocialProofBanner from "../components/ui/SocialProofBanner";
import { useCartStore } from "../store/cartStore";
import { Pizza, CupSoda, Apple, Laptop } from "lucide-react";

const mockCategories = [
    { id: "1", name: "Đồ Ăn Vặt", icon: <Pizza size={32} /> },
    { id: "2", name: "Nước Uống", icon: <CupSoda size={32} /> },
    { id: "3", name: "Trái Cây Tô", icon: <Apple size={32} /> },
    { id: "4", name: "Combo Deadline", icon: <Laptop size={32} /> },
];

const mockProducts = [
    {
        id: "p1",
        name: "Khô Gà Lá Chanh Xé Cay",
        price: 45000,
        originalPrice: 55000,
        imageUrl:
            "https://images.unsplash.com/photo-1599490659213-e2b9527bd087?auto=format&fit=crop&q=80&w=400&h=400",
    },
    {
        id: "p3",
        name: "Mì Trộn Indomie Xúc Xích Trứng",
        price: 40000,
        imageUrl:
            "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?auto=format&fit=crop&q=80&w=400&h=400",
        badges: ["Bán chạy"],
    },
    {
        id: "p4",
        name: "Bò Húc Bò Húc Bò Húc",
        price: 15000,
        imageUrl:
            "https://images.unsplash.com/photo-1622543925917-763c34d1a86e?auto=format&fit=crop&q=80&w=400&h=400",
    },
];

export default function HomePage() {
    const { addToCart, openCart } = useCartStore();
    const [addingProductIds, setAddingProductIds] = useState<
        Record<string, boolean>
    >({});

    const handleCtaClick = () => {
        console.log("Hero Banner CTA Clicked");
    };

    const handleCategoryClick = (id: string) => {
        console.log("Category Clicked:", id);
    };

    const handleAddToCart = (product: any) => {
        setAddingProductIds((prev) => ({ ...prev, [product.id]: true }));
        setTimeout(() => {
            setAddingProductIds((prev) => ({ ...prev, [product.id]: false }));
            addToCart({
                id: Math.random().toString(), // Mock unique cart item id
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
        console.log("Product Clicked:", id);
    };

    return (
        <div className="flex flex-col gap-12">
            <HeroBanner
                title="Nạp Năng Lượng Code Phê Hơn"
                subtitle="Combo Thức Khuya giảm giá 20% từ 22h – 2h sáng"
                backgroundImageUrl="https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=1200&h=500"
                onCtaClick={handleCtaClick}
            />

            <CategoryList
                categories={mockCategories}
                onCategoryClick={handleCategoryClick}
            />

            <ProductGrid
                title="Sản phẩm nổi bật"
                products={mockProducts}
                addingProductIds={addingProductIds}
                onAddToCart={handleAddToCart}
                onProductClick={handleProductClick}
            />

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
