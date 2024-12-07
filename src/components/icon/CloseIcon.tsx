import { close } from "../../assets";
import Base, { type IconProps } from "./Base";

interface CloseIconProps extends IconProps {}

export default function CloseIcon(props: CloseIconProps) {
  return <Base src={close} {...props} />;
}
