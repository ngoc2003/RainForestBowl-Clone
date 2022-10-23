import React from "react";

const TabList = ({ children, className = "" }) => {
  return (
    <div className={`flex justify-between mb-5 ${className}`}>{children}</div>
  );
};

export default TabList;
