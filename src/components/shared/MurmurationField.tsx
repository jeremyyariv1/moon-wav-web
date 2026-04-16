"use client";

import { useEffect, useRef } from "react";

/**
 * Canvas-based murmuration / Boids flocking swarm.
 *
 * Draws ~320 agents that flock using classic Reynolds rules
 * (alignment, cohesion, separation) with a soft horizontal drift
 * so the swarm feels like it's breathing along the midline of the
 * hero. Cursor attracts nearby agents — the swarm notices you.
 *
 * Performance:
 *  - Paused when offscreen (IntersectionObserver)
 *  - Respects prefers-reduced-motion
 *  - DPR capped at 2x to avoid blowing out retina laptops
 *
 * Conceptually: the behavioral dataset visualized — thousands of
 * individual signals cohering into emergent pattern. The thesis,
 * animate.
 */

const COUNT = 260;
const MAX_SPEED = 1.2;
const MIN_SPEED = 0.25;
const NEIGHBOR_R = 60;
const SEP_R = 14;
const ALIGN_W = 0.045;
const COHESION_W = 0.0009;
const SEP_W = 0.06;
const DRIFT_W = 0.0008;
const DOT_RADIUS = 1.5;

interface Boid {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

export default function MurmurationField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef(0);
  const inViewRef = useRef(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let W = 0;
    let H = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      W = rect.width;
      H = rect.height;
      canvas.width = W * dpr;
      canvas.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    window.addEventListener("resize", resize);

    const observer = new IntersectionObserver(
      (entries) => {
        inViewRef.current = entries[0]?.isIntersecting ?? true;
      },
      { threshold: 0 }
    );
    observer.observe(canvas);

    const boids: Boid[] = [];
    for (let i = 0; i < COUNT; i++) {
      boids.push({
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * MAX_SPEED,
        vy: (Math.random() - 0.5) * MAX_SPEED,
      });
    }

    let mouseX = -1;
    let mouseY = -1;
    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };
    const onLeave = () => {
      mouseX = -1;
      mouseY = -1;
    };
    canvas.addEventListener("mousemove", onMove);
    canvas.addEventListener("mouseleave", onLeave);

    let t = 0;
    const loop = () => {
      rafRef.current = requestAnimationFrame(loop);
      if (!inViewRef.current) return;

      t += 0.004;

      // Fully clear each frame — no motion trails
      ctx.clearRect(0, 0, W, H);

      const neighborRSq = NEIGHBOR_R * NEIGHBOR_R;
      const sepRSq = SEP_R * SEP_R;

      ctx.fillStyle = "rgba(166, 115, 255, 0.6)";

      for (let i = 0; i < COUNT; i++) {
        const b = boids[i];
        let aVx = 0;
        let aVy = 0;
        let cX = 0;
        let cY = 0;
        let aN = 0;
        let sX = 0;
        let sY = 0;

        for (let j = 0; j < COUNT; j++) {
          if (i === j) continue;
          const o = boids[j];
          const dx = o.x - b.x;
          const dy = o.y - b.y;
          const dSq = dx * dx + dy * dy;
          if (dSq < neighborRSq) {
            aVx += o.vx;
            aVy += o.vy;
            cX += o.x;
            cY += o.y;
            aN++;
            if (dSq < sepRSq) {
              const d = Math.sqrt(dSq) || 0.01;
              sX -= dx / d;
              sY -= dy / d;
            }
          }
        }

        if (aN > 0) {
          b.vx += (aVx / aN - b.vx) * ALIGN_W;
          b.vy += (aVy / aN - b.vy) * ALIGN_W;
          b.vx += (cX / aN - b.x) * COHESION_W;
          b.vy += (cY / aN - b.y) * COHESION_W;
        }
        b.vx += sX * SEP_W;
        b.vy += sY * SEP_W;

        // Gentle sine drift — swarm breathes along the midline
        const target = H / 2 + Math.sin(t * 1.8 + b.x * 0.006) * 30;
        b.vy += (target - b.y) * DRIFT_W;

        if (mouseX >= 0) {
          const dx = mouseX - b.x;
          const dy = mouseY - b.y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d > 18 && d < 160) {
            b.vx += (dx / d) * 0.18;
            b.vy += (dy / d) * 0.18;
          }
        }

        let sp = Math.sqrt(b.vx * b.vx + b.vy * b.vy);
        if (sp > MAX_SPEED) {
          b.vx = (b.vx / sp) * MAX_SPEED;
          b.vy = (b.vy / sp) * MAX_SPEED;
          sp = MAX_SPEED;
        } else if (sp < MIN_SPEED) {
          // Keep motion alive so direction marks stay crisp
          const scale = MIN_SPEED / (sp || 0.001);
          b.vx *= scale;
          b.vy *= scale;
          sp = MIN_SPEED;
        }

        b.x += b.vx;
        b.y += b.vy;

        if (b.x < -10) b.x = W + 10;
        else if (b.x > W + 10) b.x = -10;
        if (b.y < -10) b.y = H + 10;
        else if (b.y > H + 10) b.y = -10;

        // Draw as a small filled circle — clean, no trail
        ctx.beginPath();
        ctx.arc(b.x, b.y, DOT_RADIUS, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    loop();

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
      observer.disconnect();
      canvas.removeEventListener("mousemove", onMove);
      canvas.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      aria-hidden
    />
  );
}
