"use client";

import { scrollToHash } from "@/lib/lenis";
import { useDepth } from "./DepthProvider";

/**
 * Floating "back to the surface" control. Mirrors the HUD's
 * glass/instrument styling and only appears once the visitor has
 * actually scrolled away from the hero, reusing the same `progress`
 * value DepthGaugeHUD already reads from DepthProvider.
 */
export function ReturnHomeButton() {
  const { progress } = useDepth();
  const visible = progress > 0.03;

  return (
    <button
      type="button"
      onClick={() => scrollToHash("#home")}
      aria-label="Return to the surface"
      className={`fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-black/25 text-foam-white backdrop-blur-md transition-all duration-300 hover:border-bio-glow hover:text-bio-glow ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-2 opacity-0"
      }`}
    >
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <path
          d="M8 13V3M3 7l5-5 5 5"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
