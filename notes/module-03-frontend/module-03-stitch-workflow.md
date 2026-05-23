# Quy Trình Làm Việc Với Stitch

Quy trình gồm 4 bước nối tiếp nhau:

```
IDEA.md  →  FRONTEND_PLAN.md  →  DESIGN_BRIEF.md  →  Stitch vẽ UI
```

---

## Bước 1 — Viết File `IDEA.md`

Đây là bản nháp ý tưởng thô. Viết theo 4 mục cố định dưới đây.

### Cấu trúc mẫu — Giỏ Hàng Trượt (Slide-out Cart Drawer)

```markdown
# MÀN HÌNH: Giỏ Hàng Trượt (Slide-out Cart Drawer)

## 1. Thông tin chung (Meta Info)

- **Dự án:** TechBite E-commerce (Bán đồ công nghệ)
- **Tính năng:** Giỏ hàng dạng Ngăn kéo trượt (Drawer) từ cạnh phải màn hình
  thay vì chuyển sang trang riêng biệt
- **Mục đích:** Giúp khách hàng kiểm tra sản phẩm vừa thêm vào giỏ, xem tổng tiền
  và đi đến bước Thanh toán nhanh nhất mà không làm gián đoạn luồng mua sắm

## 2. Đối tượng & Trải nghiệm (Target & UX)

- **Người dùng chính:** Khách hàng đang lướt xem và mua sắm đồ công nghệ
- **Hành động chính:** Bấm [+] / [-] tăng giảm số lượng, xóa sản phẩm,
  bấm nút "Thanh Toán Ngay"
- **Cảm xúc mang lại:** Tốc độ, mượt mà (smooth animations), hiện đại, đáng tin cậy

## 3. Đặc tả Thiết kế (Design Specs)

- **Phong cách UI:** Minimalist kết hợp Glassmorphism
- **Quy tắc hiển thị:**
    - Khi mở Drawer, nền trang bên dưới phải tối đi và làm mờ (`backdrop-blur`)
    - Vùng danh sách sản phẩm phải có thanh cuộn bên trong (scrollable)
    - Phần Tạm tính & Nút Thanh toán phải ghim cố định (sticky) ở dưới cùng
- **Màu sắc chủ đạo:**
    - Nút "Thanh Toán" BẮT BUỘC dùng `bg-orange-600`
    - Nút phụ (Xóa, Đóng) dùng màu xám nhạt trung tính

## 4. Dữ liệu cốt lõi (Core Data)

- **Danh sách sản phẩm (Cart Items):** Thumbnail vuông, Tên sản phẩm,
  Giá bán hiện tại, Bộ đếm số lượng
- **Phần Tổng kết (Summary):**
    - Phí giao hàng (hiển thị "Miễn phí" màu xanh lá)
    - Tổng tiền
- **Call to Action:** Nút "Thanh Toán"
```

---

## Bước 2 — Prompt Chuyển `IDEA.md` → `FRONTEND_PLAN.md`

Dùng prompt sau để AI sinh ra bản quy hoạch kỹ thuật:

```
Hãy đóng vai trò là một Frontend Architect với tư duy tối ưu hóa hệ thống.

Nhiệm vụ: Đọc file `.docs/IDEA.md` của tính năng [TÊN_TÍNH_NĂNG] và phân tích
thành bản quy hoạch kỹ thuật chi tiết. Xuất kết quả ra file `.docs/FRONTEND_PLAN.md`.

BẮT BUỘC tuân thủ 3 yêu cầu cốt lõi:

1. PHÂN RÃ COMPONENT (COMPONENT TREE)
- Phân rã giao diện thành các khối Component theo dạng cây thư mục (Cha → Con)
- BẮT BUỘC gắn nhãn cho từng Component:
  + [SMART]: Container chứa logic, gọi API, quản lý State phức tạp
  + [DUMB]: Presentational Component, CHỈ nhận Props để render UI,
    tuyệt đối không chứa logic gọi data
- Ghi chú Component nào có tiềm năng là "Shared UI" (dùng chung toàn dự án)

2. QUẢN LÝ TRẠNG THÁI (STATE MANAGEMENT)
- Liệt kê các State cần thiết để tính năng hoạt động
  (VD: isLoading, cartItems, searchQuery...)
- Đề xuất chiến lược lưu trữ rõ ràng:
  + State nào dùng cục bộ (`useState`)
  + State nào dùng Global (Zustand / Pinia)
  + State nào nên đẩy lên URL Query Parameters (để dễ share link)

3. CẤU TRÚC DỮ LIỆU (DATA INTERFACES)
- Viết mã giả TypeScript (`interface` hoặc `type`) định nghĩa Props
  cho các Dumb Component quan trọng nhất
- CẤM sử dụng kiểu `any`

YÊU CẦU THỰC THI:
Không giải thích, không chào hỏi. Chỉ output duy nhất nội dung markdown của FRONTEND_PLAN.md.
```

---

## Bước 3 — Prompt Chuyển `FRONTEND_PLAN.md` → `DESIGN_BRIEF.md`

```
Hãy đóng vai trò là một Lead UI/UX Engineer.

Nhiệm vụ: Đọc 2 file sau:
1. `.docs/ideas/[TÊN_FILE_IDEA].md` — lấy Vibe, màu sắc, UX mong muốn
2. `.docs/frontend-plans/[TÊN_FILE_PLAN].md` — lấy sơ đồ Component

Tổng hợp và xuất ra file `.docs/DESIGN_BRIEF.md`.
Đây là bản đặc tả Machine-to-Machine (AI khác đọc để vẽ UI).
KHÔNG viết văn xuôi dài dòng. BẮT BUỘC tuân thủ định dạng sau:

1. HỆ THỐNG LƯỚI & BỐ CỤC (LAYOUT SYSTEM)
- Xác định cấu trúc Root (VD: `max-w-7xl mx-auto`, `min-h-screen`)
- Xác định Grid/Flexbox cho các Section chính
  (VD: Desktop `grid-cols-3`, Mobile `flex-col`)
- Quy định khoảng cách chuẩn bằng class Tailwind (VD: `gap-8`, `px-4`, `py-12`)

2. ĐẶC TẢ COMPONENT (COMPONENT SPECS)
- CHỈ liệt kê các Component được đánh nhãn [DUMB] trong file FRONTEND_PLAN
- Với mỗi Dumb Component, quy định rõ:
  + Box Style: Bo góc (`rounded-xl`), Bóng đổ (`shadow-sm`), Viền (`border`)
  + Typography: Kích thước và độ đậm font (VD: `text-2xl font-bold tracking-tight`)
  + Trạng thái tương tác: Hover / Active / Disabled
    (VD: `hover:-translate-y-1 hover:shadow-md transition-all`)

3. RÀNG BUỘC MÀU SẮC (COLOR CONSTRAINTS)
- Dịch màu sắc trong file IDEA sang class Tailwind
  (VD: Đỏ → `bg-red-500`, Xanh neon → `text-cyan-400`)
- TUYỆT ĐỐI không dùng mã màu HEX hoặc RGB tự chế

4. MOCK DATA (DỮ LIỆU HIỂN THỊ)
- Cung cấp văn bản/số liệu mẫu tiếng Việt để AI điền vào UI
  (VD: Tên sản phẩm mẫu, giá tiền mẫu, URL ảnh placeholder)

YÊU CẦU THỰC THI:
Chỉ output duy nhất nội dung markdown của DESIGN_BRIEF.md.
```

---

## Bước 4 — Prompt Yêu Cầu Stitch Vẽ Giao Diện

```
Hãy đóng vai trò là một UI Designer thực thi (Draftsman).
Nhiệm vụ: Vẽ giao diện web tĩnh dựa trên tài liệu kiến trúc đã được phê duyệt.
Tuyệt đối không tự ý sáng tạo ngoài khuôn khổ.

BẮT BUỘC thực hiện theo quy trình:

1. NẠP DỮ LIỆU ĐẦU VÀO
- Đọc `.docs/STYLEGUIDE.md` — lấy bảng màu Tailwind, typography, bo góc
- Đọc `.docs/DESIGN_BRIEF.md` — lấy cấu trúc Layout, danh sách Component, Spacing

2. THỰC THI VẼ (CANVAS DESIGN)
- Render bản vẽ giao diện dựa trên 2 file trên
- Lắp ráp chính xác Mock Data tiếng Việt đã cung cấp trong DESIGN_BRIEF vào bản vẽ

3. RÀNG BUỘC KỶ LUẬT
- CHỈ làm việc trên nền tảng vẽ UI. BỊ CẤM tạo, sửa hoặc can thiệp vào
  bất kỳ file code nào trong thư mục dự án
- BẮT BUỘC dùng đúng class màu Tailwind đã quy định, cấm tự chế mã HEX

Sau khi hoàn thiện, báo cáo:
"Đã vẽ xong giao diện. Sẵn sàng cho Antigravity thi công code."
```

### Chỉnh sửa Design Brief (nếu kết quả chưa đúng)

Nếu Stitch vẽ sai layout, bổ sung thêm vào `DESIGN_BRIEF.md` phần đặc tả viewport và cấu trúc cụ thể hơn. Ví dụ với Cart Drawer:

```markdown
## Bổ sung — Hệ Thống Lưới & Khung Hiển Thị

- **Viewport:** Desktop, chiều rộng tối thiểu 1440px
- **Background Context:** Nền xám nhạt full màn hình giả lập trang web phía sau
- **Overlay:** `fixed inset-0 z-40 bg-black/40 backdrop-blur-sm`
- **Panel Drawer:**
    - Vị trí: `fixed right-0 top-0 bottom-0 z-50`
    - Kích thước: `w-full max-w-md h-screen` (448px)
    - Padding nội bộ: `p-6`, gap giữa các phần tử: `gap-4`
```

---

## Ví Dụ IDEA.md Cho Các Màn Hình Khác

### Master Layout — `00-master-layout-idea.md`

```markdown
# Ý TƯỞNG: BỐ CỤC TOÀN CỤC (MASTER LAYOUT)

- **Mục tiêu:** Tạo bộ khung (Wrapper) dùng chung cho tất cả trang của TechBite

## Header (Top Navigation)

- Logo bên trái
- Thanh tìm kiếm sản phẩm ở giữa
- Bên phải: nút Đăng nhập + icon Giỏ hàng (hiển thị tổng số lượng)
- Sticky — dính chặt trên cùng khi cuộn trang

## Main Content

- Khoảng trống nhúng nội dung các trang con, có padding 2 bên

## Footer

- Cột 1: Logo + thông tin liên hệ
- Cột 2: Link chính sách bảo mật, điều khoản sử dụng
- Cột 3: Link tải app hoặc Social Media
```

### Trang Chủ — `01-home-idea.md`

```markdown
# Ý TƯỞNG: TRANG CHỦ (Home Page)

## 1. Thông tin chung (Meta Info)

- **Dự án:** TechBite
- **Tính năng:** Màn hình Trang chủ (Home / Landing Page)
- **Mục đích:** Phễu đón khách đầu tiên. Tạo cảm giác thèm ăn, năng động,
  giúp người dùng tìm ngay món yêu thích chỉ sau 1–2 cú click

## 2. Đối tượng & Trải nghiệm (Target & UX)

- **Người dùng chính:** Lập trình viên, dân văn phòng, học viên IT hay thức khuya
- **Hành động chính:** Bấm Banner khuyến mãi, lướt danh mục, bấm "Thêm vào giỏ"
  ngay tại trang chủ mà không cần vào trang chi tiết
- **Cảm xúc mang lại:** Tươi trẻ, kích thích vị giác, tải nhanh (ít hiệu ứng rườm rà)

## 3. Đặc tả Thiết kế (Design Specs)

- **Phong cách UI:** Clean, ưu tiên Whitespace, bo góc mềm mại (`rounded-2xl`)
- **Màu sắc chủ đạo:**
    - CTA chính (Mua ngay, Thêm vào giỏ): `bg-[#ff8c42]`
    - Badge giảm giá, chữ nổi bật: `bg-[#A63D40]` hoặc `text-[#A63D40]`
- **Cấu trúc màn hình (top → bottom):**
    - **Hero Banner:** Banner lớn "Combo Thức Khuya Coder" + nút CTA to, rõ
    - **Categories:** Hàng ngang các khối nhỏ có icon (Trà sữa, Khô gà, Bánh ngọt...)
    - **Featured Menu:** Grid 8 sản phẩm bán chạy. Mỗi card có ảnh, tên, giá, nút [+] cam
    - **Social Proof:** Dải banner "Hơn 500+ anh em dev đã nạp năng lượng tại đây"

## 4. Mock Data

- **Hero:** Tiêu đề "Nạp Năng Lượng - Code Phê Hơn",
  Sub-title "Combo Thức Khuya giảm giá 20% từ 22h – 2h sáng"
- **Danh mục:** Đồ Ăn Vặt, Nước Uống, Trái Cây Tô, Combo Deadline
- **Sản phẩm 1:** "Khô Gà Lá Chanh Xé Cay" — 45.000đ
  `https://images.unsplash.com/photo-1585238342024-78d387f4a707?auto=format&fit=crop&q=80&w=400&h=400`
- **Sản phẩm 2:** "Trà Sữa Oolong Nướng Full Topping" — 35.000đ
  `https://images.unsplash.com/photo-1558857563-b37102e99e00?auto=format&fit=crop&q=80&w=400&h=400`
```

---

## Tóm Tắt Quy Trình

| Bước | File đầu vào                        | Hành động                      | File đầu ra        |
| ---- | ----------------------------------- | ------------------------------ | ------------------ |
| 1    | —                                   | Bạn viết ý tưởng               | `IDEA.md`          |
| 2    | `IDEA.md`                           | Prompt → AI phân tích kỹ thuật | `FRONTEND_PLAN.md` |
| 3    | `IDEA.md` + `FRONTEND_PLAN.md`      | Prompt → AI sinh đặc tả        | `DESIGN_BRIEF.md`  |
| 4    | `DESIGN_BRIEF.md` + `STYLEGUIDE.md` | Prompt → Stitch vẽ             | Bản vẽ UI          |

> Nếu bản vẽ Stitch chưa đúng ý — bổ sung thêm ràng buộc viewport và layout vào `DESIGN_BRIEF.md` rồi yêu cầu Stitch vẽ lại. Không sửa IDEA hay PLAN.
