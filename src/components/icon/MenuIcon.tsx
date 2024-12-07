import { menu } from "../../assets";
import Base, { type IconProps } from "./Base";

interface MenuIconProps extends IconProps {}

export default function MenuIcon(props: MenuIconProps) {
  return <Base src={menu} {...props} />;
}
