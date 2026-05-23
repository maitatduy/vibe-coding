# FRONTEND PLAN: Slide-out Cart Drawer

## 1. PHÂN RÃ COMPONENT (COMPONENT TREE)

- **[SMART] CartDrawer**: Container chính của giỏ hàng. Gọi Global State để lấy danh sách sản phẩm, quản lý trạng thái mở/đóng, xử lý logic tăng/giảm số lượng và gọi API.
  - **[DUMB] DrawerBackdrop** _(Tiềm năng Shared UI)_: Lớp nền tối được làm mờ (`backdrop-blur`). Bắt sự kiện click để đóng giỏ hàng.
  - **[DUMB] DrawerContainer** _(Tiềm năng Shared UI)_: Khung chứa ngăn kéo, xử lý hiệu ứng trượt (slide-out) từ phải sang trái.
    - **[DUMB] CartHeader**: Phần tiêu đề (VD: "Giỏ hàng của bạn") và nút [X] màu xám nhạt để đóng.
    - **[DUMB] CartItemList**: Vùng chứa danh sách sản phẩm, thiết lập chiều cao tối đa và cuộn dọc.
      - **[DUMB] CartItem**: Component hiển thị thông tin chi tiết của một sản phẩm (Thumbnail, Tên, Giá).
        - **[DUMB] QuantityStepper** _(Tiềm năng Shared UI)_: Component bộ đếm số lượng (nút [+] và [-]).
        - **[DUMB] RemoveButton** _(Tiềm năng Shared UI)_: Nút xóa sản phẩm với màu xám nhạt.
    - **[DUMB] CartSummary**: Vùng chứa phần tạm tính, luôn ghim cố định (sticky) ở dưới cùng. Hiển thị phí giao hàng (nhấn mạnh màu xanh lá) và tổng tiền.
    - **[DUMB] CheckoutButton** _(Tiềm năng Shared UI)_: Nút "Thanh Toán Ngay", bắt buộc dùng màu nền `bg-orange-600`.

## 2. QUẢN LÝ TRẠNG THÁI (STATE MANAGEMENT)

- **Trạng thái Global (Zustand / Redux / Pinia):**
  - `isCartOpen` (`boolean`): Trạng thái hiển thị của ngăn kéo giỏ hàng. Cần global để các nút ở Navbar hay trang sản phẩm có thể mở Drawer.
  - `cartItems` (`ICartItem[]`): Danh sách các sản phẩm hiện có trong giỏ hàng.
  - `isLoading` (`boolean`): Trạng thái chờ tổng thể khi đang cập nhật dữ liệu giỏ hàng với server.

- **Trạng thái Cục bộ (`useState`):**
  - `isUpdatingItem` (`boolean` - nằm trong `CartItem`): Trạng thái chờ xử lý riêng biệt cho từng sản phẩm khi người dùng vừa bấm tăng/giảm số lượng hoặc xóa, nhằm disable nút liên quan tránh spam click.

- **Trạng thái URL Query Parameters:**
  - `?cart=open` (Hoặc hash `#cart`): Nên đồng bộ trạng thái mở giỏ hàng lên URL. Giúp người dùng có thể chia sẻ link ngay bước kiểm tra giỏ hàng, hoặc khi tải lại trang Drawer vẫn giữ nguyên trạng thái mở.

## 3. CẤU TRÚC DỮ LIỆU (DATA INTERFACES)

```typescript
// Interface cấu trúc dữ liệu của một sản phẩm trong giỏ
export interface ICartItem {
  id: string;
  productId: string;
  name: string;
  thumbnailUrl: string;
  currentPrice: number;
  quantity: number;
}

// Props cho component hiển thị 1 sản phẩm (DUMB)
export interface CartItemProps {
  item: ICartItem;
  isDisabled?: boolean;
  onIncreaseQuantity: (itemId: string) => void;
  onDecreaseQuantity: (itemId: string) => void;
  onRemove: (itemId: string) => void;
}

// Props cho phần hiển thị tổng kết hóa đơn (DUMB)
export interface CartSummaryProps {
  itemsSubTotal: number;
  shippingFee: number;
  isFreeShipping: boolean;
  totalAmount: number;
  onCheckout: () => void;
}

// Props cho bộ đếm số lượng (DUMB)
export interface QuantityStepperProps {
  quantity: number;
  minQuantity?: number;
  maxQuantity?: number;
  isDisabled?: boolean;
  onIncrease: () => void;
  onDecrease: () => void;
}
```
