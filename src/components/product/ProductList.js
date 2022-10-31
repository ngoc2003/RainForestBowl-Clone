import React from "react";
import ProductItem from "./ProductItem";
import PropTypes from "prop-types";

const ProductList = ({ data }) => {
  return (
    <div className="responsiveItem">
      {data.map((product) => (
        <ProductItem data={product}></ProductItem>
      ))}
    </div>
  );
};

ProductList.propTypes  = {
  data: PropTypes.array.isRequired
}
export default ProductList;
