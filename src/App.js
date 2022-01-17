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
import Settings from './Components/Settings';
import SidebarEmpty from './Components/SidebarEmpty';
import Modal from './Components/Modal';

function App() {
  return (
    <>
    <Router>
      
    <div className="App">
      
      <Routes>
    <Route element={<><SidebarEmpty /><Register /></>} exact path='/register'>
    </Route>
    <Route element={<><SidebarEmpty /><Login /></>} exact path='/login'>
    </Route>
    <Route element={<><Sidebar /><UserDetails /></>} exact path='/settings'>
    </Route>
    <Route element={<><Sidebar /><List /></>} exact path='/list'>
    </Route>
    <Route element={<UserDetails />} exact path='/list/:id'>
    </Route>
    <Route element={<Modal />} exact path='modal'>
    </Route>
    </Routes>
    </div>
    </Router>
    </>
  );
}

export default App;
