# Quy trình triển khai Landing Page (Thực tế & Bài học)

Đây là quy trình chuẩn xác nhất được kết hợp từ dự án **Bootcamp K02**, bổ sung bước sửa sai và checklist kiểm thử nâng cao. Mỗi phase tạo một file riêng để AI/dev tra cứu, nhưng có thêm `handoff-checklist.md` để bàn giao không sót hạng mục.

## Phase 1: Research & Discovery (Nghiên cứu)
*File output:* `01-research.md`

1. **Xác định Context:** Sản phẩm AI Bootcamp (K02), audience non-tech.
2. **Avatar:** Người không rành công nghệ, chủ doanh nghiệp nhỏ.
3. **USP:** "Cầm tay chỉ việc", "Không code", "Action-Based Pricing".
4. **Checklist Tài nguyên:** Logo, Video (Youtube ID), Testimonials (LadiCDN links).

## Phase 2: Content Strategy ($100M Offer)
*File output:* `02-content.md`

1. **Grandslam Offer:** Gói “Cam Kết” giá 1.250k (đòi hỏi cao nhất) → tạo lực giá trị.
2. **Cấu trúc LDP chuyển đổi cao:** Hero, Social Proof, Agitation, Solution, Price Anchor.

## Phase 3: Asset Aggregation (Tập hợp tài nguyên)
*File output:* `03-assets.md`
- Tập trung toàn bộ link media vào một file; đủ 9 ảnh testimonial, favicon, logo, OG image, alt text.

## Phase 4: Design Synthesis (Style Guide)
*File output:* `04-style-guide.md` (đã hợp nhất + chi tiết prompt cho `@mcp:ui-ux-pro-max`)

- Phải xin tư vấn từ hệ thống design trước khi code.
- **Style:** Trust & Authority. **Colors:** Sky/Navy + Orange CTA. **Font:** Be Vietnam Pro.
- Thêm spacing, grid, icon, motion, accessibility để tránh thiếu thông tin cho prompt.

## Phase 5: Implementation (Triển khai Code)
*File output:* `index.html`

1. **Tech Stack:** HTML5 + TailwindCSS + Alpine.js.
2. **Feature:** Mobile Menu, Accordion FAQ, Pulse Badges.

## Phase 6: Fundamental Verification (Kiểm thử cơ bản)
*File output:* `handoff-checklist.md` (mục QA cơ bản)

1. **Mobile First:** Kiểm tra trên thiết bị di động / DevTools.
2. **Functional:** Link hoạt động, video play tốt, menu/FAQ mở đóng ổn.
3. **Links & 404:** Tất cả CTA/policy/email/tel đúng đích.

## Phase 7: Visual QA & Polish (Kiểm thử thẩm mỹ - nâng cao)
*File output:* cập nhật vào `handoff-checklist.md`

### 1. Typography & Readability
- [ ] **Headline Breaking:** Tiêu đề dài phải xuống dòng hợp lý (`<br class="hidden md:block">`).
- [ ] **Line Height:** Dùng `leading-relaxed`/`leading-7` cho body để tránh dính chữ.

### 2. Spacing & Layout
- [ ] **Footer Spacing:** Kiểm tra `py`/`gap` không quá rộng; info/copyright không cách quá xa.
- [ ] **Mobile Padding:** Dùng `px-4` hoặc `px-6` để tránh sát lề.
- [ ] **Grid Stack:** Pricing/feature grid xuống 1 cột ở mobile, 2-3 cột ở desktop.

### 3. Visual & A11y
- [ ] **Alignment:** Logo và text thẳng hàng.
- [ ] **Contrast:** Text trên nền đủ tương phản (>= WCAG AA).
- [ ] **Focus State:** Nút/link có outline/focus rõ ràng.

### 4. Performance & SEO
- [ ] **Assets:** Ảnh dùng kích thước tối ưu, lazyload cho testimonial grid.
- [ ] **Meta/OG:** Đủ title/description/og:image/favicons.
- [ ] **Analytics:** GA4/Pixel gắn đúng ID (nếu có).

### 5. Cross-device/Browser
- [ ] Test Chrome/Edge (desktop), Chrome/Firefox/ Safari mobile (hoặc ít nhất DevTools device mode 360–1440).
- [ ] Check video embed, hover/animation không giật.

---
Áp dụng quy trình + checklist này giúp loại bỏ 99% lỗi giao diện và tránh bỏ sót file khi giao cho AI hoặc dev.
