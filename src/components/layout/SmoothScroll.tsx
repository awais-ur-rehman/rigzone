'use client';

import { ReactNode, useEffect } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

type SmoothScrollProps = {
    children: ReactNode;
    /**
     * Duration of the scroll animation in seconds
     * @default 1.2
     */
    duration?: number;
    /**
     * Easing function for the scroll animation
     * @default (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
     */
    easing?: (t: number) => number;
    /**
     * Enable smooth wheel scrolling (touchpad optimization)
     * @default true
     */
    smoothWheel?: boolean;
    /**
     * Wheel multiplier for scroll speed
     * @default 1
     */
    wheelMultiplier?: number;
};

let lenisInstance: Lenis | null = null;

export function SmoothScroll({
    children,
    duration = 1.2,
    easing = (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel = true,
    wheelMultiplier = 1,
}: SmoothScrollProps) {
    useEffect(() => {
        // Initialize Lenis
        lenisInstance = new Lenis({
            duration,
            easing,
            smoothWheel,
            wheelMultiplier,
        });

        // Animation loop using requestAnimationFrame
        function raf(time: number) {
            lenisInstance?.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        // Store instance globally for scroll utilities
        if (typeof window !== 'undefined') {
            (window as any).__lenis = lenisInstance;
        }

        // Cleanup
        return () => {
            if (lenisInstance) {
                lenisInstance.destroy();
                lenisInstance = null;
            }
            if (typeof window !== 'undefined') {
                delete (window as any).__lenis;
            }
        };
    }, [duration, easing, smoothWheel, wheelMultiplier]);

    return <>{children}</>;
}

// Export function to get Lenis instance
export function getLenisInstance(): Lenis | null {
    return lenisInstance || (typeof window !== 'undefined' ? (window as any).__lenis : null);
}

