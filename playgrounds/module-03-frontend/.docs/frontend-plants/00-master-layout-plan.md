# BẢN QUY HOẠCH KỸ THUẬT: BỐ CỤC TOÀN CỤC (MASTER LAYOUT)

Bản quy hoạch kỹ thuật này chi tiết hóa ý tưởng thiết kế Master Layout cho hệ thống HRM (Human Resource Management) chạy trên nền tảng tối ưu hóa hiệu năng, đảm bảo khả năng tái sử dụng cao, phân tách trách nhiệm rõ ràng (Separation of Concerns) và tuân thủ các tiêu chuẩn UX/UI hiện đại.

---

## 1. PHÂN RÃ COMPONENT (COMPONENT TREE)

Hệ thống Master Layout được thiết kế theo mô hình phân rã phân cấp từ ngoài vào trong, áp dụng mô hình **Smart (Container) & Dumb (Presentational) Components** nhằm tối ưu hóa số lượng re-render và dễ dàng kiểm thử.

```
LayoutWrapper [SMART]
├── SidebarContainer [DUMB]
│   ├── SystemLogo [DUMB] (*Shared UI*)
│   ├── SidebarNavigation [DUMB]
│   │   └── SidebarNavItem [DUMB]
│   └── SidebarFooter [DUMB]
│       ├── UserSessionInfo [DUMB]
│       └── LogoutButton [DUMB] (*Shared UI*)
└── MainContentArea [DUMB]
    ├── StickyHeader [SMART]
    │   ├── BreadcrumbNavigation [DUMB] (*Shared UI*)
    │   └── HeaderActionGroup [DUMB]
    │       ├── NotificationCenter [SMART]
    │       │   ├── NotificationTrigger [DUMB] (*Shared UI*)
    │       │   └── NotificationPopover [DUMB]
    │       │       └── NotificationItem [DUMB]
    │       └── UserProfileBadge [DUMB] (*Shared UI*)
    └── ContentCanvas [DUMB] (*Shared UI*)
```

### Chi tiết các Component:

1. **`LayoutWrapper` [SMART]**
   - *Mô tả:* Component cha bọc toàn bộ hệ thống. Quản lý luồng xác thực tổng thể và các thiết lập toàn cục.
   - *Trách nhiệm:* Kiểm tra trạng thái đăng nhập, xử lý redirect nếu chưa xác thực, và cung cấp context giao diện.
   - *Tái sử dụng:* Không (Layout đặc thù của ứng dụng).

2. **`SidebarContainer` [DUMB]**
   - *Mô tả:* Thanh điều hướng bên trái cố định (`position: fixed`).
   - *Trách nhiệm:* Nhận danh sách menu và thông tin người dùng từ `LayoutWrapper` để truyền xuống các component con.
   - *Tái sử dụng:* Không (Bố cục đặc thù).

3. **`SystemLogo` [DUMB] (*Shared UI*)**
   - *Mô tả:* Hiển thị logo và thương hiệu HRM System.
   - *Trách nhiệm:* Hiển thị hình ảnh logo và tên hệ thống, điều hướng về Trang chủ khi click.
   - *Tái sử dụng:* Có (Sử dụng tại trang Login, Landing page, Báo cáo in ấn).

4. **`SidebarNavigation` [DUMB]**
   - *Mô tả:* Danh sách liên kết điều hướng dọc.
   - *Trách nhiệm:* Duyệt qua danh sách menu để render các item điều hướng tương ứng.
   - *Tái sử dụng:* Không.

5. **`SidebarNavItem` [DUMB]**
   - *Mô tả:* Điểm neo (Link) của từng menu item (Dashboard, Nhân viên, Chấm công...).
   - *Trách nhiệm:* Quản lý trạng thái Active dựa trên route hiện tại. Hiển thị Icon, Label, Badge số lượng (nếu có).
   - *Tái sử dụng:* Không.

6. **`SidebarFooter` [DUMB]**
   - *Mô tả:* Khối dưới cùng của Sidebar.
   - *Trách nhiệm:* Chứa thông tin tài khoản và nút đăng xuất.
   - *Tái sử dụng:* Không.

7. **`UserSessionInfo` [DUMB]**
   - *Mô tả:* Hiển thị nhanh thông tin tài khoản người dùng đang đăng nhập.
   - *Trách nhiệm:* Render Avatar, Tên đầy đủ, Vai trò (Role).
   - *Tái sử dụng:* Không.

8. **`LogoutButton` [DUMB] (*Shared UI*)**
   - *Mô tả:* Nút kích hoạt hành động đăng xuất.
   - *Trách nhiệm:* Nhận hàm callback `onLogout` và render giao diện nút bấm kèm icon logout.
   - *Tái sử dụng:* Có.

9. **`MainContentArea` [DUMB]**
   - *Mô tả:* Vùng chứa nội dung trang bên phải.
   - *Trách nhiệm:* Định hình khung layout lưới (Flexbox/Grid), thiết lập background tối.
   - *Tái sử dụng:* Không.

10. **`StickyHeader` [SMART]**
    - *Mô tả:* Thanh header cố định ở trên cùng của vùng nội dung (`position: sticky`).
    - *Trách nhiệm:* Theo dõi vị trí cuộn trang để thay đổi độ mờ đục (opacity/backdrop-filter), đồng bộ breadcrumb theo tuyến đường (route).
    - *Tái sử dụng:* Không.

11. **`BreadcrumbNavigation` [DUMB] (*Shared UI*)**
    - *Mô tả:* Thanh điều hướng phân cấp (Breadcrumb).
    - *Trách nhiệm:* Nhận mảng các phần tử path và render liên kết tương ứng.
    - *Tái sử dụng:* Có (Dùng trong các trang con để điều hướng ngược dòng).

12. **`HeaderActionGroup` [DUMB]**
    - *Mô tả:* Nhóm các hành động tiện ích góc trên bên phải.
    - *Trách nhiệm:* Sắp xếp bố cục cho Notification, UserProfileBadge, Ngôn ngữ...
    - *Tái sử dụng:* Không.

13. **`NotificationCenter` [SMART]**
    - *Mô tả:* Trung tâm quản lý thông báo của nhân viên/quản trị viên.
    - *Trách nhiệm:* Gọi API lấy danh sách thông báo chưa đọc, quản lý trạng thái đóng/mở popover, xử lý đánh dấu đã đọc.
    - *Tái sử dụng:* Không.

14. **`NotificationTrigger` [DUMB] (*Shared UI*)**
    - *Mô tả:* Nút hình Chuông thông báo kèm Badge số lượng chưa đọc.
    - *Trách nhiệm:* Nhận sự kiện click để đóng/mở popover, hiển thị số thông báo chưa đọc.
    - *Tái sử dụng:* Có (Có thể dùng ở các dự án phụ hoặc layout khác).

15. **`NotificationPopover` [DUMB]**
    - *Mô tả:* Hộp thoại nổi lên chứa danh sách thông báo.
    - *Trách nhiệm:* Hiển thị danh sách thông báo và nút "Đánh dấu tất cả đã đọc".
    - *Tái sử dụng:* Không.

16. **`NotificationItem` [DUMB]**
    - *Mô tả:* Chi tiết một thông báo (Tiêu đề, thời gian, trạng thái đọc/chưa đọc).
    - *Trách nhiệm:* Render giao diện thông báo, xử lý hiệu ứng hover và click chuyển trang liên quan.
    - *Tái sử dụng:* Không.

17. **`UserProfileBadge` [DUMB] (*Shared UI*)**
    - *Mô tả:* Nút avatar nhỏ ở góc Header.
    - *Trách nhiệm:* Hiển thị ảnh đại diện và mở ra menu cài đặt nhanh/thông tin cá nhân khi click.
    - *Tái sử dụng:* Có.

18. **`ContentCanvas` [DUMB] (*Shared UI*)**
    - *Mô tả:* Khung chứa nội dung động của trang con.
    - *Trách nhiệm:* Cung cấp padding chuẩn hóa (thường là `p-6` hoặc `p-8`), hỗ trợ scroll độc lập, thiết lập background.
    - *Tái sử dụng:* Có (Được dùng để wrap mọi trang con trong hệ thống).

---

## 2. QUẢN LÝ TRẠNG THÁI (STATE MANAGEMENT)

Để Master Layout hoạt động mượt mà, phân cấp quản lý trạng thái được phân chia tối ưu dựa trên vòng đời và phạm vi sử dụng của dữ liệu:

### 2.1. Trạng thái Toàn cục (Global State) - Quản lý bằng Zustand
Sử dụng Zustand cho các trạng thái cần chia sẻ giữa nhiều component không cùng cấp hoặc cần duy trì xuyên suốt phiên làm việc.

| Tên State | Kiểu dữ liệu | Phạm vi ảnh hưởng | Mục đích sử dụng |
| :--- | :--- | :--- | :--- |
| `currentUser` | `UserProfile \| null` | `UserSessionInfo`, `UserProfileBadge`, `LayoutWrapper` | Lưu thông tin chi tiết tài khoản đã đăng nhập để hiển thị UI và phân quyền. |
| `notifications` | `AppNotification[]` | `NotificationCenter`, `NotificationList` | Danh sách các thông báo thực tế của người dùng. |
| `unreadCount` | `number` | `NotificationTrigger` | Số lượng thông báo chưa đọc, hiển thị badge màu đỏ ở chuông. |
| `isSidebarCollapsed`| `boolean` | `SidebarContainer`, `MainContentArea` | Trạng thái thu gọn/mở rộng của Sidebar (tối ưu không gian hiển thị). |

### 2.2. Trạng thái Cục bộ (Local State) - Quản lý bằng `useState`
Sử dụng trạng thái cục bộ cho các tương tác UI mang tính độc lập và ngắn hạn.

| Tên State | Kiểu dữ liệu | Component sở hữu | Mục đích sử dụng |
| :--- | :--- | :--- | :--- |
| `isNotificationOpen`| `boolean` | `NotificationCenter` | Điều khiển đóng/mở Popover danh sách thông báo. |
| `isProfileMenuOpen` | `boolean` | `UserProfileBadge` | Điều khiển đóng/mở Dropdown cài đặt nhanh của User. |
| `isLoadingNotifications`| `boolean` | `NotificationCenter` | Trạng thái skeleton loading khi đang fetch API danh sách thông báo. |

### 2.3. Trạng thái Tuyến đường & URL (URL Query Parameters)
Để tối ưu trải nghiệm người dùng (UX), trạng thái định hướng được đồng bộ trực tiếp với URL để dễ dàng chia sẻ liên kết (Shareable links) và hỗ trợ nút Back/Forward của trình duyệt.

| Tên State | Nguồn đồng bộ | Component phụ thuộc | Mục đích sử dụng |
| :--- | :--- | :--- | :--- |
| `currentRoute` | `Router Path` (VD: `/employees`) | `SidebarNavItem`, `Breadcrumb` | Xác định mục menu nào sẽ được active và sinh ra chuỗi Breadcrumb tương ứng. |

---

## 3. CẤU TRÚC DỮ LIỆU (DATA INTERFACES)

Định nghĩa mã giả TypeScript nghiêm ngặt (Strict Typing, tuyệt đối không dùng `any`) cho các Dumb Component cốt lõi của hệ thống Master Layout.

```typescript
// ==========================================
// CẤU TRÚC DỮ LIỆU CƠ BẢN (DOMAIN MODEL)
// ==========================================

export type UserRole = 'ADMIN' | 'HR_MANAGER' | 'EMPLOYEE';

export interface UserProfile {
  id: string;
  email: string;
  fullName: string;
  avatarUrl: string;
  role: UserRole;
  department?: string;
}

export interface NavigationItem {
  id: string;
  label: string;
  path: string;
  icon: string; // Tên của icon trong bộ thư viện (ví dụ: 'dashboard', 'users')
  badgeCount?: number; // Số lượng hiển thị phụ (ví dụ: Phê duyệt: 5 đơn)
  allowedRoles?: UserRole[]; // Danh sách các role được quyền nhìn thấy menu này
}

export interface BreadcrumbItem {
  label: string;
  path?: string; // Không có path nghĩa là chặng cuối cùng (active)
}

export interface AppNotification {
  id: string;
  title: string;
  description: string;
  createdAt: string; // Định dạng ISO String
  isRead: boolean;
  type: 'INFO' | 'SUCCESS' | 'WARNING' | 'DANGER';
  actionUrl?: string; // Link điều hướng khi người dùng click vào thông báo
}

// ==========================================
// PROPS INTERFACES CHO DUMB COMPONENTS
// ==========================================

// 1. SidebarContainer Component Props
export interface SidebarContainerProps {
  systemName: string;
  logoUrl: string;
  menuItems: NavigationItem[];
  currentPath: string;
  currentUser: UserProfile | null;
  isCollapsed: boolean;
  onToggleCollapse: () => void;
  onLogout: () => Promise<void>;
}

// 2. SidebarNavigation Component Props
export interface SidebarNavigationProps {
  menuItems: NavigationItem[];
  currentPath: string;
  isCollapsed: boolean;
}

// 3. SidebarNavItem Component Props
export interface SidebarNavItemProps {
  item: NavigationItem;
  isActive: boolean;
  isCollapsed: boolean;
}

// 4. UserSessionInfo Component Props
export interface UserSessionInfoProps {
  user: UserProfile;
  isCollapsed: boolean;
}

// 5. BreadcrumbNavigation Component Props
export interface BreadcrumbNavigationProps {
  items: BreadcrumbItem[];
}

// 6. NotificationTrigger Component Props
export interface NotificationTriggerProps {
  unreadCount: number;
  onClick: () => void;
}

// 7. NotificationList Component Props
export interface NotificationListProps {
  notifications: AppNotification[];
  onMarkAsRead: (notificationId: string) => void;
  onMarkAllAsRead: () => void;
  isLoading: boolean;
}

// 8. NotificationItem Component Props
export interface NotificationItemProps {
  notification: AppNotification;
  onSelect: (notification: AppNotification) => void;
}

// 9. ContentCanvas Component Props
export interface ContentCanvasProps {
  children: React.ReactNode;
  className?: string;
}
```

---

## 4. PHƯƠNG ÁN TỐI ƯU HÓA HIỆU NĂNG (SYSTEM OPTIMIZATION)

1. **Lazy Loading trang con:** Sử dụng Dynamic Imports (`React.lazy` và `React.Suspense`) để chia nhỏ bundle size của từng phân hệ (Dashboard, Payroll, Employees) giúp trang Master Layout tải tức thì.
2. **React.memo cho Dumb Navigation Components:** Các components `SidebarNavItem`, `BreadcrumbNavigation` được bao bọc bởi `React.memo` để tránh re-render khi gõ tìm kiếm ở ContentCanvas hoặc thay đổi các state cục bộ khác.
3. **Virtual Scroll cho danh sách thông báo:** Sử dụng thư viện virtual scroll (ví dụ `react-window`) nếu danh sách thông báo trong `NotificationPopover` vượt quá 50 phần tử để tối ưu số lượng Node DOM.
4. **CSS Hardware Acceleration:** Sử dụng các thuộc tính CSS như `will-change: transform` hoặc `transform: translate3d` cho hiệu ứng trượt ẩn/hiện Sidebar để đảm bảo mượt mà ở tần số quét cao.
