import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Profile from '../Images/profile.png'

const UserDetails = () => {
    const [user, setUser] = useState([])
    const [image, setImage] = useState('')
    const {id} = useParams()
const submitHandler = (e) => {
    e.preventDefault()
    // axios.post(`http://localhost:3002/users/${id}`, {
    //     photo: `${image}`
    // })
    console.log(image)
}

useEffect(() => {
    axios.get(`http://localhost:3002/users/${id}`).then((res) => setUser(res.data))
}, [])
    return (
        <div className='user-details-page'>
            <div className='user-details-container'>
                <div className='user-details-image'>
                <img src={Profile}></img>
                <div className='details-nav'>
                    <form>
                    <input onChange={image} type={'file'}></input>
                    <button type='submit'>Save image</button>
                    </form>
                    </div>
                </div>
                <div className='user-details'>
                    <input value={user?.name} type={'text'}></input>
                    <input value={user?.surname} type={'text'}></input>
                    <input value={user?.email} type={'text'}></input>
                    <input value={user?.password} type={'text'}></input>
                </div>
                

            </div>
            
        </div>
    )
}

export default UserDetails
