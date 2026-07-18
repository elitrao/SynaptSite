import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { Reveal } from "@/components/ui/Reveal";
import { cases } from "@/data/landing";

export function CasesSection() {
  return (
    <section id="cases" className="section cases-section" aria-labelledby="cases-title">
      <div className="site-container">
        <Reveal>
          <header className="cases-section__header">
            <h2 id="cases-title">Кейсы</h2>
            <p>
              Сложные задачи превращаем в работающие продукты с понятным
              результатом
            </p>
          </header>
        </Reveal>

        <div className="cases-grid">
          {cases.map((caseStudy, index) => (
            <Reveal
              key={caseStudy.id}
              className="cases-grid__item"
              delay={index * 0.06}
              amount={0.12}
            >
              <article className="case-card" data-case={caseStudy.id}>
                <header className="case-card__header">
                  <h3>{caseStudy.title}</h3>
                  <a className="case-card__link" href="#contact">
                    Кейс
                    <ArrowRight aria-hidden="true" size={14} strokeWidth={1.7} />
                  </a>
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
                    aria-label="Изображение кейса скоро появится"
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
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
