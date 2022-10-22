import React from "react";
import SearchIcon from "../../icons/SearchIcon";

const Search = ({ placeholder = "Search", className }) => {
  return (
    <div className={`z-10 text-font flex gap-x-2 items-center ${className} h-full`}>
      <input
        type="text"
        placeholder={placeholder}
        className={`bg-transparent placeholder:text-nude text-right outline-none `}
      />
      <SearchIcon></SearchIcon>
    </div>
  );
};

export default Search;
