import React from "react";
import ProductItem from "./ProductItem";
const ProductList = ({ data }) => {
  return (
    <div className="responsiveItem">
      {data.map((product) => (
        <ProductItem data={product}></ProductItem>
      ))}
    </div>
  );
};

export default ProductList;
