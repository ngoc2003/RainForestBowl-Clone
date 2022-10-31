import React from "react";
import ProductItem from "./ProductItem";
import PropTypes from "prop-types";
import { v4 } from "uuid";

const ProductList = ({ data }) => {
  return (
    <div className="responsiveItem">
      {data.map((product) => (
        <ProductItem data={product} key={v4()}></ProductItem>
      ))}
    </div>
  );
};

ProductList.propTypes  = {
  data: PropTypes.array.isRequired
}
export default ProductList;
