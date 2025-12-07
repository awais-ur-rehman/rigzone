# Prompt to Replicate Smooth Scrolling Animation with Lenis + Scroll Snap

Copy and paste this prompt to Cursor AI to replicate the scrolling animation system:

---

**I want to implement a smooth scrolling animation system in my Next.js project using Lenis for smooth scrolling and CSS Scroll Snap for section-by-section navigation. Here's what I need:**

## Package Installation
1. Install `lenis` package (version ^1.3.15)
2. Optionally install GSAP if needed for other animations (not required for scrolling)

## Implementation Requirements

### 1. Create SmoothScroll Component (`components/layout/SmoothScroll.tsx`)
- Create a client component that wraps children with Lenis smooth scrolling
- Initialize Lenis with these default config:
  - duration: 1.2 seconds
  - easing: `(t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))`
  - smoothWheel: true
  - wheelMultiplier: 1
- Set up requestAnimationFrame loop for Lenis: `lenis.raf(time)`
- Store Lenis instance globally on window (`window.__lenis`) for access from utilities
- Export a `getLenisInstance()` function to retrieve the Lenis instance
- Clean up on unmount (destroy Lenis instance)

### 2. Create ScrollSnapLayout Component (`components/layout/ScrollSnapLayout.tsx`)
- Create a client component that enables CSS scroll snap
- Add `scroll-snap-enabled` class to document.body when mounted
- Set CSS custom property `--scroll-snap-offset` for header offset (default 96px)
- Optionally disable scroll snap on touch devices via `disableOnTouch` prop
- Wrap children in a div with class `scroll-snap-container`
- Clean up classes on unmount

### 3. Create Scroll Utilities (`lib/scroll.ts`)
- Create utility functions that use Lenis when available, fallback to native scroll:
  - `scrollToSection(target, offset, immediate)` - Scroll to element by ID or HTMLElement
  - `scrollToTop(immediate)` - Scroll to top of page
  - `scrollToY(y, immediate)` - Scroll to specific Y position
- All functions should check for Lenis instance first, then use native smooth scroll as fallback
- Use duration 1.2s and the same easing function as SmoothScroll component

### 4. Add CSS Styles (`app/globals.css` or your global CSS file)
Add these CSS rules:

```css
/* Lenis Smooth Scroll Enhancements */
html.lenis,
html.lenis body {
  height: auto;
}

.lenis.lenis-smooth {
  scroll-behavior: auto !important;
}

.lenis.lenis-smooth [data-lenis-prevent] {
  overscroll-behavior: contain;
}

.lenis.lenis-stopped {
  overflow: hidden;
}

.lenis.lenis-scrolling iframe {
  pointer-events: none;
}

/* Scroll performance optimizations */
html,
body {
  overflow-x: hidden;
  will-change: scroll-position;
}

/* Scroll Snap Styles */
body.scroll-snap-enabled {
  scroll-snap-type: y mandatory;
  scroll-padding-top: var(--scroll-snap-offset, 96px);
  scroll-behavior: smooth;
  overscroll-behavior-y: contain;
}

.scroll-snap-container {
  position: relative;
}

.scroll-snap-section {
  scroll-snap-align: start;
  scroll-snap-stop: always;
}
```

### 5. Integration in Root Layout (`app/layout.tsx`)
- Wrap the children with `<SmoothScroll>` component in the root layout
- Import and use: `import { SmoothScroll } from "@/components/layout/SmoothScroll"`

### 6. Usage in Pages
- Wrap page content with `<ScrollSnapLayout>` component
- Add `scroll-snap-section` class to each section/component that should snap
- Example:
```tsx
import { ScrollSnapLayout } from '@/components/layout/ScrollSnapLayout';

export function HomePage() {
  return (
    <ScrollSnapLayout disableOnTouch>
      <section className="scroll-snap-section min-h-screen">
        {/* Content */}
      </section>
      <section className="scroll-snap-section min-h-screen">
        {/* Content */}
      </section>
    </ScrollSnapLayout>
  );
}
```

## Key Features:
- Smooth scrolling powered by Lenis with requestAnimationFrame
- Section-by-section scroll snapping using CSS Scroll Snap
- Programmatic scrolling utilities with Lenis fallback
- Performance optimizations (will-change, overflow-x hidden)
- Optional touch device disable for scroll snap
- Configurable header offset for fixed navigation

Please implement all these components with proper TypeScript types and Next.js best practices (client components where needed, proper imports, etc.).

---

## Optional Enhancements (if time permits):
- Add Lenis scroll event listeners for scroll-based animations
- Integrate with GSAP ScrollTrigger if GSAP is installed
- Add scroll progress indicators
- Implement parallax effects using Lenis scroll events

