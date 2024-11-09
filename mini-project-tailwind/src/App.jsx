import { Outlet } from "react-router-dom"
import Header from "./features/Header"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
    <ToastContainer position="bottom-left" autoClose={2000} hideProgressBar={true}
    newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss={false}
    draggable pauseOnHover={false} theme="colored"/>
    <Header/>
     {/* <h1 className="text-3xl text-red-500 font-bold underline">
      Hello world!
    </h1>
    <h2 className="bg-orange-100 w-1/2" style={{color:'rebeccapurple'}}>Welcome to LRA</h2>

    <button type="button" className="w-20 h-11 border-2 border-red-600 border-dashed md:border-solid md:border-gray-800 hover:bg-stone-300 shadow  shadow-black">Click Me</button> */}

    <Outlet/>
    </>
  )
}

export default App
