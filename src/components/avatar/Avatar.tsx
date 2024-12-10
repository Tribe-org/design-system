import { ImgHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

import { Size } from "../../types";

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  size?: Size;
}

const getWidth = (size: Size) => {
  switch (size) {
    case "large":
      return "w-[36px]";
    case "medium":
      return "w-[32px]";
    case "small":
      return "w-[24px]";
    case "xsmall":
      return "w-[18px]";
    default:
      // medium
      return "w-[32px]";
  }
};

const getHeight = (size: Size) => {
  switch (size) {
    case "large":
      return "h-[36px]";
    case "medium":
      return "h-[32px]";
    case "small":
      return "h-[24px]";
    case "xsmall":
      return "h-[18px]";
    default:
      // medium
      return "h-[32px]";
  }
};

export default function Avatar({
  size = "medium",
  className,
  alt = "",
  ...imgAttributes
}: AvatarProps) {
  return (
    <div
      className={`${getWidth(size)} ${getHeight(size)} inline-block overflow-hidden rounded-full border-none bg-[#E0E0E0]`}
    >
      <img
        className={twMerge(`h-full w-full object-cover`, className)}
        alt={alt}
        {...imgAttributes}
      />
    </div>
  );
}
