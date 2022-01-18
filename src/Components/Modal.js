import React from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'

const ModalBtn = styled.button `
width: 80%;
height: 40px;
background-color: ${((props) => props.yes ? 'greenyellow' : 'red')};
border: none;
border-radius: 5px;
cursor: pointer;
transition: 0.5s;
&:hover {
    background-color: whitesmoke;
    color: #2d3142;
}
`
const ModalTitle = styled.h2 `
text-align: center;
`
const Modal = ({ setOpenModal, currentUser, change, setChange, openModal }) => {
    const navigate = useNavigate()
    const logoutHandle = () => {
        
        axios.patch(`http://localhost:3002/users/${currentUser?.id}`, {
                    isLoggedIn: false
                }).then(() => {
                    setChange(!change)
                    setOpenModal(false)
                }).then( navigate('/login'))
                
    }

    return (
        
            <div className='modal-container'>
                <div className='modal-title'>
                <ModalTitle>Are you sure you want to Logout?</ModalTitle>
                </div>
                <div className='modal-body'>
                <ModalBtn yes onClick={logoutHandle}>Yes</ModalBtn>
                <ModalBtn onClick={() => setOpenModal(!openModal)}>No</ModalBtn>
                </div>
            </div>
    
    )
}

export default Modal
