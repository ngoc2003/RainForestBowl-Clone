import React from "react";
import ProductItem from "./ProductItem";
const ProductList = ({ data }) => {
  return (
    <div className="grid grid-cols-4 gap-5 xl:grid-cols-5">
      {data.map((product) => (
        <ProductItem data={product}></ProductItem>
      ))}
    </div>
  );
};

export default ProductList;
