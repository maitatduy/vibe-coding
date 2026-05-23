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