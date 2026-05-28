import { productService } from "@/services/product.service";
import ProductListClient from "@/components/pages/ProductListClient";
import { AlertCircle } from "lucide-react";

export default async function ProductListPage({
    searchParams,
}: {
    searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
    // Parse search params for the API
    const queryParams: Record<string, string> = {};
    const resolvedParams = searchParams ? await searchParams : undefined;
    
    if (resolvedParams) {
        for (const [key, value] of Object.entries(resolvedParams)) {
            if (value !== undefined) {
                queryParams[key] = Array.isArray(value) ? value[0] : value;
            }
        }
    }

    try {
        const [productsResponse, filtersMetaResponse] = await Promise.all([
            productService.getProducts(queryParams),
            productService.getFiltersMeta(),
        ]);

        return (
            <ProductListClient 
                products={productsResponse.data || []}
                meta={productsResponse.meta || { page: 1, limit: 12, totalItems: 0, totalPages: 1 }}
                filtersMeta={filtersMetaResponse.data || {}}
            />
        );
    } catch (error: any) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[50vh] gap-4 bg-red-500/10 rounded-2xl p-8 border border-red-500/20">
                <AlertCircle className="w-16 h-16 text-red-500" />
                <h2 className="text-xl font-bold text-red-500">Lỗi Tải Dữ Liệu Sản Phẩm</h2>
                <p className="text-gray-300">{error?.message || "Không thể kết nối đến máy chủ"}</p>
            </div>
        );
    }
}
