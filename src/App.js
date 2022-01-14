import Register from './Components/Register';
import './App.css';
import Sidebar from './Components/Sidebar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Link } from 'react-router-dom'
import Login from './Components/Login';
import List from './Components/List';
import ChangePassword from './Components/ChangePassword';
import UserDetails from './Components/UserDetails';

function App() {
  return (
    <>
    <Router>
      <Sidebar />
    <div className="App">
      
      <Routes>
    <Route element={<Register />} exact path='/register'>
    </Route>
    <Route element={<Login />} exact path='/login'>
    </Route>
    <Route element={<ChangePassword />} exact path='/changepassword'>
    </Route>
    <Route element={<List />} exact path='/list'>
    </Route>
    <Route element={<UserDetails />} exact path='/list/:id'>
    </Route>
    </Routes>
    </div>
    </Router>
    </>
  );
}

export default App;
