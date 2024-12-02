import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectorders, store_orders } from '../redux/orderSlice'
import { toast } from 'react-toastify'
import { selectId } from '../redux/authSlice'

const MyOrder = () => {
    const dispatch = useDispatch()
    let getData = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/orders`)
        dispatch(store_orders(res.data))}
      catch (err) { toast.error(err.message) }  }
    useEffect(() => {getData()}, [])
  
    const allorders = useSelector(selectorders)
    console.log(allorders)
    const userId = useSelector(selectId)
    const orders = allorders.filter(item=>item.userId == userId)
  return (
    <div className="max-w-7xl mx-auto mt-2 p-6 bg-white shadow-md rounded-lg">
         <div className="overflow-x-auto mb-3">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="bg-gray-100 border-b">
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 uppercase">
                Order Id
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 uppercase">
                UserId
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 uppercase">
                Total Amount
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 uppercase">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {orders.length == 0 &&
              <tr>  <td colSpan="4"
                  className="px-6 py-4 text-center text-sm text-gray-500"  >
                  No Order found. </td> </tr>}
            {orders.map((order, index) =>
              <tr key={index}
                className={`border-b ${index % 2 != 0 ? "bg-gray-50" : "bg-white"
                  }`} >
                <td className="px-6 py-4 text-sm text-gray-700"> {order.id}  </td>
                <td className="px-6 py-4 text-sm">{order.userId}</td>
                <td className="px-6 py-4 text-sm text-gray-700">
                  {order.total} </td>
                <td className={`px-6 py-4 text-sm text-gray-700 `}>
                    <button className={`${order.status !='delivered' ? 'bg-red-400 rounded-md text-white px-2 py-2':'bg-green-400 rounded-md text-white px-2 py-2'}`}>
                    {order.status}
                    </button>
                   
              </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default MyOrder
