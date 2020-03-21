import React from 'react'
import {Link} from 'react-router-dom'
import Swal from 'sweetalert2'

class NewEmployeeForm extends React.Component  {
    
    state = {
        newEmployee: {
            name:'',
            email: ''
        },
        confirmation: null
    }

    onChange = (e) => {
        this.setState({newEmployee:{...this.state.newEmployee, [e.target.name]: e.target.value}})
    }

    onSubmit = (e) => {
        e.preventDefault()
        fetch('https://yourteamtimebackend.herokuapp.com/new_employee',{
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'accept': 'application/json'
            },
            body: JSON.stringify({
                ...this.state.newEmployee,
                company_id: this.props.match.params.companyId
            })
        })
        .then(resp => resp.json())
        .then(this.setState({newEmployee: {name: '', email: ''}}))
        Swal.fire({icon: 'success', text: 'Successfully Created a New Employee! Click the Back button to see!'})
    }

    // alertNewEmployee = () => {
    //     alert(this.state.confirmation)
    //     this.setState({confirmation: null})
    // }
    render(){
        
        return (
            <div>
                <h3>Create a New Employee!</h3>
                <form onSubmit = {this.onSubmit}>
                    <label>Employee Name</label>
                    <input type='text' name = 'name' value ={this.state.newEmployee.name} onChange ={this.onChange} />
                    <label>Employee Email</label>
                    <input type='text' name = 'email' value ={this.state.newEmployee.email} onChange ={this.onChange} />
                    <input type = 'submit'/>
                </form>
                <br></br>
                {/* {this.state.confirmation ? this.alertNewEmployee(): null} */}
                <Link to={`/profile/${this.props.match.params.id}/companies/${this.props.match.params.companyId}`}><button>Back to Employees</button></Link>
            </div>
        )
    }
}

export default NewEmployeeForm