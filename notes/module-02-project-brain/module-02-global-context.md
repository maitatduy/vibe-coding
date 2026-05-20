# Global Context - Thiết Lập Bộ Não Cho Dự Án

---

## File `.aiignore`

Hoạt động giống `.gitignore`, nhưng thay vì chặn Git - nó **chặn AI đọc các file rác**.

> Một file `package-lock.json` có thể chứa tới 50.000 dòng. Nếu AI đọc nó mỗi lần chat, Ta sẽ đốt token vô ích và làm loãng context.

```gitignore
# 1. Thư mục mã nguồn phụ thuộc
node_modules/
vendor/

# 2. File Lock
package-lock.json
yarn.lock
pnpm-lock.yaml
composer.lock

# 3. Thư mục Build & Cache
.next/
.nuxt/
dist/
build/
.cache/
out/

# 4. File cấu hình môi trường & Logs
.env
.env.local
.env.*
*.log
npm-debug.log*
yarn-debug.log*

# 5. Media & Assets
public/images/
public/videos/
*.png
*.jpg
*.jpeg
*.gif
*.mp4
*.svg
*.ico

# 6. Thư mục ẩn của OS và IDE
.DS_Store
.vscode/
.idea/
```

> Nếu AI tự nhiên trả lời rất chậm trong lúc code, hãy kiểm tra xem có file `.json` hoặc file cấu hình lớn nào mới được sinh ra không. Nếu có - ném ngay vào `.aiignore`.

---

## File `AGENTS.md`

Đây là **Global Context** - file AI đọc đầu tiên ở mọi phiên chat mới. Yêu cầu: ngắn gọn, uy quyền, dùng từ ngữ mang tính áp đặt mạnh như `BẮT BUỘC`, `TUYỆT ĐỐI`, `CẤM`.

> Dùng từ chung chung như "Nên làm thế này" - AI rất dễ quay về thói quen cũ. Càng dùng từ mạnh, AI càng tuân thủ nghiêm.

```markdown
# VAI TRÒ (ROLE)

Bạn là Antigravity - một Senior Fullstack Engineer và System Architect.
Nhiệm vụ: lập trình hệ thống Ecommerce với chất lượng code chuẩn Enterprise.

# KIẾN TRÚC & TECH STACK

- **Frontend** (`apps/frontend`): Next.js (App Router), React, Tailwind CSS, TypeScript
- **Backend** (`apps/backend`): NestJS, Prisma ORM, MySQL
- **Design Source:** Giao diện thiết kế trên Stitch. Chỉ lấy thông số qua MCP Server.
  TUYỆT ĐỐI KHÔNG copy code rác từ Stitch vào dự án.

# QUY TẮC BỘ NHỚ (CRITICAL MEMORY RULES)

1. **Khởi động phiên:** BẮT BUỘC đọc ngầm 2 file ở đầu mỗi phiên chat:
    - `.docs/ARCHITECTURE.md` - hiểu database và logic hệ thống
    - `.docs/FEATURES_DONE.md` - nắm tiến độ hiện tại
2. **Tuân thủ thiết kế:** Khi làm UI, BẮT BUỘC đọc `.docs/STYLEGUIDE.md`.
   CẤM tự ý bịa mã màu HEX (ví dụ: `#1a2b3c`).
   Chỉ dùng biến màu Tailwind (ví dụ: `bg-primary`, `text-muted`).

# QUY TẮC LẬP TRÌNH (CODING STANDARDS)

### TypeScript

- CẤM sử dụng kiểu `any`
- Mọi DTO, Props, API Response phải được định nghĩa bằng `interface` hoặc `type` rõ ràng

### Frontend

- Phân tách rõ ràng Logic và UI
- UI Components phải là **Dumb Components** - chỉ nhận props, không gọi API
- Component name: `PascalCase` | File name: `kebab-case`

### Backend

- Controller chỉ xử lý Request/Response - giữ siêu mỏng
- Toàn bộ Business Logic phải nằm trong Service
- Luôn xử lý lỗi bằng `try/catch`, ném ra HTTP Exception chuẩn

# QUY TẮC GIAO TIẾP (NO YAPPING)

- CẤM chào hỏi, CẤM nói "Chắc chắn rồi", "Tôi sẽ giúp bạn" - đi thẳng vào vấn đề
- CẤM giải thích dài dòng - chỉ giải thích khi người dùng chủ động yêu cầu
- Khi sửa lỗi: CHỈ in ra đoạn code thay đổi - CẤM in lại toàn bộ file
```

---

## Cách Áp Dụng Linh Hoạt

File `AGENTS.md` trên được viết cho stack **NestJS + Next.js**. Nếu dự án của ta dùng stack khác, chỉ cần thay 2 mục:

| Mục cần sửa                | Ví dụ thay thế                                             |
| -------------------------- | ---------------------------------------------------------- |
| **Kiến trúc & Tech Stack** | Laravel + Vue 3 + MySQL                                    |
| **Coding Standards**       | Convention của Laravel (Controller → Service → Repository) |

Phần **Memory Rules** và **No Yapping** giữ nguyên - áp dụng cho mọi stack.

---

## Tóm Tắt Vai Trò Hai File

| File        | Mục đích                                    | Cập nhật khi nào                                       |
| ----------- | ------------------------------------------- | ------------------------------------------------------ |
| `.aiignore` | Chặn AI đọc file rác, tiết kiệm token       | Khi phát hiện AI chậm lạ, có file build/config lớn mới |
| `AGENTS.md` | Định nghĩa luật AI phải tuân theo mọi phiên | Khi đổi stack, thêm rule mới, hoặc AI vi phạm lặp lại  |
