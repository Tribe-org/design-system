import { comment } from "../../assets";
import Base, { type IconProps } from "./Base";

interface CommentIconProps extends IconProps {}

export default function CommentIcon({ ...imgAttributes }: CommentIconProps) {
  return <Base src={comment} {...imgAttributes} />;
}
