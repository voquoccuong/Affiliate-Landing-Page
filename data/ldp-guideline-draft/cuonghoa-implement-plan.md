# Implementation Plan - Cuonghoa.ai Landing Page

## Project Overview
**Goal:** Create a high-converting, trust-building landing page for "AI Automation Bootcamp".
**Tech Stack:** HTML5, Tailwind CSS (CDN), Alpine.js.
**Output:** Single HTML file (e.g., `cuonghoa-bootcamp-k02-v2.html`).

## Phase 1: Setup & Assets
1.  **HTML Skeleton:** Setup standard HTML5 boilerplate.
2.  **Libraries:**
    -   Tailwind CSS: `<script src="https://cdn.tailwindcss.com"></script>`
    -   Alpine.js: `<script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"></script>`
    -   Fonts: Google Fonts link for Be Vietnam Pro & Inter.
3.  **Config:** Configure Tailwind theme (Colors, Fonts) in the `<script>` tag.
4.  **Meta Tags:** Set SEO Title, Description, and OpenGraph (OG) Image (`hero_section_og.png`).

## Phase 2: Structure & Layout
*Follow this section order for maximum conversion:*

### 1. Header (Sticky)
-   **Left:** Logo.
-   **Right (Desktop):** Nav Links (Chương trình, Học phí) + CTA Button + Hotline.
-   **Right (Mobile):** Hamburger Menu.

### 2. Hero Section (Above the Fold)
-   **Layout:** Split (Text Left, Video Right) or Centered.
-   **Elements:**
    -   "Status Badge" (e.g., "K02 Đã Mở Đăng Ký").
    -   **H1 Headline:** Value Proposition ("Làm Chủ AI & Tự Động Hóa").
    -   **Subheadline:** For who? (Non-tech friendly).
    -   **CTA Buttons:** Primary (Anchor to Pricing), Secondary (Anchor to Video).
    -   **Video Embed:** Youtube Iframe wrapped in a responsive aspect-ratio box.
    -   **Micro-Social Proof:** "70+ Students joined".

### 3. Social Proof (Trust)
-   **Grid:** 3 columns of testimonial images.
-   **Assets:** Use verified LadiCDN images.

### 4. Problem & Solution (Agitation)
-   **Cards:** 3 cards highlighting pain points (Overwhelmed, Manual Work, Fear).
-   **Style:** Darker background (Navy) to contrast with the rest of the white site.

### 5. Curriculum (The "Mechanism")
-   **List:** Vertical list or 2-column grid of Modules.
-   **Detail:** Module Number + Title + Brief Description.

### 6. Pricing (The Offer)
-   **Strategy:** "Action-Based Pricing".
-   **Layout:** 3 Cards.
    -   Middle Card (Hero): "Gói Cam Kết" (Highlight with color/border/shadow).
    -   Side Cards: "Observer" and "Flexible".
-   **Features:** Use Checkmarks (Green) vs Crosses (Red) to distinguish value.

### 7. FAQ (Objection Handling)
-   **Interaction:** Accordion style (Click to expand) using Alpine.js (`x-data="{ active: null }"`).
-   **Key Questions:** No-tech friendly? What if I miss live? Refund policy?

### 8. Footer
-   **Info:** Logo, Address, Contacts.
-   **Links:** Policy links (Popups/Modals).

## Phase 3: Verification Checklist
-   [ ] **Mobile Responsiveness:** Check hamburger menu, stacking order of Hero/Pricing.
-   [ ] **broken Links:** Test all anchors (`#hoc-phi`, `#faq`) and external links.
-   [ ] **Images:** Ensure all LadiCDN images load correctly.
-   [ ] **Video:** Verify Youtube embed plays correctly.
-   [ ] **Policies:** Ensure Policy buttons trigger the expected behavior (Alert/Link).
