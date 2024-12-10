import {
  ChangeEventHandler,
  InputHTMLAttributes,
  KeyboardEventHandler,
  useState,
} from "react";
import { twMerge } from "tailwind-merge";

import { Icon } from "../icon";

interface SearchBarProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  containerClassName?: string;
  /* 검색어가 변경될 시 실행될 콜백 함수 */
  onChange?: (search?: string) => void;
  /* 검색 시 실행될 콜백 함수 */
  onSearch?: (search?: string) => void;
}

export default function SearchBar({
  containerClassName,
  className,
  onSearch,
  onChange,
  ...inputAttributes
}: SearchBarProps) {
  const [search, setSearch] = useState("");

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    if (onChange) {
      onChange(e.target.value);
    }
    setSearch(e.target.value);
  };

  const handleKeyDown: KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key.toLowerCase() === "enter") {
      handleSearch();
    }
  };

  const handleSearch = () => {
    if (onSearch) {
      onSearch(search);
    }
  };

  return (
    <div
      className={twMerge(
        "relative box-border h-10 rounded-lg",
        containerClassName,
      )}
    >
      <Icon.SearchIcon
        color="gray"
        size={24}
        className={twMerge("absolute left-2 top-2", "hover:cursor-pointer")}
        onClick={handleSearch}
      />
      <input
        className={twMerge(
          "inline-block h-full w-full rounded-lg bg-[#EEEEEE] p-2 pl-10 text-sm font-medium leading-[140%] text-black outline-none",
          "placeholder:text-[#9E9E9E]",
          className,
        )}
        value={search}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        {...inputAttributes}
      />
    </div>
  );
}
