import { moreBlack, moreGray, moreOrange, moreWhite } from "../../assets";
import Base, { type IconProps } from "./Base";

interface MoreIconProps extends IconProps {
  color?: "black" | "gray" | "white" | "orange";
}

export default function MoreIcon({
  color = "black",
  ...imgAttributes
}: MoreIconProps) {
  if (color === "gray") {
    return <Base src={moreGray} {...imgAttributes} />;
  }

  if (color === "white") {
    return <Base src={moreWhite} {...imgAttributes} />;
  }

  if (color === "orange") {
    return <Base src={moreOrange} {...imgAttributes} />;
  }

  // color === 'black'
  return <Base src={moreBlack} {...imgAttributes} />;
}
