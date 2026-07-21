import { CasePreviewGrid } from "@/components/sections/CasePreviewGrid";
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

        <Reveal amount={0.12}>
          <CasePreviewGrid cases={cases} />
        </Reveal>
      </div>
    </section>
  );
}
