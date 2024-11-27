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
import AddCategory from "./features/Admin/AddCategory";
import ViewCategory from "./features/Admin/ViewCategory";
import AddProduct from "./features/Admin/AddProduct";
import ViewProduct from "./features/Admin/ViewProduct";
import AddSlider from "./features/Admin/AddSlider";
import Viewslider from "./features/Admin/ViewSlider";
import Checkout from "./features/Checkout";
import { Protected, ProtectedAdmin } from "./features/hiddenlinks";

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
            {path:'checkout',element:<Protected><Checkout/></Protected>}
        ]
    },
    {path:'/admin',element:<ProtectedAdmin><AdminLayout/></ProtectedAdmin>,
        children:[
            {path:'',element:<Dashboard/>},
            {path:'category/add',element:<AddCategory/>},
            {path:'category/view',element:<ViewCategory/>},
            {path:'category/edit/:id',element:<AddCategory/>},
            {path:'product/add',element:<AddProduct/>},
            {path:'product/view',element:<ViewProduct/>},
            {path:'product/edit/:id',element:<AddProduct/>},
            {path:'slider/add',element:<AddSlider/>},
            {path:'slider/view',element:<Viewslider/>},
            {path:'slider/edit/:id',element:<AddSlider/>},
        ]
    },
    {path:'*',element:<Pagenotfound/>}
])

export default routing