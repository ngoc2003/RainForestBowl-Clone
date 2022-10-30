import React from "react";

const TabItem = ({
  children,
  className,
  active = false,
  image = '',
  ...props
}) => {
  // if ()
  return (
    <div
      {...props}
      style={{backgroundImage: `url(${image})`}}
      className={`px-5 py-3 flex items-center justify-center  capitalize duration-100 cursor-pointer font-bold border rounded-md  border-primary text-sm  xl:text-base  whitespace-nowrap ${
        active ? image?'outline outline-[2px] outline-font': "text-white bg-primary " : "text-primary bg-transparent"
      } ${
        image
          ? `bg-cover bg-center bg-no-repeat`
          : ""
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default TabItem;
