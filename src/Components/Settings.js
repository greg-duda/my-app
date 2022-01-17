import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Settings = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3002/users').then((res) => setUsers(res.data))
    }, [])
    const currentUser = users?.find((item) => item.isLoggedIn === true)
    console.log(currentUser)
    
    return (
        <div>
            
        </div>
    )
}

export default Settings
