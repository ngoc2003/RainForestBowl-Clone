import React from "react";
import SearchIcon from "../../icons/SearchIcon";
import PropTypes from "prop-types";

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
Search.propTypes = {
  placeholder: PropTypes.string,
  icon: PropTypes.bool,
  right: PropTypes.bool,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  value: PropTypes.string,
};
export default Search;
