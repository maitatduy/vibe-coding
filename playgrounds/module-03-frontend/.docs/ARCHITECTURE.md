# KIẾN TRÚC HỆ THỐNG: HRM SYSTEM

## 1. Sơ đồ dữ liệu cốt lõi (Core Database Entities)

- **Employee (Nhân viên):** `fullName`, `email`, `phone`, `avatarUrl`,
  `departmentId`, `positionId`, `startDate`, `status` (`ACTIVE` / `RESIGNED`)
- **Department (Phòng ban):** `name`, `managerId`. Không hỗ trợ cấu trúc cây —
  phòng ban là phẳng (flat), không có Parent → Child.
- **Position (Chức vụ):** `name`, `level`, `baseSalary`
- **Attendance (Chấm công):** `employeeId`, `date`, `checkIn`, `checkOut`,
  `totalHours`, `status` (`ON_TIME` / `LATE` / `ABSENT`)
- **LeaveRequest (Đơn xin nghỉ):** `employeeId`, `type` (`LEAVE` / `OVERTIME` / `BUSINESS_TRIP`),
  `fromDate`, `toDate`, `reason`, `status` (`PENDING` / `APPROVED` / `REJECTED`),
  `approvedBy`, `approvedAt`
- **Payroll (Bảng lương):** `employeeId`, `month`, `year`, `baseSalary`,
  `allowance`, `deduction`, `netSalary`, `status` (`PENDING` / `APPROVED`)
  Giá trị `netSalary` BẮT BUỘC lưu cứng tại thời điểm duyệt,
  TUYỆT ĐỐI không tính lại từ bảng `Position`.

## 2. Luồng nghiệp vụ tối quan trọng (Critical Business Logic)

### Tính lương (Payroll Calculation)

- Mọi phép tính lương (baseSalary + allowance - deduction) BẮT BUỘC thực hiện ở Backend
- TUYỆT ĐỐI không tin dữ liệu lương gửi lên từ Frontend
- Frontend chỉ được gửi `employeeId`, `month`, `year` để trigger tính toán

### Phê duyệt đơn (Leave Approval)

- Trạng thái đơn mặc định: `PENDING`
- Chỉ HR Manager hoặc Trưởng phòng mới được chuyển sang `APPROVED` / `REJECTED`
- BẮT BUỘC lưu `approvedBy` và `approvedAt` khi duyệt — không được để null
- Đơn đã `APPROVED` hoặc `REJECTED` TUYỆT ĐỐI không cho phép chỉnh sửa lại

### Chấm công (Attendance)

- Trừ ngày công tự động khi đơn nghỉ được `APPROVED`
- Nếu `checkIn` sau giờ quy định → tự động đánh dấu `LATE`
- Nếu không có bản ghi `checkIn` đến cuối ngày → tự động đánh dấu `ABSENT`

## 3. Quy chuẩn API (API Standards)

- **Pagination:** Mọi API trả về danh sách BẮT BUỘC có `page`, `limit`, `totalPages`
- **Phân quyền:** Mọi API BẮT BUỘC kiểm tra role — `ADMIN` / `HR_MANAGER` / `EMPLOYEE`
  Nhân viên thường chỉ được đọc dữ liệu của chính mình
- **Bảo mật:** API duyệt lương và phê duyệt đơn BẮT BUỘC có Rate Limit và ghi Audit Log