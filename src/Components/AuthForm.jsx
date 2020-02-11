import React, { Component } from 'react'

export class AuthForm extends Component {

    state = {
        username: '',
        password: ''
      }

      onChange = (e) => {
          this.setState({[e.target.name]: e.target.value})
      }

      onSubmit = (e) => {
        
        e.preventDefault()
        this.props.onLogInSubmit(this.state)
        this.setState({
            username:'',
            password:''
        })
      }

    render() {
        return (
            <>
                <p>Login Form</p>
                <form class = "ui form login-form" onSubmit = {this.onSubmit}>
                    <p>Please Login</p>
                    <label class = 'login-label'>Username</label>
                    <input class = 'login-input'type = 'text' placeholder = 'Your Username' name= 'username' value = {this.state.username} onChange={this.onChange}/>
                    <label class = 'login-label'>Password</label>
                    <input class = 'login-input'type = 'password' placeholder = 'Your Password' name = 'password' value = {this.state.password} onChange={this.onChange}/>
                    <input id = 'loginSubmit' type = 'submit'/>
                </form>
            
            </>
            )
    }
}

export default AuthForm
