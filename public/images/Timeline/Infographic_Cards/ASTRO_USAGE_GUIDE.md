# Infographic Cards - Astro Integration Guide

## Overview
This package contains 11 responsive infographic cards in two color themes, ready for use in Astro projects with Tailwind CSS.

## Components Available

### Purple Theme (5 cards)
- `InfographicTemplateFrontend` - Asynchronous Frontend Coding (261px desktop height)
- `InfographicTemplateBrief` - Brief and Research (283px desktop height)
- `InfographicTemplateLiveTesting` - Live Testing (283px desktop height)
- `InfographicTemplateDesign` - Asynchronous Design Work (283px desktop height)
- `InfographicTemplateApis` - "Glueing" Systems Through APIs (283px desktop height)

### Blue-Gray Theme (6 cards)
- `InfographicTemplateResearch` - Brief and Research (283px desktop height)
- `InfographicTemplateUiDesign` - UI/UX Design (283px desktop height)
- `InfographicTemplateFrontendCoding` - Frontend Coding (325px desktop height - 15% larger)
- `InfographicTemplateBackend` - Backend Coding (283px desktop height)
- `InfographicTemplateTesting` - Testing (283px desktop height)
- `InfographicTemplateDevops` - Setting up the production environment (283px desktop height)

## Installation in Astro

### 1. Copy Components
Copy the entire `/components` folder to your Astro project's `src/components/` directory.

### 2. Required Dependencies
Ensure your Astro project has Tailwind CSS configured:

```bash
npm install @astrojs/tailwind tailwindcss
```

### 3. Tailwind Configuration
The components use specific font families and responsive breakpoints. Add this to your `tailwind.config.js`:

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        'open-sans': ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
```

### 4. Font Loading
Add Open Sans font to your project. In your main layout file:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap" rel="stylesheet">
```

## Usage in Astro Components

### Basic Usage
```astro
---
import InfographicTemplateFrontend from '../components/InfographicTemplateFrontend.tsx';
---

<div class="w-full max-w-[595px] mx-auto">
  <InfographicTemplateFrontend client:load />
</div>
```

### Multiple Cards Layout
```astro
---
import InfographicTemplateFrontend from '../components/InfographicTemplateFrontend.tsx';
import InfographicTemplateBrief from '../components/InfographicTemplateBrief.tsx';
import InfographicTemplateDesign from '../components/InfographicTemplateDesign.tsx';
---

<div class="space-y-8">
  <div class="w-full max-w-[595px] mx-auto">
    <InfographicTemplateFrontend client:load />
  </div>
  
  <div class="w-full max-w-[595px] mx-auto">
    <InfographicTemplateBrief client:load />
  </div>
  
  <div class="w-full max-w-[595px] mx-auto">
    <InfographicTemplateDesign client:load />
  </div>
</div>
```

### Grid Layout
```astro
---
import InfographicTemplateResearch from '../components/InfographicTemplateResearch.tsx';
import InfographicTemplateUiDesign from '../components/InfographicTemplateUiDesign.tsx';
import InfographicTemplateBackend from '../components/InfographicTemplateBackend.tsx';
---

<div class="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
  <div class="w-full max-w-[595px] mx-auto">
    <InfographicTemplateResearch client:load />
  </div>
  
  <div class="w-full max-w-[595px] mx-auto">
    <InfographicTemplateUiDesign client:load />
  </div>
  
  <div class="w-full max-w-[595px] mx-auto lg:col-span-2">
    <InfographicTemplateBackend client:load />
  </div>
</div>
```

## Responsive Behavior

### Mobile (< 768px)
- Cards adjust to container width
- Images positioned at top
- Text content positioned at bottom with 16px margin
- Heights: 400px (Frontend), 460px (Frontend Coding), 380px (Live Testing), 384px (others)

### Desktop (≥ 768px)
- Fixed width: 595px
- Side-by-side layout: text left, image right
- 4px gap between text and image
- Heights: 261px (Frontend), 325px (Frontend Coding), 283px (others)

## Styling Notes

### Color Themes
- **Purple Theme**: Background `#25202d`, Text background `#302a38`
- **Blue-Gray Theme**: Background `#1d282f`, Text background `#26323a`

### Typography
- Font: Open Sans Regular
- Title: 20px
- Body: 14px with 22px line height
- Text color: White (#ffffff)

### Layout Structure
- Text width: Fixed at 291px on desktop
- Text background: Rounded corners (rounded-xl)
- Z-index layering for proper overlap
- Vertical centering on desktop

## Asset Management
The components use Figma assets with `figma:asset/` imports. These will need to be replaced with your actual image paths in a production environment.

## Customization

### Changing Colors
To customize colors, modify the background classes in each component:
- Main background: `bg-[#color]`
- Text background: `bg-[#color]`

### Modifying Content
Each component has a `Text()` function where you can modify the title and description content.

### Adjusting Responsive Breakpoints
The components use Tailwind's `md:` prefix (768px). To change this, update the responsive classes throughout the components.

## Browser Support
- Modern browsers with CSS Grid and Flexbox support
- Tailwind CSS responsive utilities
- CSS custom properties for dynamic styling

## Performance Considerations
- Use `client:load` for immediate interactivity
- Use `client:visible` for lazy loading if cards are below the fold
- Consider using `client:media` for responsive loading

## Examples
See the included `App.tsx` for a complete showcase implementation with both themes.