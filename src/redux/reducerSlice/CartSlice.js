import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
function setDataLocalStorage(result) {
  localStorage.setItem("carts_rainforest", JSON.stringify(result));
}
const CartSlice = createSlice({
  name: "cart",
  initialState: localStorage.getItem("carts_rainforest")
    ? JSON.parse(localStorage.getItem("carts_rainforest"))
    : [],
  reducers: {
    add: (state, action) => {
      toast.success("Add successfully", {
        pauseOnHover: false,
        autoClose: 1000,
        progressClassName: "bg-primary",
      });
      let index = state.findIndex(
        (item) =>
          item.id === action.payload.id &&
          item.type.name === action.payload.type.name
      );
      if (index === -1) {
        state.push(action.payload);
      } else {
        state[index] = {
          ...state[index],
          amount: +state[index].amount + +action.payload.amount,
        };
      }
      setDataLocalStorage(state);
    },
    remove: (state, action) => {
      toast.success("Remove successfully", {
        pauseOnHover: false,
        autoClose: 1000,
        progressClassName: "bg-primary",
      });
      let index = state.findIndex((item) => item.id === action.payload);
      state.splice(index, 1);
      setDataLocalStorage(state);
    },
    clear: (state, action) => {
      state.splice(0, state.length);
      setDataLocalStorage(state);
    },
  },
});
export default CartSlice;
