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
        INCREASE(state,action){
            const itemIndex = state.cartItems.findIndex(item=>item.id==action.payload.id)
            if(  state.cartItems[itemIndex].qty < action.payload.stock){ state.cartItems[itemIndex].qty++   }
            else toast.info(`only ${action.payload.stock} qty available`)    },
        DECREASE(state,action){
            const itemIndex = state.cartItems.findIndex(item=>item.id==action.payload.id)
            if(  state.cartItems[itemIndex].qty > 1){
                state.cartItems[itemIndex].qty--  }
            else  state.cartItems[itemIndex].qty=1
        },
        REMOVE_FROM_CART(state,action){
            const itemIndex = state.cartItems.findIndex(item=>item.id==action.payload)
            state.cartItems.splice(itemIndex,1)

            // const filters = state.cartItems.filter(item=>item.id != action.payload)
            // state.cartItems = [...filters]
        },
        EMPTY_CART(state,action){ state.cartItems=[];state.total=0},
        CALCULATE_TOTAL(state,action){
          state.total = state.cartItems.reduce((prev,curr)=>{return prev+(curr.price*curr.qty)},0)}}})
// console.log(cartSlice.actions)
export const {ADD_TO_CART,INCREASE,DECREASE,REMOVE_FROM_CART,CALCULATE_TOTAL,EMPTY_CART}  =cartSlice.actions
export default cartSlice
export const selectCart = (state)=>state.cart.cartItems
export const selectTotal = (state)=>state.cart.total