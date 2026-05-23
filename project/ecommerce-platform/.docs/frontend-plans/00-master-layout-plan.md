# KẾ HOẠCH FRONTEND: MASTER LAYOUT

## 1. PHÂN RÃ COMPONENT (COMPONENT TREE)

- **MasterLayout** `[SMART]` (Wrapper chính bao bọc toàn bộ ứng dụng)
  - **Header** `[SMART]` (Thanh điều hướng cố định trên cùng - Sticky)
    - **Logo** `[DUMB]` *(Shared UI)*
    - **SearchBar** `[SMART]` (Ô tìm kiếm, xử lý sự kiện submit đẩy lên URL)
    - **HeaderActions** `[DUMB]` (Khu vực chứa các nút chức năng bên phải)
      - **AuthButton** `[DUMB]` *(Shared UI)* (Nút Đăng nhập/Tài khoản)
      - **CartIconWidget** `[SMART]` *(Shared UI)* (Lắng nghe Global State để hiển thị số lượng badge)
  - **MainContent** `[DUMB]` (Layout chứa nội dung động - Outlet/Children, có padding)
  - **Footer** `[DUMB]` (Chân trang)
    - **FooterContact** `[DUMB]` (Cột 1: Logo & Thông tin liên hệ)
    - **FooterLinks** `[DUMB]` (Cột 2: Chính sách & Điều khoản)
    - **FooterSocial** `[DUMB]` (Cột 3: App links & Social media)

## 2. QUẢN LÝ TRẠNG THÁI (STATE MANAGEMENT)

- **URL Query Parameters:**
  - `q` (string): Lưu từ khóa tìm kiếm khi người dùng submit `SearchBar` (VD: `/search?q=laptop`). Cho phép chia sẻ URL kết quả tìm kiếm.

- **Global State (Zustand / Redux / Pinia):**
  - `cartTotalItems` (number): Tổng số lượng sản phẩm trong giỏ hàng. Được subscribe bởi `CartIconWidget` để cập nhật badge liên tục ở mọi trang.
  - `isAuthenticated` (boolean): Trạng thái đăng nhập để `Header` quyết định render nút Đăng nhập hay Avatar người dùng.

- **Local State (`useState`):**
  - `searchValue` (string): Trạng thái nội bộ của `SearchBar` dùng để controlled input (quản lý text đang gõ trước khi nhấn Enter/Submit).

## 3. CẤU TRÚC DỮ LIỆU (DATA INTERFACES)

```typescript
// Cấu trúc Props cho MainContent
interface MainContentProps {
  children: React.ReactNode;
}

// Cấu trúc Props cho HeaderActions
interface HeaderActionsProps {
  isAuthenticated: boolean;
  onLoginClick: () => void;
  onCartClick: () => void;
}

// Cấu trúc Props cho AuthButton
interface AuthButtonProps {
  isAuthenticated: boolean;
  userAvatarUrl?: string;
  onClick: () => void;
}

// Cấu trúc dữ liệu cho các nhóm liên kết ở Footer
interface FooterLinkItem {
  id: string;
  label: string;
  url: string;
  isExternal?: boolean;
}

interface FooterLinksProps {
  title: string;
  links: FooterLinkItem[];
}

// Cấu trúc Props cho Logo (Shared UI)
interface LogoProps {
  variant?: 'light' | 'dark';
  width?: number;
  height?: number;
}
```
