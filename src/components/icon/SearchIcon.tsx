import { search, searchGray } from "../../assets";
import Base, { type IconProps } from "./Base";

interface SearchIconProps extends IconProps {
  color?: "black" | "gray";
}

export default function SearchIcon({
  color = "black",
  ...imgAttributes
}: SearchIconProps) {
  if (color === "gray") {
    return <Base src={searchGray} {...imgAttributes} />;
  }

  // color === 'black'
  return <Base src={search} {...imgAttributes} />;
}
