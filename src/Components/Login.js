import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Header } from './Register'
import { SignBtn } from './Register'
import { Span } from './Register'
import { Link } from 'react-router-dom'
import { Message } from './Settings'

const Login = ({ users }) => {
    const [error, setError] = useState('')
    const [emailInput, setEmailInput] = useState('')
    const [passwordInput, setPasswordInput] = useState('')

    const navigate = useNavigate()
    const submitHandler = (e) => {
        e.preventDefault()
        users?.map((item) => {
            if (item.email === emailInput && item.password === passwordInput) {
                setError('')
                axios.patch(`http://localhost:3002/users/${item.id}`, {
                    isLoggedIn: true
                }).then(navigate('/list'))
            }
            else if (emailInput === '' || passwordInput === '') {
                setError('Fill empty inputs')
            }

            else { setError('Invalid data') }
        })
        return true
    }
    return (
        <div>
            <div className='login-page'>

                <form onSubmit={submitHandler}>
                    <Header>Log in to your account</Header>
                    <input onChange={(e) => setEmailInput(e.target.value.toLowerCase())} required placeholder='Email...' type={'email'}></input>
                    <input onChange={(e) => setPasswordInput(e.target.value)} required placeholder='Password...' type={"password"}></input>
                    <SignBtn type='submit'>Sign in</SignBtn>
                    <Span>Forgot your password?<Link to='/register'> Try this</Link></Span>
                    {error ? <Message>{error}</Message> : null}
                </form>

            </div>
        </div>
    )
}

export default Login
