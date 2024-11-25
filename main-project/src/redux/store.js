import { configureStore } from "@reduxjs/toolkit"
import authSlice from './authSlice'
import categorySlice from './categorySlice'
import productSlice from './productSlice'
const store = configureStore({
    reducer:{
        auth:authSlice,
        category:categorySlice,
        product:productSlice
    }
})
export default store