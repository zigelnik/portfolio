"use client";

import { motion } from "framer-motion";
import { useDepth } from "./DepthProvider";

export function DepthGaugeHUD() {
  const { depthM, zone, progress } = useDepth();
  const sweepDeg = progress * 720; // two full rotations across the whole page

  return (
    <div
      className="pointer-events-none fixed right-4 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-center gap-3 md:flex lg:right-8"
      aria-hidden="true"
    >
      <div className="relative flex h-20 w-20 items-center justify-center rounded-full border border-white/20 bg-black/25 backdrop-blur-md">
        <div
          className="absolute inset-1.5 rounded-full"
          style={{
            background:
              "repeating-conic-gradient(rgba(77,255,224,0.18) 0deg 6deg, transparent 6deg 30deg)",
          }}
        />
        <motion.div
          className="absolute h-8 w-[2px] origin-bottom bg-bio-glow"
          style={{ bottom: "50%" }}
          animate={{ rotate: sweepDeg }}
          transition={{ type: "tween", duration: 0.2, ease: "linear" }}
        />
        <div className="h-1.5 w-1.5 rounded-full bg-bio-glow shadow-[0_0_8px_var(--bio-glow)]" />
      </div>

      <div className="flex flex-col items-center rounded-full border border-white/15 bg-black/25 px-4 py-2 text-center backdrop-blur-md">
        <span className="font-mono text-sm font-medium tracking-tight text-foam-white">
          {depthM.toLocaleString()}m
        </span>
        <span className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.15em] text-foam-white/60">
          {zone.name}
        </span>
      </div>
    </div>
  );
}
