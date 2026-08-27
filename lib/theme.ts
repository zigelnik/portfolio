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
