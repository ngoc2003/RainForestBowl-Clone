import React from "react";

const Heading = ({ children, center = true }) => {
  return (
    <h4
      className={`text-4xl capitalize font-semibold  mb-14 text-font ${
        center && "text-center"
      }`}
    >
      {children}
    </h4>
  );
};

export default Heading;
