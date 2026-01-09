# Phase 4: Design Synthesis (Style Guide - Merged)

**Refined by:** `@mcp:ui-ux-pro-max`  
**Theme:** Trusted Academy (Trust & Authority) — Clean, Light Mode, thân thiện với non-tech.  
**This file supersedes `style-guide-02.md` (giữ để tham khảo).**

## 1) Design Philosophy
- **Core:** Trust, Authority, Simplicity; tránh “dark/hacker”.
- **Visual Language:** Clean lines, generous whitespace, rounded corners (Soft UI), subtle shadows.
- **Key Interactions:** Pulse badges cho urgency, fade-up nhẹ cho content, hover lift cho cards.

## 2) Typography
- **Primary:** `Be Vietnam Pro` (Weights 400/500/600/700/800) — body & heading chính, tối ưu tiếng Việt.
- **Data/Numbers:** `Inter` (tabular figures) — giá, số liệu.
- **Line-height:** Body `leading-relaxed` (~1.65), heading `leading-tight`.
- **Min size:** Body ≥ 16px; caption 14px.

## 3) Color Palette (Trust & Conversion)
| Role            | Hex       | Tailwind          | Usage                                   |
| :-------------- | :-------- | :---------------- | :-------------------------------------- |
| **Primary**     | #0ea5e9   | `sky-500`         | Links, secondary buttons, icons         |
| **Brand**       | #1e293b   | `slate-800`       | Hero backgrounds, headings              |
| **Dark**        | #0f172a   | `slate-900`       | Footer, dark sections                   |
| **CTA**         | #f97316   | `orange-500`      | Primary action buttons                  |
| **Accent**      | #a855f7   | `purple-500`      | Gradients, highlights (tiết chế)        |
| **Success**     | #10b981   | `emerald-500`     | Trust badges, checkmarks                |
| **Surface**     | #ffffff   | `white`           | Cards, main content                     |
| **Surface Alt** | #f8fafc   | `slate-50`        | Alternating sections                    |

## 4) Spacing, Grid, Radius, Shadow
- **Spacing scale:** 4 / 8 / 12 / 16 / 20 / 24 / 32 / 40 / 48.
- **Grid:** Container max 1200px (`max-w-6xl`/`7xl`), gutters `px-6` mobile, `px-8` desktop. Hero/grid: 1 col mobile, 2 col desktop; pricing 1-2-3 col.
- **Radius:** Cards/buttons `rounded-2xl` (20-24px), inputs `rounded-xl` (12-16px), badges `rounded-full`.
- **Shadow:** Soft default `shadow-sm`, hover `shadow-lg shadow-sky-500/10`, CTA glow `shadow-orange-500/25`.

## 5) Components
- **Buttons:**
  - Primary: `bg-orange-500 text-white rounded-full px-6 py-3 font-semibold shadow-lg shadow-orange-500/30 hover:-translate-y-0.5 hover:shadow-xl focus-visible:ring-2 focus-visible:ring-orange-500`.
  - Secondary: `bg-white border border-slate-200 text-slate-700 rounded-full px-6 py-3 hover:-translate-y-0.5 hover:shadow-md`.
- **Cards:**
  - Base: `bg-white rounded-2xl border border-slate-100 shadow-sm`.
  - Hover: `shadow-xl translate-y-[-4px]`.
- **Badges:** `bg-emerald-50 text-emerald-700 border border-emerald-100 rounded-full px-3 py-1 text-sm` + optional `animate-ping` halo.
- **Forms:** Inputs `bg-white border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-sky-500 focus:border-sky-500`.
- **Nav:** Sticky top, mobile hamburger, drop shadow on scroll (`shadow-md`).
- **Video:** Aspect-ratio 16:9, rounded corners, subtle shadow.

## 6) Imagery & Iconography
- **Imagery:** Ảnh thật học viên/coach, nền sáng, tránh stock quá giả; nếu cần pattern dùng gradient nhạt (sky → slate).
- **Icons:** Line icon, bo tròn, stroke 1.5–2px; màu `sky-600`/`slate-600`.

## 7) Motion & Accessibility
- **Motion:** Duration 200–350ms, easing `ease-out`. Fade-up nhẹ (20px), pulse cho badge Early Bird.
- **Accessibility:** Contrast ≥ AA; focus ring rõ; font-size ≥ 16px; tránh text trên ảnh thiếu overlay; keyboard tab qua CTA.

## 8) Layout Patterns (High Converting)
1. **Hero:** Value prop + video proof (hoặc badge số liệu). CTA kép: hành động chính + phụ.
2. **Social Proof:** Trust strip (logo/ảnh) ngay dưới hero.
3. **Features/Benefits:** 3–4 cards với icon.
4. **Curriculum:** Vertical timeline/stacked cards.
5. **Pricing:** 3-col, highlight gói Cam Kết ở giữa; badge “tiết kiệm”.
6. **FAQ:** Accordion với indicator + state hover/focus.

## 9) Prompt gợi ý cho `@mcp:ui-ux-pro-max`
> Thiết kế landing cho AI Bootcamp K02, audience non-tech SMB owners, tone: authoritative + friendly. Tham chiếu styles: [link1 + điểm thích/ghét], [link2], tránh dark/hacker. Ưu tiên hero chứng thực video + strip testimonial, CTA chính “Đăng ký Early Bird 1.250k”, CTA phụ “Xem lịch học”. Palette trust blue + orange CTA, font Be Vietnam Pro/Inter. Spacing scale 4/8/12/16/20/24/32/40/48, radius 16/24, shadow mềm. Icon line, ảnh thật học viên. Yêu cầu contrast AA, mobile-first, animation fade-up nhẹ + pulse badge. Trả về: palette, typography, spacing/grid, button states, card spec, form spec, hero layout, component tokens.
