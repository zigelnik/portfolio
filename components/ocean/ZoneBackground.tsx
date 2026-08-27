"use client";

import { useDepth } from "./DepthProvider";

export function ZoneBackground() {
  const { progress } = useDepth();
  const vignette = 0.25 + progress * 0.55;
  const rayOpacity = Math.max(0, 0.35 - progress * 0.7);

  return (
    <>
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-[1]"
        style={{
          background: `radial-gradient(ellipse at 50% 30%, transparent 35%, rgba(0,0,0,${vignette}) 100%)`,
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-[1] overflow-hidden"
        style={{ opacity: rayOpacity }}
      >
        <div
          className="absolute -top-1/4 left-[15%] h-[140%] w-[35%] rotate-[14deg]"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.35) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute -top-1/4 left-[55%] h-[140%] w-[22%] rotate-[9deg]"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.22) 0%, transparent 65%)",
          }}
        />
      </div>
    </>
  );
}
