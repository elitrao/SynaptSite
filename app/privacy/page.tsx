import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { privacyConfig } from "@/data/landing";

export const metadata: Metadata = {
  title: "Политика конфиденциальности | Synapt",
  description: "Черновик политики конфиденциальности сайта Synapt.",
  robots: { index: false, follow: false },
};

export default function PrivacyPage() {
  const isPlaceholder = privacyConfig.contactEmail.endsWith(".example");

  return (
    <main className="legal-page">
      <div className="site-container legal-page__inner">
        <Link className="legal-page__back" href="/">
          <ArrowLeft aria-hidden="true" size={18} strokeWidth={1.7} />
          На главную
        </Link>

        <header className="legal-page__header">
          <Image
            className="legal-page__brand-mark"
            src="/assets/brand/synapt-mark-white.svg"
            alt=""
            width={49}
            height={56}
          />
          <h1>Политика конфиденциальности</h1>
          <p>Редакция от 18 июля 2026 года</p>
        </header>

        {privacyConfig.isDraft ? (
          <aside className="legal-page__draft">
            <strong>Черновик для согласования</strong>
            <p>
              До публикации нужно указать юридические реквизиты оператора,
              рабочий контакт и утверждённый срок хранения данных.
            </p>
          </aside>
        ) : null}

        <div className="legal-page__content">
          <section>
            <h2>1. Оператор данных</h2>
            <p>
              Оператор: {privacyConfig.operatorName}. Юридическое наименование,
              адрес и реквизиты будут добавлены после согласования.
            </p>
          </section>

          <section>
            <h2>2. Какие данные используются</h2>
            <p>
              Сайт обрабатывает номер телефона, который пользователь
              добровольно указывает в форме обращения.
            </p>
          </section>

          <section>
            <h2>3. Цель обработки</h2>
            <p>
              Данные нужны, чтобы связаться с пользователем, уточнить задачу и
              подготовить предложение по проекту. Они не используются для
              автоматических рассылок без отдельного согласия.
            </p>
          </section>

          <section>
            <h2>4. Передача и хранение</h2>
            <p>
              Заявка передаётся на рабочую почту команды через защищённый сервис
              транзакционной отправки. Предлагаемый срок хранения: {privacyConfig.storagePeriod}.
            </p>
          </section>

          <section>
            <h2>5. Файлы cookie</h2>
            <p>
              В текущей версии сайта не подключены системы аналитики,
              рекламные пиксели и пользовательские файлы cookie.
            </p>
          </section>

          <section>
            <h2>6. Обращение по поводу данных</h2>
            {isPlaceholder ? (
              <p>
                Рабочий email оператора будет указан до публикации сайта.
              </p>
            ) : (
              <p>
                Запрос на уточнение или удаление данных можно отправить на {" "}
                <a href={`mailto:${privacyConfig.contactEmail}`}>
                  {privacyConfig.contactEmail}
                </a>.
              </p>
            )}
          </section>
        </div>
      </div>
    </main>
  );
}
