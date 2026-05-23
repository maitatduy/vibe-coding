# Skill `/code-ui` — Lập Trình Giao Diện Từ Stitch

---

## File SKILL.md

**Vị trí:** `.agent/skills/code-ui/SKILL.md`

```markdown
---
name: code-ui
description: Chuyển đổi bản vẽ từ Stitch thành code React/Vue, tuân thủ chặt chẽ
  Frontend Plan, ép buộc dùng Framework chuẩn và ưu tiên tái sử dụng Component.
triggers:
  - "/code-ui"
  - "code giao diện"
---

# NHIỆM VỤ: LẬP TRÌNH GIAO DIỆN (UI EXECUTION)

Khi nhận lệnh `/code-ui [Tên Màn Hình / Component]`, đóng vai trò Frontend Developer
thi công. BẮT BUỘC thực hiện tuần tự 4 bước sau một cách im lặng,
chỉ báo cáo kết quả cuối cùng.

## Bước 1 — Nạp Ngữ Cảnh và Quy Hoạch

BẮT BUỘC đọc ngầm 2 file trước khi làm bất cứ điều gì:
1. `.docs/STYLEGUIDE.md` — lấy biến màu Tailwind, font chữ, quy tắc bo góc
2. File kế hoạch tương ứng trong `.docs/frontend-plans/` — lấy cấu trúc
   Smart/Dumb Component và Interface Props

## Bước 2 — Quét Thư Viện & Tái Sử Dụng ⚠️ QUAN TRỌNG TỐI THƯỢNG

- Quét thư mục `apps/frontend/components/ui/`
- Nếu bản vẽ Stitch có Button, Input, Card... BẮT BUỘC kiểm tra component đó đã tồn tại chưa
- **Luật thép:** Nếu ĐÃ CÓ → tuyệt đối không code lại, BẮT BUỘC import và dùng lại
- Chỉ tạo file mới cho những cấu trúc đặc thù chưa từng xuất hiện

## Bước 3 — Đọc Bản Vẽ Từ Stitch

- Kết nối với bản vẽ người dùng vừa cung cấp
- Ánh xạ thuộc tính đồ họa sang class **Tailwind CSS**
- CẤM dùng CSS thuần hoặc mã HEX tự chế

## Bước 4 — Sinh Code và Ép Khuôn Framework

Gõ code vào thư mục dự án theo bản Kế hoạch, đồng thời tuân thủ tuyệt đối
Đạo luật Framework tương ứng bên dưới.

## Báo Cáo Kết Quả

Sau khi code xong:
1. In ra danh sách các file `.tsx` / `.vue` vừa tạo hoặc chỉnh sửa
2. Hỏi người dùng có cần điều chỉnh padding/margin không
3. Chờ xác nhận trước khi chạy lệnh `/save`
```

---

## Đạo Luật Framework

### Next.js App Router

```markdown
[RÀNG BUỘC FRAMEWORK: NEXT.JS APP ROUTER]

1. Kiến trúc Client / Server
   - Mặc định mọi Component là Server Component
   - CHỈ thêm `'use client'` ở dòng đầu nếu Component thực sự cần:
     Hook (`useState`, `useEffect`, `useRef`) hoặc sự kiện DOM (`onClick`, `onChange`)

2. Cú pháp Component
   - Dùng Arrow Function component
   - Định nghĩa Props bằng `interface` (TypeScript) — không dùng `type`
     trừ khi cần Union / Intersection
   - Destructuring Props ngay tại tham số đầu vào

3. Tối ưu Hình ảnh & Link
   - BẮT BUỘC dùng `<Image />` từ `next/image` — CẤM dùng thẻ `<img>`
   - BẮT BUỘC dùng `<Link />` từ `next/link` — CẤM dùng thẻ `<a>`

4. Quản lý State (Dành cho Smart Component)
   - Global State liên trang (VD: Giỏ hàng, Auth): dùng Zustand
   - Mutate dữ liệu (Submit form, Add to cart): dùng Server Actions
     thay vì viết API Route riêng lẻ
```

### Vue 3 / Nuxt 3

```markdown
[RÀNG BUỘC FRAMEWORK: VUE 3 COMPOSITION API & NUXT 3]

1. Cú pháp cốt lõi (SFC)
   - TUYỆT ĐỐI không dùng Options API
   - BẮT BUỘC dùng `<script setup lang="ts">` cho phần logic
   - Khai báo Props: `defineProps<{}>()`
   - Khai báo Emits: `defineEmits<{}>()`

2. Quản lý Trạng thái (Reactivity)
   - `ref()` cho biến nguyên thủy (string, number, boolean)
   - `reactive()` cho object phức tạp
   - Nuxt 3: ưu tiên `useState()` cho state cần chia sẻ SSR

3. Tối ưu Nuxt
   - BẮT BUỘC dùng `<NuxtLink>` — CẤM dùng `<a>` hoặc `<router-link>`
   - BẮT BUỘC dùng `<NuxtImg>` (nếu có `@nuxt/image`) — CẤM dùng `<img>`

4. CSS & Styling
   - CẤM viết CSS thuần
   - BẮT BUỘC dùng class Tailwind CSS trực tiếp trên template
```

---

## Tóm Tắt Luồng Hoạt Động

```
/code-ui [Tên màn hình]
       ↓
Đọc STYLEGUIDE.md + FRONTEND_PLAN.md
       ↓
Quét components/ui/ — tái sử dụng nếu đã có
       ↓
Đọc bản vẽ Stitch → map sang Tailwind class
       ↓
Sinh code theo Đạo luật Framework (Next.js hoặc Vue 3)
       ↓
Báo cáo danh sách file → hỏi điều chỉnh → /save
```