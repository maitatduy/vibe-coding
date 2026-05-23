# KẾ HOẠCH FRONTEND: TRANG CHỦ (HOME PAGE)

## 1. PHÂN RÃ COMPONENT (COMPONENT TREE)

- **HomePage** `[SMART]` (Trang chính, chịu trách nhiệm gọi API lấy dữ liệu toàn trang)
  - **HeroBanner** `[DUMB]` (Khối Banner quảng cáo "Combo Thức Khuya Coder")
  - **CategoryList** `[DUMB]` (Danh sách danh mục dạng hàng ngang)
    - **CategoryCard** `[DUMB]` *(Shared UI)* (Khối danh mục đơn lẻ có icon)
  - **FeaturedMenu** `[SMART]` (Khối Sản phẩm bán chạy, chứa logic xử lý Thêm vào giỏ hàng)
    - **ProductGrid** `[DUMB]` *(Shared UI)* (Lưới hiển thị danh sách sản phẩm)
      - **ProductCard** `[DUMB]` *(Shared UI)* (Thẻ thông tin sản phẩm: Ảnh, Tên, Giá, Nút [+])
  - **SocialProofBanner** `[DUMB]` (Dải băng rôn tĩnh "Hơn 500+ anh em dev...")

## 2. QUẢN LÝ TRẠNG THÁI (STATE MANAGEMENT)

- **URL Query Parameters:**
  - Trang chủ ưu tiên hiển thị nội dung cố định, không có State bắt buộc nào cần đẩy lên URL. Có thể dự phòng `?ref=...` cho tracking Affiliate nếu cần.

- **Global State (Zustand / Redux / Pinia):**
  - `cartItems` (array): Danh sách sản phẩm trong giỏ. Được cập nhật khi user click nút [+] trên `ProductCard` ngay tại trang chủ.
  - `addToCart(product, quantity)` (function): Hàm thêm sản phẩm vào Global State.

- **Local State (`useState`):**
  - `isLoadingData` (boolean): Trạng thái loading chung của trang (hiển thị Skeleton khi đang fetch dữ liệu banner, danh mục, sản phẩm).
  - `isAddingToCart` (Record<string, boolean>): Trạng thái loading của nút [+] theo `productId`. Dùng để hiển thị spinner trên đúng sản phẩm đang được thêm, tránh spam click.

## 3. CẤU TRÚC DỮ LIỆU (DATA INTERFACES)

```typescript
// Dữ liệu chung
interface Category {
  id: string;
  name: string;
  iconUrl: string;
}

interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  imageUrl: string;
  badges?: string[];
}

// Props cho HeroBanner
interface HeroBannerProps {
  title: string;
  subtitle: string;
  backgroundImageUrl: string;
  onCtaClick: () => void;
}

// Props cho CategoryCard (Shared UI)
interface CategoryCardProps {
  category: Category;
  onClick: (categoryId: string) => void;
}

interface CategoryListProps {
  categories: Category[];
  onCategoryClick: (categoryId: string) => void;
}

// Props cho ProductCard (Shared UI)
interface ProductCardProps {
  product: Product;
  isAdding: boolean;
  onAddToCart: (product: Product) => void;
  onProductClick: (productId: string) => void;
}

// Props cho ProductGrid (Shared UI)
interface ProductGridProps {
  title: string;
  products: Product[];
  addingProductIds: Record<string, boolean>;
  onAddToCart: (product: Product) => void;
  onProductClick: (productId: string) => void;
}

// Props cho SocialProofBanner
interface SocialProofBannerProps {
  message: string;
  highlightText?: string;
}
```
