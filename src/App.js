import { useEffect, useState } from 'react';
import axios from 'axios';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Login from './Components/Login';
import List from './Components/List';
import Register from './Components/Register';
import UserDetails from './Components/UserDetails';
import Settings from './Components/Settings';
import SidebarEmpty from './Components/SidebarEmpty';
import Modal from './Components/Modal';
import Sidebar from './Components/Sidebar';


function App() {
  const [users, setUsers] = useState([])
  const currentUser = users?.find((user) => user.isLoggedIn === true)

  useEffect(() => {
    axios.get('http://localhost:3002/users').then((res) => setUsers(res.data))
  }, [])
  return (
    <>
    <Router>
      
    <div className="App">
      
      <Routes>
    <Route element={<><SidebarEmpty /><Register users={users} /></>} exact path='/register'>
    </Route>
    <Route element={<><SidebarEmpty /><Login users={users} /></>} exact path='/login'>
    </Route>
    <Route element={<><Sidebar currentUser={currentUser} /><Settings currentUser={currentUser} /></>} exact path='/settings'>
    </Route>
    <Route element={<><Sidebar currentUser={currentUser} /><List /></>} exact path='/list'>
    </Route>
    <Route element={<><Sidebar currentUser={currentUser} /> <UserDetails /></>} exact path='/list/:id'>
    </Route>
    <Route element={<><Sidebar currentUser={currentUser} /> <UserDetails currentUser={currentUser} /></>} exact path={`/list/:${currentUser?.id}`}>
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
