"use client";

import { useEffect } from "react";
import Lenis from "lenis";

let sharedLenis: Lenis | null = null;

export function getLenis(): Lenis | null {
  return sharedLenis;
}

/**
 * Initializes a single shared Lenis instance and drives its RAF loop.
 * Framer Motion's scroll hooks read from window scroll events, which Lenis
 * dispatches on every frame, so the two stay in sync without extra wiring.
 */
export function useLenis() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => 1 - Math.pow(1 - t, 3),
      smoothWheel: true,
    });
    sharedLenis = lenis;

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      sharedLenis = null;
    };
  }, []);
}
