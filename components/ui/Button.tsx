import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "outline" | "light" | "whatsapp";

const styles: Record<Variant, string> = {
  primary: "ui-button-primary",
  outline: "ui-button-outline",
  light: "ui-button-light",
  whatsapp: "ui-button-whatsapp",
};

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  external?: boolean;
  variant?: Variant;
  children: ReactNode;
}

export default function Button({ href, external, variant = "primary", className = "", children, ...rest }: Props) {
  const cls = `ui-button inline-flex items-center justify-center gap-2 ${styles[variant]} ${className}`;
  if (href && external) {
    return <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>{children}</a>;
  }
  if (href) return <Link href={href} className={cls}>{children}</Link>;
  return <button className={cls} {...rest}>{children}</button>;
}
