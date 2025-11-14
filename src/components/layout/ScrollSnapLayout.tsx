'use client';

import { ReactNode, useEffect } from 'react';

type ScrollSnapLayoutProps = {
  children: ReactNode;
  /**
   * The amount of top padding (in pixels) to keep sections clear of the fixed navbar.
   */
  offset?: number;
  /**
   * Allows disabling scroll snapping on touch devices where the behaviour can feel too restrictive.
   */
  disableOnTouch?: boolean;
};

const DEFAULT_OFFSET = 96;

export function ScrollSnapLayout({
  children,
  offset = DEFAULT_OFFSET,
  disableOnTouch = false,
}: ScrollSnapLayoutProps) {
  useEffect(() => {
    if (disableOnTouch && window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const body = document.body;
    const root = document.documentElement;

    body.classList.add('scroll-snap-enabled');
    root.style.setProperty('--scroll-snap-offset', `${offset}px`);

    return () => {
      body.classList.remove('scroll-snap-enabled');
      root.style.removeProperty('--scroll-snap-offset');
    };
  }, [offset, disableOnTouch]);

  return <div className="scroll-snap-container">{children}</div>;
}


