import { Product } from "@/types";

export interface ProductCardProps {
    product: Product;
    isAdding: boolean;
    onAddToCart: (product: Product) => void;
    onProductClick: (productId: string) => void;
}

export function ProductCard({
    product,
    isAdding,
    onAddToCart,
    onProductClick,
}: ProductCardProps) {
    return (
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex flex-col h-full group hover:shadow-lg hover:border-orange-100 hover:-translate-y-1 transition-all duration-300">
            <div
                className="relative w-full aspect-square rounded-xl overflow-hidden bg-gray-50 mb-3 md:mb-4 cursor-pointer"
                onClick={() => onProductClick(product.id)}
            >
                <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {product.badges &&
                    product.badges.map((badge) => (
                        <span
                            key={badge}
                            className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 rounded-lg text-[10px] font-bold uppercase z-10"
                        >
                            {badge}
                        </span>
                    ))}
                {product.originalPrice && (
                    <span className="absolute top-2 right-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-lg z-10">
                        % Giảm giá
                    </span>
                )}
            </div>
            <div
                className="flex-1 flex flex-col cursor-pointer"
                onClick={() => onProductClick(product.id)}
            >
                <h3 className="text-sm md:text-base font-semibold text-gray-800 line-clamp-2 leading-snug">
                    {product.name}
                </h3>
            </div>
            <div className="mt-4 flex items-end justify-between gap-2">
                <div className="flex flex-col">
                    {product.originalPrice && (
                        <span className="text-[10px] sm:text-xs md:text-sm text-slate-400 line-through">
                            {product.originalPrice.toLocaleString("vi-VN")} ₫
                        </span>
                    )}
                    <span className="text-sm sm:text-base md:text-lg font-bold text-red-600">
                        {product.price.toLocaleString("vi-VN")} ₫
                    </span>
                </div>
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        onAddToCart(product);
                    }}
                    disabled={isAdding}
                    className="shrink-0 w-10 h-10 flex items-center justify-center rounded-xl bg-orange-100 text-orange-600 hover:bg-orange-500 hover:text-white active:scale-95 transition-colors disabled:opacity-50"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 md:h-6 md:w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 4v16m8-8H4"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
}

interface ProductGridProps {
    title?: string;
    products: Product[];
    addingProductIds: Record<string, boolean>;
    onAddToCart: (product: Product) => void;
    onProductClick: (productId: string) => void;
}

export default function ProductGrid({
    title,
    products,
    addingProductIds,
    onAddToCart,
    onProductClick,
}: ProductGridProps) {
    return (
        <section>
            {title && (
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6">
                    {title}
                </h2>
            )}
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
                {products.map((p) => (
                    <ProductCard
                        key={p.id}
                        product={p}
                        isAdding={!!addingProductIds[p.id]}
                        onAddToCart={onAddToCart}
                        onProductClick={onProductClick}
                    />
                ))}
            </div>
        </section>
    );
}
