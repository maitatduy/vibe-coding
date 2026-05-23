# ĐẶC TẢ THIẾT KẾ: TÍNH NĂNG QUẢN LÝ NHÂN VIÊN (EMPLOYEE DESIGN BRIEF)

Tài liệu đặc tả kỹ thuật giao diện dành cho máy đọc (Machine-to-Machine Spec). Chứa các tham số Layout, Component Specs, Color Constraints và Mock Data chuẩn hóa dưới dạng lớp CSS Tailwind, được thiết kế theo phong cách tối giản **Vercel Dark Theme**.

---

## 1. HỆ THỐNG LƯỚI & BỐ CỤC (LAYOUT SYSTEM)

| Tên cấu trúc | Loại phân hệ | Cú pháp lớp Tailwind (CSS Classes) | Mô tả vai trò |
| :--- | :--- | :--- | :--- |
| **Viewport Root** | Container chính | `w-full min-h-screen bg-black text-zinc-100 flex flex-col font-sans selection:bg-zinc-800` | Thiết lập nền tối đen sâu, màu chữ xám sáng và font không chân mặc định. |
| **Master Container** | Khung giới hạn nội dung | `max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 flex flex-col gap-6` | Giới hạn chiều ngang hiển thị của trang chính, căn giữa và điều chỉnh padding thích ứng đa màn hình. |
| **Toolbar Section** | Khung chứa bộ lọc | `flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-between w-full pb-4 border-b border-zinc-800` | Tự động xếp chồng trên mobile và dàn ngang trên màn hình lớn. Phân tách bằng đường viền zinc mỏng dưới chân. |
| **Grid Stats Section** | Khối số liệu (nếu có) | `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full` | Hiển thị 1 cột trên mobile, 2 cột trên tablet, và 4 cột trên desktop. |
| **Table Wrapper** | Khung bọc bảng dữ liệu | `w-full overflow-x-auto rounded-lg border border-zinc-800 bg-zinc-950/50 backdrop-blur-sm` | Hỗ trợ cuộn ngang trên điện thoại, tạo bo góc mịn màng và nền tối mờ có viền zinc. |
| **Footer Wrapper** | Khối điều hướng | `flex flex-col sm:flex-row items-center justify-between gap-4 py-4 w-full` | Chứa phần phân trang bên dưới bảng. |

---

## 2. ĐẶC TẢ COMPONENT (COMPONENT SPECS)

Tất cả các Dumb Component dưới đây bắt buộc sử dụng CSS Tailwind chuẩn để vẽ giao diện:

### A. Component nghiệp vụ (Feature Components)

*   **`EmployeeHeader` [DUMB]**
    *   **Box Style:** `w-full flex flex-col gap-1.5`
    *   **Typography:** Tiêu đề chính `text-2xl font-bold tracking-tight text-white`, mô tả phụ `text-sm text-zinc-400`
    *   **Trạng thái tương tác:** Static (Không tương tác).

*   **`EmployeeToolbar` [DUMB]**
    *   **Box Style:** `w-full flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4`
    *   **Typography:** Không áp dụng trực tiếp.
    *   **Trạng thái tương tác:** Static.

*   **`EmployeeTable` [DUMB]**
    *   **Box Style:** `min-w-full divide-y divide-zinc-800`
    *   **Typography:** Không áp dụng trực tiếp.
    *   **Trạng thái tương tác:** Khung xương tải dữ liệu `animate-pulse` khi tải trang.

*   **`EmployeeTableRow` [DUMB]**
    *   **Box Style:** `transition-colors duration-150 border-b border-zinc-800`
    *   **Typography:** Không áp dụng trực tiếp.
    *   **Trạng thái tương tác:** Hover hàng `hover:bg-zinc-900/50 cursor-pointer`.

*   **`EmployeePagination` [DUMB]**
    *   **Box Style:** `w-full flex items-center justify-between border-t border-zinc-800 pt-4`
    *   **Typography:** Chỉ số trang `text-sm text-zinc-400 font-medium`
    *   **Trạng thái tương tác:** Static.

*   **`EmployeeForm` [DUMB]**
    *   **Box Style:** `flex flex-col gap-5 w-full`
    *   **Typography:** Nhãn Form `text-xs font-semibold text-zinc-400 uppercase tracking-wider`, thông báo lỗi `text-xs text-red-500`
    *   **Trạng thái tương tác:** Static.

### B. Component dùng chung (Shared UI Components)

*   **`Breadcrumbs` [DUMB]**
    *   **Box Style:** `flex items-center gap-2 text-xs text-zinc-500`
    *   **Typography:** Item thường `font-medium hover:text-zinc-300`, Item hiện hành `text-zinc-400 font-medium`
    *   **Trạng thái tương tác:** Chuyển đổi màu chữ mượt `transition-colors duration-150`.

*   **`SearchInput` [DUMB]**
    *   **Box Style:** `relative w-full sm:max-w-xs rounded-md bg-zinc-900 border border-zinc-800 focus-within:border-zinc-500 focus-within:ring-1 focus-within:ring-zinc-500 transition-all duration-150`
    *   **Typography:** Chữ gõ `text-sm text-zinc-100 placeholder-zinc-500 py-2 pl-9 pr-3 w-full`
    *   **Trạng thái tương tác:** Focus đổi màu viền, Disabled `opacity-50 cursor-not-allowed`.

*   **`SelectFilter` [DUMB]**
    *   **Box Style:** `rounded-md bg-zinc-900 border border-zinc-800 py-2 px-3 focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 text-sm text-zinc-200 outline-none transition-all duration-150 cursor-pointer`
    *   **Typography:** `text-sm font-medium`
    *   **Trạng thái tương tác:** Hover đổi màu border `hover:border-zinc-700`.

*   **`Button` [DUMB]**
    *   **Box Style & Variants:**
        *   *Primary (Thêm mới/Lưu):* `bg-white hover:bg-zinc-200 text-black font-medium rounded-md px-4 py-2 text-sm shadow-sm transition-colors duration-150 flex items-center gap-2`
        *   *Secondary (Bộ lọc/Hủy):* `bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-zinc-200 font-medium rounded-md px-4 py-2 text-sm transition-colors duration-150 flex items-center gap-2`
        *   *Danger (Xóa):* `bg-red-950/30 border border-red-900/50 hover:bg-red-900 hover:text-white text-red-400 font-medium rounded-md px-4 py-2 text-sm transition-colors duration-150`
    *   **Trạng thái tương tác:** Hover thay đổi màu nền nhanh, Disabled `opacity-50 cursor-not-allowed pointer-events-none`.

*   **`TableHeader` [DUMB]**
    *   **Box Style:** `bg-zinc-950/70 border-b border-zinc-800 text-left`
    *   **Typography:** Tiêu đề cột `text-xs font-semibold tracking-wider text-zinc-400 uppercase py-3.5 px-4`
    *   **Trạng thái tương tác:** Static.

*   **`TableBody` [DUMB]**
    *   **Box Style:** `divide-y divide-zinc-800/60 bg-transparent`
    *   **Typography:** Không áp dụng.
    *   **Trạng thái tương tác:** Static.

*   **`Avatar` [DUMB]**
    *   **Box Style:** `h-9 w-9 rounded-full bg-zinc-800 border border-zinc-700/50 flex-shrink-0 overflow-hidden`
    *   **Typography:** Fallback chữ `text-sm font-bold text-zinc-300 flex items-center justify-center h-full w-full`
    *   **Trạng thái tương tác:** Static.

*   **`Badge` [DUMB]**
    *   **Box Style & Variants:**
        *   *Đang làm:* `inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-400/10 text-emerald-400 border border-emerald-500/20`
        *   *Nghỉ việc:* `inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-400/10 text-red-400 border border-red-500/20`
    *   **Trạng thái tương tác:** Static.

*   **`DropdownMenu` [DUMB]**
    *   **Box Style:** `absolute right-0 mt-2 w-48 rounded-md bg-zinc-950 border border-zinc-800 p-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50`
    *   **Typography:** MenuItem `flex w-full items-center px-3 py-2 text-sm text-zinc-300 rounded hover:bg-zinc-900 hover:text-white`
    *   **Trạng thái tương tác:** Click toggle mở, Hover item đổi nền zinc-900 mượt.

*   **`Pagination` [DUMB]**
    *   **Box Style:** `flex items-center gap-1`
    *   **Typography:** Không áp dụng.
    *   **Trạng thái tương tác:** Nút trang active `bg-zinc-800 text-white border-zinc-700`, Nút thường `hover:bg-zinc-900 border-zinc-800`.

*   **`Dialog` [DUMB]**
    *   **Box Style:** `fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm` (Overlay), `relative w-full max-w-lg rounded-xl border border-zinc-800 bg-zinc-950 p-6 shadow-2xl animate-in fade-in zoom-in-95 duration-200` (Main Panel)
    *   **Typography:** Tiêu đề Dialog `text-lg font-semibold text-white tracking-tight`
    *   **Trạng thái tương tác:** Click overlay hoặc ESC để đóng, Form focus chuyển đổi mượt.

---

## 3. RÀNG BUỘC MÀU SẮC (COLOR CONSTRAINTS)

Bắt buộc ánh xạ toàn bộ mã màu sử dụng theo thang màu chuẩn **Tailwind CSS Zinc** để giữ cấu trúc Dark Theme sâu:

| Màu sắc thiết kế | Tương đương trong Tailwind CSS (Dark Mode) | Ứng dụng cụ thể |
| :--- | :--- | :--- |
| **Nền ứng dụng gốc** | `bg-black` | Toàn bộ màn hình phía sau. |
| **Nền Panel/Card/Table** | `bg-zinc-950` | Bề mặt bảng, các thẻ thống kê và Modal panel. |
| **Nền Input/Form** | `bg-zinc-900` | Ô nhập dữ liệu, dropdown select và các thẻ inline. |
| **Nền Hover của Hàng** | `hover:bg-zinc-900/50` hoặc `hover:bg-zinc-800/50` | Hàng dữ liệu Table Row khi trỏ chuột qua. |
| **Đường viền chính** | `border-zinc-800` | Đường phân cách nhẹ giữa các hàng, viền ngoài Table/Card. |
| **Đường viền phụ/Hover viền**| `border-zinc-700` | Viền của Avatar, viền Input khi hover. |
| **Đường viền Focus** | `border-zinc-500` / `ring-zinc-500` | Thay đổi khi nhấn chuột vào ô Input/Select. |
| **Màu chữ chính** | `text-white` | Các tiêu đề cột lớn, họ tên nhân viên, nhãn chính. |
| **Màu chữ phụ** | `text-zinc-400` | Mô tả phụ, tiêu đề bảng cột, thông số trang. |
| **Màu chữ mờ/Placeholder**| `text-zinc-500` | Dấu ngăn cách breadcrumb, placeholder text của ô tìm kiếm. |
| **Màu nhấn thành công** | `text-emerald-400` / `bg-emerald-400/10` / `border-emerald-500/20` | Trạng thái "Đang làm" của nhân viên. |
| **Màu nhấn cảnh báo/Xóa** | `text-red-400` / `bg-red-400/10` / `border-red-500/20` | Trạng thái "Nghỉ việc", nút Xóa nhân viên nguy hiểm. |

---

## 4. MOCK DATA (DỮ LIỆU HIỂN THỊ)

Văn bản và liên kết đại diện chuẩn hóa tiếng Việt để vẽ mockup chính xác:

### A. Cấu trúc danh mục Phòng ban (Departments)
*   `Kỹ thuật`
*   `Marketing`
*   `Kế toán`
*   `Nhân sự`

### B. Danh sách Bản ghi Nhân sự (Employee Records)

#### Bản ghi 1:
*   **Họ và tên:** `Nguyễn Văn An`
*   **Phòng ban:** `Kỹ thuật`
*   **Chức vụ:** `Senior Developer`
*   **Ngày vào làm:** `01/03/2022`
*   **Trạng thái:** `Đang làm`
*   **Avatar URL:** `https://i.pravatar.cc/40?img=1`

#### Bản ghi 2:
*   **Họ và tên:** `Trần Thị Bình`
*   **Phòng ban:** `Marketing`
*   **Chức vụ:** `Content Manager`
*   **Ngày vào làm:** `15/06/2021`
*   **Trạng thái:** `Đang làm`
*   **Avatar URL:** `https://i.pravatar.cc/40?img=2`

#### Bản ghi 3:
*   **Họ và tên:** `Lê Minh Châu`
*   **Phòng ban:** `Kế toán`
*   **Chức vụ:** `Kế toán viên`
*   **Ngày vào làm:** `20/01/2023`
*   **Trạng thái:** `Đang làm`
*   **Avatar URL:** `https://i.pravatar.cc/40?img=3`

#### Bản ghi 4:
*   **Họ và tên:** `Phạm Quốc Dũng`
*   **Phòng ban:** `Kỹ thuật`
*   **Chức vụ:** `Junior Developer`
*   **Ngày vào làm:** `10/09/2023`
*   **Trạng thái:** `Đang làm`
*   **Avatar URL:** `https://i.pravatar.cc/40?img=4`

#### Bản ghi 5:
*   **Họ và tên:** `Hoàng Thị Em`
*   **Phòng ban:** `Nhân sự`
*   **Chức vụ:** `HR Executive`
*   **Ngày vào làm:** `05/04/2020`
*   **Trạng thái:** `Nghỉ việc`
*   **Avatar URL:** `https://i.pravatar.cc/40?img=5`

### C. Số liệu thống kê tổng hợp (Metadata Statistics)
*   **Tổng cộng:** `128` nhân viên.
*   **Số lượng hiển thị trên trang:** `10` nhân viên / trang.
