import React, { Component } from 'react'

export class ManagerProfileContainer extends Component {
    render() {

        const {username} = this.props.user
        
        return (
            <div>
                <h3>Welcome: {username}</h3>
            </div>
        )
    }
}

export default ManagerProfileContainer
