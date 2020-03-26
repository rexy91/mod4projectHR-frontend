  
import React, { Component } from 'react'
import CompaniesList from './CompaniesList'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'


export class ManagerProfileContainer extends Component {

    state = {
        companies: []
    }


    renderManagerCompanies = () => {
        return <CompaniesList match = {this.props.match} companies = {this.state.companies} deleteCompany = {this.deleteCompany} />
    }

    componentDidMount(){
        fetch(`https://yourteamtimebackend.herokuapp.com/managers`)
        .then(resp => resp.json())
        .then(managers => {
            let foundManager = managers.find(manager => manager.id === this.props.user.id)
            this.setState({companies: foundManager.companies})
        })
    }

    deleteCompany = (id) => {
        fetch(`https://yourteamtimebackend.herokuapp.com/companies/${id}`, {method: 'DELETE'})
        .then(resp => resp.json())
        .then(data => {
            Swal.fire({icon: 'success', text: data.message})
            let newCompanies = this.state.companies.filter(company => company.id !== id)
            this.setState({companies: newCompanies})
        })
    }

    render() {
        const {firstName} = this.props.user
        return (
            <div>
                {/* <button onClick = {this.logOut}>Log Out</button><br></br> */}
                <Link to={`/profile/${this.props.user.id}/companies/new-company`}><button>Create Team/Company</button></Link>
                <h1>Welcome {firstName}</h1>
                <h3>These are the teams/companies you manage</h3>
                {this.renderManagerCompanies()}
            </div>
        )
    }
}

export default ManagerProfileContainer