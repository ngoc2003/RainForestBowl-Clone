import React from "react";

const Button = ({
  children = "text",
  primary = false,
  secondary = false,
  type = "text",
  creative = false,
  className,
  yellow = false,
  onClick = () => {},
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`hover:bg-opacity-90 capitalize rounded-[3px] text-white py-2 text-sm font-bold flex items-center justify-center gap-x-2 duration-200 ${
        primary && "bg-primary"
      } ${secondary && "bg-secondary"} ${yellow && "bg-yellow text-font"}  ${
        creative ? "hover:px-4 px-5 origin-center" : "px-4"
      } ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
