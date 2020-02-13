import React from 'react'
import {NavLink} from 'react-router-dom'
import Button from '@material-ui/core/Button'
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl'


const HomeNavBar = () => {
    return (
        <div>
            <nav style={null}>

                <NavLink exact to="/login">Log In </NavLink>
                
                <NavLink to='/signup'>Sign Up</NavLink>
            </nav>

        </div>
    )
}

export default HomeNavBar
