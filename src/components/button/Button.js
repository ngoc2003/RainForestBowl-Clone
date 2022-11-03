import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Button = ({
  children = "text",
  primary = false,
  secondary = false,
  type = "text",
  creative = false,
  className,
  yellow = false,
  blue = false,
  fluid = false,
  outline = false,
  to = "",
  background = "gray",
  onClick = () => {},
  ...props
}) => {
  const btn = (
    <button
      {...props}
      onClick={onClick}
      type={type}
      style={{
        fontSize: "14px",
        width: `${fluid ? "100%" : "auto"}`,
        backgroundColor: `${background}`,
      }}
      className={`hover:bg-opacity-90  capitalize rounded-[3px] text-white py-2  font-bold flex items-center justify-center gap-x-2 duration-200  ${
        primary
          ? "bg-primary"
          : secondary
          ? "bg-secondary"
          : yellow
          ? "bg-yellow text-font"
          : outline
          ? "text-font border-font border font-medium bg-transparent"
          : blue
          ? "bg-blue"
          : ""
      }  ${creative ? "hover:px-4 px-5 origin-center" : "px-4"} ${className}`}
    >
      {children}
    </button>
  );
  return (
    <>
      {to ? (
        <Link to={to} style={{ width: `${fluid ? "100%" : "auto"}` }}>
          {btn}
        </Link>
      ) : (
        btn
      )}
    </>
  );
};

Button.propTypes = {
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  outline: PropTypes.bool,
  creative: PropTypes.bool,
  yellow: PropTypes.bool,
  fluid: PropTypes.bool,
  type: PropTypes.string,
  to: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
