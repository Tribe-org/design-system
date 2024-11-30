import { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ children, ...buttonAttributes }: ButtonProps) {
  return <button {...buttonAttributes}>{children}</button>;
}
