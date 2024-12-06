import { ImgHTMLAttributes } from "react";

export interface IconProps extends ImgHTMLAttributes<HTMLImageElement> {
  size?: number;
  alt?: string;
}

export default function Base({
  src,
  size = 24,
  alt = "",
  ...imgAttributes
}: IconProps) {
  return (
    <img src={src} width={size} height={size} alt={alt} {...imgAttributes} />
  );
}
