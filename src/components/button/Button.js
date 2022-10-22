import React from "react";

const Button = ({
  children = "text",
  primary = false,
  secondary = false,
  type = "text",
  creative = false,
  className,
  // rounded = false,
  onClick = () => {},
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`rounded-[3px] text-white py-2 text-sm font-bold flex items-center justify-center gap-x-2 duration-200 ${
        primary && "bg-primary"
      } ${secondary && "bg-secondary"}  ${
        creative ? "hover:px-3 px-5 origin-center" : "px-3"
      } ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
