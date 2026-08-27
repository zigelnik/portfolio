"use client";

import { useEffect, useRef } from "react";

interface Bubble {
  x: number;
  y: number;
  r: number;
  speed: number;
  drift: number;
  driftPhase: number;
  opacity: number;
}

const PARTICLE_COUNT = 46;

function createBubble(width: number, height: number, startAtBottom = false): Bubble {
  return {
    x: Math.random() * width,
    y: startAtBottom ? height + Math.random() * height : Math.random() * height,
    r: 1 + Math.random() * 3.2,
    speed: 0.15 + Math.random() * 0.5,
    drift: 0.3 + Math.random() * 0.6,
    driftPhase: Math.random() * Math.PI * 2,
    opacity: 0.15 + Math.random() * 0.35,
  };
}

export function BubbleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduceMotion) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    function resize() {
      if (!canvas) return;
      width = window.innerWidth;
      height = window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx?.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    resize();
    window.addEventListener("resize", resize);

    const bubbles: Bubble[] = Array.from({ length: PARTICLE_COUNT }, () =>
      createBubble(width, height, true)
    );

    let rafId: number;
    let visible = !document.hidden;
    function onVisibility() {
      visible = !document.hidden;
      if (visible) rafId = requestAnimationFrame(tick);
    }
    document.addEventListener("visibilitychange", onVisibility);

    function tick(time: number) {
      if (!visible || !ctx) return;
      ctx.clearRect(0, 0, width, height);
      for (const b of bubbles) {
        b.y -= b.speed;
        b.x += Math.sin(time / 1000 + b.driftPhase) * (b.drift * 0.02);
        if (b.y < -10) {
          Object.assign(b, createBubble(width, height, false), {
            y: height + 10,
          });
        }
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(190, 255, 245, ${b.opacity})`;
        ctx.fill();
      }
      rafId = requestAnimationFrame(tick);
    }
    rafId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0"
    />
  );
}
