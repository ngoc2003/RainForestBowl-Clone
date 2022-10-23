import React from "react";
import PackList from "./pack/PackList";

const ProductItem = ({ data }) => {
  return (
    <div className="h-[380px] flex flex-col">
      <img src={data.image} alt="" />
      <h4 className="capitalize">{data.title}</h4>
      <PackList data={data.type} className="flex-1"></PackList>
    </div>
  );
};

export default ProductItem;
