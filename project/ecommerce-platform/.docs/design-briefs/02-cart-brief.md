# DESIGN BRIEF: Slide-out Cart Drawer

## 1. HỆ THỐNG LƯỚI & BỐ CỤC (LAYOUT SYSTEM)

- **Root Container (Overlay)**: `fixed inset-0 z-50 flex justify-end`
- **Drawer Panel**:
  - Desktop: `w-[400px] h-screen`
  - Mobile: `w-full sm:w-[400px] h-screen`
  - Layout trong Drawer: `flex flex-col h-full`
- **Các Section chính**:
  - **Header**: Cố định trên cùng, `flex items-center justify-between px-6 py-4 border-b`
  - **Body (Danh sách)**: Khu vực cuộn, `flex-1 overflow-y-auto px-6 py-6 flex flex-col gap-6`
  - **Footer (Summary)**: Cố định dưới cùng, `mt-auto px-6 py-6 border-t flex flex-col gap-4 sticky bottom-0`

## 2. ĐẶC TẢ COMPONENT (COMPONENT SPECS)

- **DrawerBackdrop**
  - Box Style: `absolute inset-0 bg-black/40 backdrop-blur-sm`
  - Trạng thái tương tác: `transition-opacity duration-300 ease-in-out`

- **DrawerContainer**
  - Box Style: `relative w-full max-w-md h-full bg-white/90 backdrop-blur-xl shadow-2xl flex flex-col`
  - Trạng thái tương tác: `transform transition-transform duration-300 ease-in-out`

- **CartHeader**
  - Box Style: `flex justify-between items-center px-6 py-4 border-b border-gray-100`
  - Typography (Tiêu đề): `text-xl font-bold text-gray-900 tracking-tight`
  - Nút Đóng: `text-gray-400 hover:text-gray-600 transition-colors p-2 -mr-2 rounded-full hover:bg-gray-100`

- **CartItemList**
  - Box Style: `flex-1 overflow-y-auto px-6 py-4 flex flex-col gap-6`

- **CartItem**
  - Box Style: `flex gap-4 items-center`
  - Typography:
    - Tên SP: `text-sm font-semibold text-gray-800 line-clamp-2 leading-snug`
    - Giá: `text-sm font-bold text-gray-900 mt-1`
  - Ảnh Thumbnail: `w-20 h-20 rounded-xl object-cover border border-gray-100 shadow-sm`

- **QuantityStepper**
  - Box Style: `flex items-center gap-3 border border-gray-200 rounded-lg p-1 bg-white`
  - Typography (Số lượng): `text-sm font-medium text-gray-800 w-6 text-center`
  - Nút bấm [+]/[-]: `w-7 h-7 flex items-center justify-center rounded-md bg-gray-50 text-gray-600`
  - Trạng thái tương tác: `hover:bg-gray-100 active:scale-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed`

- **RemoveButton**
  - Typography: `text-xs font-medium text-gray-400 flex items-center gap-1 mt-2`
  - Trạng thái tương tác: `hover:text-red-500 hover:underline transition-colors`

- **CartSummary**
  - Box Style: `px-6 py-6 bg-gray-50/90 backdrop-blur-md border-t border-gray-100 flex flex-col gap-3`
  - Typography:
    - Dòng thông thường: `flex justify-between text-sm text-gray-600`
    - Nhấn mạnh Phí giao hàng: `text-green-600 font-medium`
    - Tổng tiền: `flex justify-between items-center mt-2 pt-2 border-t border-gray-200/60` (Số tiền: `text-xl font-bold text-gray-900`)

- **CheckoutButton**
  - Box Style: `w-full py-4 rounded-xl flex items-center justify-center shadow-lg shadow-orange-600/25`
  - Typography: `text-base font-bold text-white uppercase tracking-wide`
  - Trạng thái tương tác: `hover:bg-orange-700 hover:-translate-y-0.5 hover:shadow-orange-600/40 transition-all active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed`

## 3. RÀNG BUỘC MÀU SẮC (COLOR CONSTRAINTS)

- **Màu nền Backdrop**: `bg-black/40`
- **Màu nền Panel**: `bg-white/90` kết hợp `bg-gray-50/90` (Glassmorphism)
- **Văn bản chính**: `text-gray-900` (Tiêu đề, Giá, Tổng tiền), `text-gray-800` (Tên SP)
- **Văn bản phụ**: `text-gray-600` (Label), `text-gray-400` (Icon Đóng, Nút Xóa)
- **Viền & Phân cách**: `border-gray-100`, `border-gray-200`
- **Call-to-Action (Thanh toán)**: Nền `bg-orange-600`, Chữ `text-white`
- **Hover CTA**: `hover:bg-orange-700`
- **Highlight (Miễn phí)**: `text-green-600`
- **Cảnh báo (Hover xóa)**: `hover:text-red-500`

## 4. MOCK DATA (DỮ LIỆU HIỂN THỊ)

- **Sản phẩm 1:**
  - Tên: Bàn phím cơ Keychron K8 Pro Không Dây
  - Giá: 2.150.000 ₫
  - Hình ảnh: `https://images.unsplash.com/photo-1595225476474-87563907a212?w=500&q=80`
  - Số lượng: 1

- **Sản phẩm 2:**
  - Tên: Chuột không dây Logitech MX Master 3S
  - Giá: 2.490.000 ₫
  - Hình ảnh: `https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&q=80`
  - Số lượng: 2

- **Thông tin đơn hàng:**
  - Tạm tính: 7.130.000 ₫
  - Phí giao hàng: Miễn phí
  - Tổng thanh toán: 7.130.000 ₫
