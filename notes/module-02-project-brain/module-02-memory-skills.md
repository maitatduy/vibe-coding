# Kỹ Năng Lưu Trí Nhớ — Memory Skills

Hệ thống gồm 2 lệnh phối hợp với nhau để quản lý bộ nhớ AI xuyên suốt dự án:

| Lệnh       | File kích hoạt            | Vai trò                | Dùng khi nào                            |
| ---------- | ------------------------- | ---------------------- | --------------------------------------- |
| `/save`    | `save-context/SKILL.md`   | Ghi tiến độ vào sổ tay | Trước khi đóng phiên chat               |
| `/archive` | `archive-memory/SKILL.md` | Nén bộ nhớ, dọn rác    | Khi `FEATURES_DONE.md` có 5–7 tính năng |

---

## Lệnh `/save` — Ghi Nhật Ký Tiến Độ

**Vị trí:** `.agent/skills/save-context/SKILL.md`

Kích hoạt ngay trước khi đóng phiên chat. AI tự động quét những gì vừa làm và tóm tắt vào file nhật ký `FEATURES_DONE.md`.

```markdown
---
name: save-context
description: Ghi nhận tiến độ công việc vào nhật ký sau khi hoàn thành một tính năng.
triggers:
    - "/save"
    - "lưu ngữ cảnh"
---

# NHIỆM VỤ: GHI NHẬT KÝ TIẾN ĐỘ (STATE SAVING)

Khi nhận lệnh này, thực hiện các bước sau một cách im lặng (không giải thích):

1. **Quét thay đổi:** Kiểm tra các file vừa tạo, sửa đổi, hoặc cập nhật trong phiên chat hiện tại.
2. **Tóm tắt siêu ngắn:** Viết đoạn tóm tắt dưới 50 chữ về những gì đã hoàn thành.
   Ví dụ: "Đã hoàn thành UI Giỏ hàng (đọc từ Stitch), viết API lấy danh sách CartItem."
3. **Cập nhật file:** Mở `.docs/FEATURES_DONE.md` và THÊM (append) đoạn tóm tắt xuống cuối file, kèm ngày giờ hiện tại.
4. **Báo cáo:** Trả lời đúng 1 câu:
   "✅ Đã lưu tiến độ vào FEATURES_DONE.md. Bạn có thể đóng phiên chat này."

> Chỉ ghi KẾT QUẢ CUỐI CÙNG đã chạy thành công. Không ghi quá trình debug, không ghi lỗi.
```

---

## Lệnh `/archive` — Nén Bộ Nhớ & Dọn Rác

**Vị trí:** `.agent/skills/archive-memory/SKILL.md`

Khi `FEATURES_DONE.md` tích lũy 5–7 tính năng, file bắt đầu dài và tiêu tốn token ở mỗi phiên mới. Lệnh `/archive` là cú **Garbage Collection** — chắt lọc tinh hoa cất vào két sắt, xóa phần rườm rà giải phóng RAM.

```markdown
---
name: archive-memory
description: Nén bộ nhớ, dọn dẹp nhật ký cũ và cập nhật kiến trúc cốt lõi.
triggers:
    - "/archive"
    - "dọn dẹp bộ nhớ"
---

# NHIỆM VỤ: NÉN BỘ NHỚ VÀ CHUYỂN GIAO SỰ THẬT (MEMORY ARCHIVING)

File `.docs/FEATURES_DONE.md` đang quá dài. Thực hiện đúng 3 bước sau:

## Bước 1 — Trích Xuất Kiến Trúc Lõi (Knowledge Extraction)

Đọc toàn bộ `.docs/FEATURES_DONE.md`. Tìm các thay đổi liên quan đến:

- **Database:** Bảng mới, trường mới, quan hệ mới
- **Logic nghiệp vụ:** Luồng thanh toán mới, phân quyền mới
- **UI/UX:** Component dùng chung mới, rule màu sắc mới

## Bước 2 — Chuyển Giao Sự Thật (State Transfer)

- Mở `.docs/ARCHITECTURE.md` → CẬP NHẬT các thay đổi Database và Logic
- Mở `.docs/STYLEGUIDE.md` → CẬP NHẬT các component và luật UI mới

## Bước 3 — Dọn Rác (Garbage Collection) ⚠️ QUAN TRỌNG NHẤT

Mở lại `.docs/FEATURES_DONE.md` và thực hiện:

- XÓA SẠCH toàn bộ chi tiết lặt vặt
- THAY THẾ lịch sử cũ bằng danh sách bullet cực ngắn với tiêu đề `[Archived Milestones]`
- CHỈ GIỮ LẠI chi tiết đầy đủ của 1 tính năng gần nhất

Sau khi hoàn thành, in ra danh sách các file đã được cập nhật.
```

---

## Luồng Hoạt Động Thực Tế

```
Phiên làm việc
     ↓
Code xong tính năng
     ↓
Gõ /save  →  AI append vào FEATURES_DONE.md  →  Đóng chat
     ↓
[Lặp lại 5–7 tính năng]
     ↓
Gõ /archive
     ├─→  Đọc FEATURES_DONE.md
     ├─→  Cập nhật ARCHITECTURE.md  (Database, Logic mới)
     ├─→  Cập nhật STYLEGUIDE.md   (UI, Component mới)
     └─→  Dọn sạch FEATURES_DONE.md → chỉ còn [Archived Milestones]
```

> **Tóm lại:** `/save` là hành động cuối mỗi phiên. `/archive` là hành động cuối mỗi sprint. Thiếu một trong hai, bộ nhớ AI sẽ dần mục nát theo thời gian.
