import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Delete from '../Images/delete.png'
import Editing from '../Images/editing.png'
import { useNavigate } from 'react-router-dom'
import Next from '../Images/next.png'
import Prev from '../Images/prev.png'
import Profile from '../Images/profile.png'



const List = () => {
const [list, setList] = useState([])
const [change, setChange] = useState(false)
const [currentPage, setCurrentPage] = useState(1)
const [usersPerPage, setUsersPerPage] = useState(10)
const [limit, setLimit] = useState(10)
const [filter, setFilter] = useState('id-ascending')

const navigate = useNavigate()
const next = () => {
    setCurrentPage(prev => prev + 1)
}
const prev = () => {
    setCurrentPage(prev => prev - 1)
}

const filterHandler = (e) => {
    setFilter(e.target.value)
}
const byNameHandler = (e) => {
    if(filter !== 'alphabetic') {
        setFilter('alphabetic')
    } else if(filter === 'alphabetic') {
        setFilter('reverse')
    } else return true
}
const byIdHandler = () => {
    if(filter !== 'id-ascending') {
        setFilter('id-ascending')
    } else if(filter === 'id-ascending') {
        setFilter('id-descending')
    } else return true
}
const byPassHandler = () => {
    if(filter !== 'pass-ascending') {
        setFilter('pass-ascending')
    } else if(filter === 'pass-ascending') {
        setFilter('pass-descending')
    } else return true
}
useEffect(() => {
    axios.get('http://localhost:3002/users').then((res) => {
        setList(res.data)
    }
    )
}, [change])
console.log()

const allPages = Math.ceil(limit / usersPerPage)
    const lastIndex = currentPage * usersPerPage
    const firstIndex = lastIndex - usersPerPage
    const currentUsers = list?.slice(firstIndex, lastIndex)
    return (
        <div className='list-page'>
        <div className='list-container'>
            <table>
                <thead>
                    <tr>
                        
                        <th><input disabled type={'checkbox'}></input></th>
                        <th onClick={byIdHandler}>ID</th>
                        <th onClick={byNameHandler}>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th onClick={byPassHandler}>Password length</th>
                        <th>Action</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {currentUsers?.
                    sort((a, b) => filter === 'alphabetic' ? a.name.localeCompare(b.name) : filter === 'reverse' ? b.name.localeCompare(a.name) : true).
                    sort((a, b) => filter === 'id-ascending' ? a.id - b.id : filter === 'id-descending' ? b.id - a.id : true).
                    sort((a, b) => filter === 'pass-ascending' ? a.password.length - b.password.length : filter === 'pass-descending' ? b.password.length - a.password.length : true).
                    map((user) => <tr key={user.id}>
                        <td><input type={'checkbox'}></input></td>
                        <td>{user.id}</td>
                        <td><Link to={`/list/${user.id}`}><img src={Profile}></img> {user.name}</Link></td>
                        <td>{user.surname}</td>
                        <td>{user.email}</td>
                        <td>{user.password.length}</td>
                        <td><img src={Delete} onClick={() => {
                            axios.delete(`http://localhost:3002/users/${user.id}`)
                            setChange(!change)
                            console.log(change)
                            }}></img> <img onClick={ () => navigate(`/list/${user.id}`)} src={Editing}></img></td>
                    </tr>)}
                    
                </tbody>
            </table>
            <div className='list-nav'>
                
                <img src={Prev} onClick={prev}></img>
                <select onChange={filterHandler}>
                    <option value='id-ascending'>ID ascending</option>
                    <option value='id-descending'>ID descending</option>
                    <option value='pass-ascending'>Password ascending</option>
                    <option value='pass-descending'>Password descending</option>
                    <option value='alphabetic'>Alphabetically</option>
                    <option value='reverse'>Reverse alphabetically</option>
                </select>
                <img src={Next} onClick={next}></img>
                
            </div>

        
            
        </div>
        </div>
    )
}

export default List
