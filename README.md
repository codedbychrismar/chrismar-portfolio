# Chrismar Ilustrisimo Portfolio

A game-inspired personal portfolio built with Vite, React, TypeScript, TSX, and Tailwind CSS.

## Production Structure

```text
src/
  app/
  features/
    portfolio/
      components/
      constants/
      hooks/
      pages/
      services/
      types/
      utils/
      index.ts
  shared/
    components/
    utils/
```

The production entry is `src/app`, and the portfolio feature is exported through `src/features/portfolio/index.ts`.

## Scripts

```bash
npm run dev
npm run build
npm run preview
npm run lint
npm run typecheck
```

## Environment

Optional deployment variables:

```text
VITE_CONTACT_EMAIL=
VITE_GITHUB_URL=
VITE_LINKEDIN_URL=
```

`VITE_CONTACT_EMAIL` enables the contact form to open a prefilled email draft.

## Quality Checks

- `npm run lint:types` runs TypeScript checks.
- `npm run lint:css` runs Stylelint against CSS files.
- `npm run check:css-vars` verifies Tailwind CSS variables are defined.
- `npm run check:css-classes` catches accidental `class=` usage in React files.

## Legacy Template Notes

The section below is retained from the generated starter documentation for the project no-deletion rule.

# Enhanced Vite React TypeScript Template

This template includes built-in detection for missing CSS variables between your Tailwind config and CSS files.

## Features

- **CSS Variable Detection**: Automatically detects if CSS variables referenced in `tailwind.config.cjs` are defined in `src/index.css`
- **Enhanced Linting**: Includes ESLint, Stylelint, and custom CSS variable validation
- **Shadcn/ui**: Pre-configured with all Shadcn components
- **Modern Stack**: Vite + React + TypeScript + Tailwind CSS

## Available Scripts

```bash
# Run all linting (includes CSS variable check)
npm run lint

# Check only CSS variables
npm run check:css-vars

# Individual linting
npm run lint:js    # ESLint
npm run lint:css   # Stylelint
```

## CSS Variable Detection

The template includes a custom script that:

1. **Parses `tailwind.config.cjs`** to find all `var(--variable)` references
2. **Parses `src/index.css`** to find all defined CSS variables (`--variable:`)
3. **Cross-references** them to find missing definitions
4. **Reports undefined variables** with clear error messages

### Example Output

When CSS variables are missing:
```
❌ Undefined CSS variables found in tailwind.config.cjs:
   --sidebar-background
   --sidebar-foreground
   --sidebar-primary

Add these variables to src/index.css
```

When all variables are defined:
```
✅ All CSS variables in tailwind.config.cjs are defined
```

## How It Works

The detection happens during the `npm run lint` command, which will:
- Exit with error code 1 if undefined variables are found
- Show exactly which variables need to be added to your CSS file
- Integrate seamlessly with your development workflow

This prevents runtime CSS issues where Tailwind classes reference undefined CSS variables.
