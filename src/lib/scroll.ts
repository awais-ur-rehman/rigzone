import { getLenisInstance } from '@/components/layout/SmoothScroll';

/**
 * Scrolls to a section by ID or element
 * Uses Lenis for smooth scrolling if available, falls back to native smooth scroll
 * 
 * @param target - Element ID (with or without #) or HTMLElement
 * @param offset - Optional offset from the top (useful for fixed headers)
 * @param immediate - If true, scrolls immediately without animation
 */
export function scrollToSection(
    target: string | HTMLElement,
    offset: number = 0,
    immediate: boolean = false
): void {
    const lenis = getLenisInstance();

    let element: HTMLElement | null = null;

    if (typeof target === 'string') {
        // Remove # if present and find element
        const id = target.replace(/^#/, '');
        element = document.getElementById(id);
    } else {
        element = target;
    }

    if (!element) {
        console.warn(`Element not found: ${target}`);
        return;
    }

    if (lenis && !immediate) {
        // Use Lenis for smooth scrolling - it handles offset automatically
        if (offset > 0) {
            // Calculate position with offset
            const elementPosition = element.getBoundingClientRect().top + window.scrollY;
            const offsetPosition = elementPosition - offset;
            lenis.scrollTo(offsetPosition, {
                duration: 1.2,
                easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
                immediate: false,
            });
        } else {
            // Lenis can scroll directly to element
            lenis.scrollTo(element, {
                duration: 1.2,
                easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
                immediate: false,
                offset: offset,
            });
        }
    } else {
        // Fallback to native smooth scroll
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - offset;
        window.scrollTo({
            top: offsetPosition,
            behavior: immediate ? 'auto' : 'smooth',
        });
    }
}

/**
 * Scrolls to the top of the page
 * @param immediate - If true, scrolls immediately without animation
 */
export function scrollToTop(immediate: boolean = false): void {
    const lenis = getLenisInstance();

    if (lenis && !immediate) {
        lenis.scrollTo(0, {
            duration: 1.2,
            easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            immediate: false,
        });
    } else {
        window.scrollTo({
            top: 0,
            behavior: immediate ? 'auto' : 'smooth',
        });
    }
}

/**
 * Scrolls to a specific Y position
 * @param y - Y position to scroll to
 * @param immediate - If true, scrolls immediately without animation
 */
export function scrollToY(y: number, immediate: boolean = false): void {
    const lenis = getLenisInstance();

    if (lenis && !immediate) {
        lenis.scrollTo(y, {
            duration: 1.2,
            easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            immediate: false,
        });
    } else {
        window.scrollTo({
            top: y,
            behavior: immediate ? 'auto' : 'smooth',
        });
    }
}

