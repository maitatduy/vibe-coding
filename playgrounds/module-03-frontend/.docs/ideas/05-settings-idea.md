# Ý TƯỞNG: TRANG CÀI ĐẶT (System Settings)

## 1. Thông tin chung (Meta Info)
- **Dự án:** HRM System
- **Tính năng:** Cấu hình hệ thống — phòng ban, chức vụ, quy định chấm công,
  phân quyền người dùng
- **Mục đích:** Admin thiết lập các thông số vận hành của hệ thống
  mà không cần can thiệp vào code

## 2. Đối tượng & Trải nghiệm (Target & UX)
- **Người dùng chính:** Admin hệ thống
- **Hành động chính:** Thêm/sửa/xóa phòng ban, chức vụ, cấu hình giờ làm việc,
  phân quyền tài khoản
- **Cảm xúc mang lại:** Kiểm soát hoàn toàn, thao tác rõ ràng, ít rủi ro nhầm lẫn

## 3. Đặc tả Thiết kế (Design Specs)
- **Phong cách UI:** Vercel-inspired dark theme
- **Quy tắc hiển thị:**
  - Layout 2 cột: Menu danh mục cài đặt bên trái (sticky),
    nội dung cài đặt bên phải
  - Mỗi nhóm cài đặt là một Section có tiêu đề rõ và đường phân cách
  - Form input: `bg-zinc-900 border border-zinc-700 rounded-lg`
    focus: `focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500`
  - Nút lưu: `bg-blue-600 hover:bg-blue-500`
  - Nút hủy / xóa nguy hiểm: `bg-zinc-800` / `text-red-400 hover:bg-red-400/10`
  - Toggle switch cho các cài đặt bật/tắt
- **Màu sắc:** Dark theme Vercel chuẩn

## 4. Mock Data
- **Phòng ban:** Kỹ thuật (32 người), Marketing (18 người),
  Kế toán (12 người), Nhân sự (8 người), Ban giám đốc (4 người)
- **Giờ làm việc:** Bắt đầu 08:00 — Kết thúc 17:30 — Nghỉ trưa 12:00–13:00
- **Quy định đi trễ:** Sau 08:15 tính là đi trễ
- **Tài khoản:** Admin — hr@company.com — Quyền: Toàn quyền