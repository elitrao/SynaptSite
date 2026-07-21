import { Reveal } from "@/components/ui/Reveal";
import { metrics } from "@/data/landing";

export function MetricsSection() {
  return (
    <section className="metrics-section" aria-label="Показатели Synapt">
      <div className="site-container">
        <Reveal amount={0.1}>
          <dl className="metrics-panel">
            {metrics.map((metric) => (
              <div className="metrics-panel__item" key={metric.value}>
                <dt>{metric.label}</dt>
                <dd>{metric.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
