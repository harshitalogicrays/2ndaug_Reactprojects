import { createSlice } from "@reduxjs/toolkit";

const filterSlice =  createSlice({
    name:'filter',
    initialState:{filterProducts:[],catvalue:'',priceval:0,searchval:''},
    reducers:{
        filterbycategory(state,action){
            let {products,category} =action.payload
            if(category !=''){
                const filter = products.filter(item=>item.category==category)
                state.filterProducts = filter
            }   
            state.catvalue = category
        },
        filterbyprice(state,action){
            let {products,price} =action.payload
            if(price !=0){
                const filter = products.filter(item=>item.sellingPrice <= price)
                state.filterProducts = filter
            }   
            state.priceval = price
        },
    
    filterbysearch(state,action){
        let {products,search} =action.payload
        if(search !=''){
            const filter = products.filter(item=>item.name.toLowerCase().includes(search.toLowerCase()))
            state.filterProducts = filter
        }   
        state.searchval = search
    }
}
})
export const {filterbycategory,filterbyprice,filterbysearch} = filterSlice.actions
export default filterSlice.reducer
export const selectFilters=state=>state.filter.filterProducts
export const selectCategory=state=>state.filter.catvalue
export const selectPrice=state=>state.filter.priceval
export const selectSearch=state=>state.filter.searchval