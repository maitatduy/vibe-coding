# DESIGN BRIEF - HR OVERVIEW DASHBOARD

Bản đặc tả UI/UX hệ thống HRM Dashboard, phục vụ render tự động với phong cách Vercel-inspired (Minimalist, Dark Theme, High Contrast).

---

## 1. HỆ THỐNG LƯỚI & BỐ CỤC (LAYOUT SYSTEM)

Cấu trúc Layout phân vùng chính xác, tối ưu hóa hiển thị không gian hẹp và rộng.

- **Root Container:**
  - Lớp nền toàn màn hình: `min-h-screen bg-zinc-950 text-zinc-100 flex overflow-hidden`
- **Sidebar (Fixed Navigation Area):**
  - Vị trí & Kích thước: `w-64 h-screen border-r border-zinc-800 bg-zinc-950 flex flex-col p-6 sticky top-0`
- **Main Content Wrapper:**
  - Cấu trúc: `flex-1 flex flex-col min-w-0 h-screen overflow-y-auto`
- **Sticky Header:**
  - Vị trí & Căn lề: `h-16 px-8 border-b border-zinc-800 bg-zinc-950/80 backdrop-blur sticky top-0 z-50 flex items-center justify-between`
- **Main Grid Grid system (Tải trọng nội dung):**
  - Container chính: `max-w-7xl mx-auto w-full p-8 space-y-8`
  - **KPI Cards Section:** `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6`
  - **Middle Row (Biểu đồ & Hoạt động):** `grid grid-cols-1 lg:grid-cols-3 gap-6` (Biểu đồ: `lg:col-span-2`, Hoạt động: `lg:col-span-1`)
  - **Bottom Row (Danh sách chờ duyệt):** `w-full`

---

## 2. ĐẶC TẢ COMPONENT (COMPONENT SPECS)

Chi tiết quy chuẩn thiết kế các DUMB Component hiển thị trên màn hình Dashboard.

### [DUMB] Button
- **Box Style:** `inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-1 focus:ring-zinc-400 gap-2`
- **Variants:**
  - `primary`: `bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:bg-blue-600`
  - `secondary`: `bg-zinc-900 border border-zinc-800 text-zinc-100 hover:bg-zinc-800`
  - `danger`: `bg-zinc-900 border border-red-900/30 text-red-400 hover:bg-red-950/20 hover:border-red-800`
  - `ghost`: `text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900`
- **Kích thước:**
  - `sm`: `px-3 py-1.5 text-xs`
  - `md`: `px-4 py-2 text-sm`

### [DUMB] Card
- **Box Style:** `bg-zinc-900 border border-zinc-800 rounded-xl p-6 shadow-sm relative overflow-hidden transition-all duration-300 hover:border-zinc-700`

### [DUMB] Table
- **Box Style:** `w-full border-collapse text-left`
- **Header Cell (th):** `border-b border-zinc-800 px-4 py-3 text-xs font-semibold uppercase tracking-wider text-zinc-400`
- **Body Cell (td):** `border-b border-zinc-850 px-4 py-4 text-sm text-zinc-100`
- **Row Interaction:** `hover:bg-zinc-900/50 transition-colors`

### [DUMB] Badge
- **Box Style:** `inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium border transition-colors`
- **Variants:**
  - `success`: `bg-emerald-500/10 text-emerald-400 border-emerald-500/20`
  - `warning`: `bg-amber-500/10 text-amber-400 border-amber-500/20`
  - `danger`: `bg-red-500/10 text-red-400 border-red-500/20`
  - `info`: `bg-blue-500/10 text-blue-400 border-blue-500/20`
  - `neutral`: `bg-zinc-850 text-zinc-400 border-zinc-800`

### [DUMB] Avatar
- **Box Style:** `h-8 w-8 rounded-full bg-zinc-800 flex items-center justify-center border border-zinc-700 overflow-hidden select-none`
- **Typography:** `text-xs font-medium text-zinc-200`

### [DUMB] Skeleton
- **Box Style:** `animate-pulse bg-zinc-800/80 rounded`

### [DUMB] DashboardHeader
- **Bố cục:** `flex items-center justify-between`
- **Typography:**
  - Breadcrumb: `text-xs text-zinc-400 tracking-wider font-mono`
  - Title: `text-lg font-semibold text-zinc-100`

### [DUMB] DashboardSidebar
- **Bố cục:** `flex flex-col justify-between h-full`
- **Typography:**
  - Navigation Item: `flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900 transition-all`
  - Active Navigation Item: `bg-zinc-900 text-zinc-100 border-l-2 border-blue-600 rounded-r-md`

### [DUMB] KpiCard
- **Cấu trúc:** `flex flex-col justify-between h-full space-y-2`
- **Typography:**
  - Title: `text-xs font-medium uppercase tracking-wider text-zinc-400`
  - Value: `text-3xl font-bold tracking-tight text-zinc-100`
  - Change Label: `text-xs text-zinc-400`

### [DUMB] AttendanceBarChart
- **Box Style:** `w-full h-[280px] bg-zinc-900 border border-zinc-800 rounded-xl p-6`
- **Chart Colors:**
  - Cột hoạt động: `bg-blue-600` hoặc `fill-blue-600`
  - Cột vắng mặt/nền: `bg-zinc-800` hoặc `fill-zinc-800`

### [DUMB] RequestActionModal
- **Overlay:** `fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4`
- **Modal Box:** `bg-zinc-900 border border-zinc-800 rounded-xl max-w-md w-full p-6 shadow-2xl space-y-6`

### [DUMB] ActivityList
- **Box Style:** `space-y-4`
- **Item Style:** `flex gap-3 text-sm text-zinc-300 border-l border-zinc-800 pl-4 py-1 hover:border-zinc-700 transition-colors`

---

## 3. RÀNG BUỘC MÀU SẮC (COLOR CONSTRAINTS)

Để duy trì tính tối giản cực cao và tránh các biến thể màu lạ, bộ mã Tailwind sau là bắt buộc:

- **Nền chính tối:** `bg-zinc-950`
- **Surface (Vùng nổi/Thẻ):** `bg-zinc-900`
- **Đường viền ngăn cách:** `border-zinc-800` hoặc `border-zinc-850`
- **Chữ chính (Primary text):** `text-zinc-100`
- **Chữ phụ (Secondary text):** `text-zinc-400`
- **Màu nhấn nút / Active:** `bg-blue-600` hoặc `bg-zinc-900 hover:bg-zinc-800`
- **Trạng thái Thành công / Tăng:** `text-emerald-400`
- **Trạng thái Thất bại / Trễ / Cảnh báo:** `text-red-400`

---

## 4. MOCK DATA (DỮ LIỆU HIỂN THỊ)

Sử dụng bộ dữ liệu tiếng Việt thực tế dưới đây để đưa vào UI:

### Dữ liệu KPI Cards (4 thẻ):
1. **Tổng nhân viên:**
   - Chỉ số chính: `128 người`
   - Chỉ số thay đổi: `+3`
   - Chi tiết: `so với tháng trước` (màu `text-emerald-400`)
2. **Có mặt hôm nay:**
   - Chỉ số chính: `114 / 128`
   - Chỉ số thay đổi: `89%`
   - Chi tiết: `tỷ lệ đúng giờ` (màu `text-emerald-400`)
3. **Đơn chờ duyệt:**
   - Chỉ số chính: `7 đơn`
   - Chi tiết: `nghỉ phép, tăng ca` (màu `text-red-400`)
4. **Nhân viên mới:**
   - Chỉ số chính: `4 người`
   - Chi tiết: `gia nhập tháng này`

### Dữ liệu biểu đồ chấm công (Attendance Weekly Chart):
- **Thứ 2 (Mon):** `112 người` (Tổng số: `128`)
- **Thứ 3 (Tue):** `118 người` (Tổng số: `128`)
- **Thứ 4 (Wed):** `115 người` (Tổng số: `128`)
- **Thứ 5 (Thu):** `120 người` (Tổng số: `128`)
- **Thứ 6 (Fri):** `114 người` (Tổng số: `128`)

### Dữ liệu Bảng đơn chờ duyệt (Pending Requests):
- **Bản ghi 1:**
   - Họ tên: `Nguyễn Văn An` (Vị trí: `Frontend Developer`, Phòng ban: `Product`)
   - Loại đơn: `Nghỉ phép` (Badge: `warning` - màu amber)
   - Thời gian: `20/07` → `22/07`
   - Trạng thái: `Chờ duyệt`
- **Bản ghi 2:**
   - Họ tên: `Trần Thị Bình` (Vị trí: `UI Designer`, Phòng ban: `Design`)
   - Loại đơn: `Tăng ca` (Badge: `info` - màu blue)
   - Thời gian: `19/07` → `19/07`
   - Trạng thái: `Chờ duyệt`
- **Bản ghi 3:**
   - Họ tên: `Lê Minh Châu` (Vị trí: `Product Owner`, Phòng ban: `Management`)
   - Loại đơn: `Nghỉ bệnh` (Badge: `danger` - màu red)
   - Thời gian: `18/07` → `18/07`
   - Trạng thái: `Chờ duyệt`

### Hoạt động gần đây (Recent Activities):
- **Dòng 1:** `"Phạm Quốc Dũng vừa check-in lúc 08:02"`, mốc thời gian: `2 phút trước`
- **Dòng 2:** `"Đơn nghỉ phép của Hoàng Thị Em đã được duyệt"`, mốc thời gian: `15 phút trước`
- **Dòng 3:** `"Nhân viên mới Vũ Thanh Phong đã được thêm vào hệ thống"`, mốc thời gian: `1 giờ trước`
