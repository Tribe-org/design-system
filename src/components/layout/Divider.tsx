import { Size } from "../../types";

interface DividerProps {
  size: Size;
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

export default function Divider({ size }: DividerProps) {
  // size에 따라서 h 변경 훅

  const height = getHeight(size);

  return <div className={`w-[236px] bg-gray-300 ${height}`}></div>;
}
