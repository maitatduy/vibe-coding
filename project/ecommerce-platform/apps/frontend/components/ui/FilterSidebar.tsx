export default function FilterSidebar() {
    const categories = [
        { label: "Đồ ăn vặt", count: 12 },
        { label: "Nước tăng lực", count: 8 },
        { label: "Combo Coder", count: 5 },
    ];

    return (
        <aside className="w-full bg-white lg:rounded-xl lg:border lg:border-gray-100 lg:p-5 lg:shadow-sm lg:sticky top-24 h-fit">
            <h3 className="lg:block text-lg font-semibold text-gray-900 mb-4">
                Danh mục
            </h3>
            <ul className="flex flex-col gap-3">
                {categories.map((cat, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                        <input
                            type="checkbox"
                            id={`cat-${idx}`}
                            className="w-4 h-4 rounded border-gray-300 text-orange-500 focus:ring-orange-500 cursor-pointer"
                        />
                        <label
                            htmlFor={`cat-${idx}`}
                            className="text-sm font-medium text-gray-500 cursor-pointer flex-1 flex justify-between"
                        >
                            <span>{cat.label}</span>
                            <span className="text-gray-400">({cat.count})</span>
                        </label>
                    </li>
                ))}
            </ul>
        </aside>
    );
}
