interface DriftProps {
  top?: string;
  bottom?: string;
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

function SeaTurtle({ top, duration, delay = 0, scale = 1, flip, opacity = 0.4 }: DriftProps) {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute left-[-12%] z-[1]"
      style={{ top, opacity, transform: `scale(${scale}) ${flip ? "scaleX(-1)" : ""}` }}
    >
      <div style={{ animation: `turtle-drift ${duration}s linear ${delay}s infinite` }}>
        <svg width="84" height="52" viewBox="0 0 84 52" fill="none">
          <g fill="currentColor">
            {/* back flippers */}
            <path d="M12 15c-6-4-13-1-11 3s9 2 13-1Z" />
            <path d="M12 37c-6 4-13 1-11-3s9-2 13 1Z" />
            {/* tail */}
            <path d="M16 26 5 21v10Z" />
            {/* shell */}
            <ellipse cx="44" cy="26" rx="27" ry="17" />
            {/* front flippers */}
            <path d="M67 13c7-5 15-2 12 3s-10 2-14-1Z" />
            <path d="M67 39c7 5 15 2 12-3s-10-2-14 1Z" />
            {/* head */}
            <path d="M68 18c6-4 13-2 14 3 1 5-4 9-9 9-4 0-6-4-5-12Z" />
          </g>
          {/* shell scute pattern */}
          <g stroke="rgba(0,0,0,0.2)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M44 10v32" />
            <path d="M20 26h48" />
            <path d="M28 15l12 11-12 11" />
            <path d="M60 15 48 26l12 11" />
          </g>
          {/* eye */}
          <circle cx="78" cy="24" r="1.4" fill="#04262c" />
        </svg>
      </div>
    </div>
  );
}

function Stingray({ top, duration, delay = 0, scale = 1, flip, opacity = 0.35 }: DriftProps) {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute left-[-14%] z-[1]"
      style={{ top, opacity, transform: `scale(${scale}) ${flip ? "scaleX(-1)" : ""}` }}
    >
      <div style={{ animation: `ray-glide ${duration}s ease-in-out ${delay}s infinite` }}>
        <svg width="86" height="40" viewBox="0 0 86 40" fill="none">
          <path
            d="M44 4C24 4 4 14 4 20c0 6 20 16 40 16 6 0 8-4 8-10V14c0-6-2-10-8-10Z"
            fill="currentColor"
          />
          <path
            d="M52 20c14-2 24 6 30 10-8 2-20 2-30-4Z"
            fill="currentColor"
            fillOpacity="0.6"
          />
        </svg>
      </div>
    </div>
  );
}

function Crab({ bottom, duration, delay = 0, scale = 1, opacity = 0.45 }: DriftProps) {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute left-[20%] z-[1]"
      style={{ bottom, opacity, transform: `scale(${scale})` }}
    >
      <div style={{ animation: `crab-scuttle ${duration}s ease-in-out ${delay}s infinite` }}>
        <svg width="44" height="28" viewBox="0 0 44 28" fill="none">
          <g fill="currentColor">
            <ellipse cx="22" cy="16" rx="14" ry="9" />
            <path d="M8 10 2 4M6 12l-8-2M36 10l6-6M38 12l8-2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
            <path d="M10 24 4 27M15 25 12 28M29 25l3 3M34 24l6 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />
            <circle cx="16" cy="13" r="1.6" fill="#04262c" />
            <circle cx="28" cy="13" r="1.6" fill="#04262c" />
            <path d="M2 6c-3 1-4 5-1 6s6-2 5-5Z" />
            <path d="M42 6c3 1 4 5 1 6s-6-2-5-5Z" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Starfish({ top, bottom, duration, delay = 0, scale = 1, opacity = 0.3 }: DriftProps) {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute right-[14%] z-[1]"
      style={{ top, bottom, opacity, transform: `scale(${scale})` }}
    >
      <div style={{ animation: `starfish-glimmer ${duration}s ease-in-out ${delay}s infinite` }}>
        <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
          <path
            d="M17 1 21 12 33 12 23 19 27 31 17 24 7 31 11 19 1 12 13 12Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </div>
  );
}

type Variant = "hero" | "shallow" | "reef" | "floor";

/**
 * Decorative underwater life scattered across sections. Pure CSS
 * keyframe animation (not rAF/Lenis-driven) so it stays lightweight
 * and independent of scroll timing. `variant` swaps the creature mix
 * so different depth zones feel distinct rather than repeating the
 * same pair of silhouettes everywhere.
 */
export function SeaCreatures({ variant = "shallow" }: { variant?: Variant }) {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {variant === "hero" && (
        <>
          <SeaTurtle top="14%" duration={50} scale={0.6} opacity={0.3} />
          <SeaTurtle top="74%" duration={58} delay={8} scale={0.4} flip opacity={0.2} />
          <Starfish bottom="8%" duration={5} scale={0.8} opacity={0.25} />
        </>
      )}

      {variant === "shallow" && (
        <>
          <FishSchool top="18%" duration={38} scale={0.9} opacity={0.35} />
          <FishSchool top="55%" duration={46} delay={6} scale={0.6} flip opacity={0.25} />
          <Crab bottom="6%" duration={4.5} scale={0.9} opacity={0.35} />
          <Starfish top="70%" duration={5.5} delay={1} scale={0.6} opacity={0.25} />
        </>
      )}

      {variant === "reef" && (
        <>
          <SeaTurtle top="22%" duration={52} scale={1} opacity={0.4} />
          <Stingray top="55%" duration={9} scale={1} opacity={0.3} />
          <Starfish bottom="10%" duration={5} scale={1} opacity={0.3} />
        </>
      )}

      {variant === "floor" && (
        <>
          <Crab bottom="6%" duration={4.5} scale={1.1} opacity={0.45} />
          <Crab bottom="14%" duration={5.5} delay={1.5} scale={0.7} opacity={0.3} />
          <Jellyfish top="20%" duration={9} scale={0.6} opacity={0.3} />
          <Starfish bottom="20%" duration={6} delay={1} scale={0.8} opacity={0.25} />
        </>
      )}
    </div>
  );
}
