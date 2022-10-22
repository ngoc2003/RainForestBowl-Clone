import React from "react";
import ProductItem from "./ProductItem";
const ProductList = ({ data }) => {
  return (
    <div className="grid grid-cols-5 gap-5">
      {data.map((product) => (
        <ProductItem data={product}></ProductItem>
      ))}
    </div>
  );
};

export default ProductList;
