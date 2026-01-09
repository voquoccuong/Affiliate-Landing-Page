# Phase 4.1: Refined Style Guide (MCP Generated)

**Source:** `@mcp:ui-ux-pro-max`
**Iteration:** 02 (Refined for "Trusted Academy").
**Target Audience:** Non-tech Business Owners.

## 1. Design System Structure (`Trusted Academy`)
-   **Core Philosophy:** Trust, Authority, Simplicity.
-   **Visual Language:** Clean lines, generous whitespace, rounded corners (Soft UI), subtle shadows.
-   **Key Interactions:** Pulse animations for urgency, smooth fade-ups for content reveal, hover lifts for cards.

## 2. Color Palette (Trust & Conversion)
*Optimized for high contrast and readability.*

| Role            | Color Name       | Hex Code  | Tailwind Class     | Context                                |
| :-------------- | :--------------- | :-------- | :----------------- | :------------------------------------- |
| **Primary**     | **Trust Blue**   | `#0ea5e9` | `bg-sky-500`       | Links, Secondary Buttons, Icons        |
| **Brand**       | **Royal Navy**   | `#1e293b` | `bg-slate-800`     | Hero Backgrounds, Headings             |
| **Dark**        | **Deep Space**   | `#0f172a` | `bg-slate-900`     | Footer, Dark Sections                  |
| **CTA**         | **Solar Orange** | `#f97316` | `bg-orange-500`    | **Primary Action** (Purchase/Register) |
| **Accent**      | **Soft Purple**  | `#a855f7` | `text-purple-500`  | Gradients, Highlights                  |
| **Success**     | **Emerald**      | `#10b981` | `text-emerald-500` | Trust Badges, Checkmarks               |
| **Surface**     | **Clean White**  | `#ffffff` | `bg-white`         | Cards, Main Content                    |
| **Surface Alt** | **Pale Blue**    | `#f8fafc` | `bg-slate-50`      | Alternating Sections                   |

## 3. Typography (Vietnamese Optimized)
-   **Primary Font:** `Be Vietnam Pro` (Google Fonts).
    -   *Display:* Weight 700/800 (Headings).
    -   *Body:* Weight 400/500 (Reading text).
-   **Data Font:** `Inter` (Numbers, Prices).
    -   *Why:* Tabular figures for better pricing alignment.

## 4. Layout Patterns (High Converting)
1.  **Hero:** Center-aligned, High Impact Headline + Video Proof.
2.  **Social Proof:** "Trust Strip" immediately below Hero (Logos/Faces).
3.  **Features:** 2x2 or 3x1 Card Grids with Iconography.
4.  **Curriculum:** Vertical Timeline or Stacked Cards.
5.  **Pricing:** 3-Column Table with "Center Highlight" (Price Anchoring).

## 5. UI Component Specs
-   **Buttons:**
    -   *Primary:* `bg-orange-500` + `shadow-lg` + `shadow-orange-500/30` + `rounded-full`.
    -   *Secondary:* `bg-white` + `border` + `text-slate-700`.
-   **Cards:**
    -   *Style:* `bg-white` + `rounded-2xl` + `border-slate-100`.
    -   *Hover:* `shadow-xl` + `translate-y-[-4px]` (Lift effect).
-   **Badges:**
    -   *Style:* `bg-emerald-50` + `text-emerald-700` + `border-emerald-100`.
    -   *Anim:* Pulse effect (`animate-ping`).

## 6. Verification Checklist (Visual QA)
-   [ ] **Contrast:** Orange CTA must pop against Blue/White backgrounds.
-   [ ] **Readability:** Line-height `relaxed` for body text.
-   [ ] **Vibe:** Feels like a "Professional Course", not a "Cheap E-book".
