import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import Profile from '../Images/profile.png'
export const Header = styled.h3`
color: white;
font-size: 20px;
margin: 0;
align-self: center;
`
export const Span = styled.span`
color: white;
font-size: 1em;
margin: 0;
`
export const SignBtn = styled.button`
width: 70%;
justify-self: center;
align-self: center;
height: 30px;
border-radius: 10px;
background-color: #2d3142;
border: none;
transition: 0.5s;
margin-top: 20px;
color: whitesmoke;
cursor: pointer;

&:hover {
    background-color: #EF8354;
}
`

const Register = () => {
    const [users, setUsers] = useState([])
    const [error, setError] = useState('')
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [photo, setPhoto] = useState('')
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const navigate = useNavigate()

    const submitHandler = (e) => {
        e.preventDefault()
        const isRegistered = users?.find(user => user.email === email)
        if (isRegistered) {
            setError('Email already exists')
        } else if (password.length < 5) {
            setError('Password must be at least 5 characters')
        }
        else {
            setError('')
            const user = { name, surname, email, password, photo, isLoggedIn}
            axios.post('http://localhost:3002/users', user)
                .then(navigate('/login'))

        }
        console.log(error)
    }

    useEffect(() => {
        axios.get('http://localhost:3002/users').then((res) => setUsers(res.data))
    }, [])
    return (
        <div className='register-page'>
            
            

            <div className='register-container'>
            <Header>Create new account</Header>
                <form onSubmit={submitHandler}>
                    <input onChange={(e) => setName(e.target.value.toLowerCase())} required placeholder='Name...' type={'text'}></input>
                    <input onChange={(e) => setSurname(e.target.value.toLowerCase())} required placeholder='Surname...' type={'text'}></input>
                    <input onChange={(e) => setEmail(e.target.value.toLowerCase())} required placeholder='Email...' type={'email'}></input>
                    <input onChange={(e) => setPassword(e.target.value.toLowerCase())} required placeholder='Password...' type={'password'}></input>
                    <SignBtn onClick={() => console.log(name, surname, email, password)} type='submit'>SIGN UP!</SignBtn>
                    
                </form>
                
                <Span>Already signed up? Please <Link to='/login'>Login</Link></Span>
                {error ? <h5 style={{color: 'red', margin: '0'}}>{error}</h5> : null}
            </div>

        </div>
    )
}

export default Register

        // const user = {name, surname, email, password}
        // axios.post('http://localhost:3002/users', user)
        // .then(navigate('/login'))
        // console.log(error)