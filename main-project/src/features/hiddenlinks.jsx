import { useSelector } from "react-redux"
import { selectIsLoggedIn, selectRole } from "../redux/authSlice"
import { Navigate } from "react-router-dom"

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