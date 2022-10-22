import React from "react";

const TabList = ({ children }) => {
  return (
    <div className="flex justify-between mb-5">
      {children}
    </div>
  );
};

export default TabList;
