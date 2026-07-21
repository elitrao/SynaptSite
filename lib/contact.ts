export type ContactRequestPayload = {
  phone: string;
  consent: boolean;
  website?: string;
};

export type ContactResponse = {
  ok: boolean;
  message?: string;
  code?: "VALIDATION_ERROR" | "CONFIGURATION_ERROR" | "DELIVERY_ERROR";
};

export function normalizePhone(phone: string) {
  return phone.replace(/[^\d+]/g, "").replace(/(?!^)\+/g, "");
}

export function isValidPhone(phone: string) {
  const digits = phone.replace(/\D/g, "");
  return digits.length >= 10 && digits.length <= 15;
}
