import './App.css';
import Firstclasscomp from './components/classcomp/Firstclasscomp';
import Calculator from './components/functional/Calculator';
import Counter from './components/functional/Counter';
import CustomCompuses from './components/functional/CustomCompuses';
import EventDemo from './components/functional/EventDemo';
import Firstfuncomp from './components/functional/Firstfuncomp';
import Form1 from './components/functional/Form1';
import Form2 from './components/functional/Form2';
import FormValidations from './components/functional/FormValidations';
import ListRendering from './components/functional/ListRendering';
import Products from './components/functional/Products';
import Propsdemoinfun from './components/functional/propsdemoinfun';
import ReactHookFormDemo from './components/functional/ReactHookFormDemo';
import StateDemo from './components/functional/StateDemo';
import { TextBox } from './customcsscomp';
import Header from './components/functional/Header'
import { Outlet } from 'react-router-dom';
function App() {
  let a = "harshita"
  return (
    <>
    <Header/>
    <div className="container-fluid mt-5">
    <Outlet/>

    {/* <h1>Hello React</h1> */}
       {/*  <h2>Welcome to LRA</h2>
      <Firstfuncomp></Firstfuncomp>
      <Firstclasscomp/>
      <hr/> */}
      {/* <Propsdemoinfun username="Ram" address="Ahmedabad" mobile={9876568}
      email={a} isActive={true}/> */}

      {/* <EventDemo/> */}
      {/* <StateDemo/> */}
      {/* <Counter/> */}
      {/* <Calculator/> */}
      {/* <Form1/> */}
      {/* <Form2/> */}
      {/* <FormValidations/> */}

        {/* <ReactHookFormDemo/> */}
        {/* <ListRendering/> */}
    {/* 
            <Products/>

            <TextBox type="date"></TextBox> */}
          
   {/* <CustomCompuses/> */}


    </div>
    </>
  );
}

export default App;
