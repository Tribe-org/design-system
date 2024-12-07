import { reset, resetWhite } from "../../assets";
import Base, { type IconProps } from "./Base";

interface ResetIconProps extends IconProps {
  color?: "black" | "white";
}

export default function ResetIcon({ color, ...imgAttributes }: ResetIconProps) {
  if (color === "white") {
    return <Base src={resetWhite} {...imgAttributes} />;
  }

  // color === 'black'
  return <Base src={reset} {...imgAttributes} />;
}
