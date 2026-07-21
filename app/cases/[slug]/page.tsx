import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Play, Send } from "lucide-react";
import { notFound } from "next/navigation";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { cases, siteConfig } from "@/data/landing";

type CasePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return cases.map((caseStudy) => ({ slug: caseStudy.id }));
}

export async function generateMetadata({
  params,
}: CasePageProps): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = cases.find((item) => item.id === slug);

  if (!caseStudy) return {};

  const canonical = `/cases/${caseStudy.id}`;

  return {
    title: `${caseStudy.title} | Кейсы Synapt`,
    description: caseStudy.description,
    alternates: { canonical },
    openGraph: {
      title: `${caseStudy.title} | Synapt`,
      description: caseStudy.description,
      url: canonical,
      siteName: siteConfig.name,
      locale: "ru_RU",
      type: "article",
      images: [{ url: caseStudy.image, alt: caseStudy.imageAlt }],
    },
  };
}

export default async function CasePage({ params }: CasePageProps) {
  const { slug } = await params;
  const caseStudy = cases.find((item) => item.id === slug);

  if (!caseStudy) notFound();

  return (
    <>
      <Header />
      <main className="case-page">
        <article>
          <header className="case-hero">
            <div className="site-container case-hero__inner">
              <Link className="case-page__back" href="/#cases">
                <ArrowLeft aria-hidden="true" size={18} strokeWidth={1.8} />
                Все кейсы
              </Link>

              <div className="case-hero__heading">
                <div>
                  <p className="case-hero__client">{caseStudy.client}</p>
                  <h1>{caseStudy.title}</h1>
                </div>
                <p className="case-hero__summary">{caseStudy.description}</p>
              </div>

              <dl className="case-hero__metrics">
                {caseStudy.metrics.map((metric) => (
                  <div key={`${caseStudy.id}-${metric.value}`}>
                    <dd>{metric.value}</dd>
                    <dt>{metric.label}</dt>
                  </div>
                ))}
              </dl>
            </div>
          </header>

          <section className="case-page__section">
            <div className="site-container case-page__media">
              {caseStudy.video.src ? (
                <video
                  controls
                  preload="metadata"
                  poster={caseStudy.video.poster}
                  aria-label={caseStudy.video.title}
                >
                  <source src={caseStudy.video.src} />
                </video>
              ) : (
                <div className="case-video-placeholder">
                  <Play aria-hidden="true" size={28} strokeWidth={1.5} />
                  <div>
                    <strong>{caseStudy.video.title}</strong>
                    <span>Добавим после согласования материалов</span>
                  </div>
                </div>
              )}
            </div>
          </section>

          <section className="case-page__section case-story">
            <div className="site-container case-story__grid">
              <div className="case-story__block">
                <h2>Задача</h2>
                <p>{caseStudy.challenge}</p>
              </div>

              <div className="case-story__block">
                <h2>Что сделали</h2>
                <ul>
                  {caseStudy.delivered.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="site-container case-facts">
              <div>
                <span>Срок</span>
                <strong>{caseStudy.duration}</strong>
              </div>
              <div>
                <span>Стоимость</span>
                <strong>{caseStudy.budget}</strong>
              </div>
            </div>
          </section>

          <section className="case-page__section case-gallery">
            <div className="site-container">
              <h2>Проект в работе</h2>
              <div className="case-gallery__grid">
                {caseStudy.gallery.map((image) => (
                  <figure key={image.src}>
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(max-width: 768px) calc(100vw - 28px), 1180px"
                    />
                  </figure>
                ))}
              </div>
            </div>
          </section>

          <section className="case-page__section case-result">
            <div className="site-container case-result__inner">
              <div>
                <h2>Результат</h2>
                <p>{caseStudy.result}</p>
              </div>
              <ul>
                {caseStudy.outcomes.map((outcome) => (
                  <li key={outcome}>{outcome}</li>
                ))}
              </ul>
            </div>
          </section>

          <section className="case-page__cta">
            <div className="site-container case-page__cta-inner">
              <div>
                <h2>Есть похожая задача?</h2>
                <p>Разберём исходные данные и предложим первый рабочий этап.</p>
              </div>
              <Link className="button" href="/#contact">
                Оставить заявку
                <Send aria-hidden="true" size={18} strokeWidth={1.8} />
              </Link>
            </div>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}
