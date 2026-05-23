# MÀN HÌNH: Dashboard Tổng Quan HRM (HR Overview Dashboard)

## 1. Thông tin chung (Meta Info)

- **Dự án:** HRM System (Hệ thống Quản lý Nhân sự)
- **Tính năng:** Dashboard tổng quan — màn hình trung tâm hiển thị toàn bộ
  chỉ số nhân sự quan trọng trong một tầm nhìn duy nhất
- **Mục đích:** Giúp HR Manager và Admin nắm bắt nhanh tình trạng nhân sự
  (tổng nhân viên, chấm công hôm nay, đơn xin nghỉ chờ duyệt, hiệu suất tháng)
  mà không cần vào từng module riêng lẻ

## 2. Đối tượng & Trải nghiệm (Target & UX)

- **Người dùng chính:** HR Manager, Admin hệ thống
- **Hành động chính:** Xem nhanh các chỉ số KPI, click vào card để drill-down
  vào module chi tiết, xem danh sách đơn chờ duyệt và approve/reject trực tiếp
- **Cảm xúc mang lại:** Chuyên nghiệp, tối giản, dữ liệu rõ ràng —
  không gây overload thông tin

## 3. Đặc tả Thiết kế (Design Specs)

- **Phong cách UI:** Vercel-inspired — nền tối (`bg-black` hoặc `bg-zinc-950`),
  viền tinh tế (`border-zinc-800`), typography sắc nét, khoảng trắng rộng rãi,
  không dùng màu sắc loè loẹt
- **Quy tắc hiển thị:**
  - Layout 2 cột trên Desktop: sidebar navigation bên trái (cố định),
    content area bên phải (scrollable)
  - KPI Cards xếp thành grid 4 cột trên Desktop, 2 cột trên Tablet
  - Bảng dữ liệu (Recent Activity, Pending Requests) nằm phía dưới KPI Cards
  - Header sticky với breadcrumb và avatar người dùng
- **Màu sắc chủ đạo:**
  - Nền chính: `bg-zinc-950`
  - Surface (card, panel): `bg-zinc-900`
  - Viền: `border-zinc-800`
  - Text chính: `text-zinc-100`
  - Text phụ: `text-zinc-400`
  - Accent duy nhất (CTA, active state, badge): `text-white bg-white/10`
    hoặc `bg-blue-600` cho action quan trọng
  - Trạng thái tích cực (tăng, đúng hạn): `text-emerald-400`
  - Trạng thái cảnh báo (giảm, trễ hạn): `text-red-400`

## 4. Dữ liệu cốt lõi (Core Data)

- **KPI Cards (4 thẻ):**
  - Tổng nhân viên: 128 người — tăng 3 so với tháng trước
  - Có mặt hôm nay: 114 / 128 — tỷ lệ 89%
  - Đơn chờ duyệt: 7 đơn (nghỉ phép, tăng ca)
  - Nhân viên mới tháng này: 4 người
- **Biểu đồ chấm công (Attendance Chart):**
  - Dạng Bar Chart theo tuần (Thứ 2 → Thứ 6)
  - Dữ liệu mẫu: 112, 118, 115, 120, 114
- **Bảng đơn chờ duyệt (Pending Requests):**
  - Cột: Họ tên, Loại đơn, Từ ngày, Đến ngày, Trạng thái, Hành động
  - Dữ liệu mẫu:
    - Nguyễn Văn An — Nghỉ phép — 20/07 → 22/07 — Chờ duyệt
    - Trần Thị Bình — Tăng ca — 19/07 — 19/07 — Chờ duyệt
    - Lê Minh Châu — Nghỉ bệnh — 18/07 → 18/07 — Chờ duyệt
- **Hoạt động gần đây (Recent Activity):**
  - "Phạm Quốc Dũng vừa check-in lúc 08:02"
  - "Đơn nghỉ phép của Hoàng Thị Em đã được duyệt"
  - "Nhân viên mới Vũ Thanh Phong đã được thêm vào hệ thống"