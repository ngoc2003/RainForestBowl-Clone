import { createSlice } from "@reduxjs/toolkit";
const CartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    add: (state, action) => {
      console.log(action.payload);
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
    },
    remove: (state, action) => {
      let index = state.findIndex((item) => item.id === action.payload);
      state.splice(index, 1);
    },
  },
});
export default CartSlice;
