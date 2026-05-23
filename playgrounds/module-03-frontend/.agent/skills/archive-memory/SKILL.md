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