import React from "react";
import { useDispatch } from "react-redux";
import Close from "../../icons/Close";
import CartSlice from "../../redux/reducerSlice/CartSlice";

const ProductCartItem = ({ data }) => {
  const dispatch = useDispatch();
  function handleDeleteCart(id) {
    dispatch(CartSlice.actions.remove(id));
  }
  return (
    <div className="flex items-start justify-between w-full text-black">
      <div className="flex gap-x-5">
        <img src={data.image} className="h-16" alt="" />
        <div>
          <h4 className="font-semibold">{data.title}</h4>
          <p>
            {data.type.name} x {data.amount}
          </p>
          <h4 className="font-semibold">{data.type.cost}</h4>
        </div>
      </div>
      <Close onClick={() => handleDeleteCart(data.id)}></Close>
    </div>
  );
};

export default ProductCartItem;
