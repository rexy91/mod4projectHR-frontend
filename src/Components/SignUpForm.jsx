import React, { Component } from 'react'

export class SignUpForm extends Component {

    state={
        username: '',
        password: '',
        firstName: '',
        lastName: '',
        email:''
    }

    onChange = (evt) => {this.setState({[evt.target.name]:evt.target.value})}

    onSubmit = (evt) => {
        evt.preventDefault()
        this.props.onSignUpSubmit(this.state)
        
    } 
           
    render() {
        return (
            <div>
                    <p>Let's Sign Up:</p>
                    <form onSubmit = {this.onSubmit}>
                        <label>Username</label>
                        <input type = 'text' placeholder = 'Your Username' name= 'username' value = {this.state.username} onChange={this.onChange}/>
                        <label>Password</label>
                        <input type = 'password' placeholder = 'Your Password' name = 'password' value = {this.state.password} onChange={this.onChange}/>
                        <label >First Name</label>
                        <input type = 'text' placeholder = 'First Name' name = 'firstName' value = {this.state.firstName} onChange={this.onChange}/>
                        <label >Last Name</label>
                        <input type = 'text' placeholder = 'Last Name' name = 'lastName' value = {this.state.lastName} onChange={this.onChange}/>
                        <label >Email</label>
                        <input type="text" placeholder = "Your Email" name = 'email' value = {this.state.email} onChange = {this.onChange}/>
                        <input type = 'submit'/>

                    </form>
            </div>
        )
    }
}

export default SignUpForm



