import React from "react";

const TabList = ({ children, className = "" }) => {
  return (
    <div className={`flex mb-5 ${className} gap-x-5 overflow-x-auto pb-5`}>{children}</div>
  );
};

export default TabList;
