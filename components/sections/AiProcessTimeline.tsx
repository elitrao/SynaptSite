"use client";

import { Check } from "lucide-react";
import { useInView, useReducedMotion } from "motion/react";
import { useRef } from "react";

type ProcessStep = {
  title: string;
  description: string;
};

type AiProcessTimelineProps = {
  steps: ProcessStep[];
};

export function AiProcessTimeline({ steps }: AiProcessTimelineProps) {
  const timelineRef = useRef<HTMLOListElement>(null);
  const isInView = useInView(timelineRef, { amount: 0.08, once: true });
  const reduceMotion = useReducedMotion();

  const stateClass = reduceMotion
    ? "ai-process__timeline--complete"
    : isInView
      ? "ai-process__timeline--active"
      : "";

  return (
    <ol
      aria-label="Процесс работы AI-десанта"
      className={`ai-process__timeline ${stateClass}`.trim()}
      ref={timelineRef}
    >
      <span className="ai-process__progress" aria-hidden="true" />
      {steps.map((item, index) => (
        <li key={item.title}>
          <span className="ai-process__node" aria-hidden="true">
            <span className="ai-process__node-index">
              {String(index + 1).padStart(2, "0")}
            </span>
            <Check
              className="ai-process__node-check"
              size={38}
              strokeWidth={1.8}
            />
          </span>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </li>
      ))}
    </ol>
  );
}
