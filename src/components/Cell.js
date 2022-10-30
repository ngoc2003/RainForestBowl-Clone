import React from "react";

const Cell = ({className}) => {
  return <div className={`border-r border-dashed border-r-borderColor ${className}`}></div>;
};

export default Cell;
