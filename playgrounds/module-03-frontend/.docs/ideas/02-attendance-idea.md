# Ý TƯỞNG: TRANG CHẤM CÔNG (Attendance Management)

## 1. Thông tin chung (Meta Info)
- **Dự án:** HRM System
- **Tính năng:** Theo dõi check-in / check-out hàng ngày, xem lịch sử chấm công
  theo tuần/tháng, phát hiện đi trễ và vắng mặt
- **Mục đích:** HR nắm được tình hình chấm công toàn công ty theo ngày,
  phát hiện bất thường và xuất báo cáo

## 2. Đối tượng & Trải nghiệm (Target & UX)
- **Người dùng chính:** HR Manager
- **Hành động chính:** Chọn ngày / tuần / tháng để xem, lọc theo phòng ban,
  click vào nhân viên để xem lịch sử chi tiết
- **Cảm xúc mang lại:** Dữ liệu trực quan, phát hiện vấn đề nhanh

## 3. Đặc tả Thiết kế (Design Specs)
- **Phong cách UI:** Vercel-inspired dark theme
- **Quy tắc hiển thị:**
  - Tab chuyển đổi: Ngày / Tuần / Tháng ở trên cùng
  - Bộ lọc: Date picker + Dropdown phòng ban
  - Bảng chấm công: Họ tên, Giờ vào, Giờ ra, Tổng giờ, Trạng thái
  - Trạng thái "Đúng giờ": `text-emerald-400`
  - Trạng thái "Đi trễ": `text-yellow-400`
  - Trạng thái "Vắng mặt": `text-red-400`
  - Biểu đồ Bar Chart tổng hợp theo tuần phía trên bảng
- **Màu sắc:** Dark theme Vercel chuẩn

## 4. Mock Data
- **Ngày xem:** 19/07/2025
- **Bản ghi 1:** Nguyễn Văn An — 08:02 — 17:35 — 9h33p — Đúng giờ
- **Bản ghi 2:** Trần Thị Bình — 08:47 — 17:10 — 8h23p — Đi trễ
- **Bản ghi 3:** Lê Minh Châu — — — — — Vắng mặt
- **Bản ghi 4:** Phạm Quốc Dũng — 07:55 — 18:20 — 10h25p — Đúng giờ
- **Tổng hôm nay:** 114 có mặt / 128 nhân viên — 9 đi trễ — 5 vắng mặt