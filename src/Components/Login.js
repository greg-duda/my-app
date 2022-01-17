import React, {useEffect, useState} from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'
import { Header } from './Register'
import { SignBtn } from './Register'
import { Span } from './Register'
import { Link } from 'react-router-dom'

const Login = () => {
    const [error, setError] = useState('')
    const [users, setUsers] = useState([])
    const [emailInput, setEmailInput] = useState('')
    const [passwordInput, setPasswordInput] = useState('')

    const navigate = useNavigate()

    useEffect(() => {
        axios.get('http://localhost:3002/users').then((res) => setUsers(res.data))
    }, [])
    const submitHandler = (e) => {
        e.preventDefault()
        users?.map((item) => {
            if(item.email === emailInput && item.password === passwordInput) {
                setError('')
                axios.patch(`http://localhost:3002/users/${item.id}`, {
                    isLoggedIn: true
                }).then(navigate('/list'))
            }
            else if(emailInput === '' || passwordInput === '') {
                setError('Wypełnij puste pola')
            }
            else if(emailInput === item.email) {
                setError('Podany adres email jest już zajęty')
            }
            else {setError('Nieprawidłowe dane')}
        })
    }
    return (
        <div>
            <div className='login-page'>
            
            {error ? <h3>{error}</h3> : null}
            <form onSubmit={submitHandler}>
            <Header>Log in to your account</Header>
                <input onChange={(e) => setEmailInput(e.target.value.toLowerCase())} required placeholder='Email...' type={'email'}></input>
                <input onChange={(e) => setPasswordInput(e.target.value)}required placeholder='Password...' type={"password"}></input>
                <SignBtn type='submit'>Sign in</SignBtn>
                <Span>Forgot your password?<Link to='/register'> Try this</Link></Span>
            </form>
            
            </div>
        </div>
    )
}

export default Login
