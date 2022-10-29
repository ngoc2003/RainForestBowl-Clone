import { configureStore } from "@reduxjs/toolkit";  
import CartSlice from './reducerSlice/CartSlice'
import FilterSlice from "./reducerSlice/FilterSlice";
const store = configureStore({
    reducer: {
        filters:FilterSlice.reducer,
        cart: CartSlice.reducer,
    }
})

export default store