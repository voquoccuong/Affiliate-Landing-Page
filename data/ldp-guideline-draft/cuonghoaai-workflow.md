# Quy trình Triển khai Landing Page Đào tạo (Standard Workflow)

Tài liệu này mô tả quy trình chuẩn từ A-Z để xây dựng một Landing Page khóa học chuyển đổi cao, áp dụng tư duy **$100M Offer (Alex Hormozi)** và **High Converting eLearning Framework**.

## Phase 1: Research & Discovery (Thu thập thông tin)

Trước khi bắt đầu, cần thu thập đầy đủ "nguyên liệu" đầu vào. Nếu chưa có, hãy dùng checklist dưới đây để đặt câu hỏi cho khách hàng/đội ngũ.

### 📝 Checklist Thu Thập Thông Tin
1.  **Product Context:** Khóa học tên gì? Dành cho ai (Avatar)? Kết quả hứa hẹn là gì (Dream Outcome)?
2.  **USP / Hook:** Điều gì khiến khóa học này khác biệt? (Vd: "Cầm tay chỉ việc", "Cam kết ra đơn", "Không cần biết code").
3.  **Pricing Model:** Có chiến lược giá đặc biệt không? (Vd: Action-Based Pricing - Cam kết càng cao giá càng rẻ).
4.  **Assets (Tài nguyên):**
    -   [ ] Logo (File PNG/SVG).
    -   [ ] Ảnh chuyên gia/giảng viên.
    -   [ ] Video giới thiệu (Youtube/Vimeo link).
    -   [ ] Ảnh Social Proof (Feedback/Kết quả học viên - Cực kỳ quan trọng).
    -   [ ] Link chính sách (Điều khoản, Bảo mật).
5.  **Technical:** Hosting ở đâu? Tên miền là gì? Form đăng ký (Google Form/LadiFlow)?

## Phase 2: Content Strategy ($100M Offer Framework)

Biến thông tin thô thành nội dung bán hàng "không thể chối từ".

### 1. Viết lại nội dung theo cấu trúc $100M Offer
-   **Grandslam Offer:** Tạo ra gói ưu đãi mà khách hàng cảm thấy "ngu ngốc nếu từ chối".
-   **Scarcity & Urgency (Khan hiếm & Khẩn cấp):** Giới hạn số lượng (Early Bird), giới hạn thời gian.
-   **Risk Reversal (Đảo ngược rủi ro):** Cam kết hoàn tiền, Bảo hành trọn đời, Học thử.
-   **Bonuses (Quà tặng):** Tài liệu, Community, Support 1:1.

### 2. Sắp xếp Layout (High Converting Model)
Cấu trúc chuẩn cho trang bán khóa học:
1.  **Hero Section:** Headline lời hứa lớn + Sub-head "cho ai" + CTA + Video/Ảnh Hero + Micro-Social Proof.
2.  **Social Proof (Sớm):** Logo đối tác hoặc strip ảnh học viên (Tạo niềm tin ngay lập tức).
3.  **The Problem (Agitation):** Xoáy sâu vào nỗi đau, sự thất vọng hiện tại.
4.  **The Solution (The Vehicle):** Giới thiệu khóa học là giải pháp "mới" và "dễ dàng".
5.  **The Guide (Authority):** Giới thiệu giảng viên (Tại sao tôi nên tin bạn?).
6.  **Curriculum (Logical Proof):** Lộ trình học chi tiết (Module 1, 2, 3...).
7.  **The Offer (Stack):** Tổng hợp giá trị (Value Stack) > Giá bán.
8.  **Pricing Options:** Gói Cơ bản vs **Gói VIP (Best Value)**.
9.  **FAQ:** Xử lý từ chối.
10. **Final CTA + Footer.**

*Output:* File `content-detail.md` và `content-guideline.md`.

## Phase 3: Asset Aggregation (Tổng hợp tài nguyên)

Tập trung tất cả file media vào một thư mục/danh sách link để tránh lộn xộn khi code.

-   **Video:** Embed Link (Youtube ID).
-   **Images:** Upload lên CDN (LadiCDN/Cloudinary) để lấy direct link.
-   **Icons:** Chọn bộ icon nhất quán (Lucide/Heroicons/SVG).
-   **Links:** Chuẩn bị sẵn link thanh toán/đăng ký cho từng nút CTA.

## Phase 4: Design Synthesis (@mcp:ui-ux-pro-max)

Sử dụng AI hoặc MCP chuyên về UI/UX để tổng hợp Style Guide cuối cùng.

**Prompt mẫu cho AI:**
> "Dựa trên nội dung khóa học 'AI Automation' dành cho người không rành công nghệ, hãy đề xuất Style Guide với:
> 1. Màu sắc: Tin cậy (Blue/Navy) + Điểm nhấn hành động (Gold/Orange).
> 2. Typography: Dễ đọc tiếng Việt (Be Vietnam Pro / Inter).
> 3. UI Vibe: Clean, Professional, Academy style (Tránh Dark/Hacker style).
> 4. Component: Card bo góc, Shadow mềm, Button nổi bật."

*Output:* File `style-guide.md`.

## Phase 5: Implementation (Thực thi Coding)

Bước cuối cùng để biến bản kế hoạch thành sản phẩm thực tế.

### Checklist Triển khai:
1.  **Setup Project:** HTML5 Boilerplate + TailwindCSS (CDN cho landing page đơn) + Alpine.js (Interaction).
2.  **SEO Meta:** Title, Description, OG Image (Screenshot Header).
3.  **Mobile First Coding:** Code từng section, kiểm tra hiển thị trên mobile ngay lập tức.
4.  **Content Fill:** Copy chính xác từ `content-detail.md` vào code.
5.  **Tracking (Optional):** Gắn mã Facebook Pixel/Google Analytics.

### Verification (Kiểm thử):
-   [ ] Hiển thị tốt trên Mobile/Desktop.
-   [ ] Các link CTA hoạt động.
-   [ ] Video play được.
-   [ ] Tốc độ tải trang nhanh (Tối ưu ảnh).

---
*Lưu ý: Quy trình này được thiết kế để lặp lại (repeatable) cho mọi dự án Landing Page đào tạo tiếp theo của Cuonghoa.ai.*
