# Ý TƯỞNG: TRANG BẢNG LƯƠNG (Payroll Management)

## 1. Thông tin chung (Meta Info)
- **Dự án:** HRM System
- **Tính năng:** Tính lương tháng, xem chi tiết từng nhân viên,
  duyệt và xuất bảng lương
- **Mục đích:** HR và Kế toán tính toán, kiểm tra và phê duyệt lương
  toàn bộ nhân viên mỗi tháng trong một màn hình

## 2. Đối tượng & Trải nghiệm (Target & UX)
- **Người dùng chính:** HR Manager, Kế toán
- **Hành động chính:** Chọn tháng cần xem, lọc theo phòng ban,
  click vào nhân viên để xem chi tiết, bấm "Duyệt bảng lương", xuất file Excel
- **Cảm xúc mang lại:** Chính xác, tin cậy, thao tác dứt khoát

## 3. Đặc tả Thiết kế (Design Specs)
- **Phong cách UI:** Vercel-inspired dark theme
- **Quy tắc hiển thị:**
  - Bộ lọc: Month picker + Dropdown phòng ban + nút "Xuất Excel" bên phải
  - Thẻ tổng quan: Tổng quỹ lương tháng, Đã duyệt, Chờ duyệt
  - Bảng lương: Họ tên, Phòng ban, Lương cơ bản, Phụ cấp,
    Khấu trừ, Thực lãnh, Trạng thái
  - Trạng thái "Đã duyệt": `text-emerald-400 bg-emerald-400/10`
  - Trạng thái "Chờ duyệt": `text-yellow-400 bg-yellow-400/10`
  - Số tiền dùng `font-mono` để dễ đọc
- **Màu sắc:** Dark theme Vercel chuẩn

## 4. Mock Data
- **Tháng:** 07/2025
- **Tổng quỹ lương:** 1.250.000.000đ — 120 đã duyệt — 8 chờ duyệt
- **Bản ghi 1:** Nguyễn Văn An — Kỹ thuật — 25.000.000 — 3.000.000 — 2.500.000
  — 25.500.000đ — Đã duyệt
- **Bản ghi 2:** Trần Thị Bình — Marketing — 18.000.000 — 2.000.000 — 1.800.000
  — 18.200.000đ — Đã duyệt
- **Bản ghi 3:** Lê Minh Châu — Kế toán — 20.000.000 — 2.500.000 — 2.000.000
  — 20.500.000đ — Chờ duyệt