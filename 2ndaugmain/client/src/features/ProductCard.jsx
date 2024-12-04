import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'
import { useDispatch } from 'react-redux'
import { ADD_TO_CART } from '../redux/cartSlice'

const ProductCard = ({products}) => {
    const dispatch = useDispatch()
    const handleCart=(product)=>{
        dispatch(ADD_TO_CART(product))
        window.scrollTo(0,0)
        }
       //pagination 
       const itemsPerPage = 4
       const [itemOffset, setItemOffset] = useState(0);//startindex 
       const [currentItems,setCurrentItems] =useState([]) //0 to 4 index products
       const [pageCount,setPageCount] = useState(0)
       useEffect(()=>{
         const endOffset = itemOffset + itemsPerPage;//0+5 = 5 , 5+5=10,15,35
         setCurrentItems(products.slice(itemOffset, endOffset))//0 to 4 (5th exclude) , 5 to 9 (10 exclude),....30 to 35
         setPageCount(Math.ceil(products.length / itemsPerPage)) //31/5 =>7
       },[itemOffset,products])
 
       const handlePageClick = (event) => { //pageno2 -> 1 index,pageno2-> 2index
         const newOffset = (event.selected * itemsPerPage) % products.length; //1*5%31=> 5,2*5%31 => 10%31 => 10,......30%31=30
         setItemOffset(newOffset); //5,10,30
       };
 
  return (
    <>
     <div className="bg-white ms-16">
      <div className="mx-12 my-3 px-4 py-2 sm:px-6 sm:py-4  lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Products</h2>

        <div className="mt-6 mb-4 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {currentItems.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-72">
                <img
                  alt={product.name}
                  src={product.images[0]}
                  className="h-72 w-full object-cover object-center lg:w-96 lg:h-72"
                />
              </div>
              <div className="mt-4 ">
                <div>
                  <h3 className="text-sm text-gray-700">
                      <span aria-hidden="true" className=" inset-0" />
                      {product.name}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.category}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">{product.sellingPrice}</p>
              </div>
              <button type="button" className='bg-slate-800 text-white p-2 rounded shadow shadow-black hover:bg-white hover:text-red-300 font-bold mt-2' onClick={()=>handleCart(product)}>Add to cart</button>
            </div>
          ))}
        </div>
        <ReactPaginate
        breakLabel="..." nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5} pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
        containerClassName="isolate flex justify-end -space-x-px rounded-md shadow-"
        pageClassName="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300  focus:z-20 focus:outline-offset-0 md:inline-flex"
        activeClassName="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        previousClassName="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 focus:z-20 focus:outline-offset-0"
        nextClassName='relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300  focus:z-20 focus:outline-offset-0'
      />
      </div>
    </div>
    </>
  )
}

export default ProductCard
