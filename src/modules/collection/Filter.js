import React from "react";
import Line from "../../components/Line";
import FilterOption from "./filter/FilterOption";
import ListProduct from "./filter/ListProduct";

const Filter = ({initialCategories = ''}) => {
  return (
      <div className="grid grid-cols-5 gap-8 wrapper  ">
        <FilterOption></FilterOption>
        <ListProduct></ListProduct>
    </div>
  );
};

export default Filter;
