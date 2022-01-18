import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Header } from './Register'
import { SignBtn } from './Register'
import { Span } from './Register'
import { Link } from 'react-router-dom'

const Login = ({ users, currentUser, change, setChange }) => {
    const [error, setError] = useState('')
    const [emailInput, setEmailInput] = useState('')
    const [passwordInput, setPasswordInput] = useState('')

    const navigate = useNavigate()
    const submitHandler = (e) => {
        e.preventDefault()
        users?.map((item) => {
            if (item.email === emailInput && item.password === passwordInput) {
                setError('')
                setChange(!change)
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
                {!currentUser ? <> <form onSubmit={submitHandler}>
                    <Header>Log in to your account</Header>
                    <input onChange={(e) => setEmailInput(e.target.value.toLowerCase())} required placeholder='Email...' type={'email'}></input>
                    <input onChange={(e) => setPasswordInput(e.target.value)} required placeholder='Password...' type={"password"}></input>
                    <SignBtn type='submit'>Sign in</SignBtn>
                    <Span>Forgot your password?<Link to='/'> Try this</Link></Span>
                    {error ? <h5 style={{color: 'red', margin: '0'}}>{error}</h5> : null}
                </form></> :<Header>You are already Logged in {currentUser.name.toUpperCase()}</Header> }
                

            </div>
        </div>
    )
}

export default Login
