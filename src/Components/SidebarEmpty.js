import React from 'react'
import { Link } from 'react-router-dom'
import Profile from '../Images/profile.png'

const SidebarEmpty = () => {
    return (
        <>
            <div className='SidebarEmpty'>
                <div className='Navigation-empty'>
                
                     <img src={Profile}></img>
                     <h3 style={{textAlign: 'center'}}>Please Sign in to see more</h3>
                </div>
               

            </div>
        </>
    )
}

export default SidebarEmpty
