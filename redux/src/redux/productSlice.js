import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk("product/fetchProducts",async(_,thunkAPI)=>{
    try{let res =  await fetch("https://dummyjson.com/products")
        let data = await res.json()
        return data }
    catch(error){return thunkAPI.rejectWithValue(error.message)}
})

const productSlice = createSlice({
    name:'product',
    initialState:{products:[],loading:false,error:null},
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchProducts.pending,(state,action)=>{
            state.loading=true })
        .addCase(fetchProducts.fulfilled,(state,action)=>{ 
            // console.log(action.payload)
            state.products = action.payload.products
            state.loading=false  })
        .addCase(fetchProducts.rejected,(state,action)=>{  state.loading=false 
            state.error = action.payload  }) }
})
export default productSlice.reducer
export const selectProducts = state=>state.product.products
export const selectLoading = state=>state.product.loading
export const selectError = state=>state.product.error