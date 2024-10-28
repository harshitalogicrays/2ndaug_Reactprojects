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
import UseCallbackandUseRef from './components/functional/UseCallbackandUseRef'
import UseMemoDemo from './components/functional/UseMemoDemo'
import UseRefDemo from './components/functional/UseRefDemo'
import ClassLayout from './components/classcomp/ClassLayout'
import PropsinCLass from './components/classcomp/PropsinCLass'
import EventandStateinclass from './components/classcomp/EventandStateinclass'
import Forminclass from './components/classcomp/Forminclass'
import Refdemoinclass from './components/classcomp/Refdemoinclass'
import PureCompDemo from './components/classcomp/PureCompDemo'
import Lifecycleemethods from './components/classcomp/Lifecycleemethods'
import ErrorBoundaryDemo from './components/classcomp/ErrorBoundaryDemo'
import HOCdemo from './components/classcomp/HOCdemo'
import Contextdemo from './contextdemo'
import ThemeContext from './components/ThemeContext'

const Routing = () => {
  return (
   <>
    <Routes>
        <Route path="/" element={<ThemeContext><Contextdemo><App/></Contextdemo></ThemeContext>}>
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
            <Route path="fun/callback" element={<UseCallbackandUseRef/>}></Route>
            <Route path='/fun/memo' element={<UseMemoDemo/>}/>
            <Route path='/fun/ref' element={<UseRefDemo/>}/>

            <Route path="/class" element={<ClassLayout/>}>
                <Route path = 'first' element={<Firstclasscomp/>}/>
                <Route path = 'props' element={<PropsinCLass username="Happy Singh" isActive={true}><h2>Children of props</h2></PropsinCLass>}/>
                <Route path = 'event/state' element={<EventandStateinclass/>}/>
                <Route path = 'form' element={<Forminclass/>}/>
                <Route path = 'ref' element={<Refdemoinclass/>}/>
                <Route path = 'pure' element={<PureCompDemo/>}/>
                <Route path = 'lifecycle' element={<Lifecycleemethods/>}/>
                <Route path = 'hoc' element={<HOCdemo/>}/>
                <Route path='error' element={<ErrorBoundaryDemo/>}/>
            </Route>
        </Route>
    </Routes>
   </>
  )
}

export default Routing
