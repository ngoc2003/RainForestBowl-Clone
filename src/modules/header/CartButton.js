import React from "react";
import Button from "../../components/button/Button";
import Cart from "../../icons/Cart";

const CartButton = React.forwardRef((props, ref) => {
  const { className, onClick = () => {}, amount, text = true } = props
  return (
    <Button primary onClick={onClick} >
      <div className="relative">
        <Cart></Cart>
        <span
          className={`bg-nude w-[14px] h-[14px] rounded-full absolute bottom-0 -right-1 text-[10px] flex items-center justify-center ${className}`}
        >
          {amount}
        </span>
      </div>
      {
        text && 'Cart'
      }
    </Button>
  );
});

export default CartButton;
