import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Profile from '../Images/profile.png'

const UserDetails = ({currentUser}) => {
    const [user, setUser] = useState([])
    const [image, setImage] = useState('')
    const {id} = useParams()
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
                <div className='user-details-image'>
                <img alt='default-profile' src={Profile}></img>
                <div className='details-nav'>
                    <form onSubmit={submitHandler}>
                    <input onChange={image} type={'file'}></input>
                    <button type='submit'>Save image</button>
                    </form>
                    </div>
                </div>
                <div className='user-details'>
                    <input disabled value={user?.name} type={'text'}></input>
                    <input disabled value={user?.surname} type={'text'}></input>
                    <input disabled value={user?.email} type={'text'}></input>
                    <input disabled value={user?.password} type={'text'}></input>
                </div>
                

            </div>
            
        </div>
    )
}

export default UserDetails
