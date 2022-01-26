import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Profile from '../Images/profile.png'

const UserDetails = ({ currentUser }) => {
    const [user, setUser] = useState([])
    const [image, setImage] = useState('')
    const { id } = useParams()
    const [showPas, setShowPas] = useState('password')
    // const [photo, setPhoto] = useState([])

    const Show = () => {
        if(showPas === 'password') {
            setShowPas('text')
        } else {
            setShowPas('password')
        }return true
    }
    
    // const submitHandler = (e) => {
    //     const objectURL = URL.createObjectURL(image)
    //     e.preventDefault()
    //     axios.patch(`http://localhost:3002/users/${id}`, {
    //         photo: `${objectURL}`
    //     })
   
    // }
    // useEffect(() => {
    //     axios.get("blob:http://localhost:3000/ae8856a0-6a75-4e16-bcdf-0af06a1468cf").then((res) => {
    //         setPhoto(res.data)
    //     }, [])
    // })

    useEffect(() => {
        axios.get(`http://localhost:3002/users/${id}`).then((res) => setUser(res.data))
    }, [id])
    return (
        <div className='user-details-page'>
            <div className='user-details-container'>

                <div className='user-nav'>
                    <form>
                        <div className='user-image'><img src={Profile}></img></div>
                        <input  disabled onChange={(e) => setImage(e.target.files[0])} type='file'></input>
                        <button disabled type='submit'>Save image</button>
                    </form></div>
                <div className='user-details'>
                    <h4>Name: </h4><input disabled value={user?.name} type='text'></input>
                    <h4>Surname: </h4><input disabled value={user?.surname} type='text'></input>
                    <h4>Email:</h4><input disabled value={user?.email} type='text'></input>
                    <h4>Password:<button onClick={Show}>{showPas === 'text' ? 'Hide Password' : 'Show Password'}</button></h4><input disabled value={user?.password} type={`${showPas}`}></input>
                </div>




            </div>

        </div>
    )
}

export default UserDetails



