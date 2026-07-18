"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useState, type FormEvent } from "react";

import { contactConfig } from "@/data/landing";
import { buildContactMailtoHref } from "@/lib/contact";

type FormErrors = {
  name?: string;
  email?: string;
  phone?: string;
  contact?: string;
  idea?: string;
  consent?: string;
};

type FormStatus = "idle" | "recipient-missing" | "opening";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ContactSection() {
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<FormStatus>("idle");

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("idle");

    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "").trim();
    const email = String(form.get("email") || "").trim();
    const phone = String(form.get("phone") || "").trim();
    const idea = String(form.get("idea") || "").trim();
    const consent = form.get("consent") === "on";
    const nextErrors: FormErrors = {};

    if (name.length < 2) nextErrors.name = "Укажите имя";
    if (!email && !phone) nextErrors.contact = "Оставьте email или телефон";
    if (email && !emailPattern.test(email)) {
      nextErrors.email = "Проверьте формат email";
    }
    if (phone && phone.replace(/\D/g, "").length < 10) {
      nextErrors.phone = "Проверьте номер телефона";
    }
    if (idea.length < 10) {
      nextErrors.idea = "Опишите задачу хотя бы в одном предложении";
    }
    if (!consent) nextErrors.consent = "Нужно согласие на обработку данных";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    if (contactConfig.recipientIsPlaceholder) {
      setStatus("recipient-missing");
      return;
    }

    const href = buildContactMailtoHref(contactConfig.recipientEmail, {
      name,
      email,
      phone,
      idea,
    });

    setStatus("opening");
    window.location.assign(href);
  };

  return (
    <section id="contact" className="section contact-section" aria-labelledby="contact-title">
      <div className="contact-section__glow" aria-hidden="true" />
      <div className="site-container contact-section__grid">
        <div className="contact-section__copy">
          <h2 id="contact-title">Поделитесь своей идеей</h2>
          <p>
            Опишите задачу своими словами. На первой встрече разберём сценарий,
            риски и состав рабочей версии.
          </p>
          <div className="contact-section__note">
            <strong>Что будет дальше</strong>
            <span>
              Уточним контекст, предложим следующий шаг и зафиксируем его без
              лишней презентации.
            </span>
          </div>
        </div>

        <form className="contact-form" noValidate onSubmit={onSubmit}>
          <div className="form-field">
            <label htmlFor="name">Имя</label>
            <input
              id="name"
              name="name"
              type="text"
              required
              autoComplete="name"
              aria-invalid={Boolean(errors.name)}
              aria-describedby="name-error"
            />
            <span id="name-error" className="form-error">
              {errors.name}
            </span>
          </div>

          <div
            className="contact-form__contacts"
            role="group"
            aria-label="Контакт для ответа, заполните email или телефон"
          >
            <div className="form-field">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                inputMode="email"
                autoComplete="email"
                aria-invalid={Boolean(errors.email || errors.contact)}
                aria-describedby="email-error contact-error"
              />
              <span id="email-error" className="form-error">
                {errors.email}
              </span>
            </div>

            <div className="form-field">
              <label htmlFor="phone">Телефон</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                aria-invalid={Boolean(errors.phone || errors.contact)}
                aria-describedby="phone-error contact-error"
              />
              <span id="phone-error" className="form-error">
                {errors.phone}
              </span>
            </div>
          </div>
          <span id="contact-error" className="form-error form-error--contact">
            {errors.contact}
          </span>

          <div className="form-field">
            <label htmlFor="idea">Пожелания, ваша идея</label>
            <textarea
              id="idea"
              name="idea"
              rows={5}
              required
              aria-invalid={Boolean(errors.idea)}
              aria-describedby="idea-error"
            />
            <span id="idea-error" className="form-error">
              {errors.idea}
            </span>
          </div>

          <div className="contact-form__consent">
            <label>
              <input
                name="consent"
                type="checkbox"
                required
                aria-invalid={Boolean(errors.consent)}
                aria-describedby="consent-error"
              />
              <span>
                Согласен на обработку данных согласно{" "}
                <Link href={contactConfig.privacyPath}>политике конфиденциальности</Link>
              </span>
            </label>
            <span id="consent-error" className="form-error">
              {errors.consent}
            </span>
          </div>

          <button className="button contact-form__submit" type="submit">
            Оставить заявку
            <ArrowUpRight aria-hidden="true" size={18} strokeWidth={1.7} />
          </button>

          <div className="contact-form__status" aria-live="polite">
            {status === "recipient-missing" ? (
              <p>
                Email для заявок пока не подключен. Замените временный адрес
                перед публикацией сайта.
              </p>
            ) : null}
            {status === "opening" ? (
              <p>Письмо подготовлено. Открываем ваше почтовое приложение.</p>
            ) : null}
          </div>
        </form>
      </div>
    </section>
  );
}
