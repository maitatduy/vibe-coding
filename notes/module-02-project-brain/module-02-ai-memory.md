# Hệ Thống Tài Liệu Sống (Living Docs)

Thay vì viết văn mô tả dài dòng, hãy cấu trúc tài liệu theo các **khối thông tin (Modules)** để AI dễ truy xuất và đối chiếu khi lập trình. Hai file `.docs/ARCHITECTURE.md` và `.docs/STYLEGUIDE.md` chính là la bàn cho toàn bộ dự án.

---

## `.docs/ARCHITECTURE.md`

Lưu trữ những quyết định kiến trúc không thay đổi thường xuyên — giúp AI hiểu xương sống của hệ thống và không bao giờ code sai logic nghiệp vụ.

```markdown
# KIẾN TRÚC HỆ THỐNG: E-COMMERCE PLATFORM

## 1. Sơ đồ dữ liệu cốt lõi (Core Database Entities)

- **Product:** `price` (giá gốc), `salePrice` (giá khuyến mãi), `stock` (tồn kho)
- **Category:** Phân loại sản phẩm, hỗ trợ cấu trúc cây (Parent → Child)
- **Cart & CartItem:** Trạng thái giỏ hàng tạm thời.
  Chưa login → dùng LocalStorage. Đã login → lưu vào DB.
- **Order & OrderItem:** Lưu trữ lịch sử mua hàng bất biến (Snapshot).
  Giá trong `OrderItem` BẮT BUỘC lưu cứng tại thời điểm mua,
  TUYỆT ĐỐI không tham chiếu lại giá từ bảng `Product`.

## 2. Luồng nghiệp vụ tối quan trọng (Critical Business Logic)

### Tính toán tiền (Pricing)

- Mọi phép tính tiền tệ (tổng đơn, giảm giá, thuế) BẮT BUỘC thực hiện ở Backend
- TUYỆT ĐỐI không tin dữ liệu giá gửi lên từ Frontend
- Frontend chỉ được gửi `productId` và `quantity`

### Quản lý tồn kho (Inventory)

- Trừ `stock` ngay khi thanh toán thành công
- Nếu `stock === 0` → API từ chối thêm vào giỏ hàng

### Thanh toán (Checkout)

- Trạng thái Order mặc định: `PENDING`
- Chỉ chuyển sang `PAID` qua Webhook từ cổng thanh toán (Stripe / VNPay)

## 3. Quy chuẩn API (API Standards)

- **Pagination:** Mọi API trả về danh sách BẮT BUỘC có `page`, `limit`, `totalPages`
- **Bảo mật:** API tạo đơn hàng BẮT BUỘC có Rate Limit để chống spam
```

---

## `.docs/STYLEGUIDE.md`

Giúp Stitch vẽ và AI code ra giao diện nhất quán, tối ưu tỷ lệ chuyển đổi (Conversion Rate).

```markdown
# LUẬT THIẾT KẾ: E-COMMERCE PLATFORM

## 1. Bảng màu & Phân cấp (Color & Hierarchy)

- **Primary Action** — `bg-orange-600`
  Dùng DUY NHẤT cho "Thêm vào giỏ" và "Thanh toán".
  TUYỆT ĐỐI không dùng cho thành phần trang trí — để điều hướng mắt người dùng.
- **Secondary Action** — `bg-slate-900` (nút xem chi tiết, bộ lọc)
- **Background** — `bg-gray-50` (nền xám nhạt làm nổi thẻ sản phẩm trắng)
- **Giá hiện tại** — `text-red-600 font-bold`
- **Giá gốc (gạch ngang)** — `text-slate-400 line-through`

## 2. UI Components đặc thù (E-commerce)

### Product Card (Thẻ sản phẩm)

- Tỷ lệ ảnh: khung vuông `1:1` hoặc chữ nhật đứng `3:4`
- Ảnh có nền trong suốt → thêm background `bg-gray-100`
- BẮT BUỘC có Badge "% Giảm giá" góc trên bên phải

### Badges (Nhãn trạng thái)

- **Hết hàng:** Khóa xám toàn thẻ + badge `bg-gray-500 text-white`
- **Mới:** Badge `bg-green-500 text-white`

### Grid danh sách sản phẩm

- Mobile: `grid-cols-2`
- Tablet: `md:grid-cols-3`
- Desktop: `lg:grid-cols-4 xl:grid-cols-5`

## 3. UX Constraints

- **Giỏ hàng:** Dùng Drawer trượt từ phải — TUYỆT ĐỐI không nhảy sang trang mới
- **Feedback:** Bấm "Thêm vào giỏ" → Toast Message góc trên xác nhận thành công
```

---

## Tại Sao Cần 2 File Này?

Hãy tưởng tượng bạn ra lệnh: _"AI, code cho tôi trang Chi tiết Sản phẩm"_.

|                 | Không có Living Docs             | Có Living Docs                       |
| --------------- | -------------------------------- | ------------------------------------ |
| **Màu nút mua** | Tự chế — thường là `bg-blue-500` | Đúng `bg-orange-600` theo STYLEGUIDE |
| **Tính tiền**   | Tính ở Frontend — dễ bị hack     | Tính ở Backend theo ARCHITECTURE     |
| **Hết hàng**    | Không xử lý                      | Tự khóa nút khi `stock === 0`        |
| **Giỏ hàng**    | Nhảy sang trang mới              | Drawer trượt từ phải                 |

---

## Vòng Đời Của Tài Liệu Sống

```
Giai đoạn 1 — Hạt giống
Khởi tạo dự án → viết nội dung ban đầu vào 2 file (như mẫu trên)

         ↓

Giai đoạn 2 — Tiến hóa  (dùng lệnh /archive)
Code xong tính năng mới → yêu cầu AI cập nhật kiến trúc vào ARCHITECTURE.md
và cập nhật UI rules mới vào STYLEGUIDE.md
Ví dụ: "Chuyển giao kiến trúc Module Giỏ hàng sang ARCHITECTURE.md"

         ↓

Giai đoạn 3 — Kế thừa
Tính năng tiếp theo → AI đọc 2 file → tự biết dùng bo góc rounded-xl,
màu cam cho nút chốt sale, tính tiền ở Backend
→ Không cần nhắc lại
```

> **Nguyên tắc:** `FEATURES_DONE.md` là RAM — lưu tạm tiến độ. `ARCHITECTURE.md` và `STYLEGUIDE.md` là ổ cứng — lưu vĩnh viễn. Dùng lệnh `/archive` để "nâng cấp" thông tin từ RAM lên ổ cứng sau mỗi tính năng hoàn thành.
