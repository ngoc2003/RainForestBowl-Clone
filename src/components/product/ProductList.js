import React from "react";
import ProductItem from "./ProductItem";
const ProductList = ({ data }) => {
  return (
    <div className="flex gap-5 pb-5 overflow-y-scroll xs:grid xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 flex-nowrap xs:overflow-hidden ">
      {data.map((product) => (
        <ProductItem data={product}></ProductItem>
      ))}
    </div>
  );
};

export default ProductList;
