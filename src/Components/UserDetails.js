import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Profile from '../Images/profile.png'

const UserDetails = ({ currentUser }) => {
    const [user, setUser] = useState([])
    const [image, setImage] = useState('')
    const { id } = useParams()
    const [showPas, setShowPas] = useState('password')

    const Show = () => {
        if(showPas === 'password') {
            setShowPas('text')
        } else {
            setShowPas('password')
        }return true
    }
    const submitHandler = (e) => {
        e.preventDefault()
        axios.patch(`http://localhost:3002/users/${id}`, {
            photo: `url`
        })
        console.log(image)
    }

    useEffect(() => {
        axios.get(`http://localhost:3002/users/${id}`).then((res) => setUser(res.data))
    }, [id])
    return (
        <div className='user-details-page'>
            <div className='user-details-container'>

                <div className='user-nav'>
                    <form onSubmit={submitHandler}>
                        <div className='user-image'><img src={Profile}></img></div>
                        <input onChange={image} type={'file'}></input>
                        <button type='submit'>Save image</button>
                    </form></div>
                <div className='user-details'>
                    <h4>Name: </h4><input disabled value={user?.name} type={'text'}></input>
                    <h4>Surname: </h4><input disabled value={user?.surname} type={'text'}></input>
                    <h4>Email:</h4><input disabled value={user?.email} type={'text'}></input>
                    <h4>Password:<button onClick={Show}>{showPas === 'text' ? 'Hide Password' : 'Show Password'}</button></h4><input disabled value={user?.password} type={`${showPas}`}></input>
                </div>




            </div>

        </div>
    )
}

export default UserDetails



