# Timeline Project - Astro Migration Guide

## Overview
This guide will help you port the vertical timeline component from React to Astro.

## Essential Files to Port

### 1. Core Component
- `components/Timeline.tsx` - Main timeline component (needs conversion to Astro)
- `App.tsx` - Main layout structure

### 2. SVG Assets
- `imports/svg-salhtp65jk.ts` - Contains all SVG path data for timeline arrows and elements

### 3. Styles
- `styles/globals.css` - Global styles and typography settings

## React to Astro Conversion Steps

### 1. Component Structure Changes
```astro
---
// Astro component frontmatter
import svgPaths from '../imports/svg-salhtp65jk.ts';
---

<div class="timeline-container">
  <!-- Component content -->
</div>

<style>
  /* Component-specific styles */
</style>
```

### 2. Key Differences to Address

#### Event Handlers
- React: `onClick={handleClick}`
- Astro: Use `<script>` tags for client-side interactivity

#### Class Names
- React: `className="..."`
- Astro: `class="..."`

#### Inline Styles
- React: `style={{ property: 'value' }}`
- Astro: `style="property: value"`

### 3. Timeline Component Conversion

The Timeline component uses:
- Absolute positioning with calc() functions
- Custom CSS variables for colors
- SVG path rendering
- Montserrat font family

## Required Dependencies for Astro

```json
{
  "dependencies": {
    "@astrojs/tailwind": "latest",
    "tailwindcss": "latest"
  }
}
```

## Color Scheme
- Left background: `#25202D`
- Right background: `#1D282F`
- Timeline elements: `#3D515E`
- Text/Lines: `white`

## Typography
- Font family: Montserrat (Bold, SemiBold)
- Milestone numbers: 56px, Bold
- Week labels: 20px, SemiBold

## Layout Structure
```
Timeline Container (2894.92px height)
├── Diagonal Lines (SVG elements)
├── Timeline Frames (Week milestones: 1, 2, 3, 4, 8, 16, 24-32)
├── Connecting Lines (Vertical line with dot)
└── Timeline Arrows (Various sizes and positions)
```

## Migration Checklist
- [ ] Convert Timeline.tsx to Timeline.astro
- [ ] Update class names (className → class)
- [ ] Convert inline styles to Astro format
- [ ] Import SVG path data
- [ ] Set up Tailwind CSS configuration
- [ ] Apply global styles
- [ ] Test responsive behavior
- [ ] Verify scroll functionality