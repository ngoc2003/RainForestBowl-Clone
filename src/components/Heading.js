import React from "react";

const Heading = ({ children, center = true, className }) => {
  return (
    <h4
      className={`text-2xl lg:text-3xl xl:text-4xl capitalize font-semibold mb-5  xl:mb-10 text-font ${
        center && "text-center"
      } ${className}`}
    >
      {children}
    </h4>
  );
};

export default Heading;
