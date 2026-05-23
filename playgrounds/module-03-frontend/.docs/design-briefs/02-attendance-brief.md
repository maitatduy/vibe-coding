# ĐẶC TẢ THIẾT KẾ: TÍNH NĂNG QUẢN LÝ CHẤM CÔNG (ATTENDANCE DESIGN BRIEF)

Tài liệu đặc tả kỹ thuật giao diện dành cho máy đọc (Machine-to-Machine Spec). Chứa các tham số Layout, Component Specs, Color Constraints và Mock Data chuẩn hóa dưới dạng lớp CSS Tailwind, được thiết kế theo phong cách tối giản **Vercel Dark Theme**.

---

## 1. HỆ THỐNG LƯỚI & BỐ CỤC (LAYOUT SYSTEM)

| Tên cấu trúc | Loại phân hệ | Cú pháp lớp Tailwind (CSS Classes) | Mô tả vai trò |
| :--- | :--- | :--- | :--- |
| **Viewport Root** | Container chính | `w-full min-h-screen bg-black text-zinc-100 flex flex-col font-sans selection:bg-zinc-800` | Thiết lập nền tối đen sâu, màu chữ xám sáng và font không chân mặc định. |
| **Master Container** | Khung giới hạn nội dung | `max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 flex flex-col gap-6` | Giới hạn chiều ngang hiển thị của trang chính, căn giữa và điều chỉnh padding thích ứng đa màn hình. |
| **Stats Grid Section** | Khối biểu đồ & số liệu | `grid grid-cols-1 lg:grid-cols-3 gap-6 w-full` | Tự động chia 1 cột trên mobile/tablet và 3 cột trên desktop (2 phần cho biểu đồ tuần, 1 phần cho thống kê số liệu ngày). |
| **Toolbar Section** | Khung chứa bộ lọc | `flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between w-full pb-4 border-b border-zinc-800` | Tự động xếp chồng trên mobile và dàn ngang trên màn hình lớn. Phân tách bằng đường viền zinc mỏng dưới chân. |
| **Table Wrapper** | Khung bọc bảng dữ liệu | `w-full overflow-x-auto rounded-lg border border-zinc-800 bg-zinc-950/50 backdrop-blur-sm` | Hỗ trợ cuộn ngang trên điện thoại, tạo bo góc mịn màng và nền tối mờ có viền zinc. |
| **Drawer Panel** | Khung trượt thông tin phụ | `fixed inset-y-0 right-0 z-50 w-full sm:max-w-md bg-zinc-950 border-l border-zinc-800 p-6 flex flex-col gap-6 shadow-2xl animate-in slide-in-from-right duration-300` | Panel trượt ra từ bên phải màn hình để hiển thị chi tiết lịch sử chấm công của cá nhân. |

---

## 2. ĐẶC TẢ COMPONENT (COMPONENT SPECS)

Tất cả các Dumb Component dưới đây bắt buộc sử dụng CSS Tailwind chuẩn để vẽ giao diện:

### A. Component nghiệp vụ (Feature Components)

*   **`AttendanceHeader` [DUMB]**
    *   **Box Style:** `w-full flex flex-col gap-1.5`
    *   **Typography:** Tiêu đề chính `text-2xl font-bold tracking-tight text-white`, mô tả phụ `text-sm text-zinc-400`
    *   **Trạng thái tương tác:** Static.

*   **`AttendanceStatsSummary` [DUMB]**
    *   **Box Style:** `w-full grid grid-cols-1 md:grid-cols-3 gap-4`
    *   **Typography:** Không áp dụng trực tiếp.
    *   **Trạng thái tương tác:** Static.

*   **`AttendanceBarChart` [DUMB]**
    *   **Box Style:** `w-full h-48 bg-zinc-950 border border-zinc-800 rounded-lg p-4 flex items-end justify-between gap-2`
    *   **Typography:** Nhãn trục ngày `text-[10px] text-zinc-500 font-mono font-medium text-center`
    *   **Trạng thái tương tác:** Cột biểu đồ có hiệu ứng hover `hover:bg-zinc-700/80 cursor-pointer transition-all duration-150` và tooltip hiển thị số liệu khi chạm.

*   **`AttendanceToolbar` [DUMB]**
    *   **Box Style:** `w-full flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4`
    *   **Typography:** Không áp dụng trực tiếp.
    *   **Trạng thái tương tác:** Static.

*   **`AttendanceTable` [DUMB]**
    *   **Box Style:** `min-w-full divide-y divide-zinc-800`
    *   **Typography:** Không áp dụng trực tiếp.
    *   **Trạng thái tương tác:** Khung xương tải dữ liệu `animate-pulse` khi tải trang.

*   **`AttendanceTableRow` [DUMB]**
    *   **Box Style:** `transition-colors duration-150 border-b border-zinc-800`
    *   **Typography:** Giờ check-in/out `font-mono text-sm text-zinc-300`
    *   **Trạng thái tương tác:** Hover hàng `hover:bg-zinc-900/50 cursor-pointer`.

*   **`AttendanceStatusBadge` [DUMB]**
    *   **Box Style & Variants:**
        *   *Đúng giờ:* `inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-emerald-400/10 text-emerald-400 border border-emerald-500/20`
        *   *Đi trễ:* `inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-yellow-400/10 text-yellow-400 border border-yellow-500/20`
        *   *Vắng mặt:* `inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-red-400/10 text-red-400 border border-red-500/20`
    *   **Trạng thái tương tác:** Static.

*   **`AttendanceDetailHistory` [DUMB]**
    *   **Box Style:** `flex flex-col gap-6 overflow-y-auto w-full pr-1`
    *   **Typography:** Tiêu đề phụ timeline `text-sm font-semibold text-zinc-400 tracking-wider uppercase`
    *   **Trạng thái tương tác:** Hàng timeline khi hover `hover:bg-zinc-900/30 rounded px-2 py-1.5 transition-colors`.

### B. Component dùng chung (Shared UI Components)

*   **`Breadcrumbs` [DUMB]**
    *   **Box Style:** `flex items-center gap-2 text-xs text-zinc-500`
    *   **Typography:** Item thường `font-medium hover:text-zinc-300`, Item hiện hành `text-zinc-400 font-medium`
    *   **Trạng thái tương tác:** Chuyển đổi màu chữ mượt `transition-colors duration-150`.

*   **`StatsCard` [DUMB]**
    *   **Box Style:** `rounded-lg border border-zinc-800 bg-zinc-950 p-4 flex flex-col gap-1 w-full`
    *   **Typography:** Chỉ số chính `text-2xl font-bold font-mono text-white tracking-tight`, tiêu đề phụ `text-xs font-medium text-zinc-400`
    *   **Trạng thái tương tác:** Static.

*   **`TabSwitcher` [DUMB]**
    *   **Box Style:** `inline-flex p-1 rounded-lg bg-zinc-900 border border-zinc-800 gap-1`
    *   **Typography:** Tab Item `text-xs font-medium px-3 py-1.5 rounded-md transition-colors duration-150`
    *   **Trạng thái tương tác:** Tab active `bg-zinc-800 text-white shadow-sm`, Tab thường `text-zinc-400 hover:text-white`.

*   **`DatePicker` [DUMB]**
    *   **Box Style:** `flex items-center gap-1 bg-zinc-900 border border-zinc-800 rounded-md p-1`
    *   **Typography:** Chữ hiển thị ngày `text-sm font-mono font-medium text-zinc-200 px-3`
    *   **Trạng thái tương tác:** Nút Prev/Next `p-1 rounded hover:bg-zinc-800 transition-colors`.

*   **`SelectFilter` [DUMB]**
    *   **Box Style:** `rounded-md bg-zinc-900 border border-zinc-800 py-1.5 px-3 focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 text-sm text-zinc-200 cursor-pointer`
    *   **Typography:** `text-sm font-medium`
    *   **Trạng thái tương tác:** Hover `hover:border-zinc-700`.

*   **`Button` [DUMB]**
    *   **Box Style:** `bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-zinc-200 font-medium rounded-md px-4 py-1.5 text-sm transition-colors duration-150 flex items-center gap-2`
    *   **Typography:** `text-sm font-medium`
    *   **Trạng thái tương tác:** Hover đổi màu nền, Disabled `opacity-50 pointer-events-none`.

*   **`Avatar` [DUMB]**
    *   **Box Style:** `h-8 w-8 rounded-full bg-zinc-800 border border-zinc-700/50 flex-shrink-0 overflow-hidden`
    *   **Typography:** Fallback chữ `text-xs font-bold text-zinc-300 flex items-center justify-center h-full w-full`
    *   **Trạng thái tương tác:** Static.

*   **`Drawer` [DUMB]**
    *   **Box Style:** `fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-sm` (Overlay), `relative w-full max-w-md bg-zinc-950 p-6 flex flex-col gap-6 shadow-2xl border-l border-zinc-800` (Main Drawer Body)
    *   **Typography:** Tiêu đề Drawer `text-lg font-bold text-white tracking-tight`
    *   **Trạng thái tương tác:** Click overlay đóng, nút đóng `p-1 rounded hover:bg-zinc-900 transition-colors`.

---

## 3. RÀNG BUỘC MÀU SẮC (COLOR CONSTRAINTS)

Bắt buộc ánh xạ toàn bộ mã màu sử dụng theo thang màu chuẩn **Tailwind CSS Zinc** để giữ cấu trúc Dark Theme sâu:

| Màu sắc thiết kế | Tương đương trong Tailwind CSS (Dark Mode) | Ứng dụng cụ thể |
| :--- | :--- | :--- |
| **Nền ứng dụng gốc** | `bg-black` | Toàn bộ màn hình phía sau. |
| **Nền Panel/Card/Table** | `bg-zinc-950` | Bề mặt bảng, các thẻ thống kê, biểu đồ và Drawer body. |
| **Nền Input/Form/Tab** | `bg-zinc-900` | Ô nhập dữ liệu, dropdown select, khung của Tab Switcher. |
| **Nền Hover của Hàng** | `hover:bg-zinc-900/50` | Hàng dữ liệu Table Row khi trỏ chuột qua. |
| **Nền Hover của Cột** | `hover:bg-zinc-800` | Các cột biểu đồ cột Bar Chart khi tương tác. |
| **Đường viền chính** | `border-zinc-800` | Đường phân cách nhẹ giữa các hàng, viền ngoài Table/Card. |
| **Đường viền phụ/Hover viền**| `border-zinc-700` | Viền của Avatar, viền Input khi hover, viền của button. |
| **Màu chữ chính** | `text-white` | Các tiêu đề lớn, họ tên nhân viên, nhãn chính. |
| **Màu chữ phụ** | `text-zinc-400` | Mô tả phụ, tiêu đề bảng cột, thông số trang. |
| **Màu chữ mờ/Placeholder**| `text-zinc-500` | Dấu ngăn cách breadcrumb, ngày không có chấm công, nhãn trục biểu đồ. |
| **Màu nhấn thành công** | `text-emerald-400` / `bg-emerald-400/10` / `border-emerald-500/20` | Trạng thái "Đúng giờ" của bản ghi chấm công. |
| **Màu nhấn cảnh báo/Trễ** | `text-yellow-400` / `bg-yellow-400/10` / `border-yellow-500/20` | Trạng thái "Đi trễ" của bản ghi chấm công. |
| **Màu nhấn báo động/Vắng** | `text-red-400` / `bg-red-400/10` / `border-red-500/20` | Trạng thái "Vắng mặt" của bản ghi chấm công. |

---

## 4. MOCK DATA (DỮ LIỆU HIỂN THỊ)

Văn bản và liên kết đại diện chuẩn hóa tiếng Việt để vẽ mockup chính xác:

### A. Dữ liệu Ngày xem chấm công
*   `19/07/2025`

### B. Chỉ số thống kê (Stats Summary)
*   **Tổng hôm nay (Có mặt):** `114` có mặt / `128` nhân viên
*   **Đi trễ hôm nay:** `9` đi trễ
*   **Vắng mặt hôm nay:** `5` vắng mặt

### C. Dữ liệu chấm công hàng ngày (Daily Attendance Records)

#### Bản ghi 1:
*   **Họ và tên:** `Nguyễn Văn An`
*   **Giờ vào (Check-in):** `08:02`
*   **Giờ ra (Check-out):** `17:35`
*   **Tổng giờ làm việc:** `9h33p`
*   **Trạng thái:** `Đúng giờ`
*   **Avatar URL:** `https://i.pravatar.cc/40?img=1`

#### Bản ghi 2:
*   **Họ và tên:** `Trần Thị Bình`
*   **Giờ vào (Check-in):** `08:47`
*   **Giờ ra (Check-out):** `17:10`
*   **Tổng giờ làm việc:** `8h23p`
*   **Trạng thái:** `Đi trễ`
*   **Avatar URL:** `https://i.pravatar.cc/40?img=2`

#### Bản ghi 3:
*   **Họ và tên:** `Lê Minh Châu`
*   **Giờ vào (Check-in):** `--:--`
*   **Giờ ra (Check-out):** `--:--`
*   **Tổng giờ làm việc:** `--`
*   **Trạng thái:** `Vắng mặt`
*   **Avatar URL:** `https://i.pravatar.cc/40?img=3`

#### Bản ghi 4:
*   **Họ và tên:** `Phạm Quốc Dũng`
*   **Giờ vào (Check-in):** `07:55`
*   **Giờ ra (Check-out):** `18:20`
*   **Tổng giờ làm việc:** `10h25p`
*   **Trạng thái:** `Đúng giờ`
*   **Avatar URL:** `https://i.pravatar.cc/40?img=4`

### D. Dữ liệu biểu đồ cột tuần (Weekly Chart Mock Data)
*   **Thứ Hai:** `120 có mặt — 4 đi trễ — 4 vắng mặt`
*   **Thứ Ba:** `122 có mặt — 3 đi trễ — 3 vắng mặt`
*   **Thứ Tư:** `118 có mặt — 7 đi trễ — 3 vắng mặt`
*   **Thứ Năm:** `115 có mặt — 9 đi trễ — 4 vắng mặt`
*   **Thứ Sáu:** `114 có mặt — 9 đi trễ — 5 vắng mặt`
*(Biểu diễn trực quan bằng cột chồng hoặc cụm cột với thang màu tương ứng)*
