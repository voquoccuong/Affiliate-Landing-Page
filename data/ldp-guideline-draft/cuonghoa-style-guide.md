# Style Guide - Cuonghoa.ai (Trusted Academy Theme)

## 1. Design Philosophy
-   **Theme:** "Trusted Academy" / "Modern Professional".
-   **Vibe:** Clean, High-Contrast, authoritative but approachable.
-   **Contrast:** High readability (Dark Grey text on White background).
-   **Avoid:** Neon/Cyberpunk styles (unless specifically requested for a specific campaign), cluttered layouts.

## 2. Typography
### Primary Font: Be Vietnam Pro
-   **Usage:** Headings, UI Elements, Body text (primary).
-   **Weights:** 400 (Body), 500 (Medium), 600 (Semibold), 700 (Bold).
-   **Why:** Best Vietnamese language support and modern geometric look.

### Secondary Font: Inter
-   **Usage:** Data, Numbers, specific body text if needed.
-   **Weights:** 400, 500.

## 3. Color Palette (Tailwind Config)

```javascript
colors: {
    brand: {
        50: '#f0f9ff',
        100: '#e0f2fe',
        500: '#0ea5e9', // Sky Blue (Primary Action)
        600: '#0284c7', // Brand Main
        700: '#0369a1', // Hover State
    },
    navy: {
        800: '#1e293b', // Slate
        900: '#0f172a', // Deep Navy (Headings/Footer)
    },
    slate: {
        50: '#f8fafc', // Background
        600: '#475569', // Body Text
    },
    gold: {
        400: '#fbbf24', // Accents / Stars
    },
    red: {
        500: '#ef4444', // Error / Negative
        600: '#dc2626',
    }
}
```

## 4. UI Components

### Buttons
-   **Primary (CTA):** `bg-brand-600` text-white, `rounded-xl` or `rounded-full`. Shadow-lg.
-   **Secondary:** `bg-white` border `border-slate-200` text-slate-700.
-   **Hover Effects:** `transform hover:scale-105 transition-all`.

### Cards (Feature/Pricing)
-   **Background:** White (`bg-white`).
-   **Border:** Light Slate (`border-slate-100` or `border-slate-200`).
-   **Shadow:** Soft shadow (`shadow-sm` or `shadow-soft`).
-   **Radius:** `rounded-2xl` (Modern friendly look).

### Gradients
-   **Text Gradient:** `bg-gradient-to-r from-brand-600 to-purple-600`.
-   **Background Accents:** Subtle blurs (`blur-[100px]`) in `brand-100` or `blue-500/10`.

## 5. Responsive Breakpoints
-   **Container:** `container mx-auto px-6` (Standard padding).
-   **Mobile First:** Ensure stacking order makes sense (Image top or bottom depending on context).
-   **Grid:**
    -   Mobile: `grid-cols-1`.
    -   Tablet: `grid-cols-2`.
    -   Desktop: `grid-cols-3` or `grid-cols-4`.
