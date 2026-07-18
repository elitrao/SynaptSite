"use client";

import Lenis from "lenis";
import { useEffect } from "react";

export function SmoothScroll() {
  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    if (reducedMotion.matches) return;

    const lenis = new Lenis({
      autoRaf: true,
      anchors: {
        offset: -86,
        lerp: 0.085,
      },
      lerp: 0.09,
      smoothWheel: true,
      stopInertiaOnNavigate: true,
      syncTouch: false,
      wheelMultiplier: 0.9,
    });

    const disableSmoothScroll = (event: MediaQueryListEvent) => {
      if (event.matches) lenis.destroy();
    };

    reducedMotion.addEventListener("change", disableSmoothScroll);

    return () => {
      reducedMotion.removeEventListener("change", disableSmoothScroll);
      lenis.destroy();
    };
  }, []);

  return null;
}
