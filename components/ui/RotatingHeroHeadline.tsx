"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useMemo, useState } from "react";

type RotatingHeroHeadlineProps = {
  id: string;
  className: string;
  prefix: string;
  phrases: readonly string[];
  suffix: string;
  accessibleLabel: string;
};

export function RotatingHeroHeadline({
  id,
  className,
  prefix,
  phrases,
  suffix,
  accessibleLabel,
}: RotatingHeroHeadlineProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const reduceMotion = useReducedMotion();
  const longestPhrase = useMemo(
    () => phrases.reduce((longest, phrase) =>
      phrase.length > longest.length ? phrase : longest,
    ),
    [phrases],
  );

  useEffect(() => {
    if (phrases.length < 2) {
      return;
    }

    const interval = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % phrases.length);
    }, 3000);

    return () => window.clearInterval(interval);
  }, [phrases.length]);

  return (
    <h1 id={id} className={className} aria-label={accessibleLabel}>
      <span className="hero-section__headline-static" aria-hidden="true">
        {prefix}
      </span>

      <motion.span
        className="hero-section__rotator"
        aria-hidden="true"
        layout={!reduceMotion}
        transition={{
          layout: {
            duration: 0.42,
            ease: [0.16, 1, 0.3, 1],
          },
        }}
      >
        <span className="hero-section__rotator-measure">
          {longestPhrase}
          <span className="hero-section__rotator-comma">,</span>
        </span>

        <AnimatePresence initial={false} mode="wait">
          <motion.span
            key={phrases[activeIndex]}
            className="hero-section__rotator-value"
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -16 }}
            transition={{
              duration: reduceMotion ? 0 : 0.42,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {phrases[activeIndex]}
            <span className="hero-section__rotator-comma">,</span>
          </motion.span>
        </AnimatePresence>
      </motion.span>

      <span className="hero-section__headline-static" aria-hidden="true">
        {suffix}
      </span>
    </h1>
  );
}
