import React, { useRef, useState } from "react";
import { v4 } from "uuid";
import Button from "../components/button/Button";
import InforForm from "../modules/checkout/InforForm";
import ExpressPaymentData from "../data/ExpressPayment";

const CheckoutInfoPage = () => {
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
