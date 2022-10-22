import React from "react";

const TabItem = ({ children, className, active = false, ...props }) => {
  // if ()
  return (
    <div
      {...props}
      className={`px-5 py-3  capitalize duration-300 cursor-pointer font-bold border rounded-md  border-primary text-base ${
        active ? "text-white bg-primary " : "text-primary bg-transparent"
      }`}
    >
      {children}
    </div>
  );
};

export default TabItem;
