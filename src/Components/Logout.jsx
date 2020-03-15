import React, { Component } from 'react'
import {withRouter} from 'react-router'

export class Logout extends Component {

logOut = () => {
        localStorage.clear()
        this.props.history.push(`/`)
        
    }
    render() {
        return (
            <div>
                <button onClick = {this.logOut}>Log Out</button><br></br>
            </div>
        )
    }
}

export default withRouter(Logout)
