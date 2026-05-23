# ĐẶC TẢ THIẾT KẾ: BỐ CỤC TOÀN CỤC (MASTER LAYOUT BRIEF)

Bản đặc tả thiết kế kỹ thuật UI/UX chuẩn hóa bằng class Tailwind CSS phục vụ cho việc tự động hóa xây dựng giao diện hệ thống HRM (Human Resource Management).

---

## 1. HỆ THỐNG LƯỚI & BỐ CỤC (LAYOUT SYSTEM)

- **Root Structure (Khung gốc):**
  - Khung bao ngoài cùng: `relative min-h-screen w-full bg-zinc-950 text-zinc-100 overflow-hidden flex`
- **Sidebar Grid/Flex (Phân chia phân khu):**
  - Left Sidebar: `w-64 fixed left-0 top-0 bottom-0 z-40 border-r border-zinc-800 bg-zinc-900/50 backdrop-blur-md flex flex-col justify-between`
  - Right Main Content: `flex-1 pl-64 min-h-screen flex flex-col`
- **Sticky Header (Thanh đầu trang):**
  - Khung Header: `sticky top-0 z-30 h-16 w-full border-b border-zinc-800/80 bg-zinc-950/80 backdrop-blur-md px-6 flex items-center justify-between`
- **Content Canvas (Phân vùng nội dung):**
  - Canvas chứa page: `flex-grow p-6 md:p-8 overflow-y-auto max-w-7xl mx-auto w-full`
- **Khoảng cách chuẩn (Spacing):**
  - Sidebar padding dọc: `py-6 px-4`
  - Sidebar khoảng cách các item: `space-y-1.5`
  - Header gap các action: `gap-4`

---

## 2. ĐẶC TẢ COMPONENT (COMPONENT SPECS - DUMB)

### 2.1. `SidebarContainer`
- **Box Style:** `w-64 min-h-screen border-r border-zinc-800 bg-zinc-900 flex flex-col justify-between select-none transition-all duration-300 ease-in-out` (khi thu gọn: `w-20`)
- **Interactive:** N/A (Chỉ là khung chứa).

### 2.2. `SystemLogo`
- **Box Style:** `flex items-center gap-3 px-3 py-2 cursor-pointer`
- **Typography:** `text-lg font-bold tracking-wider bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent`
- **Interactive:** `hover:opacity-90 active:scale-95 transition-all`

### 2.3. `SidebarNavigation`
- **Box Style:** `flex-1 mt-8 space-y-1`
- **Interactive:** N/A (Khung chứa danh sách).

### 2.4. `SidebarNavItem`
- **Box Style (Default):** `flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer text-zinc-400 transition-all duration-200`
- **Box Style (Active):** `bg-indigo-600/10 border-l-2 border-indigo-500 text-indigo-400 font-medium`
- **Typography:** `text-sm font-medium`
- **Interactive:** `hover:bg-zinc-800/60 hover:text-zinc-100 active:scale-98`

### 2.5. `SidebarFooter`
- **Box Style:** `border-t border-zinc-800 p-4 space-y-4`
- **Interactive:** N/A.

### 2.6. `UserSessionInfo`
- **Box Style:** `flex items-center gap-3 p-2 rounded-xl bg-zinc-900/30`
- **Avatar:** `w-10 h-10 rounded-full border border-zinc-700 object-cover`
- **Typography (Name):** `text-sm font-semibold text-zinc-100 truncate`
- **Typography (Role):** `text-xs text-zinc-500`

### 2.7. `LogoutButton`
- **Box Style:** `w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl border border-zinc-800 text-rose-400 bg-rose-500/5 transition-all duration-200 cursor-pointer`
- **Typography:** `text-sm font-medium`
- **Interactive:** `hover:bg-rose-500/15 hover:border-rose-500/30 hover:text-rose-300 active:scale-95`

### 2.8. `MainContentArea`
- **Box Style:** `flex-1 flex flex-col bg-zinc-950 overflow-y-auto`

### 2.9. `BreadcrumbNavigation`
- **Box Style:** `flex items-center gap-2 select-none`
- **Typography (Parent):** `text-xs text-zinc-500 hover:text-zinc-300 cursor-pointer transition-colors`
- **Typography (Separator):** `text-xs text-zinc-700`
- **Typography (Active):** `text-xs font-semibold text-zinc-300`

### 2.10. `HeaderActionGroup`
- **Box Style:** `flex items-center gap-3`

### 2.11. `NotificationTrigger`
- **Box Style:** `relative p-2 rounded-xl border border-zinc-800 bg-zinc-900/40 cursor-pointer text-zinc-400 transition-all duration-200`
- **Badge (Unread):** `absolute top-1 right-1 w-2.5 h-2.5 rounded-full bg-rose-500 ring-2 ring-zinc-950 animate-pulse`
- **Interactive:** `hover:text-zinc-100 hover:border-zinc-700 hover:bg-zinc-900 active:scale-90`

### 2.12. `NotificationPopover`
- **Box Style:** `absolute right-0 mt-2 w-80 rounded-2xl border border-zinc-800 bg-zinc-900/95 shadow-2xl backdrop-blur-lg overflow-hidden z-50 flex flex-col`
- **Header:** `px-4 py-3 border-b border-zinc-800 flex justify-between items-center`
- **Footer:** `px-4 py-2 bg-zinc-950/40 text-center border-t border-zinc-800`
- **Typography:** `text-sm font-bold text-zinc-100`

### 2.13. `NotificationItem`
- **Box Style (Default):** `p-4 border-b border-zinc-800/50 hover:bg-zinc-800/40 transition-all duration-200 cursor-pointer flex gap-3`
- **Box Style (Unread):** `bg-indigo-600/5`
- **Typography (Title):** `text-xs font-semibold text-zinc-200`
- **Typography (Desc):** `text-xs text-zinc-400 mt-1`
- **Typography (Time):** `text-[10px] text-zinc-600 mt-1.5`

### 2.14. `UserProfileBadge`
- **Box Style:** `flex items-center gap-2 p-1 pr-3 rounded-full border border-zinc-800 bg-zinc-900/40 hover:border-zinc-700 transition-colors cursor-pointer`
- **Avatar:** `w-8 h-8 rounded-full border border-zinc-700 object-cover`
- **Typography:** `text-xs font-semibold text-zinc-300`
- **Interactive:** `active:scale-95`

### 2.15. `ContentCanvas`
- **Box Style:** `w-full h-full bg-zinc-950`

---

## 3. RÀNG BUỘC MÀU SẮC (COLOR CONSTRAINTS)

Để giữ giao diện tối, sang trọng và chuẩn Premium Dark Mode, bắt buộc sử dụng đúng bảng màu Tailwind dưới đây:

- **Bảng màu nền (Background Colors):**
  - Nền hệ thống chính (Dark Base): `bg-zinc-950`
  - Nền Sidebar / Container phụ (Dark Elevated): `bg-zinc-900`
  - Nền Hover / Panel / Popover (Dark Interactive): `bg-zinc-800`
  - Nền Badge / Nền mờ (Transparent Dark): `bg-zinc-950/80` hoặc `bg-zinc-900/50`
- **Bảng màu viền (Border Colors):**
  - Viền cấu trúc chính: `border-zinc-800`
  - Viền mờ hoặc vách ngăn phụ: `border-zinc-800/50`
  - Viền Active / Highlight: `border-indigo-500` hoặc `border-zinc-700`
- **Bảng màu văn bản (Text Colors):**
  - Chữ chính (High Contrast): `text-zinc-100`
  - Chữ mô tả / Thứ chính (Medium Contrast): `text-zinc-400`
  - Chữ vô hiệu hóa / Time / Phụ (Low Contrast): `text-zinc-600`
- **Màu nhấn thương hiệu (Brand & Accent Colors):**
  - Trạng thái Active / Điểm nhấn chính: `text-indigo-400`, `bg-indigo-600/10`
  - Trạng thái Cảnh báo / Nguy hiểm / Logout: `text-rose-400`, `bg-rose-500/5`, `border-rose-500/30`
  - Trạng thái Thành công / Hoàn thành: `text-emerald-400`, `bg-emerald-500/5`

---

## 4. MOCK DATA (DỮ LIỆU HIỂN THỊ)

### 4.1. Thông tin cấu hình Sidebar (`NavigationItem[]`)
```json
[
  {
    "id": "dashboard",
    "label": "Tổng quan",
    "path": "/dashboard",
    "icon": "dashboard-icon"
  },
  {
    "id": "employees",
    "label": "Nhân viên",
    "path": "/employees",
    "icon": "users-icon",
    "badgeCount": 142
  },
  {
    "id": "attendance",
    "label": "Chấm công",
    "path": "/attendance",
    "icon": "calendar-icon"
  },
  {
    "id": "payroll",
    "label": "Bảng lương",
    "path": "/payroll",
    "icon": "credit-card-icon"
  },
  {
    "id": "approvals",
    "label": "Phê duyệt đơn",
    "path": "/approvals",
    "icon": "check-square-icon",
    "badgeCount": 5
  },
  {
    "id": "settings",
    "label": "Cài đặt",
    "path": "/settings",
    "icon": "settings-icon"
  }
]
```

### 4.2. Dữ liệu tài khoản người dùng đăng nhập (`UserProfile`)
```json
{
  "id": "emp_090123",
  "email": "hoang.nguyen@company.hrm",
  "fullName": "Nguyễn Lâm Hoàng",
  "avatarUrl": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
  "role": "HR_MANAGER",
  "department": "Phòng Nhân Sự"
}
```

### 4.3. Dữ liệu thông báo mẫu (`AppNotification[]`)
```json
[
  {
    "id": "notif_001",
    "title": "Đơn xin nghỉ phép cần duyệt",
    "description": "Lê Văn Nam (Đội Phát Triển) đã nộp đơn xin nghỉ phép 3 ngày từ 25/05.",
    "createdAt": "2026-05-23T09:15:00Z",
    "isRead": false,
    "type": "INFO",
    "actionUrl": "/approvals/leave-001"
  },
  {
    "id": "notif_002",
    "title": "Tính lương tháng 5 hoàn tất",
    "description": "Bảng lương tháng 5 đã được phê duyệt thành công bởi ban giám đốc.",
    "createdAt": "2026-05-22T17:30:00Z",
    "isRead": true,
    "type": "SUCCESS",
    "actionUrl": "/payroll/may-2026"
  },
  {
    "id": "notif_003",
    "title": "Cảnh báo thiết bị chấm công",
    "description": "Thiết bị chấm công tại Cổng A mất kết nối hơn 15 phút.",
    "createdAt": "2026-05-23T08:45:00Z",
    "isRead": false,
    "type": "WARNING",
    "actionUrl": "/attendance/devices"
  }
]
```

### 4.4. Dữ liệu Breadcrumb mẫu (`BreadcrumbItem[]`)
- **Trang Nhân Viên:**
  ```json
  [
    { "label": "Tổng quan", "path": "/dashboard" },
    { "label": "Nhân viên" }
  ]
  ```
- **Trang Chi Tiết Đơn Phê Duyệt:**
  ```json
  [
    { "label": "Tổng quan", "path": "/dashboard" },
    { "label": "Phê duyệt đơn", "path": "/approvals" },
    { "label": "Chi tiết đơn nghỉ phép" }
  ]
  ```
