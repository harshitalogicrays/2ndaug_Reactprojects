import './App.css';
import Firstclasscomp from './components/classcomp/Firstclasscomp';
import Calculator from './components/functional/Calculator';
import Counter from './components/functional/Counter';
import EventDemo from './components/functional/EventDemo';
import Firstfuncomp from './components/functional/Firstfuncomp';
import Form1 from './components/functional/Form1';
import Form2 from './components/functional/Form2';
import FormValidations from './components/functional/FormValidations';
import Propsdemoinfun from './components/functional/propsdemoinfun';
import StateDemo from './components/functional/StateDemo';

function App() {
  let a = "harshita"
  return (
    <div className="container mt-5">
      {/* <h1>Hello React</h1>
      <h2>Welcome to LRA</h2>
      <Firstfuncomp></Firstfuncomp>
      <Firstclasscomp/>
      <hr/> */}
      <Propsdemoinfun username="Ram" address="Ahmedabad" mobile={9876568}
      email={a} isActive={true}/>

      {/* <EventDemo/> */}
      {/* <StateDemo/> */}
      {/* <Counter/> */}
      {/* <Calculator/> */}
      {/* <Form1/> */}
      {/* <Form2/> */}
      <FormValidations/>
    </div>
  );
}

export default App;
