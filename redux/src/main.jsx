import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import reduxstore from './redux/store.js'
// import './index.css'
import 'bootstrap/dist/css/bootstrap.css'
import router from './Routing.jsx'
import { RouterProvider } from 'react-router-dom'
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={reduxstore}>
    <RouterProvider router={router}/>
  </Provider>,
)
