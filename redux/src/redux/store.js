import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import productSlice from "./productSlice";
import filterSlice from './filterSlice'
const reduxstore = configureStore({
    reducer:{
        cart:cartSlice.reducer,
        product:productSlice,
        filter:filterSlice
    }
})
export default reduxstore
