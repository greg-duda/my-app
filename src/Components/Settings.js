import React, {useState} from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { Header } from './Register'
import { Link } from 'react-router-dom'

export const Message = styled.h3`
justify-self: center;
width: 70%;
height: 50px;
background-color: ${((props) => props.correct ? 'greenyellow' : 'crimson')};
color: ${((props) => props.correct ? 'green' : 'darkgray')};
text-align: center;
border-radius: 10px;
vertical-align: middle;
line-height: 50px;
`
const Settings = ({currentUser}) => {
    const [msg, setMsg] = useState('')
    const [oldPas, setOldPas] = useState('')
    const [newPas, setNewPas] = useState('')
    const [confirm, setConfirm] = useState('')

    const changeHandler = (e) => {
        e.preventDefault()
        if(oldPas === currentUser?.password && newPas.length > 4 && newPas === confirm) {
            axios.patch(`http://localhost:3002/users/${currentUser.id}`, {
                password: `${newPas}`
            }).then(setMsg('Succesfully changed password'))
        } else if(oldPas !== currentUser?.password) {
            setMsg('Your old password does not match, try again')
        } else if(newPas.length < 4) {
            setMsg('Your new password must be at least 4 characters')
        } else if(newPas !== confirm) {
            setMsg('Your new password must be confirmed')
        }
    }

    return (
        <div className='settings-page'>
                {currentUser ? <> <form onSubmit={changeHandler} className='settings-container'>
                <h4>Old password:</h4>
                <input disabled={msg === 'Succesfully changed password'} onChange={(e) => setOldPas(e.target.value)} placeholder='Enter old password...' type='text'></input>
                <h4>New password:</h4>
                <input disabled={msg === 'Succesfully changed password'} onChange={(e) => setNewPas(e.target.value)} placeholder='Enter new password...' type='text'></input>
                <h4>Confirm new password:</h4>
                <input disabled={msg === 'Succesfully changed password'} onChange={(e) => setConfirm(e.target.value)} placeholder='Confirm new password...' type='text'></input>
                <button disabled={msg === 'Succesfully changed password'} type='submit'>Change password</button>
                {msg && msg === 'Succesfully changed password' ? <Message correct>{msg}</Message> : msg && msg !== 'Succesfully changed password' ? <Message>{msg}</Message> : null}
                </form>
                </> : <><Header>You need to <Link to={'/login'}>Sign in</Link> to view settings</Header></>}
               
                
            
            
        </div>
    )
}

export default Settings
