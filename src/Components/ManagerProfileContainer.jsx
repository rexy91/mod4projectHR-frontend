import React, { Component } from 'react'
import CompaniesList from './CompaniesList'


export class ManagerProfileContainer extends Component {



    logOut = () => {
        localStorage.clear()
        this.props.history.push(`/home`)
        
    }

    renderManagerCompanies = () => {
        return <CompaniesList match = {this.props.match} companies = {this.props.user.companies} />
    }


    render() {
        const {username} = this.props.user
        console.log(this.props.match)
        return (
            <div>
                <h3>Welcome: {username}</h3>
                <button onClick = {this.logOut}>Log Out</button>
                {this.renderManagerCompanies()}
            </div>
        )
    }
}

export default ManagerProfileContainer
