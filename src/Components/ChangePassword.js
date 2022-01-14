import React, {useState, useEffect} from 'react'
import axios from 'axios'

const ChangePassword = () => {
    const [oldPass, setOldPass] = useState('')
    const [newPass, setNewPass] = useState('')
    const [confirmPass, setConfirmPass] = useState('')

    return (
        <div className='password-change'>
            <form>
                <input placeholder='Old password...' type={'password'}></input>
                <input placeholder='New password...' type={'password'}></input>
                <input placeholder='Confirm new password...' type={'password'}></input>
                <button></button>
            </form>

            
        </div>
    )
}

export default ChangePassword
