import React from "react";
import { v4 } from "uuid";
import Button from "../../components/button/Button";
import ProductCartItem from "../../components/product/ProductCartItem";
const DropdownCart = React.forwardRef((props, ref) => {
  const { data, className, ...other } = props;
  const shippingCost = 5;
  const price = data
    .reduce(
      (accumulator, item) => accumulator + item.amount * item.type.cost,
      0
    )
    .toFixed(2);
  return (
    <div
      {...other}
      ref={ref}
      className="absolute right-0 top-full bg-white border border-lightGray shadow-lg w-[450px] min-h-[90px] flex flex-col items-center justify-center rounded-[3px] p-5 z-20"
    >
      {data.length > 0 ? (
        <>
          <div className='max-h-[200px] overflow-y-auto'>
            {data.map((item) => (
              <ProductCartItem data={item} key={v4()}></ProductCartItem>
            ))}
          </div>
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
          <div className="flex w-full gap-x-3">
            <Button fluid className={"text-lg"} outline>
              View my cart
            </Button>
            <Button fluid className={"text-lg"} primary>
              Check out now
            </Button>
          </div>
        </>
      ) : (
        <span>Your cart is currently empty</span>
      )}
    </div>
  );
});

export default DropdownCart;
