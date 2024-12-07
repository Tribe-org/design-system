import { info, infoGray } from "../../assets";
import Base, { type IconProps } from "./Base";

interface InfoIconProps extends IconProps {
  color?: "black" | "gray";
}

export default function InfoIcon({
  color = "black",
  ...imgAttributes
}: InfoIconProps) {
  if (color === "gray") {
    return <Base src={infoGray} {...imgAttributes} />;
  }

  // color === 'black'
  return <Base src={info} {...imgAttributes} />;
}
