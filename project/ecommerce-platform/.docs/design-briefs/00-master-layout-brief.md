# DESIGN BRIEF: BỐ CỤC TOÀN CỤC (MASTER LAYOUT)

## 1. HỆ THỐNG LƯỚI & BỐ CỤC (LAYOUT SYSTEM)

- **Root Container**: `flex flex-col min-h-screen bg-gray-50`
- **Header Section**: `sticky top-0 z-50 w-full bg-white shadow-sm border-b border-gray-100 h-16 md:h-20`
  - Cấu trúc Header: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between gap-4 md:gap-8`
- **MainContent Section**: `flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12`
- **Footer Section**: `w-full bg-slate-900 text-gray-300 py-12 md:py-16 mt-auto`
  - Cấu trúc Footer (Grid): `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12`

## 2. ĐẶC TẢ COMPONENT (COMPONENT SPECS)

- **Logo** `[DUMB]`
  - Box Style: `flex items-center flex-shrink-0 cursor-pointer`
  - Typography: `text-2xl font-black tracking-tighter text-orange-600`
  - Trạng thái tương tác: `hover:opacity-80 transition-opacity`

- **HeaderActions** `[DUMB]`
  - Box Style: `flex items-center gap-4 md:gap-6 flex-shrink-0`

- **AuthButton** `[DUMB]`
  - Box Style: `hidden md:flex items-center justify-center px-5 py-2 rounded-full border border-gray-200 bg-white shadow-sm`
  - Typography: `text-sm font-semibold text-gray-700`
  - Trạng thái tương tác: `hover:bg-gray-50 hover:border-gray-300 active:scale-95 transition-all`

- **MainContent** `[DUMB]`
  - Box Style: `w-full min-h-[50vh]` (Khu vực nhúng nội dung động)

- **Footer** `[DUMB]`
  - Box Style: `border-t border-slate-800`

- **FooterContact** `[DUMB]`
  - Box Style: `flex flex-col gap-4`
  - Typography (Mô tả): `text-sm leading-relaxed text-gray-400`
  - Typography (Thông tin): `text-base font-medium text-white`

- **FooterLinks** `[DUMB]`
  - Box Style: `flex flex-col gap-3`
  - Typography (Tiêu đề cột): `text-lg font-bold text-white uppercase tracking-wider mb-2`
  - Typography (Link): `text-sm text-gray-400`
  - Trạng thái tương tác: `hover:text-orange-500 hover:translate-x-1 transition-all`

- **FooterSocial** `[DUMB]`
  - Box Style: `flex flex-col gap-4`
  - Container Icon: `flex gap-3`
  - Icon Style: `w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-gray-400`
  - Trạng thái tương tác (Icon): `hover:bg-orange-500 hover:text-white hover:-translate-y-1 transition-all duration-300`

## 3. RÀNG BUỘC MÀU SẮC (COLOR CONSTRAINTS)

- **Nền Header/Trang**: Header dùng `bg-white`, Main Layout dùng `bg-gray-50`.
- **Nền Footer**: Nền tối `bg-slate-900`.
- **Thương hiệu/Nhấn mạnh (Primary CTA)**: Màu cam `text-orange-600` (Logo), hover link `hover:text-orange-500`, hover icon `hover:bg-orange-500`.
- **Văn bản Header**: `text-gray-900`, `text-gray-700`.
- **Văn bản Footer**: Chữ tiêu đề dùng `text-white`, đoạn văn/link dùng `text-gray-400`, viền footer dùng `border-slate-800`.

## 4. MOCK DATA (DỮ LIỆU HIỂN THỊ)

- **Logo**: 
  - Text: "TechBite"
  
- **HeaderActions**:
  - AuthButton (Chưa đăng nhập): "Đăng nhập"

- **FooterContact**:
  - Đoạn mô tả: "Nạp năng lượng tức thì cho các cú đêm coder. Giao hàng siêu tốc trong 30 phút."
  - Hotline: "1900 1234"
  - Email: "support@techbite.vn"

- **FooterLinks**:
  - Tiêu đề cột: "Chính Sách"
  - Links: "Điều khoản sử dụng", "Chính sách bảo mật", "Chính sách hoàn tiền"

- **FooterSocial**:
  - Tiêu đề cột: "Kết Nối"
  - Mạng xã hội: "Facebook", "Instagram", "GitHub" (Hiển thị icon tương ứng)
