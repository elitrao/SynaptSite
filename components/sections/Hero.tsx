import { ArrowDownRight, Presentation } from "lucide-react";
import Image from "next/image";

import { HeroStarfield } from "@/components/ui/HeroStarfield";
import { Reveal } from "@/components/ui/Reveal";
import { RotatingHeroHeadline } from "@/components/ui/RotatingHeroHeadline";
import { clientLogos, hero } from "@/data/landing";

export function Hero() {
  return (
    <section id="top" className="hero-section" aria-labelledby="hero-title">
      <span id="top-sentinel" className="top-sentinel" aria-hidden="true" />
      <div className="hero-section__headline-glow" aria-hidden="true" />
      <HeroStarfield />

      <div className="site-container hero-section__content">
        <div className="hero-section__headline-wrap">
          <RotatingHeroHeadline
            id="hero-title"
            className="hero-section__headline"
            prefix={hero.prefix}
            phrases={hero.rotatingPhrases}
            suffix={hero.suffix}
            accessibleLabel={hero.title}
          />
        </div>

        <Reveal delay={0.08} amount={0.05}>
          <p className="hero-section__description">{hero.description}</p>
        </Reveal>

        <Reveal className="hero-section__actions" delay={0.15} amount={0.05}>
          <a className="button hero-section__cta" href="#contact">
            <span>{hero.cta}</span>
            <ArrowDownRight aria-hidden="true" size={18} strokeWidth={1.7} />
          </a>

          <a
            className="button button--light hero-section__presentation"
            href={hero.presentationHref}
            target="_blank"
            rel="noreferrer"
          >
            {hero.presentationCta}
            <Presentation aria-hidden="true" size={18} strokeWidth={1.7} />
          </a>
        </Reveal>

        <Reveal className="hero-clients" delay={0.22} amount={0.05}>
          {clientLogos.map((logo) => (
            <div className="hero-clients__item" key={logo.id}>
              <Image
                className={`hero-clients__logo hero-clients__logo--${logo.id}`}
                src={logo.src}
                alt={logo.name}
                width={logo.width}
                height={logo.height}
                sizes="(max-width: 640px) 64px, 112px"
                loading="eager"
              />
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
