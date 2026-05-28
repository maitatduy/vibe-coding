import React from "react";
import { Category } from "@/types";

export interface CategoryCardProps {
    category: Category;
    onClick: (categoryId: string) => void;
}

export function CategoryCard({ category, onClick }: CategoryCardProps) {
    return (
        <div
            onClick={() => onClick(category.id)}
            className="min-w-30 shrink-0 flex flex-col items-center justify-center p-4 bg-white rounded-2xl shadow-sm border border-gray-100 snap-center hover:border-orange-200 hover:shadow-md hover:bg-orange-50 transition-all cursor-pointer"
        >
            <div className="text-3xl mb-2 text-orange-500">{category.icon}</div>
            <span className="text-sm font-semibold text-gray-700 text-center">
                {category.name}
            </span>
        </div>
    );
}

interface CategoryListProps {
    categories: Category[];
    onCategoryClick: (categoryId: string) => void;
}

export default function CategoryList({
    categories,
    onCategoryClick,
}: CategoryListProps) {
    return (
        <section>
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                    Khám phá theo danh mục
                </h2>
            </div>
            <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
                {categories.map((cat) => (
                    <CategoryCard
                        key={cat.id}
                        category={cat}
                        onClick={onCategoryClick}
                    />
                ))}
            </div>
        </section>
    );
}
