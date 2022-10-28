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

