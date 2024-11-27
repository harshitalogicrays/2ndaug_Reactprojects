import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import Loader from './Loader'
import ReactPaginate from 'react-paginate'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { selectproducts, store_products } from '../redux/productSlice'
import { ADD_TO_CART } from '../redux/cartSlice'

const Products = () => {
  const dispatch = useDispatch()
        let getData = async () => {
          try {
            const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/products`)
            dispatch(store_products(res.data))}
          catch (err) { toast.error(err.message) }  }
        useEffect(() => {getData()}, [])
      
        const products = useSelector(selectproducts)
        
  const handleCart=(product)=>{
    dispatch(ADD_TO_CART(product))
    window.scrollTo(0,0)
    }

  let itemsPerPage = 4 //30 =>0 to 29 index => 0 to 3 index ,4 to 7,8 to 11 
  const [itemOffset, setItemOffset] = useState(0)
  const [currentItems,setCurrentItems] = useState([])
  const [pageCount,setPageCount] = useState(0)

  const handlePageClick = (event) => {//1-0 index, 2- 1 index, 3-index 2
    const newOffset = (event.selected * itemsPerPage) % products.length; //1*4 % 30 =>4
    setItemOffset(newOffset); //4
  };

  useEffect(()=>{
    const endOffset = itemOffset + itemsPerPage; //0+4 => 4 ,4+4=8
    setCurrentItems(products.slice(itemOffset, endOffset)) //[{},{},{},{}]
    setPageCount(Math.ceil(products.length / itemsPerPage)) //30/4=>8
  },[itemOffset,products])
  return (
    <div>
    <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6 sm:py-10 lg:max-w-7xl lg:px-8">
      <h2 className="text-2xl font-bold tracking-tight text-gray-900">Products</h2>

      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 mb-7">
        {products.length==0 && <Loader/>}
        {currentItems.map((product) => (
          <div key={product.id} className="group relative">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
              <img
                alt={product.name}
                src={product.images[0]}
                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
              />
            </div>
            <div className="mt-4 ">
              <div>
                <h3 className="text-sm text-gray-700">
                  {product.name}
                </h3>
                <p className="mt-1 text-sm text-gray-500">{product.brand}</p>
              </div>
              <p className="text-sm font-medium text-gray-900">{product.sellingPrice}</p>
            </div>
            <button type="button" className='bg-slate-500 text-white p-2 rounded shadow shadow-black hover:bg-yellow-200 hover:text-black mt-2' onClick={()=>handleCart(product)}>Add to cart</button>
          </div>
        ))}
      </div>

      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        containerClassName="isolate flex -space-x-px rounded-md shadow-sm justify-center"
        pageClassName="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300  focus:z-20 focus:outline-offset-0"
        activeClassName="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        previousClassName="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
        nextClassName="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
      />
    </div>
  </div>
  )
}

export default Products
