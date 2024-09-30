import './App.css';
import Firstclasscomp from './components/classcomp/Firstclasscomp';
import Firstfuncomp from './components/functional/Firstfuncomp';
import Propsdemoinfun from './components/functional/propsdemoinfun';

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
    </div>
  );
}

export default App;
