"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Maximize2, X } from "lucide-react";
import { useRouter } from "next/navigation";

import type { CaseStudy } from "@/data/landing";

type CasePreviewGridProps = {
  cases: CaseStudy[];
};

export function CasePreviewGrid({ cases }: CasePreviewGridProps) {
  const router = useRouter();
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);
  const [isNavigating, setIsNavigating] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const transitionRef = useRef<HTMLDivElement>(null);
  const navigationTimerRef = useRef<number | null>(null);

  useEffect(() => {
    const dialog = dialogRef.current;

    if (!selectedCase || !dialog) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    if (!dialog.open) {
      dialog.showModal();
    }

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [selectedCase]);

  useEffect(() => {
    if (isNavigating) {
      transitionRef.current?.focus();
    }
  }, [isNavigating]);

  useEffect(() => {
    return () => {
      if (navigationTimerRef.current !== null) {
        window.clearTimeout(navigationTimerRef.current);
      }
    };
  }, []);

  const closePreview = () => {
    dialogRef.current?.close();
  };

  return (
    <>
      <div className="cases-grid">
        {cases.map((caseStudy) => (
          <div className="cases-grid__item" key={caseStudy.id}>
            <article className="case-card" data-case={caseStudy.id}>
              <button
                className="case-card__trigger"
                type="button"
                aria-haspopup="dialog"
                aria-label={`Открыть краткий обзор кейса: ${caseStudy.title}`}
                onClick={() => {
                  setIsNavigating(false);
                  setSelectedCase(caseStudy);
                  router.prefetch(`/cases/${caseStudy.id}`);
                }}
              />

              <header className="case-card__header">
                <h3>{caseStudy.title}</h3>
                <span className="case-card__link" aria-hidden="true">
                  Кейс
                  <ArrowRight aria-hidden="true" size={14} strokeWidth={1.7} />
                </span>
              </header>

              <p className="case-card__description">{caseStudy.description}</p>

              <dl className="case-card__metrics">
                {caseStudy.metrics.slice(0, 2).map((metric) => (
                  <div key={`${caseStudy.id}-${metric.value}`}>
                    <dd>{metric.value}</dd>
                    <dt>{metric.label}</dt>
                  </div>
                ))}
              </dl>

              <div className="case-card__visual">
                <div
                  className="case-card__placeholder"
                  role="img"
                  aria-label="Нейтральная обложка кейса Synapt"
                >
                  <Image
                    src="/assets/brand/synapt-logo-white.svg"
                    alt=""
                    width={108}
                    height={45}
                  />
                </div>
              </div>
            </article>
          </div>
        ))}
      </div>

      <dialog
        ref={dialogRef}
        className="case-preview"
        aria-labelledby={selectedCase ? `case-preview-title-${selectedCase.id}` : undefined}
        aria-describedby={selectedCase ? `case-preview-description-${selectedCase.id}` : undefined}
        aria-busy={isNavigating}
        onClose={() => setSelectedCase(null)}
        onClick={(event) => {
          if (event.target === event.currentTarget) {
            closePreview();
          }
        }}
      >
        {selectedCase ? (
          <>
            <div className="case-preview__panel" aria-hidden={isNavigating}>
              <button
                className="case-preview__close"
                type="button"
                aria-label="Закрыть обзор кейса"
                onClick={closePreview}
              >
                <X aria-hidden="true" size={20} strokeWidth={1.7} />
              </button>

            <div className="case-preview__media">
              <Image
                src={selectedCase.gallery[0]?.src ?? selectedCase.image}
                alt={selectedCase.gallery[0]?.alt ?? selectedCase.imageAlt}
                fill
                sizes="(max-width: 720px) calc(100vw - 36px), 420px"
              />
            </div>

            <div className="case-preview__content">
              <span className="case-preview__label">Краткий обзор</span>
              <h3 id={`case-preview-title-${selectedCase.id}`}>{selectedCase.title}</h3>
              <p
                id={`case-preview-description-${selectedCase.id}`}
                className="case-preview__description"
              >
                {selectedCase.description}
              </p>

              <dl className="case-preview__metrics">
                {selectedCase.metrics.slice(0, 2).map((metric) => (
                  <div key={`preview-${selectedCase.id}-${metric.value}`}>
                    <dd>{metric.value}</dd>
                    <dt>{metric.label}</dt>
                  </div>
                ))}
              </dl>

              <div className="case-preview__client">
                <span>Клиент</span>
                <p>{selectedCase.client}</p>
              </div>

              <Link
                className="case-preview__full-link"
                href={`/cases/${selectedCase.id}`}
                aria-busy={isNavigating}
                onClick={(event) => {
                  if (
                    event.metaKey ||
                    event.ctrlKey ||
                    event.shiftKey ||
                    event.altKey
                  ) {
                    return;
                  }

                  event.preventDefault();

                  if (isNavigating) {
                    return;
                  }

                  setIsNavigating(true);

                  const href = `/cases/${selectedCase.id}`;
                  const reduceMotion = window.matchMedia(
                    "(prefers-reduced-motion: reduce)",
                  ).matches;

                  if (reduceMotion) {
                    router.push(href);
                    return;
                  }

                  navigationTimerRef.current = window.setTimeout(() => {
                    router.push(href);
                  }, 760);
                }}
              >
                <span>Раскрыть кейс</span>
                <Maximize2 aria-hidden="true" size={13} strokeWidth={1.7} />
              </Link>
            </div>
            </div>

            {isNavigating ? (
              <div
                ref={transitionRef}
                className="case-transition-screen"
                role="status"
                aria-live="polite"
                aria-label={`Открываем кейс: ${selectedCase.title}`}
                tabIndex={-1}
              >
                <div className="case-transition-screen__content">
                  <Image
                    src="/assets/brand/synapt-logo-white.svg"
                    alt="Synapt"
                    width={132}
                    height={55}
                    priority
                  />
                  <p>Открываем кейс</p>
                  <strong>{selectedCase.title}</strong>
                  <div className="case-transition-screen__progress" aria-hidden="true">
                    <span />
                  </div>
                </div>
              </div>
            ) : null}
          </>
        ) : null}
      </dialog>
    </>
  );
}
