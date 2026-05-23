# Nguyên Tắc Dumb UI và Smart Container

## Tổng quan

Đây là nguyên tắc phân tách trách nhiệm trong lập trình giao diện. Toàn bộ component trong dự án được chia làm 2 loại với vai trò hoàn toàn khác nhau:

- **Dumb UI:** Chỉ biết hiển thị. Nhận dữ liệu từ bên ngoài qua props, không tự xử lý logic.
- **Smart Container:** Chỉ biết xử lý. Lấy dữ liệu, quản lý state, gọi API, rồi truyền kết quả xuống cho Dumb UI hiển thị.

Quy tắc vàng: **Dumb UI không biết data đến từ đâu. Smart Container không biết data được hiển thị thế nào.**

---

## Dumb UI - Presentational Component

### Định nghĩa

Dumb UI là component thuần hiển thị. Nó nhận props từ bên ngoài và render ra HTML. Nó không gọi API, không dùng `useState` để lưu dữ liệu nghiệp vụ, không biết store là gì. Nó "ngu" đúng nghĩa - chỉ làm đúng một việc là vẽ ra màn hình những gì được truyền vào.

### Đặc điểm nhận dạng

Component đó là Dumb UI nếu:

- Toàn bộ dữ liệu hiển thị đến từ props
- Không có lời gọi `fetch`, `axios`, hay bất kỳ HTTP request nào bên trong
- Không import store (Zustand, Pinia, Redux)
- Có thể dùng `useState` nhưng chỉ cho trạng thái UI thuần túy như đóng/mở dropdown, hover, focus - không phải trạng thái dữ liệu
- Có thể nhận callback function qua props (ví dụ: `onAddToCart`) nhưng không tự định nghĩa logic bên trong callback đó

### Ví dụ đúng

```tsx
// ProductCard.tsx - Dumb UI
interface ProductCardProps {
    name: string;
    price: number;
    salePrice: number;
    imageUrl: string;
    stock: number;
    onAddToCart: () => void;
}

export function ProductCard({
    name,
    price,
    salePrice,
    imageUrl,
    stock,
    onAddToCart,
}: ProductCardProps) {
    const isOutOfStock = stock === 0;

    return (
        <div className="rounded-xl bg-white shadow-sm">
            <img
                src={imageUrl}
                alt={name}
                className="aspect-square w-full object-cover"
            />
            <div className="p-4">
                <h3 className="font-medium text-slate-900">{name}</h3>
                <p className="text-red-600 font-bold">
                    {salePrice.toLocaleString()}đ
                </p>
                <p className="text-slate-400 line-through">
                    {price.toLocaleString()}đ
                </p>
                <button
                    onClick={onAddToCart}
                    disabled={isOutOfStock}
                    className={
                        isOutOfStock
                            ? "bg-gray-300"
                            : "bg-orange-600 text-white"
                    }
                >
                    {isOutOfStock ? "Hết hàng" : "Thêm vào giỏ"}
                </button>
            </div>
        </div>
    );
}
```

`ProductCard` không biết sản phẩm này đến từ API nào, từ store nào, hay từ props tĩnh. Nó chỉ nhận và hiển thị.

### Ví dụ sai

```tsx
// ProductCard.tsx
export function ProductCard({ productId }: { productId: string }) {
    const [product, setProduct] = useState(null);

    // Dumb UI không được tự gọi API
    useEffect(() => {
        fetch(`/api/products/${productId}`)
            .then((r) => r.json())
            .then(setProduct);
    }, [productId]);

    // Dumb UI không được tự xử lý logic thêm giỏ hàng
    const handleAddToCart = async () => {
        await fetch("/api/cart", {
            method: "POST",
            body: JSON.stringify({ productId }),
        });
    };

    return <div>...</div>;
}
```

---

## Smart Container - Container Component

### Định nghĩa

Smart Container là component xử lý toàn bộ logic. Nó biết lấy dữ liệu từ đâu, xử lý thế nào, rồi truyền kết quả xuống cho Dumb UI.

### Đặc điểm nhận dạng

Component đó là Smart Container nếu:

- Gọi API hoặc đọc dữ liệu từ store
- Quản lý loading state, error state, dữ liệu nghiệp vụ
- Xử lý các side effect bằng `useEffect`
- Định nghĩa các handler function (xử lý submit, xử lý thêm giỏ hàng, xử lý xóa...)
- Render ít hoặc không có JSX phức tạp - chủ yếu trả về Dumb UI đã được truyền props

### Ví dụ đúng

```tsx
// ProductListContainer.tsx - Smart Container
export function ProductListContainer() {
    const [products, setProducts] = useState<Product[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const { addToCart } = useCartStore();

    useEffect(() => {
        fetch("/api/products")
            .then((r) => r.json())
            .then((data) => {
                setProducts(data);
                setIsLoading(false);
            });
    }, []);

    const handleAddToCart = (productId: string) => {
        addToCart(productId);
    };

    if (isLoading) return <ProductListSkeleton />;

    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {products.map((product) => (
                // Smart Container truyền data xuống Dumb UI
                <ProductCard
                    key={product.id}
                    name={product.name}
                    price={product.price}
                    salePrice={product.salePrice}
                    imageUrl={product.imageUrl}
                    stock={product.stock}
                    onAddToCart={() => handleAddToCart(product.id)}
                />
            ))}
        </div>
    );
}
```

---

## Phân Biệt Nhanh

| Tiêu chí                   | Dumb UI                       | Smart Container                       |
| -------------------------- | ----------------------------- | ------------------------------------- |
| Gọi API                    | Không                         | Có                                    |
| Dùng store (Zustand/Pinia) | Không                         | Có                                    |
| Nhận dữ liệu qua           | Props                         | API / Store                           |
| Render JSX                 | Phức tạp, chi tiết            | Đơn giản, chủ yếu gọi Dumb UI         |
| Tái sử dụng                | Dễ, dùng ở nhiều nơi          | Thường gắn với 1 tính năng cụ thể     |
| Test                       | Dễ, chỉ cần truyền props      | Phức tạp hơn, cần mock API/store      |
| `useState`                 | Chỉ cho UI state (open/close) | Cho data state (loading, data, error) |

---

## Cấu Trúc Thư Mục

```
components/
├── ui/                          # Dumb UI - component thuần hiển thị
│   ├── product-card.tsx
│   ├── button.tsx
│   ├── badge.tsx
│   └── skeleton.tsx
│
└── containers/                  # Smart Container - component xử lý logic
    ├── product-list-container.tsx
    ├── cart-container.tsx
    └── checkout-container.tsx
```

Quy tắc đặt tên: file trong `ui/` dùng `kebab-case`, tên component dùng `PascalCase`. Container thêm hậu tố `-container` để phân biệt ngay khi nhìn vào tên file.

---

## Lý Do Áp Dụng Nguyên Tắc Này

**Tái sử dụng cao hơn.** Một `ProductCard` Dumb UI có thể được dùng ở trang danh sách, trang gợi ý, trang tìm kiếm, trang flash sale mà không cần sửa gì - vì nó không gắn với bất kỳ nguồn dữ liệu nào.

**Dễ thay đổi nguồn dữ liệu.** Nếu muốn chuyển từ REST API sang GraphQL, bạn chỉ sửa Smart Container. Toàn bộ Dumb UI bên dưới không bị ảnh hưởng.

**Dễ test.** Để test Dumb UI, chỉ cần truyền props tĩnh vào và kiểm tra render. Không cần mock server, không cần mock store.

**AI code chuẩn hơn.** Khi đã định nghĩa nguyên tắc này trong `AGENTS.md`, AI biết chính xác file nào được gọi API, file nào không. Kết quả là code sinh ra sạch và nhất quán ngay từ đầu, không phải refactor sau.
