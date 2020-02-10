import React, { Component } from 'react'

export class ManagerProfileContainer extends Component {
    logOut = () => {
        localStorage.clear()
        this.props.history.push(`/home`)
    }
    render() {
        const {username} = this.props.user
        return (
            <div>
                <h3>Welcome: {username}</h3>
                <button onClick = {this.logOut}>Log Out</button>
            </div>
        )
    }
}

export default ManagerProfileContainer
