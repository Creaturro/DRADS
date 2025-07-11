import "@styles/lenis.css";

// Import Lenis
import Lenis from 'lenis';

// Initialize Lenis instance for smooth scrolling
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  direction: 'vertical',
  gestureDirection: 'vertical',
  smooth: true,
  smoothTouch: false,
  touchMultiplier: 2,
});

// Make Lenis available globally for manual scrollTo calls
window.lenis = lenis;

// Start the animation loop
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// Export for manual use elsewhere
export default Lenis;