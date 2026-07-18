"use client";

import { useReducedMotion } from "motion/react";
import { useEffect, useRef } from "react";

type Star = {
  x: number;
  y: number;
  radius: number;
  alpha: number;
  depth: number;
  drift: number;
  phase: number;
};

function createRandom(seed: number) {
  let state = seed >>> 0;

  return () => {
    state = (state * 1664525 + 1013904223) >>> 0;
    return state / 4294967296;
  };
}

type HeroStarfieldProps = {
  className?: string;
};

export function HeroStarfield({
  className = "hero-starfield",
}: HeroStarfieldProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");

    if (!canvas || !context) {
      return;
    }

    let width = 0;
    let height = 0;
    let animationFrame = 0;
    let stars: Star[] = [];
    const pointer = { x: 0, y: 0 };
    const pointerTarget = { x: 0, y: 0 };

    const buildStars = () => {
      const random = createRandom(271828);
      const starCount = Math.min(
        180,
        Math.max(80, Math.round((width * height) / 9000)),
      );

      stars = Array.from({ length: starCount }, () => ({
        x: random() * width,
        y: random() * height,
        radius: 0.45 + random() * 1.05,
        alpha: 0.22 + random() * 0.58,
        depth: 0.25 + random() * 0.9,
        drift: 0.00035 + random() * 0.0013,
        phase: random() * Math.PI * 2,
      }));
    };

    const resize = () => {
      const bounds = canvas.getBoundingClientRect();
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);

      width = bounds.width;
      height = bounds.height;
      canvas.width = Math.round(width * pixelRatio);
      canvas.height = Math.round(height * pixelRatio);
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      buildStars();
    };

    const draw = (time = 0) => {
      pointer.x += (pointerTarget.x - pointer.x) * 0.035;
      pointer.y += (pointerTarget.y - pointer.y) * 0.035;
      context.clearRect(0, 0, width, height);

      for (const star of stars) {
        const horizontalDrift = reduceMotion ? 0 : time * star.drift;
        const x =
          ((star.x + horizontalDrift + pointer.x * star.depth * 34 + 12) %
            (width + 24)) -
          12;
        const y =
          ((star.y + pointer.y * star.depth * 24 + 12) % (height + 24)) - 12;
        const twinkle = reduceMotion
          ? 1
          : 0.72 + Math.sin(time * 0.0014 + star.phase) * 0.28;

        context.beginPath();
        context.fillStyle = `rgba(178, 214, 255, ${star.alpha * twinkle})`;
        context.arc(x, y, star.radius, 0, Math.PI * 2);
        context.fill();
      }

      if (!reduceMotion) {
        animationFrame = window.requestAnimationFrame(draw);
      }
    };

    const handlePointerMove = (event: PointerEvent) => {
      pointerTarget.x = (event.clientX / window.innerWidth - 0.5) * 2;
      pointerTarget.y = (event.clientY / window.innerHeight - 0.5) * 2;
    };

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas);
    resize();

    if (reduceMotion) {
      draw();
    } else {
      window.addEventListener("pointermove", handlePointerMove, { passive: true });
      animationFrame = window.requestAnimationFrame(draw);
    }

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("pointermove", handlePointerMove);
      window.cancelAnimationFrame(animationFrame);
    };
  }, [reduceMotion]);

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />;
}
