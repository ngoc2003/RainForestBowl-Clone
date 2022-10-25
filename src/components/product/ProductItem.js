import React from "react";
import { Link } from "react-router-dom";
import PackList from "./pack/PackList";

const ProductItem = ({ data }) => {
  return (
    <Link to={`./product/${data.id}`} className="h-[380px] flex flex-col">
      <img src={data.image} alt="" />
      <h4 className="capitalize">{data.title}</h4>
      <PackList data={data.type} className="flex-1"></PackList>
    </Link>
  );
};

export default ProductItem;
