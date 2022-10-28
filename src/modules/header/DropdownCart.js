import React from "react";
import { v4 } from "uuid";
import ProductCartItem from "../../components/product/ProductCartItem";
const DropdownCart = React.forwardRef((props, ref) => {
  const { data, className, ...other } = props;

  return (
    <div
      {...other}
      ref={ref}
      className="absolute right-0 top-full bg-white border border-lightGray shadow-lg w-[450px] min-h-[90px] flex flex-col items-center justify-center rounded-[3px]"
    >
      {data.length > 0 ? (
        data.map((item) => (
          <ProductCartItem data={item} key={v4()}></ProductCartItem>
        ))
      ) : (
        <span>Your cart is currently empty</span>
      )}
    </div>
  );
});

export default DropdownCart;
