# Ý TƯỞNG: TRANG QUẢN LÝ NHÂN VIÊN (Employee Management)

## 1. Thông tin chung (Meta Info)
- **Dự án:** HRM System
- **Tính năng:** Danh sách toàn bộ nhân viên, tìm kiếm, lọc, thêm mới, xem chi tiết
- **Mục đích:** Giúp HR quản lý hồ sơ nhân viên tập trung — tìm nhanh,
  cập nhật thông tin và nắm trạng thái từng người trong một màn hình

## 2. Đối tượng & Trải nghiệm (Target & UX)
- **Người dùng chính:** HR Manager, Admin hệ thống
- **Hành động chính:** Tìm kiếm nhân viên theo tên/phòng ban, lọc theo trạng thái
  (đang làm / nghỉ việc), click vào hàng để xem chi tiết, bấm "Thêm nhân viên"
- **Cảm xúc mang lại:** Gọn gàng, dữ liệu dễ scan, thao tác nhanh

## 3. Đặc tả Thiết kế (Design Specs)
- **Phong cách UI:** Vercel-inspired dark theme — bảng dữ liệu tối giản,
  hàng phân cách nhẹ bằng `border-zinc-800`
- **Quy tắc hiển thị:**
  - Thanh công cụ trên cùng: ô tìm kiếm bên trái, dropdown lọc phòng ban,
    nút "Thêm nhân viên" bên phải
  - Danh sách dạng Table: Avatar + Họ tên, Phòng ban, Chức vụ,
    Ngày vào làm, Trạng thái, Hành động
  - Trạng thái "Đang làm": badge `text-emerald-400 bg-emerald-400/10`
  - Trạng thái "Nghỉ việc": badge `text-red-400 bg-red-400/10`
  - Hover hàng: `hover:bg-zinc-800/50`
  - Pagination ở dưới cùng
- **Màu sắc:** Dark theme Vercel chuẩn

## 4. Mock Data
- **Nhân viên 1:** Nguyễn Văn An — Kỹ thuật — Senior Developer — 01/03/2022 — Đang làm
  Avatar: `https://i.pravatar.cc/40?img=1`
- **Nhân viên 2:** Trần Thị Bình — Marketing — Content Manager — 15/06/2021 — Đang làm
  Avatar: `https://i.pravatar.cc/40?img=2`
- **Nhân viên 3:** Lê Minh Châu — Kế toán — Kế toán viên — 20/01/2023 — Đang làm
  Avatar: `https://i.pravatar.cc/40?img=3`
- **Nhân viên 4:** Phạm Quốc Dũng — Kỹ thuật — Junior Developer — 10/09/2023 — Đang làm
  Avatar: `https://i.pravatar.cc/40?img=4`
- **Nhân viên 5:** Hoàng Thị Em — Nhân sự — HR Executive — 05/04/2020 — Nghỉ việc
  Avatar: `https://i.pravatar.cc/40?img=5`
- **Tổng:** 128 nhân viên — hiển thị 10 / trang