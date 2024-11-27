import React from 'react'
import { FaHome, FaImages, FaList, FaListUl, FaPenFancy, FaPenSquare, FaThList } from 'react-icons/fa'
import { FaListOl } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className="w-20 sm:w-64 h-full bg-gray-800 text-white flex flex-col">
    <div className="flex items-center justify-center h-16 text-2xl font-bold">
      {/* Hide the title on small screens */}
      <span className="hidden sm:block">Admin Panel</span>
    </div>
    <nav className="flex flex-col mt-4">
      <Link to='/admin' className="flex items-center p-4 hover:bg-gray-700">
        <FaHome className="mr-0 sm:mr-3" />
        <span className="hidden sm:block">Dashboard</span> </Link>
        <Link to='/admin/category/view' className="flex items-center p-4 hover:bg-gray-700">
        <FaList className="mr-0 sm:mr-3" />
        <span className="hidden sm:block">View Category</span> </Link>
        <Link to='/admin/category/add' className="flex items-center p-4 hover:bg-gray-700">
        <FaPenFancy className="mr-0 sm:mr-3" />
        <span className="hidden sm:block">Add Category</span> </Link>
        <Link to='/admin/product/add' className="flex items-center p-4 hover:bg-gray-700">
        <FaPenSquare className="mr-0 sm:mr-3" />
        <span className="hidden sm:block">Add Product</span> </Link>
        <Link to='/admin/product/view' className="flex items-center p-4 hover:bg-gray-700">
        <FaThList className="mr-0 sm:mr-3" />
        <span className="hidden sm:block">View Products</span> </Link>
        <Link to='/admin/slider/view' className="flex items-center p-4 hover:bg-gray-700">
        <FaImages className="mr-0 sm:mr-3" />
        <span className="hidden sm:block">Sliders</span> </Link>
        
    </nav>  </div>	
  )
}

export default Sidebar
