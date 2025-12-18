# GRABiT-Labs Bronze Theme

**Dark-mode first theme with Modern Bronze accent**  
**WCAG 2.2 AA Compliant** ✅

---

## 🎨 Color Palette

### Primary Colors
- **Primary:** `#C38E3D` (Modern Bronze)
- **Primary Hover:** `#D39A43`
- **Primary Active:** `#B98236`
- **Primary Foreground:** `#0B0C0E` (text on bronze buttons)

### Neutrals (Dark Mode)
- **Background:** `#0E0F10` (darkest)
- **Surface:** `#15181B` (cards, modals)
- **Border:** `#2A2F36` (dividers, outlines)
- **Text:** `#E6E8EB` (primary text)
- **Muted Text:** `#B7BDC6` (secondary text)

### Semantic Colors
- **Success:** `#45B07C` (green)
- **Warning:** `#E3A23B` (amber)
- **Danger:** `#E26D5A` (red)

### Focus & Interaction
- **Focus Ring:** `#E0AE47` (lighter bronze for visibility)
- **Link:** `#C38E3D`
- **Link Hover:** `#D39A43`

---

## ♿ Accessibility

All color combinations meet **WCAG 2.2 Level AA** standards:

| Combination | Contrast Ratio | Status |
|-------------|----------------|--------|
| Text on Surface | 14.52:1 | ✅ AAA |
| Primary on Background | 6.63:1 | ✅ AA |
| Hover on Background | 7.74:1 | ✅ AA |

---

## 📁 Files

### `grabit-bronze.css`
Complete CSS custom properties (CSS variables) for the theme.

**Usage:**
```html
<link rel="stylesheet" href="customizations/themes/grabit-bronze.css">
```

### `grabit-bronze.json`
Theme configuration in JSON format for programmatic use.

**Usage:**
```javascript
import theme from './customizations/themes/grabit-bronze.json';
```

### `tailwind.config.js`
Tailwind CSS configuration extension.

**Usage:**
Merge into Cal.com's `tailwind.config.js`:
```javascript
const grabitTheme = require('./customizations/themes/tailwind.config.js');

module.exports = {
  ...grabitTheme,
  // ... rest of Cal.com config
}
```

---

## 🔧 Implementation

### Option 1: CSS Variables (Recommended)
Import the CSS file in Cal.com's main stylesheet or HTML:

```css
@import './customizations/themes/grabit-bronze.css';
```

### Option 2: Tailwind Extension
Merge the Tailwind config into Cal.com's existing config.

### Option 3: Direct Integration
Use the JSON file to programmatically set theme values in Cal.com's theming system.

---

## 🎯 Usage Examples

### Buttons
```html
<button class="bg-primary hover:bg-primary-hover text-primary-fg rounded-md">
  Book Meeting
</button>
```

### Cards
```html
<div class="bg-surface border border-border rounded-lg shadow-elev1">
  <!-- Card content -->
</div>
```

### Links
```html
<a href="#" class="text-link hover:text-link-hover hover:underline">
  Learn more
</a>
```

### Focus States
```html
<input class="bg-surface border-border focus:ring-2 focus:ring-focus">
```

---

## 🌈 OKLCH Color Space

For browsers that support OKLCH, the theme includes perceptually uniform color variants:

```css
:root {
  --oklch-primary: oklch(0.6833 0.1161 74.9);
  --oklch-primary-hover: oklch(0.725 0.123 74.9);
  /* ... more variants */
}
```

**Benefits:**
- Predictable lightness/chroma control
- Better for scaling states
- More accurate theming

---

## 📐 Design Tokens

### Border Radius
- **Small:** 8px
- **Medium:** 12px
- **Large:** 16px

### Shadows
- **Elevation 1:** `0 2px 10px rgba(0,0,0,0.35)`
- **Elevation 2:** `0 6px 24px rgba(0,0,0,0.45)`

---

## 🔄 Integration with Cal.com

Cal.com uses Tailwind CSS and supports custom theming. To integrate:

1. **Copy theme files** to `cal-com/apps/web/styles/`
2. **Import CSS** in `cal-com/apps/web/styles/globals.css`:
   ```css
   @import './grabit-bronze.css';
   ```
3. **Extend Tailwind** (optional) in `cal-com/tailwind.config.js`:
   ```javascript
   const grabitTheme = require('./public/customizations/themes/tailwind.config.js');
   ```

> **Note:** The `scripts/build-custom.ps1` script automates this integration—it copies the theme CSS and injects the `@import` into `globals.css`. Run it directly or via `05-build-docker.ps1` (which prompts Y/N).

---

## 🧪 Testing

Verify contrast ratios using:
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [OKLCH Color Picker](https://oklch.com/)
- Browser DevTools Accessibility panel

---

## 📚 References

- [WCAG 2.2 Guidelines](https://www.w3.org/WAI/WCAG22/quickref/)
- [OKLCH Color Space](https://oklch.com/)
- [Material Design 3](https://m3.material.io/)
- [Nielsen Design System](https://www.nngroup.com/articles/dark-mode/)

---

**Version:** 1.0.0  
**Last Updated:** 2025-10-12  
**Maintained by:** GRABiT-Labs
