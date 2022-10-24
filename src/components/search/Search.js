import React from "react";
import SearchIcon from "../../icons/SearchIcon";

const Search = ({ placeholder = "Search", className, icon = true, right=true }) => {
  return (
    <div
      className={`z-10 text-font flex gap-x-2 items-center ${className} h-full`}
    >
      <input
        type="text"
        placeholder={placeholder}
        className={`bg-transparent placeholder:text-nude ${right && 'text-right'} outline-none `}
      />
      {icon && <SearchIcon></SearchIcon>}
    </div>
  );
};

export default Search;
