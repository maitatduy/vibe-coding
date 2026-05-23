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