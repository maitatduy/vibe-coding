# Ý TƯỞNG: TRANG DANH SÁCH SẢN PHẨM (Product List Page)

## 1. Thông tin chung (Meta Info)

- **Dự án:** TechBite
- **Tính năng:** Danh sách sản phẩm
- **Mục đích:** Hiển thị trang danh sách sản phẩm, đầy đủ thông tin sản phẩm giống như phần trang chủ

## 2. Đối tượng & Trải nghiệm (Target & UX)

- **Người dùng chính:** Lập trình viên, dân văn phòng, học viên IT hay thức khuya
- **Hành động chính:** Thể hiện bộ lọc để người dùng dễ dàng tìm kiếm được sản phẩm mong muốn, danh sách sản phẩm chia làm 4 cột, dễ dàng thao tác lọc và xem chi tiết sản phẩm
- **Cảm xúc mang lại:** Tươi trẻ, kích thích vị giác, tải nhanh (ít hiệu ứng rườm rà)

## 3. Đặc tả Thiết kế (Design Specs)

- **Phong cách UI:** Clean, ưu tiên Whitespace, bo góc mềm mại (`rounded-2xl`)
- **Màu sắc chủ đạo:**
    - CTA chính (Mua ngay, Thêm vào giỏ): `bg-[#ff8c42]`.
    - Badge giảm giá, chữ nổi bật: `bg-[#A63D40]` hoặc `text-[#A63D40]`.
- **Cấu trúc màn hình (top → bottom):**
    - **Banner:** Banner lớn "Combo Thức Khuya Coder" + nút CTA to, rõ.
    - **Danh sách sản phẩm:** Chia bố cục dạng grid gồm 4 cột, có phân trang, có sắp xếp(thời gian cập nhật, giá, nổi bật).
    - **Bộ lọc** Nằm ỏ cột bên trái, có nút để ẩn bộ lọc nhằm mục đích phóng to sản phẩm.

## 4. Mock Data

- **Banner:** Sử dụng 1 ảnh quảng cáo bất kì trên unsplash.com.
- **Danh sách sản phẩm** Lấy tên sản phẩm bất kì liên quan đến đồ ăn, đồ uống. Ảnh sản phẩm sẽ lấy tương ứng trên unsplash.com.
