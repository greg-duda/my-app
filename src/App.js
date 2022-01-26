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

import Modal from './Components/Modal';
import Sidebar from './Components/Sidebar';


function App() {
  const [users, setUsers] = useState([])
  const [change, setChange] = useState(false)
  
  useEffect(() => {
    axios.get('http://localhost:3002/users').then((res) => setUsers(res.data))
  }, [change])
  const currentUser = users?.find((user) => user.isLoggedIn === true)

  
  return (
    <>
    <Router>
      
    <div className="App">
      
      <Routes>
    <Route element={<><Sidebar change={change} setChange={setChange}  currentUser={currentUser}  /><Register change={change} setChange={setChange} users={users} /></>} exact path='/'>
    </Route>
    <Route element={<><Sidebar change={change} setChange={setChange} currentUser={currentUser} /><Login change={change} setChange={setChange} users={users} currentUser={currentUser} /></>} exact path='/login'>
    </Route>
    <Route element={<><Sidebar change={change} setChange={setChange}  currentUser={currentUser} /><Settings currentUser={currentUser} /></>} exact path='/settings'>
    </Route>
    <Route element={<><Sidebar change={change} setChange={setChange} currentUser={currentUser} /><List currentUser={currentUser} /></>} exact path='/list'>
    </Route>
    <Route element={<><Sidebar change={change} setChange={setChange} currentUser={currentUser} /> <UserDetails /></>} exact path='/list/:id'>
    </Route>
    <Route element={<><Sidebar change={change} setChange={setChange} currentUser={currentUser} /> <UserDetails currentUser={currentUser} /></>} exact path={`/list/:${currentUser?.id}`}>
    </Route>
    <Route element={<Modal change={change} setChange={setChange} />} exact path='modal'>
    </Route>
    </Routes>
    </div>
    </Router>
    </>
  );
}

export default App;
