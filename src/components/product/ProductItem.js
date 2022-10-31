import React, { useState } from "react";
import { Link } from "react-router-dom";
import PackList from "./pack/PackList";
import { useDispatch } from "react-redux";
import CartSlice from "../../redux/reducerSlice/CartSlice";
import Button from "../button/Button";
import PropTypes from "prop-types";


const ProductItem = ({ data, className = "", search = false }) => {
  const [typeData, setTypeData] = useState(null);
  const dispatch = useDispatch();
  function handleAddCart(data) {
    dispatch(
      CartSlice.actions.add({
        ...data,
        type: { ...typeData },
        amount: 1,
      })
    );
  }
  return (
    <div className={`col-span-1 flex flex-col  ${!search && " max-h-[390px] max-w-[235px] min-w-[162px] xs:w-auto  "} ${className} `}>
      <Link to={`/product/${data.id}`}>
        <img src={data.image} alt="" className="w-full" />
        <h4 className="capitalize">{data.title}</h4>
      </Link>
      {!search && (
        <div className='flex flex-col justify-end flex-1 '>
          <PackList
            data={data.type}
            className="flex-1 mb-3"
            setTypeData={setTypeData}
          ></PackList>
          <Button primary fluid onClick={() => handleAddCart(data)}>
            Add to cart
          </Button>
        </div>
      )}
    </div>
  );
};
ProductItem.propTypes = {
  data: PropTypes.object.isRequired,
  className: PropTypes.string,
  search: PropTypes.bool
}
export default ProductItem;
