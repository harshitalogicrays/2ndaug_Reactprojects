import { Outlet } from "react-router-dom"
import Header from "./features/Header"
import Products from "./features/Products"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
function App() {
   return (
 <>
 <ToastContainer position="bottom-left" autoClose={2000} hideProgressBar={true}
    newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss={false}
    draggable pauseOnHover={false} theme="colored"/>
  <Header/>
 <div className="container mt-5">
    <Outlet/>
 </div>
 </>
  )
}

export default App
