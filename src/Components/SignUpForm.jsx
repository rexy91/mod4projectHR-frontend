import React from 'react'

const SignUpForm = () => {

    return (
        <div>
            <p>Let's Sign Up:</p>
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

export default SignUpForm
