import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./features/Home";
import Products from "./features/Products";
import Cart from "./features/Cart";

const router  = createBrowserRouter([
    {path:'/',element:<App/>,
        children:[
            {path:'',element:<Home/>},
            {path:'products',element:<Products/>},
            {path:'cart',element:<Cart/>}
        ]
    }
])

export default router