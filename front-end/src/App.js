import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import EmpListing from './component/list/EmpListing';
import EmpCreate from './component/create-bus/EmpCreate';
import EmpDetail from './component/detiail/EmpDetail';
import EmpEdit from './component/edit/EmpEdit';
import Login from './component/login/login';
import Signup from './component/signup/signup';

function App() {
  return (
    <div className="App">
      <h1>React JS CRUD Opertations</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />}></Route>
          <Route path='/dashboard' element={<EmpListing />}></Route>
          <Route path='/Signup' element={<Signup />}></Route>
          <Route path='/create' element={<EmpCreate />}></Route>

          <Route path='/dashboard/detail/:empid' element={<EmpDetail />}></Route>
          <Route path='/dashboard/edit/:empid' element={<EmpEdit />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );

}

export default App;
