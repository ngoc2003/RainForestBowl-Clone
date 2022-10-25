import React from "react";
import CategoriesData from "../data/Categories";

const SearchDataById = (id) => {

  const data = CategoriesData.find((item) => {
    return item.id == id
  })
  return data
};

export default SearchDataById;
