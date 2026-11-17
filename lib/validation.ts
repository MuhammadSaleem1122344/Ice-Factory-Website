export type Errors<T> = Partial<Record<keyof T, string>>;

const phoneRe = /^(\+92|0092|0)?3\d{9}$|^(\+92|0)?\d{2,3}\d{6,8}$/;
const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export const isPhone = (v: string) => phoneRe.test(v.replace(/[\s-]/g, ""));
export const isEmail = (v: string) => emailRe.test(v.trim());

export interface ContactValues extends Record<string, string> {
  name: string; phone: string; email: string; message: string;
}

export function validateContact(v: ContactValues): Errors<ContactValues> {
  const e: Errors<ContactValues> = {};
  if (v.name.trim().length < 2) e.name = "Please enter your full name.";
  if (!isPhone(v.phone)) e.phone = "Enter a valid phone number (e.g. 0300 1234567).";
  if (!isEmail(v.email)) e.email = "Enter a valid email address.";
  if (v.message.trim().length < 10) e.message = "Message should be at least 10 characters.";
  return e;
}

export interface QuoteValues extends Record<string, string> {
  name: string; business: string; phone: string; product: string;
  quantity: string; location: string; message: string;
}

export function validateQuote(v: QuoteValues): Errors<QuoteValues> {
  const e: Errors<QuoteValues> = {};
  if (v.name.trim().length < 2) e.name = "Please enter your name.";
  if (v.business.trim().length < 2) e.business = "Please enter your business name.";
  if (!isPhone(v.phone)) e.phone = "Enter a valid phone number.";
  if (!v.product) e.product = "Please select a product.";
  const q = Number(v.quantity);
  if (!v.quantity || Number.isNaN(q) || q <= 0) e.quantity = "Enter a quantity greater than 0.";
  if (v.location.trim().length < 3) e.location = "Please enter a delivery location.";
  return e;
}
