import React, { useState } from "react";
import { Link } from "react-router-dom";
import AddButton from "../button/AddButton";
import PackList from "./pack/PackList";
import { useDispatch } from "react-redux";
import CartSlice from "../../redux/reducerSlice/CartSlice";

import { ToastContainer, toast } from "react-toastify";
const ProductItem = ({ data, className, search = false }) => {
  const [typeData, setTypeData] = useState(null);
  const dispatch = useDispatch();
  function handleAddCart(data) {
    if (typeData !== null && typeData !== undefined && typeData) {
      dispatch(
        CartSlice.actions.add({
          ...data,
          type: { ...typeData },
          amount: 1,
        })
      );
    } else {
      toast("Not choose Pack");
    }
  }
  return (
    <div className={` flex flex-col ${className}`}>
      <ToastContainer />
      <Link to={`./product/${data.id}`}>
        <img src={data.image} alt="" />
        <h4 className="capitalize">{data.title}</h4>
      </Link>
      {!search && (
        <>
          <PackList
            data={data.type}
            className="flex-1 mb-3"
            setTypeData={setTypeData}
          ></PackList>
          <AddButton primary onClick={() => handleAddCart(data)}>
            Add to cart
          </AddButton>
        </>
      )}
    </div>
  );
};

export default ProductItem;
