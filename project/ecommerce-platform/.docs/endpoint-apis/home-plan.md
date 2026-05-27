# Home API Endpoints

Danh sách các API endpoint đã được xây dựng cho module Home.

## 1. Lấy danh sách Banners
- **Endpoint:** `GET /api/v1/home/banners`
- **Mô tả:** Trả về danh sách các banner hiển thị trên trang chủ.
- **Cache:** Có (TTL: 1 giờ)

## 2. Lấy danh sách Categories 
- **Endpoint:** `GET /api/v1/home/categories`
- **Mô tả:** Trả về danh sách danh mục sản phẩm nổi bật.
- **Query Parameters:**
  - `limit` (number, optional): Số lượng danh mục cần lấy.
- **Cache:** Có (TTL: 1 giờ)

## 3. Lấy danh sách Featured Products
- **Endpoint:** `GET /api/v1/home/featured-products`
- **Mô tả:** Trả về danh sách các sản phẩm nổi bật (Featured Products).
- **Query Parameters:**
  - `limit` (number, optional): Số lượng sản phẩm cần lấy (Mặc định: 8).
- **Cache:** Có (TTL: 1 giờ)
