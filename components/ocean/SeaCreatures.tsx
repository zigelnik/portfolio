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
        <svg width="90" height="40" viewBox="0 0 90 40" fill="none">
          {/* whip tail, trailing behind on the left */}
          <path
            d="M18 20Q8 22 1 27"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
          />
          {/* disc-shaped body, snout pointing right (direction of travel) */}
          <path
            d="M18 20C18 8 40 2 76 20C40 38 18 32 18 20Z"
            fill="currentColor"
          />
          <circle cx="69" cy="17" r="1.2" fill="#04262c" />
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

function Shark({ top, duration, delay = 0, scale = 1, flip, opacity = 0.35 }: DriftProps) {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute left-[-16%] z-[1]"
      style={{ top, opacity, transform: `scale(${scale}) ${flip ? "scaleX(-1)" : ""}` }}
    >
      <div style={{ animation: `shark-cruise ${duration}s ease-in-out ${delay}s infinite` }}>
        <svg width="112" height="46" viewBox="0 0 112 46" fill="none">
          <g fill="currentColor">
            {/* tail fin, apex pointing into the body */}
            <path d="M10 23 0 14v18Z" />
            {/* torpedo body tapering to a snout point on the right */}
            <path d="M10 23c0-6 14-10 34-10 26 0 46 4 56 8 3 1 3 4 0 5-10 4-30 8-56 8-20 0-34-4-34-11Z" />
            {/* dorsal fin */}
            <path d="M46 13c1-7 6-12 9-11 2 1 0 7-3 12-3 4-7 3-6-1Z" />
            {/* pectoral fin */}
            <path d="M56 27c1 6-2 10-5 10-2 0-3-6-1-10 2-3 5-3 6 0Z" />
          </g>
          {/* gill lines */}
          <g stroke="rgba(0,0,0,0.25)" strokeWidth="1" strokeLinecap="round">
            <path d="M78 17v10M83 16v11M88 16v11" />
          </g>
          <circle cx="94" cy="20" r="1.3" fill="#04262c" />
        </svg>
      </div>
    </div>
  );
}

function Anglerfish({ top, duration, delay = 0, scale = 1, flip, opacity = 0.4 }: DriftProps) {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute right-[10%] z-[1]"
      style={{ top, opacity, transform: `scale(${scale}) ${flip ? "scaleX(-1)" : ""}` }}
    >
      <div style={{ animation: `fish-drift ${duration}s linear ${delay}s infinite` }}>
        <svg width="70" height="52" viewBox="0 0 70 52" fill="none">
          <g fill="currentColor">
            {/* tail, apex pointing into the body */}
            <path d="M14 26 3 19v14Z" />
            {/* hunched body */}
            <path d="M14 26c0-10 10-18 22-18 12 0 20 8 20 18s-8 18-20 18c-12 0-22-8-22-18Z" />
            {/* underslung jaw */}
            <path d="M48 30c4 2 8 1 10-1-1 4-7 6-10 3Z" />
          </g>
          <circle cx="30" cy="20" r="1.6" fill="#04262c" />
          {/* lure stalk, dangling above the mouth */}
          <path
            d="M40 12c1-6 2-10 4-11"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            fill="none"
          />
          <circle cx="45" cy="1" r="2.4" className="fill-bio-glow animate-sonar-pulse" />
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

type Variant = "surface" | "sunlight" | "edge" | "threshold" | "twilight" | "abyssal";

/**
 * Decorative underwater life scattered across sections. Pure CSS
 * keyframe animation (not rAF/Lenis-driven) so it stays lightweight
 * and independent of scroll timing. `variant` maps one-to-one to the
 * page's own depth zones, so the mix of creatures shifts from
 * reef/shallow fauna (turtles, fish, crabs, starfish) near the
 * surface to deep-sea fauna (jellyfish, sharks, anglerfish) as the
 * page darkens, rather than reusing the same pair everywhere.
 */
export function SeaCreatures({ variant = "sunlight" }: { variant?: Variant }) {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* 0m · Surface — turtles cruising near the light, one starfish below */}
      {variant === "surface" && (
        <>
          <SeaTurtle top="14%" duration={50} scale={0.6} opacity={0.3} />
          <SeaTurtle top="74%" duration={58} delay={8} scale={0.4} flip opacity={0.2} />
          <Starfish bottom="8%" duration={5} scale={0.8} opacity={0.25} />
        </>
      )}

      {/* ~50m · Sunlight Zone — classic reef-floor mix */}
      {variant === "sunlight" && (
        <>
          <FishSchool top="18%" duration={38} scale={0.9} opacity={0.35} />
          <FishSchool top="55%" duration={46} delay={6} scale={0.6} flip opacity={0.25} />
          <Crab bottom="6%" duration={4.5} scale={0.9} opacity={0.35} />
          <Starfish top="70%" duration={5.5} delay={1} scale={0.6} opacity={0.25} />
        </>
      )}

      {/* ~150m · Edge of the Sunlight Zone — still light-dependent, larger fauna */}
      {variant === "edge" && (
        <>
          <SeaTurtle top="20%" duration={54} scale={0.8} opacity={0.3} />
          <FishSchool top="60%" duration={40} delay={4} scale={0.7} flip opacity={0.3} />
          <Stingray top="42%" duration={9} scale={0.8} opacity={0.25} />
        </>
      )}

      {/* ~250m · Twilight Threshold — last ray of light fading, first jellyfish */}
      {variant === "threshold" && (
        <>
          <Stingray top="45%" duration={9} scale={1} opacity={0.28} />
          <Jellyfish top="20%" duration={8} scale={0.7} opacity={0.28} />
          <Jellyfish bottom="12%" duration={9.5} delay={2} scale={0.5} opacity={0.22} />
        </>
      )}

      {/* ~400m · Twilight Zone — deep-sea fauna only, a shark on patrol */}
      {variant === "twilight" && (
        <>
          <Jellyfish top="18%" duration={8.5} scale={0.7} opacity={0.3} />
          <Jellyfish bottom="16%" duration={7.5} delay={1.5} scale={0.5} opacity={0.22} />
          <Shark top="55%" duration={26} scale={0.7} opacity={0.28} />
        </>
      )}

      {/* ~1000m · Abyssal Trench — pure deep-sea, bioluminescent lure glowing */}
      {variant === "abyssal" && (
        <>
          <Shark top="30%" duration={30} scale={0.9} flip opacity={0.3} />
          <Jellyfish bottom="14%" duration={8} scale={0.6} opacity={0.25} />
          <Anglerfish top="62%" duration={44} delay={5} scale={0.9} opacity={0.35} />
        </>
      )}
    </div>
  );
}
