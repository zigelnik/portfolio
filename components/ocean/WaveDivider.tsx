export function WaveDivider() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1440 60"
      preserveAspectRatio="none"
      className="relative z-[1] block h-10 w-full sm:h-14"
    >
      <path
        d="M0 30 C 240 60, 480 0, 720 30 C 960 60, 1200 0, 1440 30 L1440 60 L0 60 Z"
        fill="rgba(255,255,255,0.03)"
      />
      <path
        d="M0 20 C 240 50, 480 -10, 720 20 C 960 50, 1200 -10, 1440 20"
        fill="none"
        stroke="rgba(77,255,224,0.15)"
        strokeWidth="1"
      />
    </svg>
  );
}
