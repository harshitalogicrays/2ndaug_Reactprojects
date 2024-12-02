import React, { useEffect, useState } from 'react'
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link, NavLink, useLoaderData, useNavigate } from 'react-router-dom'
import { ShoppingCartIcon } from '@heroicons/react/16/solid'
import { toast } from 'react-toastify'
import { ShowonLogin, ShowonLogout } from './hiddenlinks.jsx'
import { useDispatch, useSelector } from 'react-redux'
import { LOGOUT_USER, selectUsername } from '../redux/authSlice'
import { selectCart } from '../redux/cartSlice'
import { selectproducts, store_products } from '../redux/productSlice.js'
import { filterbysearch } from '../redux/filterSlice.js'
import axios from 'axios'
import { FetchProduct } from './FetchProducts'
const Header = () => {
    const redirect = useNavigate()
    const dispatch = useDispatch()
    const navigation = [
        { name: 'Home', href: '/'},
        { name: 'About', href: '/about' },
        { name: 'Products', href: '/products' },
        { name: 'Contact', href: '/contact'},
      ]
      

      const handleDelete=()=>{
        dispatch(LOGOUT_USER())
        toast.success("LoggedOut Successfully")
        redirect('/')
      }
      const username = useSelector(selectUsername)
      const cartItems  =useSelector(selectCart)

      const [search,setSearch] =useState('')
      useEffect(() => {FetchProduct().then((res)=>{
        console.log(res);dispatch(store_products(res))})}, [])
      const products = useSelector(selectproducts)

      useEffect(()=>{ 
        dispatch(filterbysearch({products,search}))
      },[search])

  return (
    <>
        <Disclosure as="nav" className="bg-gray-800">
      <div className="mx-auto max-w-7xl">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
              <span className='text-white'>Mypro</span>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.href}
                    className={({ isActive}) =>
                      isActive ? "bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" : "rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                    }
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <input className='rounded-md me-3 text-xl text-gray-400' placeholder='search here'
            value={search} onChange={(e)=>setSearch(e.target.value)}/>
          <Link to='/cart'
              type="button"
              className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            >

              <ShoppingCartIcon aria-hidden="true" className="h-8 w-8" />
              <span className='bg-red-600 text-white px-2 rounded-full absolute -top-1 -right-3 inline-flex items-center justify-center text-xs'>{cartItems.length}</span>
            </Link>

           <ShowonLogout> 
          <NavLink to="/login"
                    className={({ isActive}) =>
                      isActive ? "bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" : "rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                    }
                  >  Login </NavLink>
            <NavLink to="/register"
                    className={({ isActive}) =>
                      isActive ? "bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" : "rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                    }
                  >  Register </NavLink>
          </ShowonLogout>
          <ShowonLogin>
        
            {/* Profile dropdown */}
            <Menu as="div" className="relative ml-3">
              <div>
                <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <span className="absolute -inset-1.5" />
                  <span className='text-white'>Welcome {username}</span>
                
                </MenuButton>
              </div>
              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
              >
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none"
                  >
                    Your Profile
                  </a>
                </MenuItem>
                <MenuItem>
                  <Link to='/myorders'
                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none"
                  >
                    My Orders
                  </Link>
                </MenuItem>
                <MenuItem>
                  <button
                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none"
                  onClick={handleDelete}>
                    Sign out
                  </button>
                </MenuItem>
              </MenuItems>
            </Menu>
            </ShowonLogin>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as={NavLink}
              to={item.href}
              className={({ isActive}) =>
                isActive ? "bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium" : "block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              }
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
       </Disclosure>

    </>
  )
}

export default Header
