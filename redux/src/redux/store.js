import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

const reduxstore = configureStore({
    reducer:{
        cart:cartSlice.reducer
    }
})
export default reduxstore
