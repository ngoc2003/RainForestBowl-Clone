import React from "react";
import { useSelector } from "react-redux";
import { v4 } from "uuid";
import Button from "../../components/button/Button";
import ProductCartItem from "../../components/product/ProductCartItem";
import { cartUserSelector } from "../../redux/selector";
import Total from "../cartpage/Total";
const DropdownCart = React.forwardRef((props, ref) => {
  const data = useSelector(cartUserSelector);
  const { className, ...other } = props;
  return (
    <div
      {...other}
      ref={ref}
      className={`absolute right-0 w-screen top-full bg-white border border-lightGray shadow-lg md:w-[450px] min-h-[90px] flex flex-col items-center justify-center rounded-[3px] p-5 z-20`}
    >
      {data.length > 0 ? (
        <>
          <div className="max-h-[200px] overflow-y-auto w-full">
            {data.map((item) => (
              <ProductCartItem
                data={item}
                key={v4()}
                className="w-full"
              ></ProductCartItem>
            ))}
          </div>
          <Total></Total>
          <div className="flex w-full gap-x-3">
            <Button to="/cart" fluid className={"lg:text-lg"} outline>
              View my cart
            </Button>
            <Button to='/checkout/information' fluid className={"lg:text-lg"} primary>
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
