import { useSelector } from "react-redux"
import { selectIsLoggedIn, selectRole } from "../redux/authSlice"
import { Navigate } from "react-router-dom"
import { toast } from "react-toastify"
import axios from "axios"

export const ShowonLogin = ({children})=>{
    const isLoggedIn = useSelector(selectIsLoggedIn)
    if(isLoggedIn) return children
    else return null
}

export const ShowonLogout = ({children})=>{
    const isLoggedIn = useSelector(selectIsLoggedIn)
    if(!isLoggedIn) return children
    else return null
}

export const ProtectedAdmin = ({children})=>{
    const isLoggedIn = useSelector(selectIsLoggedIn)
    const role = useSelector(selectRole)
    if(isLoggedIn && role=="0"){return children}
    else return <Navigate to='/login' replace={true}/>
}

export const Protected = ({children})=>{
    const isLoggedIn = useSelector(selectIsLoggedIn)
    const role = useSelector(selectRole)
    if(isLoggedIn && role=="1"){return children}
    else return <Navigate to='/login' replace={true}/>
}

export const saveorder =({userId,shippingAddress,cartItems,total,status,paymentMethod})=>{
    let order= async()=>{
        try{
            await axios.post(`${import.meta.env.VITE_BASE_URL}/orders`,{userId,shippingAddress,cartItems,total,status,paymentMethod,createdAt:new Date()})
            toast.success("order placed")
        }
        catch(err){toast.error(err)}
    }
    return order()
}