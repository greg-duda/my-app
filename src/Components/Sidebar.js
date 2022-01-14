import React from 'react'
import { Link } from 'react-router-dom'
import Profile from '../Images/profile.png'

const Sidebar = () => {
    return (
        <>
            <div className='Sidebar'>
                <div className='user'>
                    <div className='image-container'>
                        <img src={Profile}></img>
                    </div>
                    <div className='user-name'>Grzegorz Duda</div>
                </div>
                <div className='Navigation'>
                    <Link to='/register'><button id='navbtn'>Register</button></Link>
                    <Link to='/list'><button id='navbtn'>List</button></Link>
                    <Link to='/userdetails'><button id='navbtn'>Details</button></Link>
                </div>
                <div className='settings'>
                    <button id='navbtn'>Logout</button>
                </div>

            </div>
        </>
    )
}

export default Sidebar
