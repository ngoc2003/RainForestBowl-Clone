import CategoriesData from "../data/Categories";

const categoriesSelector = (state) => state.filters.categories;
const materialsSelector = (state) => state.filters.materials;
export const cartUserSelector = (state) => state.cart
export const cartFilterSelector = (state) => {
  const data = CategoriesData.filter((item) => {
    return (
      (materialsSelector(state).length
        ? materialsSelector(state).includes(item.materials)
        : true) &&
      (categoriesSelector(state) && categoriesSelector(state) !== "bestsellers"
        ? item.categories === categoriesSelector(state)
        : true)
    );
  });
  return data;
};
