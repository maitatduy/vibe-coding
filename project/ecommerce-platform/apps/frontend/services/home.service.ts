const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";

export const homeService = {
    async getBanners() {
        const res = await fetch(`${baseUrl}/home/banners`, {
            next: { revalidate: 3600 }, // Cache 1 hour as per backend plan
        });
        if (!res.ok) throw new Error("Failed to fetch banners");
        return res.json();
    },

    async getCategories() {
        const res = await fetch(`${baseUrl}/home/categories`, {
            next: { revalidate: 3600 },
        });
        if (!res.ok) throw new Error("Failed to fetch categories");
        return res.json();
    },

    async getFeaturedProducts() {
        const res = await fetch(`${baseUrl}/home/featured-products`, {
            next: { revalidate: 3600 },
        });
        if (!res.ok) throw new Error("Failed to fetch featured products");
        return res.json();
    },
};
