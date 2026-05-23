# LUẬT THIẾT KẾ: HRM SYSTEM

## 1. Bảng màu & Phân cấp (Color & Hierarchy)

- **Nền chính** — `bg-zinc-950`
  Toàn bộ background của ứng dụng.
- **Surface (Card, Panel, Sidebar)** — `bg-zinc-900`
  Mọi khối nội dung nổi lên trên nền chính.
- **Viền phân cách** — `border-zinc-800`
  Dùng cho table row, card border, divider. TUYỆT ĐỐI không dùng màu viền sáng hơn.
- **Text chính** — `text-zinc-100`
- **Text phụ (label, placeholder, mô tả)** — `text-zinc-400`
- **Primary Action (CTA quan trọng)** — `bg-blue-600 hover:bg-blue-500`
  Dùng DUY NHẤT cho nút Lưu, Xác nhận, Thêm mới. Không dùng cho nút hủy hay nút phụ.
- **Trạng thái tích cực** — `text-emerald-400 bg-emerald-400/10`
  Đang làm việc, Đúng giờ, Đã duyệt.
- **Trạng thái cảnh báo** — `text-yellow-400 bg-yellow-400/10`
  Đi trễ, Chờ duyệt.
- **Trạng thái tiêu cực** — `text-red-400 bg-red-400/10`
  Nghỉ việc, Vắng mặt, Từ chối.
- **Hành động nguy hiểm (Xóa)** — `text-red-400 hover:bg-red-400/10`
  Không dùng background đỏ solid — chỉ dùng text đỏ và hover nhẹ.

## 2. UI Components đặc thù (HRM)

### KPI Card (Thẻ chỉ số)
- Background: `bg-zinc-900 border border-zinc-800 rounded-xl`
- Số liệu chính: `text-3xl font-bold text-zinc-100`
- Label mô tả: `text-sm text-zinc-400`
- Chỉ số tăng/giảm: `text-emerald-400` hoặc `text-red-400` kèm mũi tên
- Hover: `hover:border-zinc-700 transition-colors`

### Data Table (Bảng dữ liệu)
- Header row: `bg-zinc-900 text-zinc-400 text-xs uppercase tracking-wider`
- Data row: `border-b border-zinc-800 hover:bg-zinc-800/50 transition-colors`
- Số tiền dùng `font-mono` để căn chỉnh đều
- Pagination ở dưới cùng: nút Previous / Next + thông tin "Hiển thị 1–10 / 128"

### Status Badge (Nhãn trạng thái)
- Kích thước: `text-xs font-medium px-2 py-1 rounded-full`
- Đang làm việc: `text-emerald-400 bg-emerald-400/10`
- Chờ duyệt: `text-yellow-400 bg-yellow-400/10`
- Nghỉ việc / Từ chối: `text-red-400 bg-red-400/10`
- TUYỆT ĐỐI không dùng badge màu solid — chỉ dùng nền mờ `opacity/10`

### Form Input
- Base: `bg-zinc-900 border border-zinc-700 rounded-lg px-3 py-2 text-zinc-100`
- Focus: `focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 outline-none`
- Placeholder: `placeholder:text-zinc-500`
- Disabled: `opacity-50 cursor-not-allowed`

### Approval Card (Thẻ phê duyệt đơn)
- Background: `bg-zinc-900 border border-zinc-800 rounded-xl p-5`
- Nút "Duyệt": `bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg`
- Nút "Từ chối": `bg-zinc-800 hover:bg-zinc-700 text-red-400 rounded-lg`

## 3. Layout & Spacing

- **Sidebar:** `w-64 fixed left-0 top-0 bottom-0 bg-zinc-900 border-r border-zinc-800`
- **Content Area:** `ml-64 min-h-screen bg-zinc-950 p-8`
- **KPI Grid:** `grid grid-cols-4 gap-4` Desktop — `grid-cols-2` Tablet
- **Section spacing:** `space-y-6` giữa các khối nội dung
- **Card padding:** `p-6`
- **Table cell padding:** `px-4 py-3`

## 4. UX Constraints

- **Phê duyệt đơn:** Duyệt / Từ chối trực tiếp trên danh sách — TUYỆT ĐỐI không chuyển trang mới
- **Xóa dữ liệu:** BẮT BUỘC hiện Dialog xác nhận trước khi xóa — không xóa ngay lập tức
- **Feedback:** Mọi hành động thành công → Toast Message góc dưới bên phải
- **Empty State:** Khi không có dữ liệu, hiển thị icon + text mô tả — không để bảng trống