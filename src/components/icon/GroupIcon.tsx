import { group } from "../../assets";
import Base, { type IconProps } from "./Base";

interface GroupIconProps extends IconProps {}

export default function GroupIcon({ ...imgAttributes }: GroupIconProps) {
  return <Base src={group} {...imgAttributes} />;
}
