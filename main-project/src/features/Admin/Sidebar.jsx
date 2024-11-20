import React from 'react'
import { FaHome } from 'react-icons/fa'

const Sidebar = () => {
  return (
    <div className="w-20 sm:w-64 h-full bg-gray-800 text-white flex flex-col">
    <div className="flex items-center justify-center h-16 text-2xl font-bold">
      {/* Hide the title on small screens */}
      <span className="hidden sm:block">Admin Panel</span>
    </div>
    <nav className="flex flex-col mt-4">
      <a href="#" className="flex items-center p-4 hover:bg-gray-700">
        <FaHome className="mr-0 sm:mr-3" />
        <span className="hidden sm:block">Dashboard</span> </a>
    </nav>  </div>	
  )
}

export default Sidebar
