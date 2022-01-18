import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Profile from '../Images/profile.png'
import Modal from './Modal'
import Logout from '../Images/logout.png'
import List from '../Images/list.png'
import Info from '../Images/info.png'
import User from '../Images/user.png'

const Sidebar = ({ currentUser, change, setChange }) => {

    const [openModal, setOpenModal] = useState(false)
    useEffect(() => {
        console.log(openModal)
    },[])
    return (
        <>
            {currentUser ? <> <div className='Sidebar'>
                <div className='user'>
                    <div className='image-container'>
                        <img alt='default-profile' src={Profile}></img>
                    </div>
                    <div className='user-name'>{currentUser?.name.toUpperCase()} {currentUser?.surname.toUpperCase()}</div>
                </div>
                <div className='Navigation'>
                    <Link to='/list'><button id='navbtn'><img alt='list' src={List}></img>List</button></Link>
                    <Link to={`/list/${currentUser?.id}`}><button id='navbtn'><img alt='info' src={Info}></img>Information</button></Link>
                    <Link to='/settings'><button id='navbtn'><img alt='user' src={User}></img>Settings</button></Link>
                </div>
                <div className='settings'>
                    <button onClick={() => setOpenModal(!openModal)} id='navbtn'><img alt='logout' src={Logout}></img>Logout</button>
                </div>
                {openModal && <Modal change={change} setChange={setChange} currentUser={currentUser} openModal={openModal} setOpenModal={setOpenModal} />}

            </div>
            </> : <><div className='SidebarEmpty'>
                <div className='Navigation-empty'>

                    <img alt='default-profile' src={Profile}></img>
                    <h3 style={{ textAlign: 'center' }}>Please <Link to='/login'>Sign in </Link>to see more</h3>
                </div>


            </div> </>}

        </>
    )
}

export default Sidebar
