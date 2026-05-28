const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";

export const productService = {
    async getProducts(params?: Record<string, string>) {
        const queryParams = new URLSearchParams(params).toString();
        const url = `${baseUrl}/products${queryParams ? `?${queryParams}` : ''}`;
        
        const res = await fetch(url, {
            // Chúng ta có thể dùng cache, nhưng với search/filter thường xuyên đổi, ta để no-store hoặc tuỳ config.
            cache: 'no-store', 
        });
        
        if (!res.ok) throw new Error("Failed to fetch products");
        return res.json();
    },

    async getFiltersMeta() {
        const res = await fetch(`${baseUrl}/products/filters-meta`, {
            next: { revalidate: 3600 }, // Cache filter metadata 1 hour
        });
        
        if (!res.ok) throw new Error("Failed to fetch filter metadata");
        return res.json();
    }
};
