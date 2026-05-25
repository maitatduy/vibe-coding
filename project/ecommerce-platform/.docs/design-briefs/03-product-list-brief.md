# Design Brief: Trang Danh Sách Sản Phẩm

## 1. HỆ THỐNG LƯỚI & BỐ CỤC (LAYOUT SYSTEM)

- **Root Structure:**
  - Container chính: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full min-h-screen bg-white`
  - Khoảng cách khối chính (Section spacing): `gap-12 py-12`

- **Section: Hero Banner**
  - Layout: `w-full relative overflow-hidden rounded-2xl mb-10`
  - Chiều cao: `h-64 sm:h-80 md:h-96`

- **Section: Catalog Header (Toolbar)**
  - Layout: `flex flex-col sm:flex-row justify-between items-center mb-8 gap-4`

- **Section: Catalog Content (Main Area)**
  - Layout: `flex flex-col lg:flex-row gap-8`
  - Sidebar (Filter): `w-full lg:w-64 flex-shrink-0`
  - Main Grid Area: `flex-1`

- **Section: Product Grid**
  - Desktop (lg): `grid grid-cols-4 gap-6` (Khi ẩn sidebar có thể tăng kích thước phần tử)
  - Tablet (md): `grid grid-cols-3 gap-6`
  - Mobile (sm): `grid grid-cols-2 gap-4`

## 2. ĐẶC TẢ COMPONENT (COMPONENT SPECS)

- **Banner [DUMB]**
  - Box Style: `rounded-2xl shadow-md overflow-hidden bg-gray-900`
  - Typography: `text-4xl md:text-5xl font-extrabold tracking-tight text-white`
  - Trạng thái tương tác (CTA Button): `hover:bg-orange-600 hover:-translate-y-1 hover:shadow-lg transition-all duration-300`

- **CatalogToolbar [DUMB]**
  - Box Style: `bg-white py-4 border-b border-gray-200`
  - Typography: Không có text lớn, chứa các nút và selector.

- **FilterToggleButton [DUMB]**
  - Box Style: `rounded-lg border border-gray-300 px-4 py-2 flex items-center gap-2 bg-white`
  - Typography: `text-sm font-medium text-gray-700`
  - Trạng thái tương tác: `hover:bg-gray-50 active:bg-gray-100 transition-colors`

- **SortSelector [DUMB]**
  - Box Style: `rounded-lg border border-gray-300 px-4 py-2 bg-white appearance-none`
  - Typography: `text-sm text-gray-700`
  - Trạng thái tương tác: `focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none`

- **CatalogContent [DUMB]**
  - Đóng vai trò layout Wrapper, không có style Box.

- **FilterSidebar [DUMB]**
  - Box Style: `bg-white rounded-xl border border-gray-100 p-5 shadow-sm sticky top-4`
  - Typography (Tiêu đề nhóm lọc): `text-lg font-semibold text-gray-900 mb-4`

- **ProductGrid [DUMB]**
  - Đóng vai trò lưới layout container.

- **ProductCard [DUMB]**
  - Box Style: `bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col h-full`
  - Typography (Tên SP): `text-base font-semibold text-gray-900 line-clamp-2 mt-3`
  - Typography (Giá): `text-lg font-bold text-red-700`
  - Trạng thái tương tác: `hover:-translate-y-1 hover:shadow-xl transition-all duration-300 cursor-pointer group`
  - Image Hover: `group-hover:scale-105 transition-transform duration-500`

- **Pagination [DUMB]**
  - Box Style: `flex justify-center items-center gap-2 mt-12`
  - Nút trang: `w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center`
  - Trạng thái tương tác (Nút chưa chọn): `hover:bg-gray-50 hover:border-gray-300 text-gray-600 transition-colors`
  - Trạng thái tương tác (Nút đang chọn): `bg-orange-500 text-white border-orange-500 shadow-md`

## 3. RÀNG BUỘC MÀU SẮC (COLOR CONSTRAINTS)

- **CTA chính (Mua ngay, Thêm vào giỏ, Active States):** `bg-orange-500`, hover `bg-orange-600`
- **Badge giảm giá, Giá tiền nổi bật:** `bg-red-700` hoặc `text-red-700`
- **Màu nền trang chủ đạo:** `bg-gray-50` hoặc `bg-white` để tối ưu Whitespace.
- **Văn bản chính:** `text-gray-900`
- **Văn bản phụ (Mô tả, nhãn):** `text-gray-500`
- **Đường viền mờ (Border):** `border-gray-200`

## 4. MOCK DATA (DỮ LIỆU HIỂN THỊ)

- **Banner:**
  - Title: "Combo Thức Khuya Coder"
  - Subtitle: "Bơm năng lượng, code mượt mà cả đêm không lo đói."
  - CTA Text: "Khám phá ngay"
  - Image URL: `https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?q=80&w=2070&auto=format&fit=crop`

- **Sản Phẩm (Product):**
  - SP 1: 
    - Tên: "Mì Hảo Hảo Tôm Chua Cay Kèm Trứng Xúc Xích"
    - Giá: `35.000đ` (Giá cũ: `40.000đ`)
    - Nhãn: Mới
    - Ảnh URL: `https://images.unsplash.com/photo-1612927601601-6638404737ce?q=80&w=1000&auto=format&fit=crop`
  - SP 2:
    - Tên: "Bò Húc Redbull Thái Lan Lốc 6 Lon"
    - Giá: `85.000đ`
    - Nhãn: Nổi bật
    - Ảnh URL: `https://images.unsplash.com/photo-1622543925917-763c34d1a86e?q=80&w=1000&auto=format&fit=crop`
  - SP 3:
    - Tên: "Snack Khoai Tây Lay's Vị Tự Nhiên 170g"
    - Giá: `32.000đ` (Giá cũ: `35.000đ`)
    - Nhãn: Giảm giá -10%
    - Ảnh URL: `https://images.unsplash.com/photo-1566478989037-eec170784d0b?q=80&w=1000&auto=format&fit=crop`
  - SP 4:
    - Tên: "Cà Phê Đen Đá Pha Sẵn Wakeup 247"
    - Giá: `15.000đ`
    - Ảnh URL: `https://images.unsplash.com/photo-1550907955-46f903e1cfdf?q=80&w=1000&auto=format&fit=crop`

- **Bộ Lọc (Filter):**
  - Danh mục: Đồ ăn vặt (12), Nước tăng lực (8), Combo Coder (5)
  - Sắp xếp: Mới nhất, Bán chạy, Giá tăng dần, Giá giảm dần
