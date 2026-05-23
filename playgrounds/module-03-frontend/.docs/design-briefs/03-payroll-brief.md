# ĐẶC TẢ THIẾT KẾ: TÍNH NĂNG QUẢN LÝ BẢNG LƯƠNG (PAYROLL DESIGN BRIEF)

Tài liệu đặc tả kỹ thuật giao diện dành cho máy đọc (Machine-to-Machine Spec). Chứa các tham số Layout, Component Specs, Color Constraints và Mock Data chuẩn hóa dưới dạng lớp CSS Tailwind, được thiết kế theo phong cách tối giản **Vercel Dark Theme**.

---

## 1. HỆ THỐNG LƯỚI & BỐ CỤC (LAYOUT SYSTEM)

| Tên cấu trúc | Loại phân hệ | Cú pháp lớp Tailwind (CSS Classes) | Mô tả vai trò |
| :--- | :--- | :--- | :--- |
| **Viewport Root** | Container chính | `w-full min-h-screen bg-black text-zinc-100 flex flex-col font-sans selection:bg-zinc-800` | Thiết lập nền tối đen sâu, màu chữ xám sáng và font không chân mặc định. |
| **Master Container** | Khung giới hạn nội dung | `max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 flex flex-col gap-6` | Giới hạn chiều ngang hiển thị của trang chính, căn giữa và điều chỉnh padding thích ứng đa màn hình. |
| **Stats Grid Section** | Khối số liệu tổng hợp | `grid grid-cols-1 sm:grid-cols-3 gap-4 w-full` | Hiển thị 3 thẻ ngang cân đối (Tổng quỹ lương tháng, Đã duyệt, Chờ duyệt). |
| **Toolbar Section** | Khung chứa bộ lọc | `flex flex-col lg:flex-row gap-4 items-stretch lg:items-center justify-between w-full pb-4 border-b border-zinc-800` | Bộ lọc kết hợp duyệt lương và xuất Excel. Dàn ngang thích ứng trên màn hình lớn. |
| **Table Wrapper** | Khung bọc bảng dữ liệu | `w-full overflow-x-auto rounded-lg border border-zinc-800 bg-zinc-950/50 backdrop-blur-sm` | Hỗ trợ cuộn ngang trên điện thoại, tạo bo góc mịn màng và nền tối mờ có viền zinc. |
| **Dialog Overlay** | Khung modal bọc form chi tiết | `fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm` | Phông che nền mờ khi mở xem chi tiết và duyệt bảng lương nhân viên. |

---

## 2. ĐẶC TẢ COMPONENT (COMPONENT SPECS)

Tất cả các Dumb Component dưới đây bắt buộc sử dụng CSS Tailwind chuẩn để vẽ giao diện:

### A. Component nghiệp vụ (Feature Components)

*   **`PayrollHeader` [DUMB]**
    *   **Box Style:** `w-full flex flex-col gap-1.5`
    *   **Typography:** Tiêu đề chính `text-2xl font-bold tracking-tight text-white`, mô tả phụ `text-sm text-zinc-400`
    *   **Trạng thái tương tác:** Static.

*   **`PayrollStatsSummary` [DUMB]**
    *   **Box Style:** `w-full flex flex-col sm:flex-row gap-4`
    *   **Typography:** Không áp dụng trực tiếp.
    *   **Trạng thái tương tác:** Static.

*   **`PayrollToolbar` [DUMB]**
    *   **Box Style:** `w-full flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4`
    *   **Typography:** Không áp dụng trực tiếp.
    *   **Trạng thái tương tác:** Static.

*   **`PayrollTable` [DUMB]**
    *   **Box Style:** `min-w-full divide-y divide-zinc-800`
    *   **Typography:** Cột số liệu tiền bạc bắt buộc `font-mono text-sm tracking-tight text-white font-medium`
    *   **Trạng thái tương tác:** Khung xương tải dữ liệu `animate-pulse` khi tải trang.

*   **`PayrollTableRow` [DUMB]**
    *   **Box Style:** `transition-colors duration-150 border-b border-zinc-800`
    *   **Typography:** Các khoản tiền hiển thị bằng font đơn cự `font-mono text-sm text-zinc-300`
    *   **Trạng thái tương tác:** Hover hàng `hover:bg-zinc-900/50 cursor-pointer`.

*   **`PayrollStatusBadge` [DUMB]**
    *   **Box Style & Variants:**
        *   *Đã duyệt:* `inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-400/10 text-emerald-400 border border-emerald-500/20`
        *   *Chờ duyệt:* `inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-yellow-400/10 text-yellow-400 border border-yellow-500/20`
    *   **Trạng thái tương tác:** Static.

*   **`PayrollDetailForm` [DUMB]**
    *   **Box Style:** `flex flex-col gap-5 w-full`
    *   **Typography:** Tiêu đề cột chi tiết `text-xs font-semibold text-zinc-400 uppercase tracking-wider`, số liệu thực lãnh nổi bật `text-xl font-bold font-mono text-emerald-400`
    *   **Trạng thái tương tác:** Các ô input điều chỉnh lương khi hover `hover:border-zinc-600 transition-colors`.

### B. Component dùng chung (Shared UI Components)

*   **`Breadcrumbs` [DUMB]**
    *   **Box Style:** `flex items-center gap-2 text-xs text-zinc-500`
    *   **Typography:** Item thường `font-medium hover:text-zinc-300`, Item hiện hành `text-zinc-400 font-medium`
    *   **Trạng thái tương tác:** Chuyển đổi màu chữ mượt `transition-colors duration-150`.

*   **`StatsCard` [DUMB]**
    *   **Box Style & Variants:**
        *   *Default (Tổng lương):* `rounded-lg border border-zinc-800 bg-zinc-950 p-4 flex flex-col gap-1 w-full`
        *   *Emerald (Đã duyệt):* `rounded-lg border border-emerald-500/20 bg-zinc-950 p-4 flex flex-col gap-1 w-full shadow-[0_0_15px_rgba(16,185,129,0.05)]`
        *   *Yellow (Chờ duyệt):* `rounded-lg border border-yellow-500/20 bg-zinc-950 p-4 flex flex-col gap-1 w-full shadow-[0_0_15px_rgba(245,158,11,0.05)]`
    *   **Typography:** Con số `text-2xl font-bold font-mono tracking-tight text-white`, tiêu đề phụ `text-xs font-medium text-zinc-400`
    *   **Trạng thái tương tác:** Static.

*   **`MonthPicker` [DUMB]**
    *   **Box Style:** `flex items-center gap-1 bg-zinc-900 border border-zinc-800 rounded-md p-1`
    *   **Typography:** Chữ hiển thị tháng `text-sm font-mono font-medium text-zinc-200 px-3`
    *   **Trạng thái tương tác:** Nút chuyển tháng nhanh `p-1 rounded hover:bg-zinc-800 transition-colors`.

*   **`SelectFilter` [DUMB]**
    *   **Box Style:** `rounded-md bg-zinc-900 border border-zinc-800 py-1.5 px-3 focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 text-sm text-zinc-200 cursor-pointer`
    *   **Typography:** `text-sm font-medium`
    *   **Trạng thái tương tác:** Hover `hover:border-zinc-700`.

*   **`SearchInput` [DUMB]**
    *   **Box Style:** `relative w-full sm:max-w-xs rounded-md bg-zinc-900 border border-zinc-800 focus-within:border-zinc-500 focus-within:ring-1 focus-within:ring-zinc-500 transition-all duration-150`
    *   **Typography:** Chữ gõ `text-sm text-zinc-100 placeholder-zinc-500 py-1.5 pl-9 pr-3 w-full`
    *   **Trạng thái tương tác:** Focus thay đổi border màu sáng.

*   **`Button` [DUMB]**
    *   **Box Style & Variants:**
        *   *Primary (Duyệt lương):* `bg-white hover:bg-zinc-200 text-black font-semibold rounded-md px-4 py-1.5 text-sm transition-colors duration-150 flex items-center gap-2`
        *   *Secondary (Xuất Excel):* `bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-zinc-200 font-medium rounded-md px-4 py-1.5 text-sm transition-colors duration-150 flex items-center gap-2`
    *   **Trạng thái tương tác:** Hover đổi màu nền, Disabled `opacity-50 pointer-events-none`.

*   **`TableHeader` [DUMB]**
    *   **Box Style:** `bg-zinc-950/70 border-b border-zinc-800 text-left`
    *   **Typography:** Tiêu đề cột `text-xs font-semibold tracking-wider text-zinc-400 uppercase py-3.5 px-4`
    *   **Trạng thái tương tác:** Static.

*   **`TableBody` [DUMB]**
    *   **Box Style:** `divide-y divide-zinc-800/60 bg-transparent`
    *   **Typography:** Không áp dụng.
    *   **Trạng thái tương tác:** Static.

*   **`Avatar` [DUMB]**
    *   **Box Style:** `h-8 w-8 rounded-full bg-zinc-800 border border-zinc-700/50 flex-shrink-0 overflow-hidden`
    *   **Typography:** Fallback chữ `text-xs font-bold text-zinc-300 flex items-center justify center h-full w-full`
    *   **Trạng thái tương tác:** Static.

*   **`Dialog` [DUMB]**
    *   **Box Style:** `fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm` (Overlay), `relative w-full max-w-xl rounded-xl border border-zinc-800 bg-zinc-950 p-6 shadow-2xl animate-in fade-in zoom-in-95 duration-200` (Main Panel)
    *   **Typography:** Tiêu đề Dialog `text-lg font-bold text-white tracking-tight`
    *   **Trạng thái tương tác:** Click overlay đóng, Form validation hiển thị thông báo đỏ.

---

## 3. RÀNG BUỘC MÀU SẮC (COLOR CONSTRAINTS)

Bắt buộc ánh xạ toàn bộ mã màu sử dụng theo thang màu chuẩn **Tailwind CSS Zinc** để giữ cấu trúc Dark Theme sâu:

| Màu sắc thiết kế | Tương đương trong Tailwind CSS (Dark Mode) | Ứng dụng cụ thể |
| :--- | :--- | :--- |
| **Nền ứng dụng gốc** | `bg-black` | Toàn bộ màn hình phía sau. |
| **Nền Panel/Card/Table** | `bg-zinc-950` | Bề mặt bảng, các thẻ thống kê và Modal panel. |
| **Nền Input/Form** | `bg-zinc-900` | Ô nhập dữ liệu, dropdown select và các thẻ inline. |
| **Nền Hover của Hàng** | `hover:bg-zinc-900/50` | Hàng dữ liệu Table Row khi trỏ chuột qua. |
| **Đường viền chính** | `border-zinc-800` | Đường phân cách nhẹ giữa các hàng, viền ngoài Table/Card. |
| **Đường viền phụ/Hover viền**| `border-zinc-700` | Viền của Avatar, viền Input khi hover, viền của button. |
| **Đường viền Focus** | `border-zinc-500` / `ring-zinc-500` | Thay đổi khi nhấn chuột vào ô Input/Select. |
| **Màu chữ chính** | `text-white` | Các tiêu đề lớn, họ tên nhân viên, nhãn chính, số tiền tổng. |
| **Màu chữ phụ** | `text-zinc-400` | Mô tả phụ, tiêu đề bảng cột, thông số trang. |
| **Màu nhấn thành công** | `text-emerald-400` / `bg-emerald-400/10` / `border-emerald-500/20` | Trạng thái "Đã duyệt" của bản ghi lương, thẻ quỹ lương đã duyệt. |
| **Màu nhấn cảnh báo/Chờ** | `text-yellow-400` / `bg-yellow-400/10` / `border-yellow-500/20` | Trạng thái "Chờ duyệt" của bản ghi lương, thẻ chờ duyệt lương. |
| **Màu nhấn cảnh báo/Xóa** | `text-red-400` / `bg-red-400/10` / `border-red-500/20` | Phần khấu trừ bảo hiểm/thuế trên bảng, nút từ chối. |

---

## 4. MOCK DATA (DỮ LIỆU HIỂN THỊ)

Văn bản và liên kết đại diện chuẩn hóa tiếng Việt để vẽ mockup chính xác:

### A. Cấu hình Tháng (Month Selection)
*   `07/2025`

### B. Chỉ số thống kê (Stats Summary)
*   **Tổng quỹ lương:** `1.250.000.000đ`
*   **Đã duyệt:** `120` đã duyệt
*   **Chờ duyệt:** `8` chờ duyệt

### C. Dữ liệu danh sách bảng lương (Payroll Records)

#### Bản ghi 1:
*   **Họ và tên:** `Nguyễn Văn An`
*   **Phòng ban:** `Kỹ thuật`
*   **Lương cơ bản:** `25.000.000đ`
*   **Phụ cấp:** `3.000.000đ`
*   **Khấu trừ:** `2.500.000đ`
*   **Thực lãnh:** `25.500.000đ`
*   **Trạng thái:** `Đã duyệt`
*   **Avatar URL:** `https://i.pravatar.cc/40?img=1`

#### Bản ghi 2:
*   **Họ và tên:** `Trần Thị Bình`
*   **Phòng ban:** `Marketing`
*   **Lương cơ bản:** `18.000.000đ`
*   **Phụ cấp:** `2.000.000đ`
*   **Khấu trừ:** `1.800.000đ`
*   **Thực lãnh:** `18.200.000đ`
*   **Trạng thái:** `Đã duyệt`
*   **Avatar URL:** `https://i.pravatar.cc/40?img=2`

#### Bản ghi 3:
*   **Họ và tên:** `Lê Minh Châu`
*   **Phòng ban:** `Kế toán`
*   **Lương cơ bản:** `20.000.000đ`
*   **Phụ cấp:** `2.500.000đ`
*   **Khấu trừ:** `2.000.000đ`
*   **Thực lãnh:** `20.500.000đ`
*   **Trạng thái:** `Chờ duyệt`
*   **Avatar URL:** `https://i.pravatar.cc/40?img=3`
