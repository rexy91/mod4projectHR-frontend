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
        console.log('hello')
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
                <form class = "ui form login-form" onSubmit = {this.onSubmit}>
                    <p>Please Login</p> <br></br>
                    {'(Note - As the backend database is being hosted on Heroku, on your initial auth, you may experience a delay as the server takes time to fire up. Please only submit form once.)'}<br></br>
                    <label class = 'login-label'>Username</label>
                    <input class = 'login-input'type = 'text' placeholder = 'Your Username' name= 'username' value = {this.state.username} onChange={this.onChange}/> <br></br>
                    <label class = 'login-label'>Password</label>
                    <input class = 'login-input'type = 'password' placeholder = 'Your Password' name = 'password' value = {this.state.password} onChange={this.onChange}/> <br></br>
                    <input id = 'loginSubmit' type = 'submit'/>
                    
                </form>
            
            </>
            )
    }
}

export default AuthForm
