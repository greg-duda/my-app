import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import Profile from '../Images/profile.png'
import Modal from './Modal'
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
    const navigate = useNavigate()
    const [users, setUsers] = useState([])
    const [openModal, setOpenModal] = useState(false)
    const CurrentUser = users?.find((item) => item.isLoggedIn === true)
    

    useEffect(() => {
        axios.get('http://localhost:3002/users').then((res) => setUsers(res.data))
    }, [])
    return (
        <>
            <div className='Sidebar'>
                <div className='user'>
                    <div className='image-container'>
                        <img src={Profile}></img>
                    </div>
                    <div className='user-name'>{CurrentUser?.name.toUpperCase()} {CurrentUser?.surname.toUpperCase()}</div>
                </div>
                <div className='Navigation'>
                    <Link to='/register'><button id='navbtn'>Register</button></Link>
                    <Link to='/list'><button id='navbtn'>List</button></Link>
                    <Link to='/settings'><button id='navbtn'>Details</button></Link>
                </div>
                <div className='settings'>
                    <button onClick={() => setOpenModal(!openModal)} id='navbtn'>Logout</button>
                </div>
                {openModal && <Modal CurrentUser={CurrentUser} setOpenModal={setOpenModal} />}

            </div>
            
        </>
    )
}

export default Sidebar
