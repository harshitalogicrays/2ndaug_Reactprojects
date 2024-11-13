import { createSlice} from "@reduxjs/toolkit";
import { toast } from "react-toastify";
const cartSlice = createSlice({
    name:"cart",
    initialState:{cartItems:[],total:0},
    reducers:{//pure functions
        ADD_TO_CART:(state,action)=>{
            // console.log(action.payload)//product
            const itemIndex = state.cartItems.findIndex(item=>item.id==action.payload.id)
            if(itemIndex==-1){
                state.cartItems=[...state.cartItems,{...action.payload,qty:1}]
                
                toast.success(`${action.payload.title} added to cart`)
            }
            else toast.info(`${action.payload.title} already added to cart`) 
        },
        INCREASE(state,action){}
    }
})
// console.log(cartSlice.actions)
export const {ADD_TO_CART}  =cartSlice.actions
export default cartSlice
export const selectCart = (state)=>state.cart.cartItems