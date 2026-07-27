import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BookOpenText,
  ChartNoAxesCombined,
  FileText,
  Lightbulb,
  Mail,
  Map,
  MessagesSquare,
  Send,
  Sparkles,
} from "lucide-react";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { AiProcessTimeline } from "@/components/sections/AiProcessTimeline";
import { Reveal } from "@/components/ui/Reveal";
import { siteConfig } from "@/data/landing";

const outcomes = [
  {
    title: "Сотрудники начнут применять AI в работе",
    description:
      "Сразу на реальных задачах: письмах, документах, данных и работе с клиентами",
    points: ["Письма и документы", "Анализ и контент"],
  },
  {
    title: "Появятся готовые рабочие инструменты",
    description:
      "Настроим шаблоны, помощников и автоматизации, которыми команда сможет пользоваться сразу",
    points: ["Шаблоны и инструкции", "AI-помощники"],
  },
  {
    title: "Вы увидите, где AI приносит пользу",
    description:
      "Проверим идеи в работе и оставим только те, что действительно экономят время",
    points: ["Реальные задачи", "Полезные сценарии"],
  },
  {
    title: "Станет понятно, что внедрять дальше",
    description:
      "Зафиксируем, что команда сможет развивать сама, а где понадобится разработка",
    points: ["Приоритеты внедрения", "План интеграций"],
  },
];

const fitScenarios = [
  {
    icon: Lightbulb,
    title: "AI почти не используют",
    description: "Хотите начать, но пока неясно, какие инструменты выбрать",
  },
  {
    icon: MessagesSquare,
    title: "Команда уже пробует AI",
    description: "Каждый работает по-своему, общих сценариев и правил пока нет",
  },
  {
    icon: FileText,
    title: "Рутина забирает часы",
    description: "Письма, отчёты, встречи и поиск информации занимают слишком много времени",
  },
  {
    icon: Map,
    title: "Хотите проверить пользу до большой разработки",
    description: "За месяц станет понятно, какие решения стоит развивать дальше",
  },
];

const solutions = [
  {
    icon: Mail,
    title: "AI-помощник для переписки",
    description:
      "Сокращает время на ответы и поддерживает единый тон",
    timeline: "1-2 недели",
  },
  {
    icon: MessagesSquare,
    title: "Сводки встреч",
    description:
      "Фиксирует решения и задачи без ручного конспектирования",
    timeline: "1 неделя",
  },
  {
    icon: FileText,
    title: "Помощник для документов",
    description:
      "Готовит черновики документов и типовых инструкций",
    timeline: "2-3 недели",
  },
  {
    icon: Sparkles,
    title: "База готовых сценариев",
    description:
      "Собирает единые сценарии под типовые запросы отделов",
    timeline: "1-2 недели",
  },
  {
    icon: BookOpenText,
    title: "Помощник по внутренним знаниям",
    description:
      "Находит ответы в документах и базе знаний компании",
    timeline: "2-4 недели",
  },
  {
    icon: ChartNoAxesCombined,
    title: "Подготовка регулярных отчётов",
    description:
      "Собирает данные и формирует понятные выводы",
    timeline: "2-4 недели",
  },
];

const process = [
  {
    title: "Погружаемся в работу",
    description:
      "Разговариваем с командой и смотрим, на что уходит время каждый день",
  },
  {
    title: "Выбираем сценарии",
    description:
      "Берём задачи, где результат можно увидеть уже в первый месяц",
  },
  {
    title: "Запускаем инструменты",
    description:
      "Собираем решения на ваших письмах, документах и данных",
  },
  {
    title: "Передаём практику команде",
    description:
      "Показываем, как всё работает, и оставляем понятные инструкции",
  },
];

export const metadata: Metadata = {
  title: "AI-десант | Внедрение AI в компанию за месяц | Synapt",
  description:
    "Специалист Synapt на месяц входит в команду, внедряет первые AI-инструменты и обучает сотрудников работать с ними самостоятельно.",
  alternates: { canonical: "/services/ai-desant" },
  openGraph: {
    title: "AI-десант | Synapt",
    description:
      "Внедрим первые AI-инструменты в работу компании и передадим практику команде за один месяц.",
    url: "/services/ai-desant",
    siteName: siteConfig.name,
    locale: "ru_RU",
    type: "website",
  },
};

export default function AiDesantPage() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Перейти к содержанию
      </a>
      <Header />
      <main id="main-content" className="ai-desant-page">
        <div id="top-sentinel" aria-hidden="true" />

        <section className="ai-desant-hero">
          <div className="site-container">
            <Link className="ai-desant-back" href="/#services">
              <ArrowLeft aria-hidden="true" size={18} strokeWidth={1.8} />
              Все услуги
            </Link>

            <div className="ai-desant-hero__grid">
              <Reveal className="ai-desant-hero__copy">
                <h1>
                  <span className="ai-desant-hero__line">
                    <span className="ai-desant-hero__highlight ai-desant-hero__highlight--red">
                      Автоматизируем
                    </span>
                    ,
                  </span>
                  <span className="ai-desant-hero__line">
                    пока вы занимаетесь{" "}
                    <span className="ai-desant-hero__highlight">бизнесом</span>
                  </span>
                </h1>
                <p>
                  Опыт внедрений показывает: практически в каждой компании есть
                  процессы, которые AI может сделать быстрее, дешевле и эффективнее
                </p>
                <Link className="button ai-desant-hero__cta" href="/#contact">
                  Получить консультацию
                  <Send aria-hidden="true" size={18} strokeWidth={1.8} />
                </Link>
              </Reveal>

            </div>
          </div>
        </section>

        <section className="ai-desant-section ai-outcomes">
          <div className="site-container">
            <Reveal className="ai-desant-heading">
              <h2>Что изменится за месяц?</h2>
              <p>
                Через месяц у команды останутся рабочие инструменты и понятные
                сценарии, которыми можно пользоваться каждый день
              </p>
            </Reveal>

            <div className="ai-outcomes__stage">
              {outcomes.map((item, index) => (
                <Reveal
                  className={`ai-outcome-card ai-outcome-card--${index + 1}`}
                  delay={index * 0.045}
                  key={item.title}
                >
                  <article>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <ul aria-label={`Ключевые результаты: ${item.title}`}>
                      {item.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="ai-desant-section ai-fit">
          <div className="site-container">
            <Reveal className="ai-desant-heading ai-fit__heading">
              <h2>Кому подходит AI-десант</h2>
              <p>
                Для первого запуска AI и команд, которым пора собрать
                разрозненные эксперименты в рабочую систему
              </p>
            </Reveal>

            <div className="ai-fit__cards">
              {fitScenarios.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Reveal
                    className={`ai-fit-card ai-fit-card--${index + 1}`}
                    delay={index * 0.045}
                    key={item.title}
                  >
                    <article>
                      <h3>{item.title}</h3>
                      <Icon aria-hidden="true" size={48} strokeWidth={1.25} />
                      <p>{item.description}</p>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        <section className="ai-desant-section ai-comparison">
          <div className="site-container">
            <Reveal className="ai-desant-heading ai-comparison__heading">
              <h2>Не просто AI-консалтинг</h2>
              <p>Вместо отчёта даём команде рабочие инструменты</p>
            </Reveal>

            <div className="ai-comparison__grid">
              <Reveal className="ai-comparison__side">
                <span>Обычный консалтинг</span>
                <h3>Рекомендации нужно внедрять самим</h3>
                <p>После презентации внедряете всё сами</p>
                <strong>Дальше всё на вашей стороне</strong>
              </Reveal>

              <Reveal className="ai-comparison__side ai-comparison__side--accent" delay={0.06}>
                <span>AI-десант</span>
                <h3>Специалист внедряет вместе с командой</h3>
                <p>Сразу запускаем решения в работе команды</p>
                <strong>
                  Готовые инструменты и обученная команда
                </strong>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="ai-desant-section ai-solutions">
          <div className="site-container">
            <div className="ai-solutions__panel">
              <Reveal className="ai-desant-heading ai-solutions__heading">
                <h2>Какие решения можно внедрить за месяц</h2>
                <p>Быстро к запуску, с понятной пользой для команды</p>
              </Reveal>

              <Reveal className="ai-solutions__matrix">
                <table>
                  <caption className="sr-only">
                    Решения AI-десанта, польза для команды и сроки запуска
                  </caption>
                  <colgroup>
                    <col className="ai-solutions__col--solution" />
                    <col className="ai-solutions__col--benefit" />
                    <col className="ai-solutions__col--timeline" />
                  </colgroup>
                  <thead>
                    <tr>
                      <th scope="col">Решение</th>
                      <th scope="col">Что даёт</th>
                      <th scope="col">Срок запуска</th>
                    </tr>
                  </thead>
                  <tbody>
                    {solutions.map((item) => {
                      const Icon = item.icon;
                      return (
                        <tr key={item.title}>
                          <td data-label="Решение">
                            <span className="ai-solutions__name">
                              <Icon aria-hidden="true" size={19} strokeWidth={1.5} />
                              <span>{item.title}</span>
                            </span>
                          </td>
                          <td data-label="Что даёт">{item.description}</td>
                          <td data-label="Срок запуска">
                            <strong>{item.timeline}</strong>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </Reveal>

              <Reveal className="ai-solutions__note">
                <div>
                  <Lightbulb aria-hidden="true" size={18} strokeWidth={1.6} />
                  <p>
                    Выберем конкретный набор после знакомства с командой и её
                    задачами
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="ai-desant-section ai-process">
          <div className="site-container">
            <Reveal className="ai-desant-heading">
              <h2>Как это работает</h2>
              <p>Разбираемся в задачах, запускаем рабочие инструменты и передаём их команде</p>
            </Reveal>

            <Reveal className="ai-process__diagram">
              <AiProcessTimeline steps={process} />
            </Reveal>
          </div>
        </section>

        <section className="ai-desant-cta">
          <div className="site-container ai-desant-cta__inner">
            <Reveal className="ai-desant-cta__copy">
              <h2>
                Разберём ваши процессы и найдём, где AI даст максимальный
                результат
              </h2>
            </Reveal>

            <Reveal className="ai-desant-cta__action" delay={0.06}>
              <Link className="button" href="/#contact">
                Бесплатная консультация
                <ArrowRight aria-hidden="true" size={19} strokeWidth={1.7} />
              </Link>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
