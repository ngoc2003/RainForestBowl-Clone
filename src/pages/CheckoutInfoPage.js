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

const CheckoutInfoPage = () => {
  ExpressPaymentData.map((item) => console.log(item));
  return (
    <>
      <div className="relative border border-lightGray rounded-[3px] mb-8">
        <span className="absolute px-3 text-sm -translate-x-1/2 bg-white -top-3 left-1/2">
          Express checkout
        </span>
        <div className="flex gap-3 p-5 ">
          {ExpressPaymentData.map((item) => (
            <Button key={v4()} className="flex-1 " background={item.color}>
              <img src={item.image} className="h-full max-h-[24px]" alt="" />
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
    </>
  );
};

export default CheckoutInfoPage;
