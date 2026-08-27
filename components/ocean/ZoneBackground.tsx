"use client";

import { useDepth } from "./DepthProvider";

export function ZoneBackground() {
  const { progress } = useDepth();
  const vignette = 0.25 + progress * 0.55;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[1]"
      style={{
        background: `radial-gradient(ellipse at 50% 30%, transparent 35%, rgba(0,0,0,${vignette}) 100%)`,
      }}
    />
  );
}
