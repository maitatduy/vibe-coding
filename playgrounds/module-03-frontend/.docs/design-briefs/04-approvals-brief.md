# ĐẶC TẢ THIẾT KẾ: TÍNH NĂNG PHÊ DUYỆT ĐƠN (APPROVALS DESIGN BRIEF)

Tài liệu đặc tả kỹ thuật giao diện dành cho máy đọc (Machine-to-Machine Spec). Chứa các tham số Layout, Component Specs, Color Constraints và Mock Data chuẩn hóa dưới dạng lớp CSS Tailwind, được thiết kế theo phong cách tối giản **Vercel Dark Theme**.

---

## 1. HỆ THỐNG LƯỚI & BỐ CỤC (LAYOUT SYSTEM)

| Tên cấu trúc | Loại phân hệ | Cú pháp lớp Tailwind (CSS Classes) | Mô tả vai trò |
| :--- | :--- | :--- | :--- |
| **Viewport Root** | Container chính | `w-full min-h-screen bg-black text-zinc-100 flex flex-col font-sans selection:bg-zinc-800` | Thiết lập nền tối đen sâu, màu chữ xám sáng và font không chân mặc định. |
| **Master Container** | Khung giới hạn nội dung | `max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 flex flex-col gap-6` | Giới hạn chiều ngang hiển thị của trang chính, căn giữa và điều chỉnh padding thích ứng đa màn hình. |
| **Toolbar Section** | Khung chứa bộ lọc | `flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-between w-full pb-4 border-b border-zinc-800` | Ranh giới trên cùng phân chia đầu trang và danh sách card lọc động. |
| **Card Grid Section** | Mạng lưới hiển thị đơn | `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full` | Hiển thị danh sách đơn dạng card: 1 cột trên mobile, 2 cột trên tablet, và 3 cột trên desktop. |
| **Modal Panel** | Khung bọc popup từ chối | `fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm` (Overlay), `relative w-full max-w-md rounded-xl border border-zinc-800 bg-zinc-950 p-6 shadow-2xl animate-in fade-in zoom-in-95 duration-200` (Main Panel) | Hộp thoại yêu cầu HR nhập lý do khi bấm "Từ chối" đơn xin phép. |

---

## 2. ĐẶC TẢ COMPONENT (COMPONENT SPECS)

Tất cả các Dumb Component dưới đây bắt buộc sử dụng CSS Tailwind chuẩn để vẽ giao diện:

### A. Component nghiệp vụ (Feature Components)

*   **`ApprovalsHeader` [DUMB]**
    *   **Box Style:** `w-full flex flex-col gap-1.5`
    *   **Typography:** Tiêu đề chính `text-2xl font-bold tracking-tight text-white`, mô tả phụ `text-sm text-zinc-400`
    *   **Trạng thái tương tác:** Static.

*   **`ApprovalsToolbar` [DUMB]**
    *   **Box Style:** `w-full flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4`
    *   **Typography:** Không áp dụng trực tiếp.
    *   **Trạng thái tương tác:** Static.

*   **`ApprovalsCardGrid` [DUMB]**
    *   **Box Style:** `w-full min-h-[400px]`
    *   **Typography:** Không áp dụng trực tiếp.
    *   **Trạng thái tương tác:** Khung xương tải dữ liệu `animate-pulse` khi tải trang.

*   **`ApprovalCard` [DUMB]**
    *   **Box Style:** `rounded-xl border border-zinc-800 bg-zinc-950/40 p-5 flex flex-col gap-4 transition-all duration-200 hover:border-zinc-700 shadow-sm relative overflow-hidden`
        *   *Nếu đã duyệt/từ chối:* `opacity-60 pointer-events-none hover:border-zinc-800` (Hiển thị mờ, khóa tương tác)
    *   **Typography:** Tên nhân viên `text-base font-semibold text-white`, Lý do xin phép `text-sm text-zinc-300 italic line-clamp-2 bg-zinc-900/40 p-2.5 rounded border border-zinc-850`, Chi tiết thời gian `text-xs font-mono font-medium text-zinc-400`
    *   **Trạng thái tương tác:** Hover viền sáng mượt mà.

*   **`RejectionReasonForm` [DUMB]**
    *   **Box Style:** `flex flex-col gap-4 w-full`
    *   **Typography:** Nhãn Form `text-xs font-semibold text-zinc-400 uppercase tracking-wider`, cảnh báo `text-xs text-red-400`
    *   **Trạng thái tương tác:** Ô Textarea `hover:border-zinc-600 focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 bg-zinc-900 rounded-lg border border-zinc-700 p-3 text-sm text-white w-full h-24 outline-none transition-all`.

### B. Component dùng chung (Shared UI Components)

*   **`Breadcrumbs` [DUMB]**
    *   **Box Style:** `flex items-center gap-2 text-xs text-zinc-500`
    *   **Typography:** Item thường `font-medium hover:text-zinc-300`, Item hiện hành `text-zinc-400 font-medium`
    *   **Trạng thái tương tác:** Chuyển đổi màu chữ mượt `transition-colors duration-150`.

*   **`TabSwitcherWithBadge` [DUMB]**
    *   **Box Style:** `flex flex-wrap p-1 rounded-lg bg-zinc-900 border border-zinc-800 gap-1 self-start`
    *   **Typography:** Tab Item `text-xs font-semibold px-3 py-2 rounded-md transition-all duration-150 flex items-center gap-2`
    *   **Trạng thái tương tác:**
        *   *Tab active:* `bg-zinc-800 text-white shadow-sm`
        *   *Tab thường:* `text-zinc-400 hover:text-white`
        *   *Số lượng Badge:* Tròn nhỏ `inline-flex items-center justify-center h-4 min-w-[16px] px-1 rounded-full text-[9px] font-bold bg-zinc-700 text-zinc-300` (Tab active sẽ đổi badge thành `bg-zinc-600 text-white`).

*   **`SearchInput` [DUMB]**
    *   **Box Style:** `relative w-full sm:max-w-xs rounded-md bg-zinc-900 border border-zinc-800 focus-within:border-zinc-500 focus-within:ring-1 focus-within:ring-zinc-500 transition-all duration-150`
    *   **Typography:** Chữ gõ `text-sm text-zinc-100 placeholder-zinc-500 py-1.5 pl-9 pr-3 w-full`
    *   **Trạng thái tương tác:** Focus viền sáng.

*   **`SelectFilter` [DUMB]**
    *   **Box Style:** `rounded-md bg-zinc-900 border border-zinc-800 py-1.5 px-3 focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 text-sm text-zinc-200 cursor-pointer`
    *   **Typography:** `text-sm font-medium`
    *   **Trạng thái tương tác:** Hover `hover:border-zinc-700`.

*   **`Avatar` [DUMB]**
    *   **Box Style:** `h-9 w-9 rounded-full bg-zinc-800 border border-zinc-700/50 flex-shrink-0 overflow-hidden`
    *   **Typography:** Fallback chữ `text-xs font-bold text-zinc-300 flex items-center justify-center h-full w-full`
    *   **Trạng thái tương tác:** Static.

*   **`Badge` [DUMB]**
    *   **Box Style & Variants:**
        *   *Nghỉ phép:* `px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-sky-500/10 text-sky-400 border border-sky-500/20`
        *   *Tăng ca:* `px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-amber-500/10 text-amber-400 border border-amber-500/20`
        *   *Công tác:* `px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-purple-500/10 text-purple-400 border border-purple-500/20`
        *   *Đã duyệt:* `px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/20`
        *   *Từ chối:* `px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-red-500/10 text-red-400 border border-red-500/20`
    *   **Trạng thái tương tác:** Static.

*   **`Button` [DUMB]**
    *   **Box Style & Variants:**
        *   *Duyệt (Approve):* `bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-md py-1.5 px-4 text-xs transition-colors duration-150 shadow-sm flex-1`
        *   *Từ chối (Reject):* `bg-zinc-800 hover:bg-zinc-700 text-red-400 font-semibold rounded-md py-1.5 px-4 text-xs transition-colors duration-150 border border-zinc-750 flex-1`
    *   **Trạng thái tương tác:** Hover đổi màu nền mượt, Disabled `opacity-50 pointer-events-none`.

*   **`Dialog` [DUMB]**
    *   **Box Style:** `fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm` (Overlay), `relative w-full max-w-md rounded-xl border border-zinc-800 bg-zinc-950 p-6 shadow-2xl animate-in fade-in zoom-in-95 duration-200` (Main Panel)
    *   **Typography:** Tiêu đề Dialog `text-lg font-bold text-white tracking-tight`
    *   **Trạng thái tương tác:** ESC để đóng.

---

## 3. RÀNG BUỘC MÀU SẮC (COLOR CONSTRAINTS)

Bắt buộc ánh xạ toàn bộ mã màu sử dụng theo thang màu chuẩn **Tailwind CSS Zinc** để giữ cấu trúc Dark Theme sâu:

| Màu sắc thiết kế | Tương đương trong Tailwind CSS (Dark Mode) | Ứng dụng cụ thể |
| :--- | :--- | :--- |
| **Nền ứng dụng gốc** | `bg-black` | Toàn bộ màn hình phía sau. |
| **Nền Panel/Card** | `bg-zinc-950` | Bề mặt của card đơn, khung popup Modal. |
| **Nền Input/Form/Tab** | `bg-zinc-900` | Ô nhập dữ liệu, dropdown select, khung của Tab Switcher. |
| **Nền Hover của Card** | `hover:border-zinc-700` | Viền card tự động làm sáng khi di chuột qua. |
| **Đường viền chính** | `border-zinc-800` | Đường phân cách nhẹ giữa các phần, viền ngoài Card/Tab. |
| **Đường viền phụ/Hover viền**| `border-zinc-700` | Viền của Avatar, viền Input khi hover. |
| **Màu chữ chính** | `text-white` | Họ tên nhân viên trên card, tiêu đề chính. |
| **Màu chữ phụ** | `text-zinc-400` | Thông tin phòng ban, chi tiết thời gian, tiêu đề phụ. |
| **Màu nhấn thành công** | `bg-emerald-600` / `hover:bg-emerald-500` / `text-emerald-400` | Nút "Duyệt đơn", Badge trạng thái "Đã duyệt". |
| **Màu nhấn cảnh báo/Trễ** | `text-amber-400` / `bg-amber-500/10` | Loại đơn "Tăng ca". |
| **Màu nhấn báo động/Từ chối**| `text-red-400` / `bg-red-500/10` | Nút "Từ chối đơn", Badge trạng thái "Từ chối", text báo lỗi. |
| **Màu loại đơn khác** | `text-sky-400` (Nghỉ phép) / `text-purple-400` (Công tác) | Màu sắc đặc trưng của từng loại đơn giúp HR dễ scan nhanh. |

---

## 4. MOCK DATA (DỮ LIỆU HIỂN THỊ)

Văn bản và liên kết đại diện chuẩn hóa tiếng Việt để vẽ mockup chính xác:

### A. Thống kê chung (Metadata Counts)
*   **Tổng số đơn chờ duyệt:** `7` đơn

### B. Danh sách Đơn chờ duyệt (Pending Requests)

#### Đơn 1:
*   **Họ và tên:** `Nguyễn Văn An`
*   **Phòng ban:** `Kỹ thuật`
*   **Loại đơn:** `Nghỉ phép`
*   **Chi tiết thời gian:** `20/07 → 22/07/2025`
*   **Thời gian:** `3 ngày`
*   **Lý do xin phép:** `"Việc gia đình"`
*   **Trạng thái:** `Chờ duyệt`
*   **Avatar URL:** `https://i.pravatar.cc/40?img=1`

#### Đơn 2:
*   **Họ và tên:** `Trần Thị Bình`
*   **Phòng ban:** `Marketing`
*   **Loại đơn:** `Tăng ca`
*   **Chi tiết thời gian:** `19/07/2025`
*   **Thời gian:** `2 tiếng`
*   **Lý do xin phép:** `"Hoàn thành báo cáo quý"`
*   **Trạng thái:** `Chờ duyệt`
*   **Avatar URL:** `https://i.pravatar.cc/40?img=2`

#### Đơn 3:
*   **Họ và tên:** `Lê Minh Châu`
*   **Phòng ban:** `Kế toán`
*   **Loại đơn:** `Nghỉ bệnh` (Nghỉ phép)
*   **Chi tiết thời gian:** `18/07/2025`
*   **Thời gian:** `1 ngày`
*   **Lý do xin phép:** `"Sốt, có giấy bác sĩ"`
*   **Trạng thái:** `Chờ duyệt`
*   **Avatar URL:** `https://i.pravatar.cc/40?img=3`

#### Đơn 4:
*   **Họ và tên:** `Phạm Quốc Dũng`
*   **Phòng ban:** `Kỹ thuật`
*   **Loại đơn:** `Công tác`
*   **Chi tiết thời gian:** `25/07 → 26/07/2025`
*   **Thời gian:** `2 ngày`
*   **Lý do xin phép:** `"Gặp đối tác tại Hà Nội"`
*   **Trạng thái:** `Chờ duyệt`
*   **Avatar URL:** `https://i.pravatar.cc/40?img=4`
