# DESIGN BRIEF: TRANG CHỦ (HOME PAGE)

## 1. HỆ THỐNG LƯỚI & BỐ CỤC (LAYOUT SYSTEM)

- **Root Container**: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full min-h-screen bg-gray-50`
- **Khoảng cách chung (Section Spacing)**: Các khối section (Hero, Category, Featured Menu) xếp chồng theo chiều dọc với `flex flex-col gap-12` hoặc đệm trên dưới `py-12`.
- **HeroBanner Section**: Khối đầy chiều rộng trong container, `w-full h-[400px] md:h-[500px]`.
- **CategoryList Section**: Flexbox cuộn ngang trên mobile `flex overflow-x-auto gap-4 pb-4 snap-x hide-scrollbar`, Desktop dùng `grid grid-cols-4 md:grid-cols-6 gap-6`.
- **FeaturedMenu (ProductGrid) Section**: Grid layout `grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6`.
- **SocialProofBanner Section**: Banner mỏng dẹt kéo dài, `w-full py-8 mt-12`.

## 2. ĐẶC TẢ COMPONENT (COMPONENT SPECS)

- **HeroBanner** `[DUMB]`
  - Box Style: `rounded-2xl overflow-hidden relative flex flex-col justify-center px-8 md:px-16 shadow-lg bg-gray-900`
  - Typography: 
    - Tiêu đề chính: `text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight max-w-2xl`
    - Sub-title: `text-lg md:text-xl font-medium text-gray-200 mt-4 max-w-xl`
  - CTA Button: `mt-8 px-8 py-4 w-fit rounded-full font-bold text-white uppercase tracking-wider bg-orange-500`
  - Trạng thái tương tác (CTA): `hover:bg-orange-600 hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-500/30 transition-all duration-300`

- **CategoryList** `[DUMB]`
  - Box Style (Wrapper): `w-full flex gap-4 overflow-x-auto snap-x snap-mandatory`

- **CategoryCard** `[DUMB]`
  - Box Style: `min-w-[120px] flex-shrink-0 flex flex-col items-center justify-center p-4 bg-white rounded-2xl shadow-sm border border-gray-100 snap-center`
  - Typography: `text-sm font-semibold text-gray-700 mt-3 text-center`
  - Trạng thái tương tác: `hover:border-orange-200 hover:shadow-md hover:bg-orange-50 transition-all cursor-pointer`

- **ProductGrid** `[DUMB]`
  - Typography (Tiêu đề Section): `text-2xl md:text-3xl font-bold text-gray-900 mb-6`
  - Box Style: `w-full grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6`

- **ProductCard** `[DUMB]`
  - Box Style: `bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex flex-col h-full relative group`
  - Ảnh Thumbnail: `w-full aspect-square rounded-xl object-cover bg-gray-50 mb-4`
  - Typography:
    - Tên sản phẩm: `text-base font-semibold text-gray-800 line-clamp-2 leading-snug`
    - Giá tiền: `text-lg font-bold text-gray-900 mt-2`
  - Badge Khuyến mãi: `absolute top-6 right-6 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-lg z-10`
  - Nút [+] Add to Cart: `absolute bottom-4 right-4 w-10 h-10 flex items-center justify-center rounded-xl bg-orange-100 text-orange-600`
  - Trạng thái tương tác: 
    - Card: `hover:shadow-lg hover:border-orange-100 hover:-translate-y-1 transition-all duration-300`
    - Nút [+]: `hover:bg-orange-500 hover:text-white active:scale-95 transition-colors`

- **SocialProofBanner** `[DUMB]`
  - Box Style: `bg-orange-100 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-center text-center mx-0 shadow-inner`
  - Typography: `text-base md:text-lg font-medium text-orange-900`
  - Highlight Text: `font-bold text-orange-600`

## 3. RÀNG BUỘC MÀU SẮC (COLOR CONSTRAINTS)

- **Nền trang (Background)**: `bg-gray-50`
- **Nền thẻ (Card/Surface)**: `bg-white`
- **CTA Chính (Thêm vào giỏ, Mua ngay)**: `bg-orange-500`, hover `hover:bg-orange-600`. Chữ CTA `text-white`.
- **Badge/Khuyến mãi (Highlights)**: `bg-red-600` hoặc `text-red-600`.
- **Typography**: 
  - Tiêu đề chính/Giá tiền: `text-gray-900`
  - Tên sản phẩm/Sub-heading: `text-gray-800`
  - Đoạn văn/Label: `text-gray-600`
- **Viền (Border)**: `border-gray-100` hoặc `border-gray-200`.

## 4. MOCK DATA (DỮ LIỆU HIỂN THỊ)

- **HeroBanner**:
  - Tiêu đề: "Nạp Năng Lượng - Code Phê Hơn"
  - Sub-title: "Combo Thức Khuya giảm giá 20% từ 22h – 2h sáng"
  - CTA Button: "MUA NGAY KẺO ĐÓI"
  - URL Ảnh nền: `https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=1200&h=500`

- **Danh mục (Categories)**:
  - 1: Đồ Ăn Vặt (Icon Placeholder)
  - 2: Nước Uống (Icon Placeholder)
  - 3: Trái Cây Tô (Icon Placeholder)
  - 4: Combo Deadline (Icon Placeholder)

- **Sản phẩm Nổi bật (Featured Products)**:
  - **Sản phẩm 1**:
    - Tên: "Khô Gà Lá Chanh Xé Cay"
    - Giá: "45.000 ₫"
    - Hình ảnh: `https://images.unsplash.com/photo-1585238342024-78d387f4a707?auto=format&fit=crop&q=80&w=400&h=400`
  - **Sản phẩm 2**:
    - Tên: "Trà Sữa Oolong Nướng Full Topping"
    - Giá: "35.000 ₫"
    - Hình ảnh: `https://images.unsplash.com/photo-1558857563-b37102e99e00?auto=format&fit=crop&q=80&w=400&h=400`

- **SocialProofBanner**:
  - Message: "Hơn **500+ anh em dev** đã nạp năng lượng tại đây đêm nay!" (Đoạn 500+ anh em dev dùng `text-orange-600 font-bold`).
