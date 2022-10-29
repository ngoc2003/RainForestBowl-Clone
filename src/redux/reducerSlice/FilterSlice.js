import { createSlice } from "@reduxjs/toolkit";
const FilterSlice = createSlice({
  name: "filters",
  initialState: {
    categories: "",
    materials: [],
  },
  reducers: {
    categoriesFilter: (state, action) => {
      state.categories = action.payload;
    },
    materialsFilter: (state, action) => {
      state.materials = action.payload;
    },
  },
});
export default FilterSlice;
