interface DriftProps {
  top: string;
  duration: number;
  delay?: number;
  scale?: number;
  flip?: boolean;
  opacity?: number;
}

function FishSchool({ top, duration, delay = 0, scale = 1, flip, opacity = 0.5 }: DriftProps) {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute left-[-10%] z-[1]"
      style={{ top, opacity, transform: `scale(${scale}) ${flip ? "scaleX(-1)" : ""}` }}
    >
      <div style={{ animation: `fish-drift ${duration}s linear ${delay}s infinite` }}>
        <svg width="120" height="36" viewBox="0 0 120 36" fill="none">
          <g fill="currentColor">
            <path d="M8 18c6-8 20-8 26 0-6 8-20 8-26 0Z" />
            <path d="M2 18l6-5v10l-6-5Z" />
            <path d="M48 18c5-6 16-6 21 0-5 6-16 6-21 0Z" />
            <path d="M43 18l5-4v8l-5-4Z" />
            <path d="M82 18c4-5 13-5 17 0-4 5-13 5-17 0Z" />
            <path d="M78 18l4-3.5v7L78 18Z" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Jellyfish({ top, duration, delay = 0, scale = 1, opacity = 0.4 }: DriftProps) {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute right-[8%] z-[1] text-bio-glow"
      style={{ top, opacity, transform: `scale(${scale})` }}
    >
      <div style={{ animation: `jelly-bob ${duration}s ease-in-out ${delay}s infinite` }}>
        <svg width="46" height="60" viewBox="0 0 46 60" fill="none">
          <path
            d="M23 2c12 0 21 9 21 20 0 8-5 14-21 14S2 30 2 22C2 11 11 2 23 2Z"
            fill="currentColor"
            fillOpacity="0.5"
          />
          <g stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.7">
            <path d="M10 36c0 8-2 14 0 22" />
            <path d="M18 37c0 9 2 13-1 21" />
            <path d="M28 37c0 9-2 13 1 21" />
            <path d="M36 36c0 8 2 14 0 22" />
          </g>
        </svg>
      </div>
    </div>
  );
}

/**
 * Decorative underwater life scattered across the deeper sections.
 * Pure CSS keyframe animation (not rAF/Lenis-driven) so it stays
 * lightweight and independent of scroll timing.
 */
export function SeaCreatures() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <FishSchool top="18%" duration={38} scale={0.9} opacity={0.35} />
      <FishSchool top="55%" duration={46} delay={6} scale={0.6} flip opacity={0.25} />
      <Jellyfish top="30%" duration={7} scale={0.8} />
      <Jellyfish top="70%" duration={8.5} delay={2} scale={0.55} opacity={0.3} />
    </div>
  );
}
