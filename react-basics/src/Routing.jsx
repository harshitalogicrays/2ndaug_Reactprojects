import React from 'react'
import { Route, Routes } from 'react-router-dom'
import App from './App'
import Products from './components/functional/Products'
import Firstfuncomp from './components/functional/Firstfuncomp'
import Propsdemoinfun from './components/functional/propsdemoinfun'
import EventDemo from './components/functional/EventDemo'
import StateDemo from './components/functional/StateDemo'
import Form1 from './components/functional/Form1'
import FormValidations from './components/functional/FormValidations'
import ReactHookFormDemo from './components/functional/ReactHookFormDemo'
import CustomCompuses from './components/functional/CustomCompuses'
import ListRendering from './components/functional/ListRendering'
import Firstclasscomp from './components/classcomp/Firstclasscomp'

const Routing = () => {
  return (
   <>
    <Routes>
        <Route path="/" element={<App/>}>
            <Route path="products" element={<Products/>}></Route>
            <Route path="fun/first" element={<Firstfuncomp/>}></Route>
            <Route path="fun/props" element={<Propsdemoinfun/>}></Route>
            <Route path="fun/event" element={<EventDemo/>}></Route>
            <Route path="fun/state" element={<StateDemo/>}></Route>
            <Route path="fun/form" element={<Form1/>}></Route>
            <Route path="fun/form/validations" element={<FormValidations/>}></Route>
            <Route path="fun/form/rhf" element={<ReactHookFormDemo/>}></Route>
            <Route path="fun/custom" element={<CustomCompuses/>}></Route>
            <Route path="fun/list" element={<ListRendering/>}></Route>

            <Route path="/class/first" element={<Firstclasscomp/>}></Route>
        </Route>
    </Routes>
   </>
  )
}

export default Routing
