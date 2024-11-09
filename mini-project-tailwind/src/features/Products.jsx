import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { useCart } from '../CartContext'

const Products = () => {
  let cartcon = useCart()
  let [products,setProducts]=useState([])
  let getData = async()=>{
    try{
      let res =  await fetch("https://dummyjson.com/products") //{"products":[]}
      let data =  await res.json()
      console.log(data)
      setProducts(data.products)
      }
      catch(err){
          toast.error(err)
      }
  }

  useEffect(()=>{getData()},[]) 
  const handleCart=(product)=>{
      cartcon.addtocart(product)
    }
  return (
    <div>
    <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6 sm:py-10 lg:max-w-7xl lg:px-8">
      <h2 className="text-2xl font-bold tracking-tight text-gray-900">Products</h2>

      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {products.length==0 && <h1>No product found</h1>}
        {products.map((product) => (
          <div key={product.id} className="group relative">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
              <img
                alt={product.title}
                src={product.images[0]}
                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
              />
            </div>
            <div className="mt-4 ">
              <div>
                <h3 className="text-sm text-gray-700">
                  {product.title}
                </h3>
                <p className="mt-1 text-sm text-gray-500">{product.brand}</p>
              </div>
              <p className="text-sm font-medium text-gray-900">{product.price}</p>
            </div>
            <button type="button" className='bg-slate-500 text-white p-2 rounded shadow shadow-black hover:bg-yellow-200 hover:text-black mt-2' onClick={()=>handleCart(product)}>Add to cart</button>
          </div>
        ))}
      </div>
    </div>
  </div>
  )
}

export default Products
