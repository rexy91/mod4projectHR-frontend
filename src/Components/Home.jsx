import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
export class Home extends Component {

    render() {
        return (
            <div style ={{backgroundColor: '#EBE9E1', textAlign: 'center'}}>
                {localStorage.token ? <Redirect to = {`/profile/${this.props.currentUser.id}/companies`}/> : null }
                <h1>Welcome to Your Team's Time!</h1>
                <p>
                    This is your minimalist application that helps you, a leader in your company, manage the time of your team members. Feel free to make a free account to start generating your weekly schedules!
                </p><br></br>
                <div style = {{marginLeft: 'auto', marginRight: 'auto', width: '1vw', display: 'inline'}}>
                    <h2>Creators</h2> 
                    <h4>Rex Ye</h4>
                    <a href='https://www.linkedin.com/in/yu-hao-ye-b58703193/' target = 'blank'>Linked In</a> <br></br>
                    <a href = 'https://github.com/rexy91' target = 'blank'>GitHub Profile</a>
                    <h4>Jonathan Brierre</h4>
                    <a href = 'https://www.linkedin.com/in/jonathan-brierre-674251140/' target ='blank'>Linked In</a> <br></br>
                    <a href = 'https://github.com/jonathanbrierre' target = 'blank'>GitHub Profile</a>
                    
                </div>
            </div>
        )
    }
}

export default Home
