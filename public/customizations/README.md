# Customizations Directory

This directory is a **staging area** for white-label customizations. Files here must be wired into Cal.com's expected locations before they take effect.

> **Cal.com Source of Truth:**
> - Logos → `cal-com/apps/web/public/` + `packages/lib/constants.ts`
> - Theme CSS → `cal-com/apps/web/styles/globals.css`
> - Env vars → `cal-com/.env`

## Structure

```
customizations/
├── themes/          # Custom themes
│   ├── default/     # Your default brand theme
│   └── customers/   # Customer-specific themes
├── logos/           # Brand logos and assets
│   ├── default/     # Your default brand assets
│   └── customers/   # Customer-specific assets
├── config/          # White-label configuration files
└── features/        # Custom feature modules
```

## Usage

### Adding a New Theme

1. Create theme directory:
   ```bash
   mkdir -p themes/mytheme
   ```

2. Create theme configuration:
   ```javascript
   // themes/mytheme/theme.config.js
   module.exports = {
     name: "My Theme",
     colors: { /* ... */ },
     typography: { /* ... */ },
   };
   ```

3. Reference in environment:
   ```env
   CUSTOMER_THEME="mytheme"
   ```

### Adding Logos

Place logo files in appropriate directory:
- `logos/default/` - Your brand's default logos
- `logos/customers/[customer-id]/` - Customer-specific logos

Required files:
- `logo.svg` - Main logo
- `logo-dark.svg` - Dark theme logo
- `favicon.ico` - Browser favicon

### Custom Features

Create feature modules in `features/`:

```
features/
├── custom-booking/
│   ├── index.tsx
│   └── styles.css
└── custom-dashboard/
    ├── index.tsx
    └── components/
```

## Build Process

Customizations are wired into Cal.com via `build-custom.ps1`:

```powershell
# Apply customizations only
.\scripts\build-custom.ps1

# Or run full Docker build (prompts to apply customizations)
.\scripts\05-build-docker.ps1
```

**`build-custom.ps1`** does:
1. Copies logos from `logos/default/` → `cal-com/apps/web/public/`
2. Copies theme CSS to `cal-com/apps/web/styles/`
3. Injects `@import` into `globals.css`
4. Copies full customizations to `public/customizations/`

**`05-build-docker.ps1`** prompts `Apply customizations? (Y/N)` and calls `build-custom.ps1` if Y, then runs `yarn build` + Docker.

## Best Practices

1. **Keep Separate:** Don't modify Cal.com source directly
2. **Use Themes:** Leverage theme system for styling
3. **Environment Variables:** Use for configuration
4. **Version Control:** Track all customizations in git
5. **Document:** Add README for complex customizations

## See Also

- [White-Labeling Guide](../docs/white-labeling.md)
- [Setup Guide](../docs/setup.md)
