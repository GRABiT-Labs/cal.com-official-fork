# Cal.Com Color Tokens - GRABiT-Labs Bronze Theme

**Complete color system with OKLCH values and WCAG contrast ratios**

---

## 📊 Complete Token Table

| Token | Hex | OKLCH L | OKLCH C | OKLCH H | Contrast vs BG | Contrast vs Surface | Contrast vs Text |
|-------|-----|---------|---------|---------|----------------|---------------------|------------------|
| **background** | `#0E0F10` | 0.1677 | 0.0027 | 248.0 | 1.0 | 1.08 | 15.63 |
| **surface** | `#15181B` | 0.2071 | 0.0076 | 248.2 | 1.08 | 1.0 | 14.52 |
| **border** | `#2A2F36` | 0.3032 | 0.0145 | 256.8 | 1.42 | 1.32 | 10.98 |
| **text_primary** | `#E6E8EB` | 0.9303 | 0.0046 | 258.3 | 15.63 | 14.52 | 1.0 |
| **accent_bronze** | `#C38E3D` | 0.6833 | 0.1161 | 74.9 | 6.63 | 6.16 | 2.36 |
| **accent_hover** | `#D39A43` | 0.7250 | 0.1230 | 74.9 | 7.74 | 7.19 | 2.02 |
| **accent_tint** | `#8C6A2E` | 0.5463 | 0.0885 | 79.2 | 3.85 | 3.58 | 4.06 |

---

## ✅ WCAG 2.2 Compliance

### AAA Level (7:1 minimum)
- ✅ **text_primary on surface:** 14.52:1 (AAA)
- ✅ **text_primary on background:** 15.63:1 (AAA)
- ✅ **accent_hover on background:** 7.74:1 (AAA)

### AA Level (4.5:1 minimum for body text)
- ✅ **accent_bronze on background:** 6.63:1 (AA)
- ✅ **accent_bronze on surface:** 6.16:1 (AA)
- ✅ **border on background:** 1.42:1 (decorative only)

### Usage Guidelines
- **Body text:** Use `text_primary` (#E6E8EB) on `surface` or `background`
- **Buttons/Links:** Use `accent_bronze` (#C38E3D) on `background` or `surface`
- **Hover states:** Use `accent_hover` (#D39A43)
- **Borders/Dividers:** Use `border` (#2A2F36) - decorative only, not for text
- **Subdued elements:** Use `accent_tint` (#8C6A2E) for icons, borders, disabled states

---

## 🎨 Color Palette Reference

### Base Colors (Dark Mode)

```css
/* Background - Darkest layer */
--color-background: #0E0F10;
--oklch-background: oklch(0.1677 0.0027 248);

/* Surface - Cards, modals, panels */
--color-surface: #15181B;
--oklch-surface: oklch(0.2071 0.0076 248.2);

/* Border - Dividers, outlines */
--color-border: #2A2F36;
--oklch-border: oklch(0.3032 0.0145 256.8);

/* Text - Primary text */
--color-text: #E6E8EB;
--oklch-text: oklch(0.9303 0.0046 258.3);
```

### Accent Colors (Modern Bronze)

```css
/* Primary accent - Buttons, links, highlights */
--color-primary: #C38E3D;
--oklch-primary: oklch(0.6833 0.1161 74.9);

/* Hover state */
--color-primary-hover: #D39A43;
--oklch-primary-hover: oklch(0.725 0.123 74.9);

/* Tint - Subdued accent */
--color-primary-tint: #8C6A2E;
--oklch-primary-tint: oklch(0.5463 0.0885 79.2);
```

---

## 🔧 Implementation Examples

### CSS Variables

```css
:root {
  /* Base */
  --bg: #0E0F10;
  --surface: #15181B;
  --border: #2A2F36;
  --text: #E6E8EB;
  
  /* Accent */
  --primary: #C38E3D;
  --primary-hover: #D39A43;
  --primary-tint: #8C6A2E;
  
  /* OKLCH (for supporting browsers) */
  --oklch-bg: oklch(0.1677 0.0027 248);
  --oklch-surface: oklch(0.2071 0.0076 248.2);
  --oklch-border: oklch(0.3032 0.0145 256.8);
  --oklch-text: oklch(0.9303 0.0046 258.3);
  --oklch-primary: oklch(0.6833 0.1161 74.9);
  --oklch-primary-hover: oklch(0.725 0.123 74.9);
  --oklch-primary-tint: oklch(0.5463 0.0885 79.2);
}
```

### Tailwind Config

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        bg: '#0E0F10',
        surface: '#15181B',
        border: '#2A2F36',
        text: '#E6E8EB',
        primary: {
          DEFAULT: '#C38E3D',
          hover: '#D39A43',
          tint: '#8C6A2E',
        },
      },
    },
  },
}
```

### JSON Configuration

```json
{
  "colors": {
    "background": "#0E0F10",
    "surface": "#15181B",
    "border": "#2A2F36",
    "text": "#E6E8EB",
    "primary": "#C38E3D",
    "primaryHover": "#D39A43",
    "primaryTint": "#8C6A2E"
  },
  "oklch": {
    "background": "oklch(0.1677 0.0027 248)",
    "surface": "oklch(0.2071 0.0076 248.2)",
    "border": "oklch(0.3032 0.0145 256.8)",
    "text": "oklch(0.9303 0.0046 258.3)",
    "primary": "oklch(0.6833 0.1161 74.9)",
    "primaryHover": "oklch(0.725 0.123 74.9)",
    "primaryTint": "oklch(0.5463 0.0885 79.2)"
  }
}
```

---

## 🎯 Usage Matrix

| Element | Background | Text/Icon | Hover | Active | Focus Ring |
|---------|------------|-----------|-------|--------|------------|
| **Button (Primary)** | `#C38E3D` | `#0E0F10` | `#D39A43` | `#B98236` | `#E0AE47` |
| **Button (Secondary)** | `#15181B` | `#C38E3D` | `#2A2F36` | `#2A2F36` | `#E0AE47` |
| **Link** | transparent | `#C38E3D` | `#D39A43` | `#D39A43` | `#E0AE47` |
| **Input** | `#15181B` | `#E6E8EB` | border: `#C38E3D` | border: `#C38E3D` | `#E0AE47` |
| **Card** | `#15181B` | `#E6E8EB` | - | - | - |
| **Modal** | `#15181B` | `#E6E8EB` | - | - | - |
| **Divider** | `#2A2F36` | - | - | - | - |
| **Icon (Active)** | transparent | `#C38E3D` | `#D39A43` | - | - |
| **Icon (Inactive)** | transparent | `#8C6A2E` | `#C38E3D` | - | - |

---

## 📐 Semantic Color Extensions

For success, warning, and danger states (from original theme):

```css
/* Semantic colors */
--color-success: #45B07C;
--color-warning: #E3A23B;
--color-danger: #E26D5A;
--color-info: #4A9EFF;
```

These should also be tested for contrast against your backgrounds.

---

## 🧪 Testing Tools

Verify your implementations with:

1. **WebAIM Contrast Checker**
   - https://webaim.org/resources/contrastchecker/
   - Test: text on surface, primary on background

2. **OKLCH Color Picker**
   - https://oklch.com/
   - Verify: perceptual uniformity of color scales

3. **Browser DevTools**
   - Chrome/Edge: Lighthouse accessibility audit
   - Firefox: Accessibility inspector

4. **Automated Testing**
   ```bash
   # Install axe-core for automated a11y testing
   npm install --save-dev @axe-core/cli
   axe https://localhost:3000
   ```

---

## 🔄 Cal.com Integration

### Step 1: Copy to Cal.com
```bash
# From ERPCal.com root
cp -r customizations/themes cal-com/public/customizations/
```

### Step 2: Import in Cal.com
```css
/* In cal-com/apps/web/styles/globals.css */
@import '/customizations/themes/grabit-bronze.css';
```

### Step 3: Extend Tailwind
```javascript
// In cal-com/tailwind.config.js
const grabitTheme = require('./public/customizations/themes/tailwind.config.js');

module.exports = {
  ...grabitTheme,
  // ... rest of config
}
```

---

## 📊 Color Science Notes

### Why OKLCH?

**OKLCH (Oklab Lightness Chroma Hue)** provides:
- **Perceptual uniformity:** Equal numeric changes = equal perceived changes
- **Predictable lightness:** L value directly correlates to perceived brightness
- **Better chroma control:** C value controls saturation consistently across hues
- **Future-proof:** CSS Color Level 4 standard

### Lightness Scale
- `0.0` = Pure black
- `0.1677` = Background (very dark)
- `0.2071` = Surface (dark)
- `0.3032` = Border (medium-dark)
- `0.5463` = Tint (medium)
- `0.6833` = Primary accent (medium-light)
- `0.7250` = Hover (light)
- `0.9303` = Text (very light)
- `1.0` = Pure white

### Chroma Scale
- `0.0027` = Nearly neutral (background)
- `0.0076` = Subtle color (surface)
- `0.0145` = Visible but muted (border)
- `0.0885` = Moderate saturation (tint)
- `0.1161` = Strong saturation (primary)
- `0.1230` = Vibrant (hover)

---

## 🎨 Color Palette Visualization

```
Darkest ──────────────────────────────────────────────────► Lightest

#0E0F10        #15181B        #2A2F36        #8C6A2E        #C38E3D        #D39A43        #E6E8EB
background     surface        border         tint           primary        hover          text
L: 0.17        L: 0.21        L: 0.30        L: 0.55        L: 0.68        L: 0.73        L: 0.93

└─────────────────────────────────────────────────────────────────────────────────────────┘
                              Bronze Accent Family
                              Hue: 74.9° - 79.2° (warm yellow-orange)
```

---

## 📚 References

- **WCAG 2.2:** https://www.w3.org/WAI/WCAG22/quickref/
- **OKLCH:** https://oklch.com/
- **CSS Color 4:** https://www.w3.org/TR/css-color-4/
- **Material Design 3:** https://m3.material.io/styles/color/overview
- **Contrast Checker:** https://webaim.org/resources/contrastchecker/

---

**Version:** 1.0.0  
**Last Updated:** 2025-10-12  
**Theme:** GRABiT-Labs Bronze  
**Compliance:** WCAG 2.2 Level AA
