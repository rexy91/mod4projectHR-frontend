
import AuthForm from './Components/AuthForm'
import ManagerProfileContainer from './Components/ManagerProfileContainer'
import Home from './Components/Home'
import HomeNavBar from './Components/HomeNavBar'

// React librarys 
import React from 'react';
import { Link, NavLink } from 'react-router-dom'
import {withRouter} from 'react-router-dom'
import { Switch, Route } from 'react-router';
import SignUpForm from './Components/SignUpForm';



class App extends React.Component {

  // Initialize state token not be empty

  state = {
    currentUser: {
      employees: [],
      username: '',
      id: 0
    },
    token: ''
  }

  componentDidMount() {
    // If localStorage has a current token, fetch the token to be persisted in the backend. 

    if (localStorage.getItem("token")) {
      let token = localStorage.getItem("token")
      fetch("http://localhost:3000/persist", {
        // here getting back the token instance from backend persist 
        headers: {
          "Authorization": `bearer ${token}`
        }
      })
      .then(r => r.json())
      .then((data) => {
        if (data.token) {
          localStorage.setItem("token", data.token)
          this.setState({
            currentUser: data.user,
            token: data.token
          }, () => {
            this.props.history.push("/profile")
          })
        }
      })
    }
  }

  renderManagerProfile = (routerProps) => {
    console.log(routerProps)
    return <ManagerProfileContainer token={this.state.token} user={this.state.currentUser}/>
  }

  onLogInSubmit = (loggedInUSer) => {

    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(
        loggedInUSer
      )
    })
    .then(r => r.json())
    // Once we got the logged in object back from the backend, update the state, 
    // Update frontend's token, and persisted in localstorage. 

    .then(loggedInUserFromBackEnd => {
      if(!loggedInUserFromBackEnd.error){
        localStorage.setItem("token", loggedInUserFromBackEnd.token)
        this.setState({
          currentUser: loggedInUserFromBackEnd.user,
          token: loggedInUserFromBackEnd.token
        }, ()=> {
          // redirect to the profile page , programmacally push to the url. 
          this.props.history.push("/profile")
        })
      }
      else{
        // console.log(loggedInUserFromBackEnd) // Else will be returning an error message. 
      }
    })
  }

      render(){

      return (
      <div className="App">
        <HomeNavBar/>
        <Switch>
          <Route exact path = '/home' componenet = { Home }/>
          {/* passing props inside Router  */}
          <Route exact path='/login' render = {(props) => <AuthForm {...props} onLogInSubmit = {this.onLogInSubmit} />}/> 
          <Route exact path = '/signup' component={SignUpForm} />
          <Route exact path = '/profile' render = {this.renderManagerProfile} />
        </Switch>
      </div>
    );}
}

export default withRouter(App);
