import React, { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { v4 } from "uuid";
import Button from "../components/button/Button";
import Search from "../components/search/Search";
import InforForm from "../modules/checkout/InforForm";
import ExpressPaymentData from "../data/ExpressPayment";
import DropdownCart from "../modules/header/DropdownCart";
import { useSelector } from "react-redux";
import { cartUserSelector } from "../redux/selector";
import ProductCartItem from "../components/product/ProductCartItem";
import Total from "../modules/cartpage/Total";
import Navi from "../modules/checkout/Navi";
import Cart from "../icons/Cart";

const CheckoutPage = () => {
  ExpressPaymentData.map((item) => console.log(item));
  const productListRef = useRef();
  const [showList, setShowList] = useState(false);
  const data = useSelector(cartUserSelector);
  return (
    <div className="text-[#000] ">
      <Navi></Navi>
      <div
        className="flex gap-3 py-8 text-sm border-b cursor-pointer text-blue wrapper border-b-lightGray"
        onClick={() => setShowList(!showList)}
      >
        <Cart></Cart>
        {showList ? "Hide" : "Show"} order summary
      </div>
      <div className="  text-[#000] tracking-wide flex flex-col min-[900px]:flex-row-reverse relative">
        <div
          className="flex-1  wrapper bg-[rgb(249,249,249)] py-8"
          ref={productListRef}
        >
          {data.map((item) => (
            <div
              className={`flex items-center justify-between w-full pr-2 my-3 gap-x-3 `}
            >
              <div className="flex items-center flex-1 gap-3">
                <div className="relative border rounded-md border-lightGray">
                  <img src={item.image} className="h-16 rounded-md" alt="" />
                  <span className="bg-[#000] bg-opacity-60 absolute top-0 right-0 w-5 h-5 text-center rounded-full text-white text-sm translate-x-1/2 -translate-y-1/2">
                    {item.amount}
                  </span>
                </div>
                <div>
                  <h4 className="capitalize">{item.title}</h4>
                  <p className="text-xs">{item.type.name}</p>
                </div>
              </div>
              <h4 className="">${item.type.cost}</h4>
            </div>
          ))}

          <Total></Total>
        </div>
        <div
          style={{
            top: `${
              showList ? productListRef.current.offsetHeight : 0
            }px `,
          }}
          className="absolute left-0 right-0 z-20 flex-1 py-10 duration-300 bg-white border-r border-r-lightGray wrapper"
        >
          {/* Progress */}

          {/* Express */}
          <div className="relative border border-lightGray rounded-[3px] mb-8">
            <span className="absolute px-3 text-sm -translate-x-1/2 bg-white -top-3 left-1/2">
              Express checkout
            </span>
            <div className="flex gap-3 p-5 ">
              {ExpressPaymentData.map((item) => (
                <Button key={v4()} className="flex-1 " background={item.color}>
                  <img
                    src={item.image}
                    className="h-full max-h-[24px]"
                    alt=""
                  />
                </Button>
              ))}
            </div>
          </div>
          <div className="relative mb-8 border-b border-b-lightGray">
            <span className="absolute px-3 text-sm -translate-x-1/2 bg-white -top-3 left-1/2">
              OR
            </span>
          </div>
          <InforForm></InforForm>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
