# QUY HOẠCH KIẾN TRÚC BACK-END: PRODUCT LIST PAGE (TRANG DANH SÁCH SẢN PHẨM)

Dựa trên yêu cầu nghiệp vụ từ `03-product-list-idea.md`, dưới đây là bản thiết kế hạ tầng phục vụ cho tính năng Danh sách sản phẩm, bộ lọc và tìm kiếm.

## 1. Thiết kế Dữ liệu (Database Schema - Prisma ORM)

Màn hình Danh sách sản phẩm chủ yếu sử dụng lại các Entity từ kiến trúc cốt lõi đã định nghĩa (`Product`, `Category`). Tuy nhiên, để tối ưu hóa việc query và filter, ta cần đảm bảo các Index đã được thiết lập đúng.

### Bảng `Product` (Tái sử dụng & Đảm bảo Indexing)
- `id`, `name`, `slug`, `description`, `price`, `salePrice`, `stock`, `imageUrl`, `isFeatured`, `categoryId`, `isActive`, `createdAt`, `updatedAt`
- **Yêu cầu Indexing bổ sung:**
  - `INDEX` trên `categoryId` (Phục vụ lọc theo danh mục).
  - `INDEX` trên `price` và `salePrice` (Phục vụ sắp xếp và lọc theo khoảng giá).
  - `INDEX` trên `createdAt` và `updatedAt` (Phục vụ sắp xếp theo thời gian mới nhất).
  - `INDEX` trên `isActive` (Chỉ query những sản phẩm đang bán).

---

## 2. Giao kèo API (API Contract)

### 2.1. Lấy danh sách Sản phẩm (Kèm Bộ Lọc, Sắp xếp, Phân trang)
- **Method & Route:** `GET /api/v1/products`
- **Request Payload (Query Params):**
  ```typescript
  interface GetProductsQuery {
    page?: number;       // Mặc định: 1
    limit?: number;      // Mặc định: 12 hoặc 16 (chia hết cho 4 cột)
    categoryId?: string; // Lọc theo danh mục
    minPrice?: number;   // Giá thấp nhất
    maxPrice?: number;   // Giá cao nhất
    sortBy?: 'createdAt' | 'price' | 'isFeatured'; // Tiêu chí sắp xếp
    sortOrder?: 'asc' | 'desc'; // Chiều sắp xếp (Mặc định: desc)
    search?: string;     // Tìm kiếm theo tên sản phẩm
  }
  ```
- **Response Payload (Success):**
  ```typescript
  interface GetProductsResponse {
    data: Array<{
      id: string;
      name: string;
      slug: string;
      price: number;
      salePrice: number | null;
      imageUrl: string;
      stock: number;
      isFeatured: boolean;
      categoryId: string;
    }>;
    meta: {
      page: number;
      limit: number;
      totalItems: number;
      totalPages: number;
    }
  }
  ```
- **Xác thực (Auth):** Không yêu cầu (Public)

### 2.2. Lấy dữ liệu Metadata cho Bộ Lọc (Filter Aggregations)
Để Frontend render được thanh Sidebar bộ lọc (các Danh mục hiện có, khoảng giá Max/Min của toàn hệ thống).
- **Method & Route:** `GET /api/v1/products/filters-meta`
- **Request Payload:** Không có
- **Response Payload (Success):**
  ```typescript
  interface GetFiltersMetaResponse {
    data: {
      categories: Array<{
        id: string;
        name: string;
        count: number; // Số lượng sản phẩm trong danh mục (Tùy chọn)
      }>;
      priceRange: {
        min: number;
        max: number;
      }
    }
  }
  ```
- **Xác thực (Auth):** Không yêu cầu (Public)

---

## 3. Xử lý Bất đồng bộ & Caching (Architecture & Background Jobs)

### 3.1. Tối ưu Truy vấn & Database Caching
- Việc truy vấn danh sách sản phẩm với nhiều bộ lọc (Filter) và sắp xếp (Sorting) sẽ tốn kém về mặt CPU của Database.
- Đối với API `GET /api/v1/products` khi không truyền nhiều param (chỉ lấy trang 1, mặc định):
  - **Redis Cache:** Cache toàn bộ response của trang 1 với TTL khoảng 5-10 phút. 
- Đối với API có truyền params phức tạp (`search`, `minPrice`, `maxPrice`):
  - Bỏ qua Cache (Bypass Cache), query trực tiếp vào Database, tận dụng triệt để các `INDEX` đã tạo ở phần 1.

### 3.2. Caching Metadata Bộ lọc
- API `GET /api/v1/products/filters-meta` (Lấy thông tin min/max giá, danh sách danh mục): Dữ liệu này rất ít khi thay đổi.
  - **Redis Cache:** Cache vĩnh viễn (TTL: vô hạn) hoặc 1 ngày.
  - **Cache Invalidation:** Khi có sản phẩm mới được thêm/sửa/xóa, Background Worker sẽ trigger việc tính toán lại min/max price và xóa cache cũ.

### 3.3. Tối ưu Search (Tương lai)
- Nếu số lượng sản phẩm lớn (>100.000) và tính năng tìm kiếm (`search`) dùng toán tử `LIKE %keyword%` gây chậm DB, đề xuất đẩy dữ liệu Product lên **Elasticsearch** (hoặc dùng Full-Text Search của MySQL/PostgreSQL) thông qua Background Job (RabbitMQ) mỗi khi sản phẩm được tạo/cập nhật.
