import React from "react";
import CategoriesData from "../data/Categories";

const GetAmount = (name, field = "categories") => {
  let amount = 0;
  if (field === "categories" && name === "bestsellers") {
    return CategoriesData.length;
  }
  CategoriesData.forEach((item, index) => item[field].toLowerCase() === name && amount++);
  return amount;
};

export default GetAmount;
