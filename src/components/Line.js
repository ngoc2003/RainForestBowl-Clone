import React from "react";

const Line = ({ className = "" }) => {
  return <div className={`border-b border-lightGray my-8 ${className}`}></div>;
};

export default Line;
