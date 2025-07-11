# DRADS Timeline & Infographic Section: Component & Structure Plan

## Key Components & Templates

### 1. `TimelineComponent.astro`
- **Role:** Main container for the timeline section.
- **Function:**
  - Lays out the timeline in a three-column responsive grid:
    - **Left (Magenta):** DRADS flow (Magenta cards/tooltips)
    - **Center:** Timeline (dashed line, milestones)
    - **Right (Cyan):** Traditional flow (Cyan cards/tooltips)
  - Renders all timeline squares, milestone tooltips, and connector lines.
  - Handles absolute positioning of timeline elements for both desktop and mobile.
  - // Magenta = left, Cyan = right (use this separation in code comments)
- **Props:**
  - `context?: 'full-page' | 'section'` - Controls positioning and sizing
  - `showCalibrationDots?: boolean` - Shows/hides calibration dots for positioning

### 2. `TimelineTooltip.astro`
- **Role:** Renders the speech-bubble style **tooltip** for each milestone.
- **Function:**
  - Accepts props for text, color, direction, and whether to show a connector.
  - Renders a triangle (tail) pointing toward the timeline.
  - Draws a 48px connector line from the triangle tip to the dashed timeline, with a round dot at the end.
  - Handles both **Magenta (left)** and **Cyan (right)** tooltips, ensuring correct alignment and direction.
  - // Magenta tooltip = left, Cyan tooltip = right

### 3. `TooltipBox.astro`
- **Role:** The core visual for the tooltip.
- **Function:**
  - Renders the colored box and triangle (tail) on the correct side.
  - Accepts color, text color, and tail side as props.
  - Used by `TimelineTooltip.astro` for consistent styling.
  - // Used for both Magenta and Cyan tooltips

### 4. `InfographicCard.astro`
- **Role:** Renders the main content cards for each step in the DRADS and traditional flows.
- **Function:**
  - Displays title, description, and an icon/image.
  - Used in both left (**Magenta**) and right (**Cyan**) columns for each process step.
  - // Magenta card = left, Cyan card = right

### 5. Supporting Files
- **SVG assets:** `/public/images/Timeline/`, `/src/assets/images/`
- **Tailwind CSS:** Used for all layout, spacing, and color classes.
- **Data:** Milestones, frames, and arrows defined at the top of `TimelineComponent.astro`.

---

## Integrated Calibration System

### **Purpose:**
The integrated calibration system provides synchronized positioning for dots, icons, and arrows. All elements use shared position variables, ensuring perfect alignment and easy repositioning.

### **How to Use:**
```astro
<!-- Hide calibration dots, show icons (default) -->
<TimelineComponent showCalibrationDots={false} />

<!-- Show calibration dots for positioning -->
<TimelineComponent showCalibrationDots={true} />
```

### **Shared Position Variables:**
```javascript
const calibrationPositions = {
  magenta: { x: 437, y: 89 },   // Brief and Research
  green: { x: 90, y: 308 },     // Asynchronous Frontend Coding
  blue: { x: 430, y: 488 },     // Asynchronous Design Work
  orange: { x: 66, y: 713 },    // "Glueing" systems through APIs
  red: { x: 302, y: 1012 }      // Live Testing
};
```

### **Current Calibration Positions:**
| Color | Position | Target Card | Status |
|-------|----------|-------------|--------|
| **Magenta** | (437, 89) | Brief and Research | ✅ Active |
| **Green** | (90, 308) | Asynchronous Frontend Coding | ✅ Active |
| **Blue** | (430, 488) | Asynchronous Design Work | ✅ Active |
| **Orange** | (66, 713) | "Glueing" systems through APIs | ⚠️ Dot only (no icon) |
| **Red** | (302, 1012) | Live Testing | ✅ Active |

### **Integrated Elements:**
When `showCalibrationDots={false}` (default):
- **Icons:** `orange_ico.svg` appears at all positions except orange
- **Orange position:** Shows only dot (no icon)
- **Arrows:** All automatically use calibration positions for start/end points

When `showCalibrationDots={true}`:
- **Dots:** All calibration dots visible
- **Icons:** Hidden
- **Arrows:** Same positioning as above

### **Workflow for Repositioning:**
1. **Modify position variable:** Change `calibrationPositions.{color}.x` or `.y`
2. **Automatic updates:** All related elements move simultaneously:
   - Calibration dot (when visible)
   - Icon (when dots hidden)
   - All arrows starting/ending at that position
3. **Test and adjust:** Fine-tune as needed
4. **Production:** Set `showCalibrationDots={false}`

### **Example Repositioning:**
```javascript
// Move magenta (Brief) 50px right and 30px up
calibrationPositions.magenta.x += 50;
calibrationPositions.magenta.y -= 30;
```

### **Coordinate System:**
- **X-axis:** Left to right (0 = left edge, larger values = more right)
- **Y-axis:** Top to bottom (0 = top edge, larger values = more down)
- **Units:** Pixels for absolute positioning
- **Z-index:** Icons (51) > Dots (50) > Arrows (10)

---

## Technical Insights & Important Findings

### **Today's Session (Calibration & Arrow System)**
- **SVG Arrow Visibility Issue:** Only straight SVG `<line>` elements were visible; curved `<path>` elements with Bézier curves were not rendering properly
- **Calibration Method:** Developed precise pixel-based positioning system using colored dots as reference points
- **Coordinate System Validation:** Confirmed that absolute pixel coordinates work reliably for positioning
- **Arrow Cleanup Process:** Successfully removed all old magenta arrows while preserving cyan arrows for traditional flow

### **Key Technical Learnings:**
1. **SVG Path Issues:** Curved arrows using `<path>` with Bézier curves may not render due to coordinate system or scaling issues
2. **Straight Lines Work:** Simple `<line>` elements with `stroke` and `marker-end` render correctly
3. **Precise Positioning:** Absolute pixel coordinates (e.g., `cx="330" cy="200"`) provide reliable positioning
4. **Conditional Rendering:** Using `{showCalibrationDots && (...)}` allows easy toggle of debug elements

### **Best Practices Established:**
- **Use straight lines** for arrows until curved path issues are resolved
- **Implement calibration system** before adding complex visual elements
- **Test visibility** of SVG elements before building complex paths
- **Use conditional props** for debug/development features

### **Future Arrow Implementation Strategy:**
1. Start with straight lines between calibration points
2. Test each arrow individually before adding complexity
3. Use the established coordinate system for precise positioning
4. Consider alternative approaches for curved arrows if needed

---

## Responsive Behavior
- **Layout:**
  - Uses flexbox/grid to stack columns on mobile and align horizontally on desktop.
  - Timeline and tooltips are absolutely positioned for precise alignment on all screens.
  - The dashed timeline always stays centered, with tooltips and cards adapting for mobile.
- **Tooltips & Connectors:**
  - **Magenta tooltips** are flush to the left; **Cyan tooltips** are flush to the right.
  - Connector line always starts at the triangle tip and ends at the dashed timeline, with a dot for clarity.
  - On mobile, timeline and tooltips stack vertically, maintaining clear visual connections.
- **Cards:**
  - Infographic cards are fully responsive, resizing and stacking as needed.
  - Images/icons scale with the card size for optimal display on all devices.

---

## How to Extend or Modify
- **Add a new milestone:** Add an entry to the `milestones` array in `TimelineComponent.astro`.
- **Change colors or icons:** Update the `color` or `icon` prop in the milestone or card data.
- **Adjust connector length:** Change the `width` value in the connector `<div>` in `TimelineTooltip.astro`.
- **Add new visual elements:** Use the calibration dots system for precise positioning.
- // Use Magenta for left, Cyan for right for all new tooltips/cards

---

## Component Table

| Component                  | Purpose/Role                                      | Key Props/Features                | Notes (Magenta/Cyan)         |
|----------------------------|---------------------------------------------------|-----------------------------------|------------------------------|
| TimelineComponent.astro    | Main timeline layout & logic                      | Renders all timeline elements     | Magenta = left, Cyan = right |
| TimelineTooltip.astro      | Speech-bubble tooltip with connector & dot        | text, color, direction, connector | Magenta = left, Cyan = right |
| TooltipBox.astro           | Visual tooltip + triangle tail                    | color, tailSide, textColor        | Used for both                |
| InfographicCard.astro      | Step card for DRADS/traditional flows             | title, description, icon, bgColor | Magenta = left, Cyan = right |

---

**Summary:**
The timeline is built from modular, responsive Astro components, with all positioning and connectors handled by absolute positioning and Tailwind classes. The calibration dots system provides precise positioning reference for future visual enhancements. The system is easy to extend, visually robust, and mobile-friendly. Use **Magenta** for left tooltips/cards and **Cyan** for right tooltips/cards for clear separation and maintainability. 