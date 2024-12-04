import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { selectproducts, store_products } from '../redux/productSlice'
import ProductCard from './ProductCard'
import { filterbycategory, filterbyprice, selectCategory, selectFilters, selectPrice, selectSearch } from '../redux/filterSlice'
import { FetchProduct } from './FetchProducts'
import { useLoaderData } from 'react-router-dom'
const Products = () => {
  const products = useLoaderData()
     const dispatch = useDispatch()
        const allcategories =  Array.from(new Set(products.map(pro=>pro.category)))

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
    <div className="flex justify-start bg-white">
        <div className='mx-1 my-3 px-2 py-2 sm:px-2 sm:py-4  lg:px-2"'>
          <h5 className='my-2 font-bold text-xl'>Categories</h5> 
          <ul>
          {allcategories.map((c,i)=> <React.Fragment key={i}>
            <li className='inline-flex justify-between w-12'><input type="radio" name="category"  className='me-2' value={c} 
            onChange={(e)=>setCategory(e.target.value)}/><label>{c}</label></li><br/></React.Fragment>
          )}
          </ul>
          <h5 className='my-2 font-bold text-xl w-36'>Sort by Price</h5> 
          <div class="mb-4">
          <h5>Price Range</h5>
          <input type="range" class="custom-range" min="0" max="1000" step="50" value={price} onChange={(e)=>setPrice(e.target.value)} id="priceRange"/>
          <div class="d-flex justify-content-between">
            <span>${price}</span>
          </div>
          
        </div>
        </div>
      <div>
      {(categoryval!=''|| priceval !=0  || searchval!='') ? <>
          {filterProducts.length==0 ? <>No product found</>
            :     <ProductCard products={filterProducts}/>
        }
          </>
          :
          <ProductCard products={products}/>
          }
    </div>
    </div>

   
    
  </>
  )
}

export default Products
