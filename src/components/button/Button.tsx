import { ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

import type { Color, Size } from "../../types";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: Color;
  size?: Size;
}

const getColor = (color?: Color) => {
  switch (color) {
    case "primary":
      return "text-white";
    case "secondary":
      return "";
    case "black":
      return "text-white";
    case "gray":
      return "text-tribe-gray-700";
    case "error":
      return "text-white";
    default:
      return "text-white";
  }
};

const getBgColor = (color?: Color) => {
  switch (color) {
    case "primary":
      return "bg-tribe-primary-600";
    case "secondary":
      return "";
    case "black":
      return "bg-tribe-gray-900";
    case "gray":
      return "bg-tribe-gray-200";
    case "error":
      return "bg-tribe-error";
    default:
      return "";
  }
};

const getHeight = (size?: Size) => {
  switch (size) {
    case "large":
      return "h-[56px]";
    case "medium":
      return "h-[48px]";
    default:
      return "h-[48px]";
  }
};

export default function Button({
  color,
  size,
  children,
  className,
  ...buttonAttributes
}: ButtonProps) {
  const textColor = getColor(color);
  const bgColor = getBgColor(color);
  const height = getHeight(size);

  return (
    <button
      className={twMerge(
        "inline-block w-full rounded-xl text-base font-semibold leading-[22.4px]",
        height,
        textColor,
        bgColor,
        className,
      )}
      {...buttonAttributes}
    >
      {children}
    </button>
  );
}
