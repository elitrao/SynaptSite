import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { Reveal } from "@/components/ui/Reveal";
import { services } from "@/data/landing";

export function ServicesSection() {
  return (
    <section
      id="services"
      className="section services-section"
      aria-labelledby="services-title"
    >
      <div className="site-container">
        <Reveal>
          <header className="services-section__header">
            <h2 id="services-title">Что мы умеем</h2>
            <p className="services-section__intro">
              Проектируем продукт, собираем рабочую версию, подключаем системы и
              всегда остаёмся на поддержке
            </p>
          </header>
        </Reveal>

        <div className="capabilities-list">
          {services.map((service, index) => (
            <Reveal
              key={service.id}
              className="capabilities-list__item"
              delay={index * 0.07}
            >
              <article
                className={`capability-row${service.featured ? " capability-row--featured" : ""}`}
              >
                <div className="capability-row__title">
                  {service.featured ? (
                    <span className="capability-row__flag">Флагманское направление</span>
                  ) : null}
                  <h3>{service.title}</h3>
                </div>

                <div className="capability-row__body">
                  <p>{service.description}</p>
                  <Link
                    className="capability-row__link"
                    href={
                      service.id === "ai-desant"
                        ? "/services/ai-desant"
                        : "#cases"
                    }
                  >
                    Подробнее
                    <ArrowRight aria-hidden="true" size={19} strokeWidth={1.6} />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
