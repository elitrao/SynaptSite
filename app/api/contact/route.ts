import { NextResponse } from "next/server";

import {
  isValidPhone,
  normalizePhone,
  type ContactRequestPayload,
  type ContactResponse,
} from "@/lib/contact";

export const runtime = "edge";

function json(body: ContactResponse, status: number) {
  return NextResponse.json(body, { status });
}

export async function POST(request: Request) {
  let payload: ContactRequestPayload;

  try {
    payload = (await request.json()) as ContactRequestPayload;
  } catch {
    return json(
      {
        ok: false,
        code: "VALIDATION_ERROR",
        message: "Не удалось прочитать данные формы.",
      },
      400,
    );
  }

  if (payload.website) {
    return json({ ok: true }, 200);
  }

  if (!payload.consent || !isValidPhone(payload.phone || "")) {
    return json(
      {
        ok: false,
        code: "VALIDATION_ERROR",
        message: "Проверьте номер телефона и согласие на обработку данных.",
      },
      400,
    );
  }

  const apiKey = process.env.RESEND_API_KEY?.trim();
  const recipient = process.env.CONTACT_TO_EMAIL?.trim();
  const sender = process.env.CONTACT_FROM_EMAIL?.trim();

  if (!apiKey || !recipient || !sender) {
    return json(
      {
        ok: false,
        code: "CONFIGURATION_ERROR",
        message: "Канал заявок ещё не подключён. Попробуйте связаться с нами позже.",
      },
      503,
    );
  }

  const phone = normalizePhone(payload.phone);
  const submittedAt = new Date().toISOString();

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        "User-Agent": "SynaptSite/1.0",
      },
      body: JSON.stringify({
        from: `Synapt <${sender}>`,
        to: [recipient],
        subject: "Новая заявка с сайта Synapt",
        text: [
          `Телефон: ${phone}`,
          `Время отправки: ${submittedAt}`,
          "Источник: форма на сайте Synapt",
        ].join("\n"),
      }),
    });

    if (!response.ok) {
      console.error("Resend delivery failed", response.status);
      return json(
        {
          ok: false,
          code: "DELIVERY_ERROR",
          message: "Не получилось отправить заявку. Попробуйте ещё раз.",
        },
        502,
      );
    }

    return json({ ok: true }, 200);
  } catch (error) {
    console.error("Contact delivery failed", error);
    return json(
      {
        ok: false,
        code: "DELIVERY_ERROR",
        message: "Сервис отправки временно недоступен. Попробуйте ещё раз.",
      },
      502,
    );
  }
}
