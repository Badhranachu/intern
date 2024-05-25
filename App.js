import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import { Route, Routes } from 'react-router-dom';
import ViewEmployeee from './Components/ViewEmployeee';
import AddEmployeee from './Components/AddEmployeee';

function App() {
  return (
    <div className="App">
      <Navbar/>
      

      <Routes>
      <Route path='/Add' element={<AddEmployeee data ={{ename:"",eage:"",esalary:""}} method="post"/>}/>
      <Route path='/v' element={<ViewEmployeee />}/>

      </Routes>
            
    </div>
  );
}

export default App;
