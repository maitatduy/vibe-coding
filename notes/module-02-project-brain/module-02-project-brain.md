# Cấu Trúc Thư Mục Chuẩn — Vibe Coding Project

```
ten-du-an/
│
├── .agent/                         # 1. Bộ luật và kỹ năng
│   ├── AGENTS.md                   # - Global Rules
│   └── skills/                     # - Kho kỹ năng gọi theo lệnh
│       ├── system-planner/
│       │   └── SKILL.md            #   /plan — Phân tích kiến trúc hệ thống
│       ├── code-ui/
│       │   └── SKILL.md            #   /code-ui — Đọc Stitch qua MCP → Viết code
│       ├── save-context/
│       │   └── SKILL.md            #   /save — Ghi nhật ký tiến độ
│       └── archive-memory/
│           └── SKILL.md            #   /archive — Dọn dẹp và lưu bộ nhớ dài hạn
│
├── .docs/                          # 2. Bộ nhớ và tài liệu sống (AI Memory)
│   ├── IDEA.md                     # - Bản nháp ý tưởng thô của ta
│   ├── DESIGN_BRIEF.md             # - Bản đặc tả chi tiết AI phân tích từ IDEA
│   ├── FEATURES_DONE.md            # - Nhật ký các tính năng đã hoàn thành
│   ├── ARCHITECTURE.md             # - Sự thật cốt lõi về Database và Logic
│   └── STYLEGUIDE.md               # - Quy chuẩn màu sắc, Typography, UI Components
│
├── apps/                           # 3. Mã nguồn dự án (Codebase)
│   ├── frontend/                   # - Next.js / React / Tailwind
│   │   ├── app/                    #   Server Components & Routing (App Router)
│   │   └── components/             #   UI Components (Dumb UI / Smart Container)
│   │
│   └── backend/                    # - NestJS / Express / Laravel
│       ├── src/                    #   Controllers, Services, Business Logic
│       └── prisma/                 #   schema.prisma — định nghĩa Database
│
└── .aiignore                       # 4. Bộ lọc bảo vệ token
```

---

## 1. `.agent/`

Nơi định hướng để AI biết **nó là ai** và **phải làm gì**.

### `AGENTS.md`

File AI đọc đầu tiên ở **mọi phiên chat**. Ghi vào đây những luật bất di bất dịch:

- Không dùng kiểu `any` trong TypeScript
- Bắt buộc dùng Tailwind CSS, không dùng inline style
- Tuân thủ kiến trúc thư mục đã định nghĩa
- Các convention đặt tên, comment, xử lý lỗi...

### `skills/`

Thay vì nhồi nhét mọi quy trình vào `AGENTS.md`, ta chia nhỏ thành từng skill độc lập. AI chỉ load skill tương ứng khi được gọi - tiết kiệm token và phản hồi nhanh hơn.

| Lệnh       | Skill             | Chức năng                                                      |
| ---------- | ----------------- | -------------------------------------------------------------- |
| `/plan`    | `system-planner/` | Phân tích kiến trúc, lên kế hoạch tính năng                    |
| `/code-ui` | `code-ui/`        | Đọc design từ Stitch qua MCP → sinh code                       |
| `/save`    | `save-context/`   | Ghi nhật ký tiến độ vào `FEATURES_DONE.md`                     |
| `/archive` | `archive-memory/` | Chốt và lưu dữ liệu vào `ARCHITECTURE.md` hoặc `STYLEGUIDE.md` |

---

## 2. `.docs/`

Khu vực **quan trọng nhất** — giải quyết bài toán AI bị mất trí nhớ khi dự án lớn dần. Chia làm 3 lớp theo vòng đời dữ liệu:

### Dữ liệu ngắn hạn — RAM tạm thời

| File              | Vai trò                                                                |
| ----------------- | ---------------------------------------------------------------------- |
| `IDEA.md`         | Nơi ta dump ý tưởng thô vào                                            |
| `DESIGN_BRIEF.md` | AI phân tích từ IDEA → sinh ra bản đặc tả kỹ thuật để gửi Stitch vẽ UI |

> Xong một tính năng → có thể xóa hoặc thay thế nội dung hai file này.

### Dữ liệu trung hạn — RAM phiên làm việc

| File               | Vai trò                                                                                                  |
| ------------------ | -------------------------------------------------------------------------------------------------------- |
| `FEATURES_DONE.md` | AI tự ghi chú qua lệnh `/save` sau mỗi màn hình hoàn thành. Mở chat mới hôm sau vẫn biết đã làm đến đâu. |

### Dữ liệu dài hạn — Ổ cứng vĩnh viễn

| File              | Vai trò                                                                                                             |
| ----------------- | ------------------------------------------------------------------------------------------------------------------- |
| `ARCHITECTURE.md` | Cấu trúc Database được chốt (bảng User, Order, Cart...), quan hệ giữa các bảng, các quyết định kiến trúc quan trọng |
| `STYLEGUIDE.md`   | Bảng màu, typography, danh sách UI components đã có — mọi code sinh ra đều phải chiếu theo file này                 |

> AI lưu vào đây qua lệnh `/archive`. Không bao giờ xóa — chỉ bổ sung thêm.

---

## 3. `apps/`

Toàn bộ code do AI sinh ra và đặt đúng vị trí. Tách biệt hoàn toàn `frontend` và `backend`.

### `apps/frontend/`

```
frontend/
├── app/              # App Router của Next.js (layouts, pages, loading, error)
└── components/
    ├── ui/           # Dumb UI — component thuần hiển thị, không có logic
    └── containers/   # Smart Container — xử lý state, gọi API, truyền data xuống
```

> Nguyên tắc **Dumb UI / Smart Container**: component UI không biết data đến từ đâu, chỉ nhận props và render. Logic nằm hoàn toàn ở Container.

### `apps/backend/`

```
backend/
├── src/
│   ├── modules/      # Chia theo domain (auth, product, order...)
│   ├── controllers/  # Nhận request, trả response
│   └── services/     # Business logic thuần
└── prisma/
    └── schema.prisma # Định nghĩa toàn bộ Database schema
```

---

## 4. `.aiignore`

Hoạt động như `.gitignore` nhưng mục đích là **cấm AI đọc** các thư mục không cần thiết.

```
node_modules/
.next/
dist/
build/
*.lock
package-lock.json
*.log
```

> Nếu thiếu file này, AI sẽ quét toàn bộ `node_modules` và các file build — tiêu tốn hàng chục nghìn token mỗi phiên chat và làm loãng context khiến chất lượng phản hồi giảm mạnh.

---
