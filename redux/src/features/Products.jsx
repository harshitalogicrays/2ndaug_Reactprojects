import React, { useEffect, useState } from 'react'
import ProductItems from './ProductItems'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts, selectProducts } from '../redux/productSlice'
import { filterbycategory, filterbyprice, selectCategory, selectFilters, selectPrice, selectSearch } from '../redux/filterSlice'

const Products = () => {
  const dispatch = useDispatch()
  useEffect(()=>{dispatch(fetchProducts())},[]) // only onload
  const products = useSelector(selectProducts)
  const allcategories =  Array.from(new Set(products.map(pro=>pro.category)))
  // console.log(allcategories)
  //filter part 
   const [category,setCategory]=useState('')
   const [price,setPrice]=useState(0)
   useEffect(()=>{
    dispatch(filterbycategory({products,category}))
   },[category])
   useEffect(()=>{
    dispatch(filterbyprice({products,price}))
   },[price])
   const filterProducts = useSelector(selectFilters)
   const categoryval = useSelector(selectCategory)
   const priceval  = useSelector(selectPrice)
   const searchval  = useSelector(selectSearch)
  return (
  <>
      <div className='container-fluid'>
      <div className="row">
        <div className="col-2">       
        <div class="mb-4">
          <h5>Category</h5>
          <ul class="list-unstyled">
            {allcategories.map((c,i)=> 
            <li key={i}><input type="radio" name="category" value={c} 
            onChange={(e)=>setCategory(e.target.value)}/>&emsp;{c}</li>)}
             </ul>
        </div>

        <div class="mb-4">
          <h5>Price Range</h5>
          <input type="range" class="custom-range" min="0" max="1000" step="50" value={price} onChange={(e)=>setPrice(e.target.value)} id="priceRange"/>
          <div class="d-flex justify-content-between">
            <span>${price}</span>
          </div>
          
        </div>
        </div>
        <div className="col">  
          {(categoryval!=''|| priceval !=0  || searchval!='') ? <>
          {filterProducts.length==0 ? <>No product found for {categoryval}</>
            :     <ProductItems products={filterProducts}/>
        }
          </>
          :
          <ProductItems products={products}/>
          }
        </div>
      </div>
     
    </div>
  
  </>
  )
}

export default Products
