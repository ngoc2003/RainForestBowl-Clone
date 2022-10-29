import React from "react";
import { useSelector } from "react-redux";
import { cartFilterSelector } from "../../../redux/selector";
import ProductItem from "../../../components/product/ProductItem";
import { v4 } from "uuid";
import Line from "../../../components/Line";
import Faq from "../Faq";
const ListProduct = () => {
  const data = useSelector(cartFilterSelector);
  return (
    <div className='col-span-4'>
      <div className="grid gap-8 grid-cols-4 ">
        {data.map((item) => (
          <ProductItem data={item} key={v4()}></ProductItem>
        ))}
      </div>
      <Line></Line>
      <Faq></Faq>
    </div>
  );
};

export default ListProduct;
