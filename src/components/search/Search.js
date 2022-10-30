import React from "react";
import SearchIcon from "../../icons/SearchIcon";

const Search = ({
  placeholder = "Search",
  className,
  icon = true,
  right = true,
  onChange = () => {},
  onBlur = () => {},
  value,
}) => {
  return (
    <div
      className={`${
        icon && "z-10"
      }   text-font flex gap-x-2 items-center ${className} h-full`}
    >
        <input
          type="text"
          onBlur={onBlur}
          onChange={onChange}
          defaultValue={""}
          value={value}
          placeholder={placeholder}
          className={`bg-transparent placeholder:text-nude ${
            right && "text-right"
          } outline-none w-full`}
        />
      {icon && <SearchIcon></SearchIcon>}
    </div>
  );
};

export default Search;
