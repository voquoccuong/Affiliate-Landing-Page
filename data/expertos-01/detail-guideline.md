# ExpertOS 01 Landing Page - Detail Guideline v2

> **Mục đích**: Tài liệu hướng dẫn thiết kế và kiểm thử kỹ lưỡng, tránh các lỗi UI đã phát hiện.

---

## 🚨 CÁC LỖI CẦN TRÁNH (Lessons Learned)

### 1. Headline Typography
**Vấn đề**: Chữ tiếng Việt có dấu bị dính/đè nhau
**Nguyên nhân**: `leading-[1.15]` quá chật cho font tiếng Việt với dấu
**Giải pháp**: 
- Dùng `leading-tight` (1.25) hoặc `leading-snug` (1.375) cho headline
- Vì tiếng Việt có dấu phía trên (ả, ễ, ộ...) cần line-height lớn hơn tiếng Anh

```html
<!-- ❌ SAI -->
<h1 class="leading-[1.15]">Giải pháp tinh gọn cho...</h1>

<!-- ✅ ĐÚNG -->
<h1 class="leading-tight">Giải pháp tinh gọn cho...</h1>
```

### 2. Text Wrapping Issue
**Vấn đề**: Từ cuối cùng "code" rớt xuống dòng riêng, nhìn lạc lõng
**Nguyên nhân**: Inline span trong paragraph không có whitespace-nowrap
**Giải pháp**: 
- Dùng `whitespace-nowrap` cho các cụm từ quan trọng
- Hoặc viết lại câu để không có từ đơn rớt dòng
- Hoặc tách thành dòng riêng với styling khác

```html
<!-- ❌ SAI: Từ "code" có thể rớt dòng riêng -->
<span class="text-accent-400">Ngay cả khi bạn không biết code.</span>

<!-- ✅ ĐÚNG: Ngăn wrap giữa cụm từ -->
<span class="text-accent-400 whitespace-nowrap">Ngay cả khi bạn không biết code.</span>

<!-- ✅ HOẶC: Tách thành dòng riêng -->
<p class="text-slate-400">...tiết kiệm 4-6 giờ mỗi ngày.</p>
<p class="text-accent-400 font-semibold mt-2">Ngay cả khi bạn không biết code.</p>
```

### 3. Trust Badges vs Buttons
**Vấn đề**: Trust badges có style pill + border nhìn giống button, gây nhầm lẫn
**Nguyên nhân**: `rounded-full`, `border`, `px-3 py-1.5` giống button styling
**Giải pháp**: 
- Trust badges nên là text thuần với icon, KHÔNG có background/border pill
- Hoặc dùng divider/bullet thay vì pill

```html
<!-- ❌ SAI: Nhìn như button -->
<span class="px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-400">
  <i data-lucide="check-circle-2"></i> Học từ dự án 4 năm
</span>

<!-- ✅ ĐÚNG: Text + icon đơn giản -->
<span class="flex items-center gap-2 text-slate-400">
  <i data-lucide="check-circle-2" class="w-4 h-4 text-green-400"></i>
  Học từ dự án thực tế 4 năm
</span>

<!-- ✅ HOẶC: Bullet divider -->
<div class="flex items-center gap-4 text-sm text-slate-400">
  <span>✓ Học từ dự án 4 năm</span>
  <span>•</span>
  <span>✓ Tài liệu + template</span>
  <span>•</span>
  <span>✓ Hoàn tiền 7 ngày</span>
</div>
```

---

## 📐 HERO SECTION - THIẾT KẾ TỐI ƯU

### Cấu trúc Hierarchy Rõ Ràng

```
1. Badge nhỏ (#ExpertOS 01) - subtle, không chiếm focus
2. Headline - TO, ĐẬM, gradient highlight
3. Sub-headline - Mô tả ngắn gọn 2-3 dòng
4. Trust proof - Text đơn giản với checkmarks
5. Countdown - Nổi bật nhưng không overwhelm
6. CTA Buttons - Rõ ràng, nổi bật nhất
7. Social proof - Avatar + số lượng (subtle)
```

### Typography Scale Đề Xuất

| Element      | Desktop      | Mobile    | Line-height             |
| ------------ | ------------ | --------- | ----------------------- |
| Badge        | text-sm      | text-xs   | normal                  |
| H1           | text-5xl/6xl | text-3xl  | leading-tight (1.25)    |
| Sub-headline | text-xl      | text-lg   | leading-relaxed (1.625) |
| Trust items  | text-sm      | text-sm   | normal                  |
| CTA          | text-lg      | text-base | normal                  |

### Màu sắc Rõ Ràng

| Element       | Color                | Purpose                         |
| ------------- | -------------------- | ------------------------------- |
| Headline      | white + gradient     | Attention                       |
| Sub-headline  | slate-400            | Readable, không compete         |
| Strong text   | white                | Emphasis trong paragraph        |
| Accent text   | accent-400           | Call-out, nhưng không quá nhiều |
| Trust items   | slate-400 + icon màu | Subtle credibility              |
| CTA Primary   | Orange gradient      | Main action                     |
| CTA Secondary | white/5 border       | Alternative action              |

---

## ✅ CHECKLIST KIỂM THỬ HERO

### Typography
- [ ] H1 không bị dính chữ khi có dấu tiếng Việt (ả, ễ, ộ...)
- [ ] Không có từ đơn rớt xuống dòng riêng
- [ ] Paragraph dễ đọc, không dính dòng

### Visual Clarity
- [ ] Trust badges KHÔNG nhìn như button
- [ ] Chỉ CTA buttons mới có style button
- [ ] Countdown nổi bật nhưng không overwhelm H1

### Responsive
- [ ] Mobile (375px): Text không bị cắt
- [ ] Mobile: Trust items wrap gọn gàng
- [ ] Tablet/Desktop: Layout 2 cột balance

---

## 📋 NỘI DUNG ĐẦY ĐỦ CHO LANDING PAGE

*(Giữ nguyên nội dung từ version trước)*

### Hero Content
```
Badge: #ExpertOS 01
Headline: Giải pháp tinh gọn cho SỰ KIỆN & KHÓA HỌC
Sub-headline: Toàn bộ quy trình đã kiểm chứng qua nhiều webinar và khóa học trực tuyến qua Zoom, 
giúp bạn tự động hóa 90% vận hành, tiết kiệm 4-6 giờ mỗi ngày.
Accent line: Ngay cả khi bạn không biết code.

Trust items (text đơn giản):
✓ Học từ dự án thực tế 4 năm
✓ Đầy đủ tài liệu + template  
✓ Hoàn tiền 100% trong 7 ngày

Social proof: 1,200+ học viên đã tin dùng
```

### Pricing
- Giá trị thực: 12.200.000đ + 2.700.000đ bonus = 14.900.000đ
- Giá bán: 4.790.000đ
- Discount: -61% (so với 12.2M) hoặc -68% (so với 14.9M)

### FAQ: 8 câu đầy đủ
1. Không biết lập trình có tham gia được không?
2. Phù hợp với doanh nghiệp hay cá nhân?
3. Sau khi thanh toán nhận được gì?
4. Làm sao nhận workflow template?
5. Hoàn thành chương trình nhận được gì?
6. Làm thế nào đặt câu hỏi/hỗ trợ?
7. Quyền truy cập 365 ngày là thế nào?
8. Chính sách hoàn tiền như thế nào?

---

## 🎨 CSS FIXES CHO HERO

```css
/* Typography cho tiếng Việt */
h1, h2, h3 {
  line-height: 1.25; /* Thay vì 1.15 */
}

/* Ngăn từ đơn rớt dòng */
.no-orphan {
  white-space: nowrap;
}

/* Trust items - KHÔNG phải button */
.trust-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #94a3b8; /* slate-400 */
  font-size: 0.875rem;
  /* KHÔNG có: background, border, padding, rounded */
}

.trust-item i {
  color: #22c55e; /* green-500 */
}
```

---

## 📝 GHI CHÚ IMPLEMENTATION

1. **Line-height**: Dùng `leading-tight` thay vì `leading-[1.15]`
2. **Trust badges**: Bỏ pill styling (bg, border, rounded-full, padding)
3. **Text wrap**: Thêm `whitespace-nowrap` cho cụm từ quan trọng
4. **Hero cleaner**: Giảm visual noise, focus vào H1 và CTA
5. **Test mobile trước**: Đảm bảo responsive không break layout

---

*Guideline v2 - Cập nhật sau khi review index-detail.html*
