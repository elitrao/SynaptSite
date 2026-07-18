export type ContactMailPayload = {
  name: string;
  email: string;
  phone: string;
  idea: string;
};

export function buildContactMailtoHref(
  recipientEmail: string,
  payload: ContactMailPayload,
) {
  const subject = `Заявка с сайта Synapt: ${payload.name}`;
  const body = [
    `Имя: ${payload.name}`,
    `Email: ${payload.email || "не указан"}`,
    `Телефон: ${payload.phone || "не указан"}`,
    "",
    "Задача:",
    payload.idea,
  ].join("\n");

  return `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
