export interface DepthZone {
  name: string;
  minM: number;
  maxM: number;
}

export const DEPTH_ZONES: DepthZone[] = [
  { name: "Surface", minM: 0, maxM: 40 },
  { name: "Sunlight Zone", minM: 40, maxM: 150 },
  { name: "Twilight Zone", minM: 150, maxM: 600 },
  { name: "Abyssal Trench", minM: 600, maxM: 1000 },
];

export function zoneForDepth(depthM: number): DepthZone {
  return (
    DEPTH_ZONES.find((z) => depthM >= z.minM && depthM < z.maxM) ??
    DEPTH_ZONES[DEPTH_ZONES.length - 1]
  );
}

/**
 * Maps linear scroll progress (0-1) to a non-linear depth in meters.
 * Front-loads the surface/sunlight zones (more scroll distance = more content there)
 * while still reaching the abyssal trench by the end of the page.
 */
export function progressToDepth(progress: number): number {
  const p = Math.min(Math.max(progress, 0), 1);
  const eased = Math.pow(p, 1.6);
  return Math.round(eased * 1000);
}

interface RGB {
  r: number;
  g: number;
  b: number;
}

function hexToRgb(hex: string): RGB {
  const n = parseInt(hex.slice(1), 16);
  return { r: (n >> 16) & 255, g: (n >> 8) & 255, b: n & 255 };
}

function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * t;
}

function rgbToCss({ r, g, b }: RGB): string {
  return `rgb(${Math.round(r)}, ${Math.round(g)}, ${Math.round(b)})`;
}

/**
 * Continuous gradient stops covering the full scroll range, so the
 * background color is a single unbroken interpolation rather than a
 * fixed color pair swapped in per-zone (which produces a visible seam
 * at each zone boundary).
 */
const GRADIENT_STOPS: { stop: number; color: RGB }[] = [
  { stop: 0, color: hexToRgb("#7de8e0") }, // surface-cyan
  { stop: 0.25, color: hexToRgb("#1e8fb0") }, // sunlight-blue
  { stop: 0.5, color: hexToRgb("#1a3a6b") }, // twilight-indigo
  { stop: 0.75, color: hexToRgb("#0a1628") }, // midnight-navy
  { stop: 1, color: hexToRgb("#030508") }, // abyssal-black
];

function colorAtProgress(p: number): string {
  const clamped = Math.min(Math.max(p, 0), 1);
  for (let i = 0; i < GRADIENT_STOPS.length - 1; i++) {
    const a = GRADIENT_STOPS[i];
    const b = GRADIENT_STOPS[i + 1];
    if (clamped >= a.stop && clamped <= b.stop) {
      const t = (clamped - a.stop) / (b.stop - a.stop);
      return rgbToCss({
        r: lerp(a.color.r, b.color.r, t),
        g: lerp(a.color.g, b.color.g, t),
        b: lerp(a.color.b, b.color.b, t),
      });
    }
  }
  return rgbToCss(GRADIENT_STOPS[GRADIENT_STOPS.length - 1].color);
}

/**
 * The top/bottom colors for the body's background gradient at a given
 * scroll progress. `span` controls how much visual depth the on-screen
 * gradient shows at any moment; both ends move continuously with scroll
 * so there is no hard cut between sections.
 */
export function depthGradientColors(
  progress: number,
  span = 0.12
): { top: string; bottom: string } {
  return {
    top: colorAtProgress(progress),
    bottom: colorAtProgress(Math.min(progress + span, 1)),
  };
}
