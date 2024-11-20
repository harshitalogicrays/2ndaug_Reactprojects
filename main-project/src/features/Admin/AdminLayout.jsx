import React from 'react'
import AdminHeader from './AdminHeader'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

const AdminLayout = () => {
  return (
    <div className="flex h-screen"> <Sidebar />
    <div className="flex flex-col flex-grow">  <AdminHeader />
      <main className="p-6 bg-gray-50 flex-grow overflow-y-auto"><Outlet/></main>
    </div> </div>
  )
}

export default AdminLayout
