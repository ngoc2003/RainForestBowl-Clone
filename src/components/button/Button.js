import React from "react";
import { Link } from "react-router-dom";

const Button = ({
  children = "text",
  primary = false,
  secondary = false,
  type = "text",
  creative = false,
  className,
  yellow = false,
  fluid = false,
  outline = false,
  to = "",
  onClick = () => {},
}) => {
  const btn = (
    <button
      onClick={onClick}
      type={type}
      style={{ fontSize: "14px", width: `${fluid ? "100%" : "auto"}` }}
      className={`hover:bg-opacity-90  capitalize rounded-[3px] text-white py-2  font-bold flex items-center justify-center gap-x-2 duration-200  ${
        primary
          ? "bg-primary"
          : secondary
          ? "bg-secondary"
          : yellow
          ? "bg-yellow text-font"
          : outline
          ? "text-font border-font border font-medium"
          : "bg-gray"
      }  ${creative ? "hover:px-4 px-5 origin-center" : "px-4"} ${className}`}
    >
      {children}
    </button>
  );
  return <>{to ? <Link to={to}>{btn}</Link> : btn}</>;
};

export default Button;
