import React from "react";

const PackItem = ({ pack, active = "", onClick = () => {} }) => {
  return (
    <div
      onClick={onClick}
      className={`border mt-1 cursor-pointer font-semibold  rounded-md px-2 duration-300  text-xs xl:text-sm mr-1 xl:mr-2 ${
        active === pack.name
          ? "bg-primary text-white"
          : "text-primary border-primary"
      }`}
    >
      {pack.name}
    </div>
  );
};

export default PackItem;
