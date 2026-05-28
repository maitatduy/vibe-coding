"use client";

import { useState } from "react";
import HeroBanner from "@/components/ui/HeroBanner";
import CatalogToolbar from "@/components/ui/CatalogToolbar";
import FilterSidebar from "@/components/ui/FilterSidebar";
import ProductGrid from "@/components/ui/ProductGrid";
import { Product } from "@/types";
import Pagination from "@/components/ui/Pagination";

interface ProductListClientProps {
    products: Product[];
    meta: {
        page: number;
        limit: number;
        totalItems: number;
        totalPages: number;
    };
    filtersMeta: any;
}

export default function ProductListClient({ products, meta, filtersMeta }: ProductListClientProps) {
    const [addingProductIds, setAddingProductIds] = useState<Record<string, boolean>>({});
    const [isFilterVisible, setIsFilterVisible] = useState(false);

    // TODO: implement real cart logic
    const handleAddToCart = (product: Product) => {
        setAddingProductIds((prev) => ({ ...prev, [product.id]: true }));
        setTimeout(() => {
            setAddingProductIds((prev) => ({ ...prev, [product.id]: false }));
            alert(`Đã thêm ${product.name} vào giỏ!`);
        }, 800);
    };

    const handleProductClick = (productId: string) => {
        console.log("Xem chi tiết:", productId);
    };

    const handlePageChange = (newPage: number) => {
        // TODO: update URL searchParams to change page via Next.js router
        console.log("Change page to:", newPage);
    };

    return (
        <div className="flex flex-col min-h-screen">
            <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
                <HeroBanner
                    title="Combo Thức Khuya Coder"
                    subtitle="Bơm năng lượng, code mượt mà cả đêm không lo đói."
                    backgroundImageUrl="https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?q=80&w=2070&auto=format&fit=crop"
                    ctaText="Khám phá ngay"
                    onCtaClick={() => console.log("Banner CTA clicked")}
                />

                <CatalogToolbar
                    isFilterVisible={isFilterVisible}
                    onToggleFilter={() => setIsFilterVisible(!isFilterVisible)}
                />

                <div className="flex flex-col lg:flex-row gap-8 relative">
                    <div
                        className={
                            isFilterVisible
                                ? "fixed inset-0 z-50 lg:static lg:z-auto lg:block lg:w-64 shrink-0"
                                : "hidden"
                        }
                    >
                        <div
                            className="fixed inset-0 bg-black/50 lg:hidden"
                            onClick={() => setIsFilterVisible(false)}
                        />

                        <div className="relative z-50 w-4/5 max-w-sm lg:w-full h-full lg:h-auto bg-white lg:bg-transparent overflow-y-auto lg:overflow-visible p-5 lg:p-0">
                            <div className="flex justify-between items-center lg:hidden mb-6 pb-4 border-b border-gray-100">
                                <h3 className="text-lg font-bold text-gray-900">Lọc & Sắp Xếp</h3>
                                <button
                                    onClick={() => setIsFilterVisible(false)}
                                    className="p-2 text-gray-500 hover:bg-gray-100 rounded-full"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>

                            <div className="block lg:hidden mb-6 pb-6 border-b border-gray-100">
                                <h3 className="text-base font-semibold text-gray-900 mb-3">Sắp xếp theo</h3>
                                <select className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500 appearance-none cursor-pointer">
                                    <option value="newest">Mới nhất</option>
                                    <option value="popular">Bán chạy</option>
                                    <option value="price_asc">Giá tăng dần</option>
                                    <option value="price_desc">Giá giảm dần</option>
                                </select>
                            </div>

                            <FilterSidebar />
                        </div>
                    </div>

                    <div className="flex-1 w-full overflow-hidden">
                        <ProductGrid
                            products={products}
                            addingProductIds={addingProductIds}
                            onAddToCart={handleAddToCart}
                            onProductClick={handleProductClick}
                        />
                        {meta.totalPages > 1 && (
                            <Pagination
                                currentPage={meta.page}
                                totalPages={meta.totalPages}
                                onPageChange={handlePageChange}
                            />
                        )}
                        {products.length === 0 && (
                            <div className="py-12 text-center text-gray-500">
                                Không tìm thấy sản phẩm nào phù hợp.
                            </div>
                        )}
                    </div>
                </div>
            </main>
        </div>
    );
}
