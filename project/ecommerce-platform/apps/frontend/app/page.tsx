import { homeService } from "@/services/home.service";
import HomeClient from "@/components/pages/HomeClient";
import { AlertCircle } from "lucide-react";

export default async function HomePage() {
    try {
        const [bannersData, categoriesData, productsData] = await Promise.all([
            homeService.getBanners(),
            homeService.getCategories(),
            homeService.getFeaturedProducts(),
        ]);

        return (
            <HomeClient 
                banners={bannersData.data || []}
                categories={categoriesData.data || []}
                products={productsData.data || []}
            />
        );
    } catch (error: any) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[50vh] gap-4 bg-red-500/10 rounded-2xl p-8 border border-red-500/20">
                <AlertCircle className="w-16 h-16 text-red-500" />
                <h2 className="text-xl font-bold text-red-500">Lỗi Tải Dữ Liệu</h2>
                <p className="text-gray-300">{error?.message || "Không thể kết nối đến máy chủ"}</p>
            </div>
        );
    }
}
