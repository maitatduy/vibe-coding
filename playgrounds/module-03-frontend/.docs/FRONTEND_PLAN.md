# FRONTEND ARCHITECTURE PLAN - HR OVERVIEW DASHBOARD

Bản quy hoạch kiến trúc Frontend chi tiết cho tính năng **Dashboard Tổng Quan HRM** theo chuẩn Vercel-inspired (Minimalist Dark Mode, High Performance, Type-Safe).

---

## 1. PHÂN RÃ COMPONENT (COMPONENT TREE)

Hệ thống được chia nhỏ thành các Component cấu trúc phân cấp rõ ràng. Các Component được đóng gói độc lập để tối đa hóa khả năng tái sử dụng và kiểm thử.

```text
src/
├── components/
│   ├── shared/                                 # [Shared UI] Dùng chung toàn hệ thống
│   │   ├── Button/                             # [DUMB] [Shared UI] Nút bấm đa năng (Variants: Primary, Secondary, Danger, Ghost)
│   │   ├── Card/                               # [DUMB] [Shared UI] Container với border tinh tế (border-zinc-800, bg-zinc-900)
│   │   ├── Table/                              # [DUMB] [Shared UI] Bảng tối giản hỗ trợ phân trang & loading skeleton
│   │   ├── Badge/                              # [DUMB] [Shared UI] Nhãn trạng thái nhân viên/đơn xin nghỉ phép
│   │   ├── Avatar/                             # [DUMB] [Shared UI] Avatar tròn với fallback chữ cái đầu (Initials)
│   │   └── Skeleton/                           # [DUMB] [Shared UI] Placeholder nhấp nháy tạo cảm giác tải mượt mà
│   │
│   └── dashboard/                              # [Feature-specific] Chuyên biệt cho Dashboard
│       ├── DashboardHeader/                    # [DUMB] Header sticky chứa Breadcrumbs, TimeRangeSelector, User Profile
│       ├── DashboardSidebar/                   # [DUMB] Menu điều hướng bên trái cố định (Fixed Sidebar)
│       │
│       ├── KpiGrid/                            # [SMART] Container quản lý dữ liệu 4 thẻ KPI chính
│       │   └── KpiCard/                        # [DUMB] Hiển thị chỉ số KPI đơn lẻ, tỷ lệ tăng trưởng và xu hướng màu sắc
│       │
│       ├── ChartsSection/                      # [SMART] Container xử lý dữ liệu biểu đồ chấm công
│       │   └── AttendanceBarChart/             # [DUMB] Render biểu đồ cột tuần hiệu năng cao (sử dụng Recharts/Tremor)
│       │
│       ├── PendingRequestsSection/             # [SMART] Container điều phối nghiệp vụ duyệt/từ chối đơn
│       │   ├── RequestTable/                   # [DUMB] Bảng chi tiết danh sách đơn chờ duyệt & hành động nhanh
│       │   └── RequestActionModal/             # [DUMB] Modal xác nhận lý do từ chối hoặc xác nhận phê duyệt
│       │
│       └── RecentActivities/                   # [SMART] Container đón nhận tin tức & cập nhật thời gian thực (Real-time Stream)
│           └── ActivityList/                   # [DUMB] Render danh sách dòng sự kiện lịch sử check-in/hệ thống
│
└── pages/
    └── DashboardPage/                          # [SMART] Layout Wrapper phối hợp các Section, xử lý Khởi tạo dữ liệu ban đầu
```

---

## 2. QUẢN LÝ TRẠNG THÁI (STATE MANAGEMENT)

Hệ thống quản lý trạng thái chia làm 3 lớp chính để tối ưu hóa hiệu năng, trải nghiệm người dùng và khả năng chia sẻ liên kết (Bookmarkable UI).

### Bảng phân bổ trạng thái hệ thống

| Tên State | Kiểu Dữ Liệu | Chiến Lược Lưu Trữ | Lý Do & Vai Trò Kỹ Thuật |
| :--- | :--- | :--- | :--- |
| `timeRange` | `'7d' \| '30d' \| '90d' \| 'custom'` | **URL Query Parameters** (`?timeRange=...`) | Cho phép reload hoặc share link trực tiếp cho các HR Manager khác cùng xem đúng mốc thời gian báo cáo. |
| `searchQuery` | `string` | **URL Query Parameters** (`?q=...`) | Đồng bộ bộ lọc tìm kiếm hoạt động hoặc đơn từ lên URL để giữ bộ lọc khi quay về từ trang chi tiết. |
| `requestsFilter` | `'all' \| 'leave' \| 'overtime' \| 'sick'` | **URL Query Parameters** (`?filter=...`) | Lọc nhanh các loại đơn xin nghỉ/phép ngay trên URL. |
| `kpiSummary` | `KpiSummary` | **Global State (Zustand)** + Server Cache | Dữ liệu tổng hợp quan trọng có thể được tham chiếu chéo bởi các widgets khác ở các trang quản trị chuyên sâu. |
| `pendingRequests` | `PendingRequest[]` | **Global State (Zustand)** | Quản lý danh sách các đơn cần duyệt. Thay đổi tức thời trên UI khi admin bấm Approve/Reject mà không cần fetch lại toàn bộ. |
| `attendanceWeekly` | `WeeklyAttendance[]` | **Server State (React Query / SWR)** | Quản lý cache biểu đồ cột tuần. Tự động revalidate ngầm khi chuyển tab hoặc thay đổi `timeRange`. |
| `recentActivities` | `ActivityLog[]` | **Zustand** + WebSockets / SSE | Stream danh sách hoạt động nhân viên theo thời gian thực (check-in, check-out). Đẩy trực tiếp vào mảng global state. |
| `activeModalRequest` | `PendingRequest \| null` | **Local State (`useState`)** | Kiểm soát popup xác nhận Approve/Reject cho một dòng đơn cụ thể. |
| `isSubmittingAction` | `Record<string, boolean>` | **Local State (`useState`)** | Lưu trạng thái loading của từng nút duyệt theo Request ID (`[req_id]: true`) để tránh Double Submit. |

---

## 3. CẤU TRÚC DỮ LIỆU (DATA INTERFACES)

Định nghĩa Type-Safe chặt chẽ bằng TypeScript. Tuyệt đối không sử dụng `any` nhằm bảo đảm tính toàn vẹn dữ liệu từ API cho đến UI Components.

```typescript
// ==========================================
// CORE DOMAIN ENTITIES
// ==========================================

export type RequestType = 'leave' | 'overtime' | 'sick';
export type RequestStatus = 'pending' | 'approved' | 'rejected';

export interface EmployeeBrief {
  id: string;
  fullName: string;
  avatarUrl?: string;
  role: string;
  department: string;
}

export interface PendingRequest {
  id: string;
  employee: EmployeeBrief;
  type: RequestType;
  startDate: string;
  endDate: string;
  reason: string;
  status: RequestStatus;
  createdAt: string;
}

export interface AttendanceDataPoint {
  dayOfWeek: 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri';
  present: number;
  total: number;
  date: string;
}

export interface ActivityLog {
  id: string;
  timestamp: string;
  message: string;
  category: 'check_in' | 'request_status' | 'employee_new' | 'system';
  employeeId?: string;
}

// ==========================================
// DUMB COMPONENTS PROPS INTERFACES
// ==========================================

// 1. Props cho KpiCard (DUMB UI)
export interface KpiCardProps {
  title: string;
  value: string | number;
  changeRate?: number; // Ví dụ: +3.2 hoặc -1.5
  changeLabel?: string; // Ví dụ: "so với tháng trước"
  trend?: 'up' | 'down' | 'neutral';
  statusColor?: 'emerald' | 'red' | 'zinc';
  isLoading?: boolean;
}

// 2. Props cho RequestTable (DUMB UI)
export interface RequestTableProps {
  data: PendingRequest[];
  isLoading: boolean;
  submittingIds: Record<string, boolean>;
  onApprove: (id: string) => void;
  onReject: (id: string) => void;
  onViewDetail: (id: string) => void;
}

// 3. Props cho AttendanceBarChart (DUMB UI)
export interface AttendanceBarChartProps {
  data: AttendanceDataPoint[];
  isLoading: boolean;
  onBarClick?: (dataPoint: AttendanceDataPoint) => void;
}

// 4. Props cho ActivityList (DUMB UI)
export interface ActivityListProps {
  activities: ActivityLog[];
  isLoading: boolean;
  onClearAll?: () => void;
}

// 5. Props cho Shared Button (DUMB & SHARED UI)
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

// 6. Props cho Shared Badge (DUMB & SHARED UI)
export interface BadgeProps {
  variant: 'success' | 'warning' | 'danger' | 'info' | 'neutral';
  children: React.ReactNode;
  className?: string;
}
