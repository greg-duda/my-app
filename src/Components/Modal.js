import React from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Modal = ({ setOpenModal, CurrentUser }) => {
    const navigate = useNavigate()
    const logoutHandle = () => {
        axios.patch(`http://localhost:3002/users/${CurrentUser?.id}`, {
                    isLoggedIn: false
                }).then(navigate('/login'))
    }

    return (
        <div className='modal-background'>
            <div className='modal-container'>
                <div className='modal-title'>
            <h1>Are you sure you want Logout?</h1>
                </div>
                <div className='modal-body'>
                <button onClick={logoutHandle}>Yes</button>
                <button onClick={() => setOpenModal(false)}>No</button>
                </div>
            </div>
            Modal
        </div>
    )
}

export default Modal
