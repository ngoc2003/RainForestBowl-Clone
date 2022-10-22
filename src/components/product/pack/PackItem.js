import React from "react";

const PackItem = ({ pack, active = false, onClick = () => {} }) => {
  return (
    <div
      onClick={onClick}
      className={`border  font-semibold  rounded-md px-2 duration-300  text-sm mr-2 ${
        active ? "bg-primary text-white" : "text-primary border-primary"
      }`}
    >
      {pack.name}
    </div>
  );
};

export default PackItem;
