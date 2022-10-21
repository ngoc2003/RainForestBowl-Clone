import React from "react";

const Button = ({ children = "text", primary = false, secondary = false, rounded = false }) => {
  return (
    <div>
      <button className={`text-white px-3 py-2 text-sm font-bold flex items-center justify-center gap-x-2 ${primary && 'bg-primary'} ${secondary && 'bg-secondary'} ${rounded &&'rounded-[5px]'}`}>{children}</button>
    </div>
  );
};

export default Button;
