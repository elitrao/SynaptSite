import { Reveal } from "@/components/ui/Reveal";
import { teamCapabilities } from "@/data/landing";

export function TeamSection() {
  return (
    <section
      id="team"
      className="section team-section"
      aria-labelledby="team-title"
    >
      <div className="site-container team-section__grid">
        <Reveal className="team-section__intro">
          <h2 id="team-title">Команда Synapt</h2>
          <p>
            Собираем команду вокруг задачи, а не продаём отдельные часы
            специалистов. Один контур ответственности от идеи до поддержки.
          </p>
        </Reveal>

        <div className="team-roster">
          {teamCapabilities.map((capability, index) => (
            <Reveal
              className="team-roster__item"
              delay={index * 0.035}
              key={capability.title}
            >
              <article>
                <h3>{capability.title}</h3>
                <p>{capability.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
