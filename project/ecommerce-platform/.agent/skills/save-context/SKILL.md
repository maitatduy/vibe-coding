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
   "Đã lưu tiến độ vào FEATURES_DONE.md. Bạn có thể đóng phiên chat này."

> Chỉ ghi KẾT QUẢ CUỐI CÙNG đã chạy thành công. Không ghi quá trình debug, không ghi lỗi.