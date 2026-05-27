# QUY HOẠCH KIẾN TRÚC BACK-END: HOME PAGE (TRANG CHỦ)

Dựa trên yêu cầu nghiệp vụ từ `01-home-idea.md` và kiến trúc cốt lõi, dưới đây là bản thiết kế hạ tầng phục vụ riêng cho màn hình Trang chủ (Home Page).

## 1. Thiết kế Dữ liệu (Database Schema - Prisma ORM)

Màn hình trang chủ yêu cầu hiển thị Banner, Danh mục (Category) và Sản phẩm nổi bật (Featured Products). 

### Bảng `Category` (Cập nhật)
Lưu trữ danh mục sản phẩm (Đồ Ăn Vặt, Nước Uống, Trái Cây Tô,...)
- `id`: String (UUID) - Khóa chính (PK)
- `name`: String - Tên danh mục (VD: Đồ Ăn Vặt)
- `slug`: String - URL thân thiện, `UNIQUE INDEX`
- `icon`: String? - URL icon hiển thị trên trang chủ
- `parentId`: String? - Khóa ngoại (FK) hỗ trợ cấu trúc cây (Parent → Child)
- `isActive`: Boolean - Trạng thái hiển thị (Mặc định: `true`)
- `createdAt`, `updatedAt`: DateTime

### Bảng `Product` (Cập nhật)
Lưu trữ thông tin sản phẩm (Khô Gà Lá Chanh Xé Cay, Trà Sữa...)
- `id`: String (UUID) - Khóa chính (PK)
- `name`: String - Tên sản phẩm
- `slug`: String - `UNIQUE INDEX`
- `description`: Text? - Mô tả sản phẩm
- `price`: Decimal - Giá gốc
- `salePrice`: Decimal? - Giá khuyến mãi
- `stock`: Int - Tồn kho
- `imageUrl`: String - Link ảnh hiển thị
- `isFeatured`: Boolean - Đánh dấu sản phẩm bán chạy/nổi bật để đưa ra trang chủ (Mặc định: `false`), có `INDEX`
- `categoryId`: String - Khóa ngoại (FK) liên kết bảng Category
- `isActive`: Boolean - Trạng thái hiển thị (Mặc định: `true`)
- `createdAt`, `updatedAt`: DateTime

### Bảng `Banner` (Tạo mới)
Lưu trữ các chiến dịch Hero Banner (VD: "Combo Thức Khuya Coder")
- `id`: String (UUID) - Khóa chính (PK)
- `title`: String - Tiêu đề chính
- `subtitle`: String? - Tiêu đề phụ
- `imageUrl`: String - Ảnh banner
- `ctaText`: String? - Chữ trên nút CTA (VD: "Mua ngay")
- `ctaLink`: String? - Link điều hướng khi bấm vào CTA
- `isActive`: Boolean - Trạng thái hoạt động (Mặc định: `true`), có `INDEX`
- `order`: Int - Thứ tự sắp xếp
- `createdAt`, `updatedAt`: DateTime

---

## 2. Giao kèo API (API Contract)

### 2.1. Lấy danh sách Banner
- **Method & Route:** `GET /api/v1/home/banners`
- **Request Payload:** Không có
- **Response Payload (Success):**
  ```typescript
  interface GetBannersResponse {
    data: Array<{
      id: string;
      title: string;
      subtitle: string;
      imageUrl: string;
      ctaText: string;
      ctaLink: string;
    }>;
  }
  ```
- **Xác thực (Auth):** Không yêu cầu (Public)

### 2.2. Lấy danh sách Danh mục hiển thị ở trang chủ
- **Method & Route:** `GET /api/v1/home/categories`
- **Request Payload:** `Query { limit?: number }`
- **Response Payload (Success):**
  ```typescript
  interface GetHomeCategoriesResponse {
    data: Array<{
      id: string;
      name: string;
      slug: string;
      icon: string;
    }>;
  }
  ```
- **Xác thực (Auth):** Không yêu cầu (Public)

### 2.3. Lấy danh sách Sản phẩm Nổi bật (Featured Menu)
- **Method & Route:** `GET /api/v1/home/featured-products`
- **Request Payload:** `Query { limit?: number }` (Mặc định: 8)
- **Response Payload (Success):**
  ```typescript
  interface GetFeaturedProductsResponse {
    data: Array<{
      id: string;
      name: string;
      slug: string;
      price: number;
      salePrice: number | null;
      imageUrl: string;
      stock: number;
    }>;
  }
  ```
- **Xác thực (Auth):** Không yêu cầu (Public)

---

## 3. Xử lý Bất đồng bộ & Caching (Architecture & Background Jobs)

### 3.1. Caching (Redis)
Trang chủ là màn hình có lượng truy cập lớn nhất (Phễu đón khách đầu tiên), tuy nhiên dữ liệu lại rất ít khi thay đổi theo thời gian thực (Banner, Category, Featured Product). Do đó:
- **BẮT BUỘC sử dụng Redis** để cache toàn bộ các API endpoint bắt đầu bằng `/api/v1/home/*`.
- **Chiến lược Cache:** 
  - Cache TTL: 1 giờ (3600s) cho dữ liệu Home.
  - Cache Invalidation (Xóa cache): Bất cứ khi nào Admin tạo/sửa/xóa Product, Category hoặc Banner, hệ thống sẽ phát ra một sự kiện để xóa (flush) key tương ứng trên Redis, đảm bảo người dùng luôn thấy dữ liệu mới nhất mà không phải chờ TTL hết hạn.

### 3.2. Background Jobs (RabbitMQ/BullMQ)
- Nếu có tính năng cập nhật trạng thái "Khuyến mãi" theo giờ (VD: giảm 20% từ 22h-2h), sử dụng **Cron Job** (BullMQ) để quét và tự động cập nhật lại `salePrice` cho sản phẩm và trigger xóa Redis Cache tự động vào lúc 22:00 và 02:00.
