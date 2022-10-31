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
    <div className=' md:col-span-3 xxl:col-span-4'>
      <div className="grid min-[700px]:grid-cols-3 gap-5 xxl:grid-cols-4 grid-cols-2 ">
        {data.map((item) => (
          <ProductItem data={item} key={v4()}></ProductItem>
        ))}
      </div>
        {
          !data.length && <div className='flex items-center justify-center p-3 rounded-md bg-red bg-opacity-60'>No product is founded</div>
        }
      <Line></Line>
      <Faq></Faq>
    </div>
  );
};

export default ListProduct;
