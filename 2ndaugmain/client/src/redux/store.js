import { configureStore } from "@reduxjs/toolkit"
import authSlice from './authSlice'
import categorySlice from './categorySlice'
import productSlice from './productSlice'
import sliderSlice from './sliderSlice'
import cartSlice from "./cartSlice"
import filterSlice from './filterSlice'
import checkoutSlice from './checkoutSlice'
import orderSlice from './orderSlice'
const store = configureStore({
    reducer:{
        auth:authSlice,
        category:categorySlice,
        product:productSlice,
        slider:sliderSlice,
        cart:cartSlice,
        filter:filterSlice,
        checkout:checkoutSlice,
        order:orderSlice
    }
})
export default store