import React from "react";
import { useSelector } from "react-redux";
import { cartFilterSelector } from "../../../redux/selector";
import ProductItem from "../../../components/product/ProductItem";
import { v4 } from "uuid";
const ListProduct = () => {
  const data = useSelector(cartFilterSelector);
  return (
    <div className="grid gap-8 grid-cols-4 col-span-4">
      {data.map((item) => (
          <ProductItem data={item} key={v4()}></ProductItem>
      ))}
    </div>
  );
};

export default ListProduct;
