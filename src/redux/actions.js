export const addCart = (data) => {
  return {
    type: "cart/add",
    payload: data,
  };
};

export const removeCart = (data) => {
  return {
    type: "cart/remove",
    payload: data,
  };
};

export const filterCategories = (data) => {
  return {
    type: "filters/categoriesFilter",
    payload: data,
  };
};
export const filterMaterials = (data) => {
  return {
    type: "filters/materialsFilter",
    payload: data,
  };
};
