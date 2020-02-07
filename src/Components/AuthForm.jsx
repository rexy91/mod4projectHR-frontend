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
      }

    render() {
        return (
            <div>
                <form onSubmit = {this.onSubmit}>
                    <label>Username</label>
                    <input type = 'text' placeholder = 'Your Username' name= 'username' value = {this.state.username} onChange={this.onChange}/>
                    <label>Password</label>
                    <input type = 'password' placeholder = 'Your Password' name = 'password' value = {this.state.password} onChange={this.onChange}/>
                    <input type = 'submit'/>
                </form>
            
            </div>
            )
    }
}

export default AuthForm
