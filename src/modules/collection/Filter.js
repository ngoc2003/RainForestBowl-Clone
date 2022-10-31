import React, { useState } from "react";
import FilterOption from "./filter/FilterOption";
import ListProduct from "./filter/ListProduct";
import FilterIcon from "../../icons/Filter";
import useMediaQuery from "../../hooks/useDebounce";

const Filter = () => {
  const mobile = useMediaQuery("(max-width:600px");
  const [showFilterMobile, setShowFilterMobile] = useState(mobile);
  function handleShowFilterMobile() {
    setShowFilterMobile(!showFilterMobile);
  }
  return (
    <div className="grid gap-8 md:grid-cols-4 xxl:grid-cols-5 wrapper">
        <FilterIcon
          className={`md:hidden cursor-pointer `}
          onClick={handleShowFilterMobile}
        ></FilterIcon>
      <FilterOption showMobile={showFilterMobile} onClick={() => setShowFilterMobile(false)}></FilterOption>
      <ListProduct></ListProduct>
    </div>
  );
};

export default Filter;
