import React, { useCallback, useState } from "react";
import { useSelector } from "react-redux";
import { v4 } from "uuid";
import ProductCartItem from "../components/product/ProductCartItem";
import Search from "../components/search/Search";
import Thanks from "../modules/cartpage/Thanks";
import { cartUserSelector } from "../redux/selector";
import ScrollToTop from "../utils/ScrollToTop";
import Button from "../components/button/Button";
import Total from "../modules/cartpage/Total";
import { Images } from "../images/Images";
const CartPage = () => {
  const cartList = useSelector(cartUserSelector);
  return (
    <ScrollToTop className="flex flex-col gap-8 py-8 lg:grid lg:grid-cols-4 wrapper">
      <div className="col-span-2 mb-5 xxl:col-span-3">
        <h4 className={"text-xl font-semibold "} center={false}>
          Your Cart ({cartList.length} items)
        </h4>
        <Thanks number={cartList.length}></Thanks>
        <div className="flex flex-col w-full ">
          {cartList.map((item) => (
            <ProductCartItem
              data={item}
              key={v4()}
              className="w-full py-5 border-b border-b-borderColor"
            ></ProductCartItem>
          ))}
        </div>
      </div>
      <div className="col-span-2 xxl:col-span-1 ">
        <div className="px-4 py-5 border border-lightGray">
          <Total></Total>

          <Button yellow fluid to='/checkout/information'>
            Proceed to checkout
          </Button>
          <div className="flex flex-col gap-3 mt-3">
            <p>Payment Accepted</p>
            <img src={Images.accepted} alt="" className="w-full max-w-[400px]" />
            <div className="border-b border-b-lightGray"></div>
            <p>Payment Security</p>
            <img src={Images.security} alt="" className="w-full max-w-[400px]" />
          </div>
        </div>
      </div>
    </ScrollToTop>
  );
};

export default CartPage;
