import React from "react";
import Button from "../../components/button/Button";
import Cart from "../../icons/Cart";

const CartButton = ({ className, onClick = () => {} }) => {
  return (
    <Button primary onClick={onClick}>
      <div className="relative">
        <Cart></Cart>
        <span
          className={`bg-nude w-[14px] h-[14px] rounded-full absolute bottom-0 -right-1 text-[10px] flex items-center justify-center ${className}`}
        >
          0
        </span>
      </div>
      Cart
    </Button>
  );
};

export default CartButton;
