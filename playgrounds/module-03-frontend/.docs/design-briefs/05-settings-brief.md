# ĐẶC TẢ THIẾT KẾ: TÍNH NĂNG CÀI ĐẶT HỆ THỐNG (SETTINGS DESIGN BRIEF)

Tài liệu đặc tả kỹ thuật giao diện dành cho máy đọc (Machine-to-Machine Spec). Chứa các tham số Layout, Component Specs, Color Constraints và Mock Data chuẩn hóa dưới dạng lớp CSS Tailwind, được thiết kế theo phong cách tối giản **Vercel Dark Theme**.

---

## 1. HỆ THỐNG LƯỚI & BỐ CỤC (LAYOUT SYSTEM)

| Tên cấu trúc | Loại phân hệ | Cú pháp lớp Tailwind (CSS Classes) | Mô tả vai trò |
| :--- | :--- | :--- | :--- |
| **Viewport Root** | Container chính | `w-full min-h-screen bg-black text-zinc-100 flex flex-col font-sans selection:bg-zinc-800` | Thiết lập nền tối đen sâu, màu chữ xám sáng và font không chân mặc định. |
| **Master Container** | Khung giới hạn nội dung | `max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 flex flex-col gap-6` | Giới hạn chiều ngang hiển thị của trang chính, căn giữa và điều chỉnh padding thích ứng đa màn hình. |
| **Settings Layout** | Lưới chia cột cài đặt | `grid grid-cols-1 md:grid-cols-4 gap-8 items-start w-full` | Chia Layout: cột 1 (md:col-span-1) làm Sidebar, cột 2 (md:col-span-3) làm Vùng cài đặt nội dung chính. |
| **Sticky Sidebar Wrapper**| Khung dán cố định menu | `md:sticky md:top-8 flex flex-col gap-1 w-full` | Giúp Sidebar Nav dán cố định bên trái khi cuộn xem cài đặt ở bên phải. |
| **Content Area Group** | Vùng chứa nội dung | `flex flex-col gap-10 w-full` | Chứa các Section cài đặt xếp chồng dọc nhau với khoảng cách gap rộng. |
| **Section Content Box** | Hộp chứa từng phân hệ | `rounded-xl border border-zinc-800 bg-zinc-950 p-6 flex flex-col gap-6 w-full` | Bo khung cài đặt phòng ban, giờ giấc chấm công, tài khoản phân quyền riêng biệt. |

---

## 2. ĐẶC TẢ COMPONENT (COMPONENT SPECS)

Tất cả các Dumb Component dưới đây bắt buộc sử dụng CSS Tailwind chuẩn để vẽ giao diện:

### A. Component nghiệp vụ (Feature Components)

*   **`SettingsHeader` [DUMB]**
    *   **Box Style:** `w-full flex flex-col gap-1.5`
    *   **Typography:** Tiêu đề chính `text-2xl font-bold tracking-tight text-white`, mô tả phụ `text-sm text-zinc-400`
    *   **Trạng thái tương tác:** Static.

*   **`SettingsLayout` [DUMB]**
    *   **Box Style:** `w-full`
    *   **Typography:** Không áp dụng trực tiếp.
    *   **Trạng thái tương tác:** Static.

*   **`SettingsSidebarNav` [DUMB]**
    *   **Box Style:** `flex flex-row md:flex-col gap-1 overflow-x-auto pb-2 md:pb-0`
    *   **Typography:** Không áp dụng trực tiếp.
    *   **Trạng thái tương tác:** Static.

*   **`SettingsContentArea` [DUMB]**
    *   **Box Style:** `w-full`
    *   **Typography:** Không áp dụng trực tiếp.
    *   **Trạng thái tương tác:** Static.

*   **`DepartmentList` [DUMB]**
    *   **Box Style:** `divide-y divide-zinc-800 border border-zinc-800 rounded-lg overflow-hidden bg-zinc-900/20`
    *   **Typography:** Tên phòng ban `text-sm font-medium text-white`, số lượng thành viên `text-xs text-zinc-400 font-mono`
    *   **Trạng thái tương tác:** Hover hàng danh sách `hover:bg-zinc-900/40 transition-colors`.

*   **`DepartmentForm` [DUMB]**
    *   **Box Style:** `flex flex-col gap-4 w-full`
    *   **Typography:** Không áp dụng trực tiếp.
    *   **Trạng thái tương tác:** Form focus viền sáng `focus:border-zinc-500`.

*   **`WorkTimeForm` [DUMB]**
    *   **Box Style:** `grid grid-cols-1 sm:grid-cols-2 gap-4 w-full`
    *   **Typography:** Nhãn cài đặt `text-xs font-semibold text-zinc-400 uppercase tracking-wider`
    *   **Trạng thái tương tác:** Ô input điền giờ `bg-zinc-900 border border-zinc-700 rounded-lg py-2 px-3 focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 text-sm text-white w-full transition-all outline-none`.

*   **`PermissionTable` [DUMB]**
    *   **Box Style:** `w-full border border-zinc-800 rounded-lg overflow-hidden`
    *   **Typography:** Email tài khoản `text-sm font-medium text-white`, Quyền hạn `font-mono text-xs text-zinc-300`
    *   **Trạng thái tương tác:** Hàng table khi hover `hover:bg-zinc-900/30 transition-colors`.

*   **`PermissionForm` [DUMB]**
    *   **Box Style:** `flex flex-col gap-4 w-full`
    *   **Typography:** Không áp dụng trực tiếp.
    *   **Trạng thái tương tác:** Static.

### B. Component dùng chung (Shared UI Components)

*   **`Breadcrumbs` [DUMB]**
    *   **Box Style:** `flex items-center gap-2 text-xs text-zinc-500`
    *   **Typography:** Item thường `font-medium hover:text-zinc-300`, Item hiện hành `text-zinc-400 font-medium`
    *   **Trạng thái tương tác:** Chuyển đổi màu chữ mượt `transition-colors duration-150`.

*   **`SidebarNavItem` [DUMB]**
    *   **Box Style:** `flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-150 cursor-pointer w-full text-left whitespace-nowrap`
    *   **Typography:** Chữ hiển thị menu `text-sm font-medium`
    *   **Trạng thái tương tác:**
        *   *Active state:* `bg-zinc-900 text-white`
        *   *Normal state:* `text-zinc-400 hover:text-white hover:bg-zinc-900/50`.

*   **`ToggleSwitch` [DUMB]**
    *   **Box Style:** `relative inline-flex h-5 w-9 items-center rounded-full transition-colors duration-200 cursor-pointer`
        *   *Active (ON):* `bg-blue-600`
        *   *Inactive (OFF):* `bg-zinc-800 border border-zinc-700`
        *   *Thumb (Nút tròn):* `absolute h-3.5 w-3.5 rounded-full bg-white transition-transform duration-200` (ON: `translate-x-4.5`, OFF: `translate-x-0.5`)
    *   **Trạng thái tương tác:** Click gạt chuyển đổi trạng thái.

*   **`Dialog` [DUMB]**
    *   **Box Style:** `fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm` (Overlay), `relative w-full max-w-md rounded-xl border border-zinc-800 bg-zinc-950 p-6 shadow-2xl animate-in fade-in zoom-in-95 duration-200` (Main Panel)
    *   **Typography:** Tiêu đề Dialog `text-lg font-bold text-white tracking-tight`
    *   **Trạng thái tương tác:** ESC để đóng.

*   **`Button` [DUMB]**
    *   **Box Style & Variants:**
        *   *Primary (Lưu cấu hình):* `bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-md px-4 py-2 text-sm transition-colors duration-150 shadow-sm flex items-center gap-2`
        *   *Secondary (Hủy bỏ/Phụ):* `bg-zinc-800 hover:bg-zinc-700 text-zinc-300 font-semibold rounded-md px-4 py-2 text-sm transition-colors duration-150 border border-zinc-700/60`
        *   *Danger (Xóa nguy hiểm):* `text-red-400 hover:bg-red-400/10 font-semibold rounded-md px-3 py-1.5 text-xs transition-colors duration-150`
    *   **Trạng thái tương tác:** Hover đổi màu sắc mượt mà, Disabled `opacity-50 pointer-events-none`.

---

## 3. RÀNG BUỘC MÀU SẮC (COLOR CONSTRAINTS)

Bắt buộc ánh xạ toàn bộ mã màu sử dụng theo thang màu chuẩn **Tailwind CSS Zinc** để giữ cấu trúc Dark Theme sâu:

| Màu sắc thiết kế | Tương đương trong Tailwind CSS (Dark Mode) | Ứng dụng cụ thể |
| :--- | :--- | :--- |
| **Nền ứng dụng gốc** | `bg-black` | Toàn bộ màn hình phía sau. |
| **Nền Panel/Card/Section** | `bg-zinc-950` | Vùng cài đặt nội dung chính, Modal panel. |
| **Nền Input/Form/Tab** | `bg-zinc-900` | Ô nhập dữ liệu, dropdown select, khung của Sidebar Active. |
| **Nền Hover của Hàng** | `hover:bg-zinc-900/50` / `hover:bg-zinc-900/30` | Hàng danh sách phòng ban, dòng tài khoản. |
| **Đường viền chính** | `border-zinc-800` | Đường phân cách nhẹ giữa các phần cài đặt, viền Section. |
| **Đường viền phụ/Hover viền**| `border-zinc-700` | Viền của Input khi hoặt động, viền button phụ. |
| **Đường viền Focus** | `border-zinc-500` / `ring-zinc-500` | Thay đổi khi nhấn chuột vào ô Input/Select. |
| **Màu chữ chính** | `text-white` | Các tiêu đề phân hệ lớn, nhãn cài đặt active, tên phòng ban. |
| **Màu chữ phụ** | `text-zinc-400` | Mô tả phụ bên dưới tiêu đề section, nhãn trục, số lượng. |
| **Màu chữ mờ/Placeholder**| `text-zinc-500` | Dấu ngăn cách breadcrumb, placeholder text của ô điền. |
| **Màu lưu chính (Save/ON)** | `bg-blue-600` / `hover:bg-blue-500` | Nút "Lưu cài đặt", Toggle Switch khi ở trạng thái bật ON. |
| **Màu nhấn cảnh báo/Xóa** | `text-red-400` / `hover:bg-red-400/10` | Nút xóa phòng ban nguy hiểm, text báo lỗi form. |

---

## 4. MOCK DATA (DỮ LIỆU HIỂN THỊ)

Văn bản và liên kết đại diện chuẩn hóa tiếng Việt để vẽ mockup chính xác:

### A. Phân hệ Cài đặt Phòng ban (Departments & Roles)
*   **Phòng Kỹ thuật:** `32` nhân sự (Chức vụ trực thuộc: `Senior Developer`, `Junior Developer`, `Tech Lead`)
*   **Phòng Marketing:** `18` nhân sự (Chức vụ trực thuộc: `Content Manager`, `SEO Specialist`, `Designer`)
*   **Phòng Kế toán:** `12` nhân sự (Chức vụ trực thuộc: `Kế toán viên`, `Kế toán trưởng`)
*   **Phòng Nhân sự:** `8` nhân sự (Chức vụ trực thuộc: `HR Executive`, `HR Manager`)
*   **Ban giám đốc:** `4` nhân sự (Chức vụ trực thuộc: `Director`, `CEO`)

### B. Quy định Giờ giấc chấm công (Work Time Rules)
*   **Giờ bắt đầu làm việc:** `08:00`
*   **Giờ kết thúc làm việc:** `17:30`
*   **Giờ nghỉ trưa:** `12:00` → `13:00` (Nghỉ 1 tiếng)
*   **Quy định đi trễ:** Cho phép đi muộn trong vòng `15` phút (Sau `08:15` bắt đầu tính đi trễ)
*   **Bật quy tắc phạt đi trễ:** `ON` (Gạt Toggle Switch màu xanh dương)

### C. Tài khoản Phân quyền quản trị (Permissions)
*   **Tài khoản 1:**
    *   **Họ và tên:** `Công ty Admin`
    *   **Email:** `hr@company.com`
    *   **Quyền hạn:** `Toàn quyền` (SUPER_ADMIN)
    *   **Trạng thái:** `Hoạt động`
*   **Tài khoản 2:**
    *   **Họ và tên:** `Kế toán Trưởng`
    *   **Email:** `accounting@company.com`
    *   **Quyền hạn:** `Kế toán` (ACCOUNTANT)
    *   **Trạng thái:** `Hoạt động`
