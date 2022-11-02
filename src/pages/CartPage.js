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
const CartPage = () => {
  const cartList = useSelector(cartUserSelector);
  const [code, setCode] = useState("");
  const handleSetCode = useCallback((e) => {
    setCode(e.target.value);
  }, []);
  function handleApplyCode() {
    
  }

  return (
    <ScrollToTop className="grid grid-cols-4 gap-8 py-8 wrapper">
      <div className="col-span-3 mb-5">
        <h4 className={"text-xl font-semibold "} center={false}>
          Your Cart ({cartList.length} items)
        </h4>
        <Thanks number={cartList.length}></Thanks>
        <div className="flex flex-col w-full gap-y-5">
          {cartList.map((item) => (
            <ProductCartItem
              data={item}
              key={v4()}
              className="w-full"
            ></ProductCartItem>
          ))}
        </div>
      </div>
      <div>
        <div className="px-2 py-4 border rounded-[3px] border-lightGray">
          <div className="flex justify-between gap-1">
            <div className="p-2 border rounded-[3px] border-gray">
              <Search
                icon={false}
                onChange={handleSetCode}
                value={code}
                placeholder={"Discount Code"}
                right={false}
              ></Search>
            </div>
            <Button className={"flex-1"} primary onClick={handleApplyCode}>
              Apply
            </Button>
          </div>
          <Total></Total>

          <Button yellow fluid>
            Proceed to checkout
          </Button>
        </div>
      </div>
    </ScrollToTop>
  );
};

export default CartPage;
