import React from "react";
import { useSelector } from "react-redux";
import { cartUserSelector } from "../../redux/selector";

const Total = () => {
  const cartList = useSelector(cartUserSelector);
  const shippingCost = 5;
  const price = cartList
    .reduce(
      (accumulator, item) => accumulator + item.amount * item.type.cost,
      0
    )
    .toFixed(2);
  return (
    <div className="w-full my-5 border-t border-t-lightGray ">
      <div className="flex justify-between mt-2">
        <span>Subtotal:</span>
        <span className="font-semibold">${price}</span>
      </div>
      <div className="flex justify-between mt-2">
        <span>Est.shipping:</span>
        <span className="font-semibold">${shippingCost}</span>
      </div>
      <div className="flex justify-between mt-2 text-xl font-semibold uppercase text-red">
        <span>Est.Total:</span>
        <span>${price + shippingCost}</span>
      </div>
    </div>
  );
};

export default Total;
