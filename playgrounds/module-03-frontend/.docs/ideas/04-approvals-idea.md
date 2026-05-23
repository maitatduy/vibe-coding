# Ý TƯỞNG: TRANG PHÊ DUYỆT ĐƠN (Leave & Request Approvals)

## 1. Thông tin chung (Meta Info)
- **Dự án:** HRM System
- **Tính năng:** Xem và xử lý các đơn xin nghỉ phép, tăng ca, công tác
  đang chờ phê duyệt
- **Mục đích:** HR Manager và Quản lý phòng ban duyệt hoặc từ chối đơn
  nhanh chóng, có ghi chú lý do

## 2. Đối tượng & Trải nghiệm (Target & UX)
- **Người dùng chính:** HR Manager, Trưởng phòng
- **Hành động chính:** Xem danh sách đơn chờ duyệt, click xem chi tiết,
  bấm "Duyệt" hoặc "Từ chối" kèm ghi chú
- **Cảm xúc mang lại:** Xử lý nhanh, không bỏ sót đơn, rõ ràng trách nhiệm

## 3. Đặc tả Thiết kế (Design Specs)
- **Phong cách UI:** Vercel-inspired dark theme
- **Quy tắc hiển thị:**
  - Tab lọc theo loại đơn: Tất cả / Nghỉ phép / Tăng ca / Công tác
  - Badge số lượng đơn chờ duyệt trên mỗi tab
  - Danh sách dạng Card (không phải Table) — mỗi card gồm:
    Avatar + Tên, Loại đơn, Thời gian, Lý do, 2 nút Duyệt / Từ chối
  - Nút "Duyệt": `bg-emerald-600 hover:bg-emerald-500`
  - Nút "Từ chối": `bg-zinc-700 hover:bg-zinc-600 text-red-400`
  - Đơn đã xử lý hiển thị mờ với badge trạng thái
- **Màu sắc:** Dark theme Vercel chuẩn

## 4. Mock Data
- **Đơn 1:** Nguyễn Văn An — Nghỉ phép — 20/07 → 22/07/2025 (3 ngày)
  Lý do: "Việc gia đình" — Chờ duyệt
- **Đơn 2:** Trần Thị Bình — Tăng ca — 19/07/2025 (2 tiếng)
  Lý do: "Hoàn thành báo cáo quý" — Chờ duyệt
- **Đơn 3:** Lê Minh Châu — Nghỉ bệnh — 18/07/2025 (1 ngày)
  Lý do: "Sốt, có giấy bác sĩ" — Chờ duyệt
- **Đơn 4:** Phạm Quốc Dũng — Công tác — 25/07 → 26/07/2025 (2 ngày)
  Lý do: "Gặp đối tác tại Hà Nội" — Chờ duyệt
- **Tổng chờ duyệt:** 7 đơn