import { ImgHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

import { Size } from "../../types";

interface ProfileImageProps extends ImgHTMLAttributes<HTMLImageElement> {
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

export default function ProfileImage({
  size = "medium",
  className,
  ...imgAttributes
}: ProfileImageProps) {
  return (
    <img
      className={twMerge(
        `${getWidth(size)} ${getHeight(size)} rounded-full border-none bg-[#E0E0E0] object-cover`,
        className,
      )}
      alt=""
      {...imgAttributes}
    />
  );
}
