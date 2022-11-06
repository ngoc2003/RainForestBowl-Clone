import React from "react";
import { useSelector } from "react-redux";
import DiscountData from "../../data/Discount";
import { cartUserSelector } from "../../redux/selector";

const Total = () => {
  const cartList = useSelector(cartUserSelector);
  const shippingCost = 20;
  const price = cartList
    .reduce(
      (accumulator, item) => accumulator + item.amount * item.type.cost,
      0
    )
    .toFixed(2);
  const discount = DiscountData.sort((a, b) => b.min - a.min).find(
    (item) => item.min <= price
  ) ;
  console.log(discount)

  return (
    <div className="w-full my-5 border-t border-t-lightGray ">
      <div className="flex justify-between mt-2">
        <span>Subtotal:</span>
        <span className="font-semibold">${price}</span>
      </div>
      {
        discount && (


      <div className="flex items-center justify-between mt-2 text-red ">
        <span>
          Discount saving:{" "}
          <span className="bg-lightNude ml-5 w-4 h-1 text-[10px] py-1 pr-2 text-[#000] relative rounded-r-xl ">
            {discount.code.toUpperCase()}
            <div className="w-0 h-0 inline-block absolute border-transparent border-r-lightNude top-0 bottom-0 left-0 -translate-x-full  border-t-[10px] border-b-[10px] border-r-[20px] "></div>
          </span>
        </span>
        <span>${(price * discount.discount).toFixed(2)}</span>
      </div>
      )
      }
      <div className="flex justify-between mt-2">
        <span>Est.shipping:</span>
        <span className="font-semibold">${shippingCost}</span>
      </div>
      <div className="flex justify-between mt-2 text-xl font-semibold uppercase text-red">
        <span>Est.Total:</span>
        <span>${ discount ? (price + shippingCost - price * discount.discount).toFixed(2) : price + shippingCost}</span>
      </div>
    </div>
  );
};

export default Total;
