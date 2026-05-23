# LUẬT THIẾT KẾ: E-COMMERCE PLATFORM

## 1. Bảng màu & Phân cấp (Color & Hierarchy)

- **Primary Action** — `bg-orange-600`
  Dùng DUY NHẤT cho "Thêm vào giỏ" và "Thanh toán".
  TUYỆT ĐỐI không dùng cho thành phần trang trí — để điều hướng mắt người dùng.
- **Secondary Action** — `bg-slate-900` (nút xem chi tiết, bộ lọc)
- **Background** — `bg-gray-50` (nền xám nhạt làm nổi thẻ sản phẩm trắng)
- **Giá hiện tại** — `text-red-600 font-bold`
- **Giá gốc (gạch ngang)** — `text-slate-400 line-through`

## 2. UI Components đặc thù (E-commerce)

### Product Card (Thẻ sản phẩm)

- Tỷ lệ ảnh: khung vuông `1:1` hoặc chữ nhật đứng `3:4`
- Ảnh có nền trong suốt → thêm background `bg-gray-100`
- BẮT BUỘC có Badge "% Giảm giá" góc trên bên phải

### Badges (Nhãn trạng thái)

- **Hết hàng:** Khóa xám toàn thẻ + badge `bg-gray-500 text-white`
- **Mới:** Badge `bg-green-500 text-white`

### Grid danh sách sản phẩm

- Mobile: `grid-cols-2`
- Tablet: `md:grid-cols-3`
- Desktop: `lg:grid-cols-4 xl:grid-cols-5`

## 3. UX Constraints

- **Giỏ hàng:** Dùng Drawer trượt từ phải — TUYỆT ĐỐI không nhảy sang trang mới
- **Feedback:** Bấm "Thêm vào giỏ" → Toast Message góc trên xác nhận thành công