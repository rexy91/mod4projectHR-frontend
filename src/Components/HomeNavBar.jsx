import React from 'react'
import {NavLink} from 'react-router-dom'



const HomeNavBar = (props) => {
    console.log(props)
    return (
        <div>
            <nav style={{backgroundColor: '#EBE9E1', color: 'black'}}>
                
                <NavLink exact to="/login">Log In </NavLink> {' - '}
                <NavLink to='/signup'>Sign Up</NavLink>
            </nav>
        </div>
    )
}

export default HomeNavBar
