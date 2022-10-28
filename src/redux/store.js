import { configureStore } from "@reduxjs/toolkit";  
import CartSlice from './reducerSlice/CartSlice'
const store = configureStore({
    reducer: {
        // filters:'',
        cart: CartSlice.reducer,
    }
})

export default store