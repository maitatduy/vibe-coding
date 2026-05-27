# Product List API Endpoints

Danh sách các API endpoint đã được xây dựng dựa trên `product-list-plan.md`.

## 1. Lấy danh sách Sản phẩm (Kèm Bộ Lọc, Sắp xếp, Phân trang)
- **Endpoint:** `GET /api/v1/products`
- **Mô tả:** Trả về danh sách sản phẩm với hỗ trợ phân trang, lọc theo danh mục, khoảng giá, tìm kiếm và sắp xếp.
- **Query Parameters:**
  - `page` (number, optional): Trang hiện tại (Mặc định: 1).
  - `limit` (number, optional): Số lượng sản phẩm trên mỗi trang (Mặc định: 12).
  - `categoryId` (string, optional): Lọc theo ID danh mục.
  - `minPrice` (number, optional): Lọc theo giá thấp nhất.
  - `maxPrice` (number, optional): Lọc theo giá cao nhất.
  - `sortBy` (string, optional): Tiêu chí sắp xếp (`createdAt`, `price`, `isFeatured`). Mặc định: `createdAt`.
  - `sortOrder` (string, optional): Chiều sắp xếp (`asc`, `desc`). Mặc định: `desc`.
  - `search` (string, optional): Tìm kiếm theo tên sản phẩm.
- **Xác thực:** Public

## 2. Lấy dữ liệu Metadata cho Bộ Lọc (Filter Aggregations)
- **Endpoint:** `GET /api/v1/products/filters-meta`
- **Mô tả:** Trả về danh sách các danh mục hiện có cùng số lượng sản phẩm, và khoảng giá (min/max) của toàn bộ hệ thống để render sidebar bộ lọc.
- **Cache:** Có (TTL: 1 ngày)
- **Xác thực:** Public
