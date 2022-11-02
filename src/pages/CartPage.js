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
  const [code, setCode] = useState("");
  const handleSetCode = useCallback((e) => {
    setCode(e.target.value);
  }, []);
  function handleApplyCode() {}

  return (
    <ScrollToTop className="flex flex-col lg:grid lg:grid-cols-4 gap-8  py-8 wrapper">
      <div className="xxl:col-span-3 col-span-2 mb-5">
        <h4 className={"text-xl font-semibold "} center={false}>
          Your Cart ({cartList.length} items)
        </h4>
        <Thanks number={cartList.length}></Thanks>
        <div className="flex flex-col w-full ">
          {cartList.map((item) => (
            <ProductCartItem
              data={item}
              key={v4()}
              className="w-full border-b border-b-borderColor py-5"
            ></ProductCartItem>
          ))}
        </div>
      </div>
      <div className="col-span-2 xxl:col-span-1  ">
        <div className="border border-lightGray px-4 py-5">
          <Total></Total>

          <Button yellow fluid>
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
