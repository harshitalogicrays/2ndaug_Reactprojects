import { createSlice } from "@reduxjs/toolkit";

const checkoutSlice  = createSlice({
    name:'checkout',
    initialState:{shippingAddress:{}},
    reducers:{
        storecheckout(state,action){
            state.shippingAddress = action.payload
        }
    }
})

export const {storecheckout}  =checkoutSlice.actions
export default checkoutSlice.reducer
export const selectShippingAddress = state=>state.checkout.shippingAddress