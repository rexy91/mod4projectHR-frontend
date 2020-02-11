import React from 'react'
import {NavLink} from 'react-router-dom'
import Button from '@material-ui/core/Button'
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl'


const HomeNavBar = () => {
    return (
        // <div>
        //     <nav class='home-nav-bar'>
        //         
        //         <br></br>
        //         <NavLink exact to="/login">Log In </NavLink>
        //         <br></br>
        //         <NavLink to='/signup'>Sign Up</NavLink>
        //     </nav>

        // </div>
        <div className="demo-big-content">
    <Layout>
        <Header title="HR Scheduling System" scroll>
            <Navigation>
            <NavLink exact to="/home">Home Page</NavLink>
            <NavLink exact to="/login">Log In </NavLink>
            <NavLink to='/signup'>Sign Up</NavLink>
            </Navigation>
        </Header>
        <Drawer title="Title">
            <Navigation>
                <p>dsfdsf</p>
                <a href="#">Link</a>
                <a href="#">Link</a>
                <a href="#">Link</a>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
        </Content>
    </Layout>
</div>
    )
}

export default HomeNavBar
