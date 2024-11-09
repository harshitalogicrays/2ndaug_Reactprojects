import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./features/Home";
import About from "./features/About";
import Products from "./features/Products";
import Contact from "./features/Contact";
import Login from "./features/Login";
import Register from "./features/Register";
import Pagenotfound from "./features/Pagenotfound";
import CartContext from "./CartContext";
import Cart from "./features/Cart";

const routing = createBrowserRouter([
    {path:'/',element:<CartContext><App/></CartContext>,
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
    {path:'*',element:<Pagenotfound/>}
])

export default routing