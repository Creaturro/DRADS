# Infographic Card Templates

A collection of responsive infographic cards showcasing different aspects of modern web development workflow. Built with React and Tailwind CSS, imported from Figma designs with original assets preserved.

## Features

- **5 Unique Card Templates**: Frontend Coding, Brief & Research, Live Testing, Design Work, and API Integration
- **Fully Responsive**: Mobile-first design with optimized layouts for both mobile and desktop
- **Dark Theme**: Consistent dark purple theme (#25202d) with white text
- **Vertical Centering**: Content perfectly centered within each card container
- **Original Figma Assets**: Preserves original design images and SVGs from Figma import
- **Modern Styling**: Clean, professional design with rounded corners and shadows

## Card Specifications

### Desktop Layout
- **Dimensions**: 595px width × 283px height (Frontend card: 261px height)
- **Layout**: Text and image side-by-side with 4px gap
- **Text Width**: Fixed 291px width
- **Z-Index**: 20 for both text and image elements
- **Positioning**: Vertically centered content

### Mobile Layout
- **Heights**: 
  - Frontend Coding: 400px
  - Brief and Research: 384px
  - Live Testing: 380px
  - Design: 384px
  - APIs: 384px
- **Layout**: Image positioned above content
- **Spacing**: Text 16px from bottom, increased spacing between image and content
- **Images**: Uncropped for better mobile viewing

## Project Structure

```
├── App.tsx                          # Main application showcase
├── imports/                         # Original Figma-imported components
│   ├── InfographicTemplateFrontend.tsx
│   ├── InfographicTemplateBriefAdapted.tsx
│   ├── InfographicTemplateLiveTestingAdapted.tsx
│   ├── InfographicTemplateDesignAdapted.tsx
│   └── InfographicTemplateApisAdapted.tsx
├── components/
│   ├── figma/
│   │   └── ImageWithFallback.tsx    # Figma image component
│   └── ui/                          # ShadCN UI components
└── styles/
    └── globals.css                  # Global styles and typography
```

## Component Structure

Each card consists of four layers:
1. **Card Background** (#25202d)
2. **Text Background** (#302a38)
3. **Text Content** (White text)
4. **Image** (Original Figma assets with responsive overflow handling)

## Usage

```tsx
import InfographicTemplateFrontend from "./imports/InfographicTemplateFrontend";

function MyComponent() {
  return (
    <div className="w-full max-w-[595px]">
      <InfographicTemplateFrontend />
    </div>
  );
}
```

## Available Components

All components are located in the `/imports` directory:

- `InfographicTemplateFrontend` - Asynchronous Frontend Coding (261px height)
- `InfographicTemplateBriefAdapted` - Brief and Research
- `InfographicTemplateLiveTestingAdapted` - Live Testing  
- `InfographicTemplateDesignAdapted` - Asynchronous Design Work
- `InfographicTemplateApisAdapted` - "Glueing" Systems Through APIs

## Technologies

- React 18+
- Tailwind CSS
- TypeScript
- Original Figma assets (preserved from design import)
- ShadCN UI components

## Setup for Cursor IDE

This project is ready for Cursor IDE import. The structure preserves all original Figma assets and components.

1. Import the project into Cursor
2. Install dependencies if needed
3. The App.tsx file showcases all infographic cards
4. All original Figma components are in `/imports` directory

## Key Features for Cursor Export

- ✅ All original Figma images and SVGs preserved
- ✅ Responsive layouts with vertical centering applied
- ✅ Clean project structure with proper imports
- ✅ ShadCN UI component library included
- ✅ TypeScript support with proper typing
- ✅ Mobile-first responsive design

## Customization

- **Colors**: Modify the background colors in each component
- **Content**: Update text content in the `/imports` components
- **Dimensions**: Adjust card heights and widths in the component classes
- **Images**: Original Figma assets are preserved via `figma:asset` imports

## License

MIT License - feel free to use these components in your projects!