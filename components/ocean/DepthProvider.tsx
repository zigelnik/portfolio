"use client";

import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";
import {
  progressToDepth,
  zoneForDepth,
  depthGradientColors,
  type DepthZone,
} from "@/lib/theme";
import { useLenis } from "@/lib/lenis";

interface DepthContextValue {
  depthM: number;
  zone: DepthZone;
  progress: number;
}

const DepthContext = createContext<DepthContextValue>({
  depthM: 0,
  zone: zoneForDepth(0),
  progress: 0,
});

export function useDepth() {
  return useContext(DepthContext);
}

export function DepthProvider({ children }: { children: ReactNode }) {
  useLenis();
  const { scrollYProgress } = useScroll();
  const [value, setValue] = useState<DepthContextValue>({
    depthM: 0,
    zone: zoneForDepth(0),
    progress: 0,
  });
  const rafRef = useRef<number | null>(null);

  useMotionValueEvent(scrollYProgress, "change", (p) => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      const depthM = progressToDepth(p);
      const zone = zoneForDepth(depthM);
      setValue({ depthM, zone, progress: p });

      const { top, bottom } = depthGradientColors(p);
      const root = document.documentElement;
      root.style.setProperty("--depth-bg-top", top);
      root.style.setProperty("--depth-bg-bottom", bottom);
      root.style.setProperty(
        "--depth-fg",
        p > 0.35 ? "var(--foam-white)" : "#04262c"
      );
    });
  });

  useEffect(() => {
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return <DepthContext.Provider value={value}>{children}</DepthContext.Provider>;
}
