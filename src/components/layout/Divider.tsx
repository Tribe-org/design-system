import { HTMLAttributes } from "react";

import { Size } from "../../types";

interface DividerProps extends HTMLAttributes<HTMLDivElement> {
  size?: Size;
}

const getHeight = (size: Size) => {
  if (size === "large") {
    return "h-[16px]";
  } else if (size === "medium") {
    return "h-[8px]";
  } else if (size === "small") {
    return "h-[1px]";
  } else {
    return "h-[8px]";
  }
};

export default function Divider({
  size = "medium",
  className,
  ...props
}: DividerProps) {
  const height = getHeight(size);

  return (
    <div
      className={`w-screen max-w-[400px] bg-[#E0E0E0] ${height} ${className}`}
      {...props}
    />
  );
}
