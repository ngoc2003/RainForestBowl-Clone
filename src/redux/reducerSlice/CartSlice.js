import { createSlice } from "@reduxjs/toolkit";
const CartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push(action.payload);
    },
    remove: (state, action) => {
      let index = state.findIndex((item) => item.id === action.payload);
      state.splice(index, 1);
    },
  },
});
export default CartSlice;
