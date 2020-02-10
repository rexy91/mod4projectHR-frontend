import React from 'react'
import {NavLink} from 'react-router-dom'

const HomeNavBar = () => {
    return (
        <div>
            <aside className='side-nav'>
                <NavLink exact to="/home">Home Page</NavLink>
                <br></br>
                <NavLink exact to="/login">Log In </NavLink>
                <br></br>
                <NavLink to='/signup'>Sign Up</NavLink>
            </aside>
        </div>
    )
}

export default HomeNavBar
