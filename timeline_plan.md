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
The timeline is built from modular, responsive Astro components, with all positioning and connectors handled by absolute positioning and Tailwind classes. The system is easy to extend, visually robust, and mobile-friendly. Use **Magenta** for left tooltips/cards and **Cyan** for right tooltips/cards for clear separation and maintainability. 