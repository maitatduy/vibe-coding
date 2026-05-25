# Quy Hoạch Kỹ Thuật: Trang Danh Sách Sản Phẩm

## 1. PHÂN RÃ COMPONENT (COMPONENT TREE)

- `ProductListPage` [SMART] - Container chính của trang, gọi API lấy dữ liệu trang
  - `Banner` [DUMB] - Hiển thị "Combo Thức Khuya Coder" và nút CTA
  - `ProductCatalogContainer` [SMART] - Quản lý logic bộ lọc, phân trang, sắp xếp và gọi API danh sách sản phẩm
    - `CatalogToolbar` [DUMB] - Thanh công cụ phía trên danh sách
      - `FilterToggleButton` [DUMB] - Nút ẩn/hiện cột bộ lọc
      - `SortSelector` [DUMB] - Dropdown chọn tiêu chí sắp xếp (thời gian cập nhật, giá, nổi bật)
    - `CatalogContent` [DUMB] - Layout chia cột cho sidebar và grid
      - `FilterSidebar` [DUMB] - Cột bên trái hiển thị các tùy chọn lọc
      - `ProductGrid` [DUMB] - Lưới hiển thị 4 cột (có thể mở rộng kích thước khi ẩn Filter)
        - `ProductCard` [DUMB] - Thẻ hiển thị thông tin sản phẩm (Tiềm năng: Shared UI)
      - `Pagination` [DUMB] - Chuyển trang (Tiềm năng: Shared UI)

## 2. QUẢN LÝ TRẠNG THÁI (STATE MANAGEMENT)

### Local State (`useState`)
- `isFilterVisible`: Trạng thái hiển thị cột `FilterSidebar` bên trái (mặc định `true`, bật tắt qua nút ẩn/hiện).
- `isDropdownOpen`: Trạng thái đóng/mở của dropdown `SortSelector`.

### Global State (Zustand / Pinia)
- `cartItems`: Danh sách sản phẩm trong giỏ hàng (để cập nhật icon giỏ hàng và số lượng khi người dùng bấm "Thêm vào giỏ" trên `ProductCard`).
- `isLoadingCart`: Trạng thái đang thêm vào giỏ hàng.

### URL Query Parameters
*Các trạng thái bộ lọc và hiển thị cần được đồng bộ lên URL để hỗ trợ load lại trang và chia sẻ link:*
- `page`: Vị trí trang hiện tại (VD: `?page=2`).
- `sort`: Tiêu chí sắp xếp hiện tại (VD: `?sort=price_asc`, `?sort=popular`, `?sort=newest`).
- `category`: Bộ lọc danh mục (nếu có).
- `min_price` / `max_price`: Bộ lọc theo khoảng giá.

## 3. CẤU TRÚC DỮ LIỆU (DATA INTERFACES)

```typescript
// Interface cơ bản cho đối tượng Sản Phẩm
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  salePrice: number | null;
  imageUrl: string;
  isPopular: boolean;
  updatedAt: string;
}

// Props cho Banner Component
export interface BannerProps {
  title: string;
  imageUrl: string;
  ctaText: string;
  onCtaClick: () => void;
}

// Props cho ProductCard Component (Shared UI)
export interface ProductCardProps {
  product: Product;
  onAddToCart: (productId: string) => void;
  onViewDetail: (productId: string) => void;
}

// Props cho ProductGrid Component
export interface ProductGridProps {
  products: Product[];
  isLoading: boolean;
  columns: 3 | 4; 
}

// Props cho FilterToggleButton Component
export interface FilterToggleButtonProps {
  isVisible: boolean;
  onToggle: () => void;
}

// Props cho SortSelector Component
export interface SortOption {
  label: string;
  value: string;
}

export interface SortSelectorProps {
  options: SortOption[];
  currentValue: string;
  onChange: (value: string) => void;
}

// Props cho Pagination Component (Shared UI)
export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}
```
