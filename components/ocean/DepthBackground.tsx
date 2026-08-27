/**
 * Paints the depth gradient on a fixed, viewport-sized layer instead of
 * the document body. The body spans thousands of pixels (the whole
 * scroll height), so a gradient painted directly on it only ever shows
 * a razor-thin, precision-starved sliver within any given viewport,
 * which reads as a hard color band rather than a smooth blend. Pinning
 * the gradient to the viewport guarantees the full color span painted
 * by DepthProvider is always what's actually on screen.
 */
export function DepthBackground() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 -z-10"
      style={{
        background:
          "linear-gradient(180deg, var(--depth-bg-top) 0%, var(--depth-bg-bottom) 100%)",
      }}
    />
  );
}
