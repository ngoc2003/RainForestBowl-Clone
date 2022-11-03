import React, {useState, useRef} from "react";
import { Outlet } from "react-router-dom";
import { withErrorBoundary } from "react-error-boundary";
import Error from "../components/Error";
import Navi from "../modules/checkout/Navi";
import ExpressPaymentData from "../data/ExpressPayment";
import { useSelector } from "react-redux";
import { cartUserSelector } from "../redux/selector";
import Cart from "../icons/Cart";
import Total from "../modules/cartpage/Total";

const LayoutPayment = () => {
  const productListRef = useRef();
  const [showList, setShowList] = useState(false);
  const data = useSelector(cartUserSelector);
  return (
    <div className="text-[#000] ">
      <Navi></Navi>
      <div
        className="flex gap-3 py-8 text-sm border-b cursor-pointer text-blue wrapper border-b-lightGray  min-[900px]:hidden "
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
          className="absolute min-[900px]:static left-0 right-0 bottom-0 z-20 flex-1 py-10 duration-300 bg-white border-r border-r-lightGray wrapper"
        >
      <Outlet></Outlet>
        </div>
      </div>

    </div>

  );
};

export default withErrorBoundary(LayoutPayment, { FallbackComponent: Error });
