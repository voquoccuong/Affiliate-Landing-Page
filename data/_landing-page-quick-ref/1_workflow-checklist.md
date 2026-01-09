# Landing Page Creation Workflow Checklist

> **Mục đích**: Quy trình từng bước để AI Agent tạo landing page chất lượng cao với `@mcp:ui-ux-pro-max`.
> 
> **Cách dùng**: Copy file này vào thư mục dự án, đánh dấu ✅ từng bước khi hoàn thành.

---

## Phase 1: Thu thập Thông tin (Information Gathering)

### 1.1 Kiểm tra Input đầu vào
- [ ] User đã cung cấp URL trang gốc hoặc file nội dung?
- [ ] User đã chỉ định thư mục lưu output?
- [ ] User có yêu cầu style cụ thể (dark mode, light mode, màu chủ đạo)?

### 1.2 Phân tích Nội dung
- [ ] Đọc URL/file nội dung bằng `read_url_content` hoặc `view_file`
- [ ] Tạo file `guideline.md` theo template (xem `guideline-template.md`)
- [ ] Liệt kê tất cả sections cần có
- [ ] Xác định các assets cần thiết (logo, hình ảnh, favicon)

### 1.3 Xác nhận với User (nếu thiếu thông tin)
Nếu thiếu bất kỳ thông tin quan trọng nào, HỎI user:

```markdown
⚠️ **Thông tin còn thiếu để tạo landing page:**

1. **[Tên mục thiếu]**: [Mô tả chi tiết cần gì]
   - Ví dụ: Giá sản phẩm chính thức là bao nhiêu?
   
2. **[Assets thiếu]**: [Mô tả]
   - Ví dụ: Cần link ảnh logo định dạng PNG/SVG

Xin hãy cung cấp thông tin trên để tôi tiếp tục.
```

---

## Phase 2: Thiết kế & Kiến trúc (Design & Architecture)

### 2.1 Tham khảo UI/UX Pro Max
- [ ] Gọi `mcp_ui-ux-pro-max_ui_search_context` với query phù hợp
- [ ] Gọi `mcp_ui-ux-pro-max_ui_search` cho patterns cụ thể (pricing, FAQ, testimonials)
- [ ] Gọi `mcp_ui-ux-pro-max_ui_search_stack` nếu cần coding guidelines

### 2.2 Xác định Tech Stack
- [ ] HTML + Tailwind CSS (CDN) - mặc định
- [ ] Alpine.js cho tương tác (countdown, accordion, modal)
- [ ] Lucide Icons cho icons
- [ ] Google Fonts cho typography

### 2.3 Xác định Section Structure
Dựa trên loại landing page, chọn cấu trúc phù hợp:

**eLearning / Khóa học:**
```
1. Navbar (Sticky)
2. Hero + Countdown
3. Problem Section
4. Empathy Section
5. Solution Intro
6. Curriculum/Modules (chi tiết)
7. Value Stack (2 cột nếu có bonus)
8. Screenshots/Gallery
9. Testimonials
10. Pricing Card
11. FAQ (đầy đủ)
12. Final CTA
13. Footer
14. Sticky Mobile CTA
```

**SaaS / Product:**
```
1. Navbar
2. Hero + Demo/Screenshot
3. Features Grid
4. How It Works
5. Pricing Tiers
6. Testimonials
7. FAQ
8. CTA
9. Footer
```

**Event / Webinar:**
```
1. Navbar
2. Hero + Countdown
3. Speaker/Host Intro
4. Agenda
5. What You'll Learn
6. Testimonials
7. Register CTA
8. FAQ
9. Footer
```

---

## Phase 3: Triển khai (Implementation)

### 3.1 Tạo File HTML
- [ ] Tạo file `index.html` (hoặc tên theo yêu cầu)
- [ ] Setup `<head>`: meta tags, fonts, Tailwind config, styles
- [ ] Implement từng section theo thứ tự

### 3.2 Checklist Nội dung Bắt buộc
- [ ] **Logo**: Có link ảnh hoặc text fallback
- [ ] **Favicon**: Đã set `<link rel="icon">`
- [ ] **Meta SEO**: title, description, og:image
- [ ] **CTA Links**: Tất cả nút đều có href đúng
- [ ] **Giá cả**: Hiển thị chính xác, không bịa số
- [ ] **FAQ**: Copy nguyên văn từ nguồn gốc

### 3.3 Checklist Kỹ thuật
- [ ] Alpine.js CDN dùng `https://` (không dùng `//unpkg.com`)
- [ ] Lucide Icons có `lucide.createIcons()` cuối body
- [ ] Countdown logic phù hợp (fixed/weekly reset/evergreen)
- [ ] Responsive: Mobile-first với Tailwind breakpoints

---

## Phase 4: Kiểm thử (Verification)

### 4.1 Functional Testing
- [ ] Mở file trong browser bằng `browser_subagent`
- [ ] Countdown timer hoạt động
- [ ] FAQ accordion mở/đóng được
- [ ] Tất cả links hoạt động

### 4.2 Visual Testing
- [ ] Scroll qua tất cả sections
- [ ] Resize xuống mobile (375px)
- [ ] Kiểm tra Sticky CTA trên mobile
- [ ] Không có text bị cắt hoặc overlap

### 4.3 Content Accuracy Audit
- [ ] So sánh giá tiền với nguồn gốc
- [ ] So sánh nội dung FAQ với nguồn gốc
- [ ] So sánh danh sách features/modules với nguồn gốc

---

## Phase 5: Bàn giao (Handoff)

### 5.1 Tạo Documentation
- [ ] Cập nhật `guideline.md` với checklist đã hoàn thành
- [ ] Ghi chú những điểm cần user review

### 5.2 Thông báo User
- [ ] Sử dụng `notify_user` với danh sách files cần review
- [ ] Liệt kê những điểm đã implement
- [ ] Nêu rõ những điểm cần user xác nhận (giá, nội dung chính xác)

---

## 🚨 Quy tắc An toàn (Safety Rules)

> [!CAUTION]
> **KHÔNG ĐƯỢC BỊA NỘI DUNG**
> - Giá cả phải lấy từ nguồn chính xác
> - FAQ phải copy nguyên văn
> - Testimonials phải có nguồn hoặc được user cung cấp
> - Nếu thiếu thông tin → HỎI USER, không tự bịa

> [!WARNING]
> **KIỂM TRA KỸ TRƯỚC KHI BÀN GIAO**
> - Mọi CTA link phải đúng
> - Countdown phải hoạt động
> - Alpine.js phải load được (dùng https://)

---

## 📋 Quick Reference: MCP Tools

```javascript
// Lấy design system hoàn chỉnh
mcp_ui-ux-pro-max_ui_search_context({
  query: "SaaS landing page dark mode",
  category: "landing-marketing"
})

// Tìm pattern cụ thể
mcp_ui-ux-pro-max_ui_search({
  query: "pricing cards testimonials",
  domain: "pattern",
  category: "landing-marketing"
})

// Lấy coding guidelines
mcp_ui-ux-pro-max_ui_search_stack({
  query: "responsive layout animation",
  stack: "html-tailwind"
})
```

---

*Workflow này được tạo dựa trên kinh nghiệm triển khai ExpertOS 01 Landing Page.*
