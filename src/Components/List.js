import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Delete from '../Images/delete.png'
import Editing from '../Images/editing.png'
import { useNavigate } from 'react-router-dom'
import Next from '../Images/next.png'
import Prev from '../Images/prev.png'
import Sort from '../Images/sort.png'


const List = () => {
const [list, setList] = useState([])
const [change, setChange] = useState(false)
const [currentPage, setCurrentPage] = useState(1)
const [usersPerPage, setUsersPerPage] = useState(10)
const [limit, setLimit] = useState(10)
const [sort, setSort] = useState(false)

const navigate = useNavigate()
const next = () => {
    setCurrentPage(prev => prev + 1)
}
const prev = () => {
    setCurrentPage(prev => prev - 1)
}
const sortHandler = () => {
    setSort((prev) => !prev)
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
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Password length</th>
                        <th>Action</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {currentUsers?.
                    sort((a, b) => !sort ? a.id - b.id : a.name.localeCompare(b.name)).
                    map((user) => <tr key={user.id}>
                        <td><input type={'checkbox'}></input></td>
                        <td>{user.id}</td>
                        <td><Link to={`/list/${user.id}`}>{user.name}</Link></td>
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
                <img src={Sort} onClick={sortHandler}></img>
                <img src={Next} onClick={next}></img>
                
            </div>

        
            
        </div>
        </div>
    )
}

export default List
