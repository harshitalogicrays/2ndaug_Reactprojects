import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./features/Home";
import About from "./features/About";
import Products from "./features/Products";
import Contact from "./features/Contact";
import Login from "./features/Login";
import Register from "./features/Register";
import Pagenotfound from "./features/Pagenotfound";
import Cart from "./features/Cart";
import Dashboard from "./features/Admin/Dashboard";
import AdminLayout from "./features/Admin/AdminLayout";

const routing = createBrowserRouter([
    {path:'/',element:<App/>,
        children:[
            {path:'',element:<Home/>},
            {path:'about',element:<About/>},
            {path:'products',element:<Products/>},
            {path:'contact',element:<Contact/>},
            {path:'login',element:<Login/>},
            {path:'register',element:<Register/>},
            {path:'cart',element:<Cart/>},
        ]
    },
    {path:'/admin',element:<AdminLayout/>,
        children:[
            {path:'',element:<Dashboard/>}
        ]
    },
    {path:'*',element:<Pagenotfound/>}
])

export default routing