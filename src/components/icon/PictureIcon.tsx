import { picture, pictureGray } from "../../assets";
import Base, { type IconProps } from "./Base";

interface PictureIconProps extends IconProps {
  color?: "black" | "gray";
}

export default function PictureIcon({
  color = "black",
  ...imgAttributes
}: PictureIconProps) {
  if (color === "gray") {
    return <Base src={pictureGray} {...imgAttributes} />;
  }

  // color === 'black'
  return <Base src={picture} {...imgAttributes} />;
}
