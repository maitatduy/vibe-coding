interface CatalogToolbarProps {
    isFilterVisible: boolean;
    onToggleFilter: () => void;
}

export default function CatalogToolbar({
    isFilterVisible,
    onToggleFilter,
}: CatalogToolbarProps) {
    return (
        <div className="flex justify-start sm:justify-between items-center mt-10 mb-6 sm:mb-8 w-full">
            {/* Nút lọc cho Mobile */}
            <button
                onClick={onToggleFilter}
                className="flex text-orange-500 sm:hidden items-center justify-center p-2 rounded-full bg-white shadow-sm border border-gray-200  hover:bg-gray-50 active:scale-95 transition-all"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                    />
                </svg>
            </button>

            {/* Layout cho Desktop */}
            <div className="hidden sm:flex justify-between items-center w-full">
                <button
                    onClick={onToggleFilter}
                    className={`flex items-center gap-2 px-4 py-2 text-sm font-medium transition-colors border rounded-lg ${
                        isFilterVisible
                            ? "bg-orange-50 border-orange-200 text-orange-600"
                            : "bg-white border-gray-300 text-gray-700 hover:bg-gray-50 active:bg-gray-100"
                    }`}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                        />
                    </svg>
                    Lọc
                </button>
                <div className="flex items-center bg-white justify-end">
                    <span className="mr-2 text-sm text-gray-700">Sắp xếp:</span>
                    <select className="bg-white border border-gray-300 rounded-lg px-4 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 appearance-none cursor-pointer">
                        <option value="newest">Mới nhất</option>
                        <option value="popular">Bán chạy</option>
                        <option value="price_asc">Giá tăng dần</option>
                        <option value="price_desc">Giá giảm dần</option>
                    </select>
                </div>
            </div>
        </div>
    );
}
