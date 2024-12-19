import { ellipse } from "../../assets";
import Base, { type IconProps } from "./Base";

interface EllipseIconProps extends IconProps {}

export default function EllipseIcon(props: EllipseIconProps) {
  return <Base src={ellipse} {...props} />;
}
