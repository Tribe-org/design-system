import { next } from "../../assets";
import Base, { type IconProps } from "./Base";

interface NextIconProps extends IconProps {
  color?: "black";
}

export default function NextIcon({
  color = "black",
  ...imgAttributes
}: NextIconProps) {
  if (color === "black") {
    return <Base src={next} {...imgAttributes} />;
  }

  // TODO: Next 아이콘에 색상 타입이 더 추가되면 다른 이미지도 추가하도록 변경할 수도 있음
  return <Base src={next} {...imgAttributes} />;
}
