"use client";

import { useEffect } from "react";
import Lenis from "lenis";

let sharedLenis: Lenis | null = null;

export function getLenis(): Lenis | null {
  return sharedLenis;
}

/**
 * Smoothly glides to an in-page anchor instead of the browser's native
 * instant jump. Falls back to native smooth scrollIntoView when Lenis
 * hasn't initialized (e.g. prefers-reduced-motion, or before mount).
 */
export function scrollToHash(hash: string) {
  const target = document.querySelector(hash);
  if (!target) return;

  const lenis = getLenis();
  if (lenis) {
    lenis.scrollTo(target as HTMLElement, { offset: -16, duration: 1.4 });
  } else {
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  }
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
