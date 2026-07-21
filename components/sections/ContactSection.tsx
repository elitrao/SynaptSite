"use client";

import Link from "next/link";
import { Send } from "lucide-react";
import { useState, type FormEvent } from "react";

import { contactConfig } from "@/data/landing";
import type { ContactResponse } from "@/lib/contact";
import { isValidPhone } from "@/lib/contact";

type FormErrors = {
  phone?: string;
  consent?: string;
};

type FormStatus = "idle" | "submitting" | "success" | "error";

export function ContactSection() {
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<FormStatus>("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("idle");
    setStatusMessage("");

    const formElement = event.currentTarget;
    const form = new FormData(formElement);
    const phone = String(form.get("phone") || "").trim();
    const consent = form.get("consent") === "on";
    const website = String(form.get("website") || "").trim();
    const nextErrors: FormErrors = {};

    if (!isValidPhone(phone)) {
      nextErrors.phone = "Укажите номер телефона с кодом страны";
    }
    if (!consent) {
      nextErrors.consent = "Нужно согласие на обработку данных";
    }

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone, consent, website }),
      });
      const result = (await response.json()) as ContactResponse;

      if (!response.ok || !result.ok) {
        setStatus("error");
        setStatusMessage(
          result.message || "Не получилось отправить заявку. Попробуйте ещё раз.",
        );
        return;
      }

      setStatus("success");
      setStatusMessage("Заявка отправлена. Свяжемся с вами в ближайшее время.");
      formElement.reset();
    } catch {
      setStatus("error");
      setStatusMessage(
        "Не получилось связаться с сервером. Проверьте соединение и повторите попытку.",
      );
    }
  };

  return (
    <section
      id="contact"
      className="section contact-section"
      aria-labelledby="contact-title"
    >
      <div className="contact-section__glow" aria-hidden="true" />
      <div className="site-container contact-section__grid">
        <div className="contact-section__copy">
          <h2 id="contact-title">Поделитесь своей идеей</h2>
          <p>
            Не нужно готовить ТЗ. Оставьте телефон, на первой встрече опишете
            задачу своими словами, а мы всё разберём.
          </p>
          <div className="contact-section__note">
            <strong>Что будет дальше</strong>
            <span>
              Свяжемся, уточним контекст и предложим первый понятный этап
              работы.
            </span>
          </div>
        </div>

        <form className="contact-form" noValidate onSubmit={onSubmit}>
          <div className="form-field">
            <label htmlFor="phone">Телефон</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              placeholder="+7 999 000-00-00"
              required
              aria-invalid={Boolean(errors.phone)}
              aria-describedby="phone-hint phone-error"
              disabled={status === "submitting"}
            />
            <span id="phone-hint" className="form-hint">
              Можно указать номер, привязанный к Telegram
            </span>
            <span id="phone-error" className="form-error">
              {errors.phone}
            </span>
          </div>

          <div className="form-field form-field--honeypot" aria-hidden="true">
            <label htmlFor="website">Сайт</label>
            <input
              id="website"
              name="website"
              type="text"
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          <div className="contact-form__consent">
            <label>
              <input
                name="consent"
                type="checkbox"
                required
                aria-invalid={Boolean(errors.consent)}
                aria-describedby="consent-error"
                disabled={status === "submitting"}
              />
              <span>
                Согласен на обработку данных согласно{" "}
                <Link href={contactConfig.privacyPath}>
                  политике конфиденциальности
                </Link>
              </span>
            </label>
            <span id="consent-error" className="form-error">
              {errors.consent}
            </span>
          </div>

          <button
            className="button contact-form__submit"
            type="submit"
            disabled={status === "submitting"}
          >
            {status === "submitting" ? "Отправляем" : "Оставить заявку"}
            <Send aria-hidden="true" size={18} strokeWidth={1.8} />
          </button>

          <div
            className="contact-form__status"
            data-status={status}
            aria-live="polite"
          >
            {statusMessage ? <p>{statusMessage}</p> : null}
          </div>
        </form>
      </div>
    </section>
  );
}
