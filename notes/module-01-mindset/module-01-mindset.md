# Module 01 — Tư Duy & Nền Tảng

## 1. Tổng quan

Module này trình bày về các chủ đề:

- Vibe Coding
- Agentic Workflow
- System Architect
- Hệ sinh thái công cụ
- Điểm yếu của AI và cách gỡ rối.

## 2. Vibe Coding

### 2.1. Định nghĩa

Vibe coding là phương pháp lập trình bằng ngôn ngữ tự nhiên bắt đầu từ đầu năm 2025. Con người không cần tự tay viết code mà chỉ điều khiển AI xây dựng toàn bộ ứng dụng.

### 2.2. Bản chất của Vibe Coding

Người dùng đóng vai trò là Kiến trúc sư hoặc Quản lý sản phẩm để định hình vibe (ý tưởng, hệ thống, kiểm tra), còn AI đảm nhận việc gõ và sửa code.

- **Lập trình bằng hội thoại:** Ra lệnh bằng tiếng người (ví dụ: "Tạo web quản lý chi tiêu"), AI sẽ tự động viết mã, sửa lỗi và chạy thử sản phẩm.

- **Tập trung vào tư duy hệ thống:** Người dùng không cần học code phức tạp, chỉ cần tập trung vào logic vận hành và kỹ năng giao tiếp với AI.

## 3. Agentic Workflow

### 3.1. Định nghĩa

Agentic Workflow là phương pháp kết nối nhiều AI Agent để tự động thực hiện chuỗi công việc phức tạp, thay vì chỉ xử lý từng câu lệnh đơn lẻ. Agentic Workflow hoạt động như một đội ngũ nhân sự tự vận hành.

Ta chỉ cần giao mục tiêu lớn, các AI Agent sẽ tự lên kế hoạch, tự phân vai, tự sửa lỗi cho nhau và giao lại kết quả hoàn chỉnh.

### 3.2. Cơ chế hoạt động

- **Cách cũ:** Người dùng phải ra lệnh từng bước Hỏi - Đáp và tự tay chắp nối kết quả.

- **Cách mới:** Người dùng chỉ giao mục tiêu lớn, hệ thống tự kích hoạt các Agent chuyên biệt phối hợp (ví dụ: Agent Nghiên cứu $\rightarrow$ Agent Viết lách $\rightarrow$ Agent Biên tập $\rightarrow$ Agent Đăng tải).

### 3.3. 4 Trụ cột cốt lõi của Agentic Workflow

- Tự đánh giá: AI tự kiểm tra kết quả sản phẩm và sửa lỗi trước khi bàn giao.

- Sử dụng công cụ: AI biết tự dùng Google, chạy code Python, gọi API để lấy dữ liệu thực tế.

- Lập kế hoạch: Tự chia nhỏ nhiệm vụ lớn thành các bước khả thi và thực hiện tuần tự.

- Cộng tác đa tác nhân: Nhiều Agent phân vai khác nhau (ví dụ: Dev và Tester) để phản biện, hoàn thiện công việc.

## 4. Mối quan hệ giữa Vibe Coding

- Agentic Workflow là động cơ bên dưới: Hạ tầng công nghệ giúp AI tự phối hợp, xử lý việc lớn.

- Vibe Coding là trải nghiệm bên trên: Người dùng chỉ cần đưa ý tưởng, hệ thống bên dưới sẽ tự vận hành để tạo ra sản phẩm hoàn chỉnh.

## 5. Hệ sinh thái công cụ

Hệ sinh thái công cụ hỗ trợ Vibe Coding và Agentic Workflow được chia thành 3 lớp chính:

### 5.1. Lớp Ứng dụng

Xây dựng ứng dụng nhanh từ ngôn ngữ tự nhiên thông qua trình duyệt, không cần cài đặt môi trường phức tạp.

- **Bolt.new / v0:** Chuyên tạo nhanh UI/UX và Prototype.

- **Lovable / Replit Agent:** Tự động xây dựng ứng dụng Full-stack.

- **Manus / Emergent:** Các Agent thế hệ mới tự vận hành từ nghiên cứu đến triển khai sản phẩm.

### 5.2. Lớp Môi trường Phát triển

Dành cho lập trình viên làm việc trực tiếp trên mã nguồn, kiểm soát sâu kiến trúc hệ thống.

- **Cursor / Windsurf:** IDE tích hợp sâu AI, hiểu toàn bộ ngữ cảnh dự án và sửa nhiều file cùng lúc.

- **GitHub Copilot / Claude Code:** Trợ lý AI hoạt động qua dòng lệnh (CLI) hoặc extension, hỗ trợ viết code và tạo unit test.

- **Google Antigravity:** Nền tảng điều khiển và vận hành song song nhiều AI Agent cùng lúc, tối ưu riêng cho các dự án phần mềm có cấu trúc phức tạp.

- **Stitch:** Công nghệ tự động ghép nối và đồng bộ các đoạn mã do AI chỉnh sửa trên nhiều file/dự án con, đảm bảo hệ thống không bị xung đột hay gãy cấu trúc.

### 5.3. Lớp Hạ tầng & Khung vận hành

Nền tảng kỹ thuật bên dưới giúp quản lý và kết nối quy trình làm việc của các AI Agent.

- **LangGraph / AutoGen:** Framework thiết lập luồng tư duy và tạo vòng lặp phản biện giữa các Agent.

- **MCP (Model Context Protocol):** Giao thức mở giúp AI Agent kết nối và sử dụng các công cụ bên ngoài (Google Search, Python Sandbox, API).

## 6. Monorepo

Monorepo - Quản lý nhiều dự án trong một kho lưu trữ duy nhất là môi trường lý tưởng cho các AI Agent nhờ khả năng đồng bộ ngữ cảnh tối đa.

### 6.1. Lý do AI Agent tối ưu trên Monorepo

**Hiểu toàn bộ ngữ cảnh:** AI có thể đọc hiểu đồng thời cả Front-end, Back-end và Cơ sở dữ liệu thay vì bị giới hạn tầm nhìn như ở mô hình Multi-repo.

**Sửa đổi đa nền tảng đồng thời:** Agent có thể tự động cập nhật logic ở Back-end và cập nhật ngay giao diện ở Front-end trong cùng một phiên làm việc.

**Tái sử dụng mã nguồn:** AI dễ dàng gọi và chia sẻ các hàm, thư viện dùng chung sẵn có để tạo tính năng mới.

### 6.2. Công cụ quản lý cốt lõi

**Nx / Turborepo:** Công cụ quản lý build thông minh, giúp AI hiểu sơ đồ phụ thuộc để chỉ chạy test/build ở những phần bị ảnh hưởng bởi code do AI sinh ra.

### 6.3. Thách thức

**Giới hạn ngữ cảnh:** Dự án quá lớn dễ gây tràn token của AI, đòi hỏi công cụ lập chỉ mục thông minh để lọc file liên quan.

**Rủi ro hệ thống:** Lỗi sai của AI tại thư viện dùng chung có thể làm ảnh hưởng đến toàn bộ các dự án con bên trong Monorepo.
