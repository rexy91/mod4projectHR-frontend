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
import EmployeeList from './Components/EmployeeList'
// import './App.css'
import NotFound from './Components/NotFound';
import NewEmployeeForm from './Components/NewEmployeeForm';
import NewCompany from './Components/NewCompany';
import Schedule from './Schedule';


class App extends React.Component {

  // Initialize state token not be empty

  state = {
    currentUser: {
      companies: [],
      username: '',
      firstName: '',
      lastName: '',
      email: '',
      id: 0
    },
    token: '',
    employees: [],
    errorMessages: []
    
  }

  componentDidMount() {
    // If localStorage has a current token, fetch the token to be persisted in the backend. 
    // console.log('App did mount')
    
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
            // this.props.history.push("/profile")
            // console.log('hello')
          })
        }
      })

    }
   
  }

  renderManagerProfile = (routerProps) => {
    return <ManagerProfileContainer {...routerProps} token={this.state.token} user={this.state.currentUser}/>
  }


  onSignUpSubmit = (newUser) => {
        fetch('http://localhost:3000/managers',{
          method: 'POST',
          headers:{
            'Content-Type': 'application/json',
            Accept: 'application/json'
          },
          body:JSON.stringify(newUser)
        })
        .then(res => res.json())
        .then(loggedInUserFromBackEnd => {
          console.log(loggedInUserFromBackEnd)
          //If there is no error messages
          if(!loggedInUserFromBackEnd.errors){
            localStorage.setItem("token", loggedInUserFromBackEnd.token)
            this.setState({
              currentUser: loggedInUserFromBackEnd.user,
              token: loggedInUserFromBackEnd.token
            }, ()=> {
              // redirect to the profile page , programmacally push to the url. 
              this.props.history.push(`/profile/${loggedInUserFromBackEnd.user.id}/companies`)
            })
          }
          else{

              alert(loggedInUserFromBackEnd.errors)

          }
    })
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
          this.props.history.push(`/profile/${loggedInUserFromBackEnd.user.id}/companies`)
        })
      }
      else{
        // console.log(loggedInUserFromBackEnd) // Else will be returning an error message. 
      }
    })
  }

      render(){
        // console.log('hello') 
      return (
      <div className="App">
        {localStorage.token ? null:<HomeNavBar/>}
        <Switch>
          <Route exact path = '/' component = { Home }/>
          {/* passing props inside Router  */}
          <Route exact path='/login' render = {(routerProps) => <AuthForm {...routerProps} onLogInSubmit = {this.onLogInSubmit} />}/> 
          <Route exact path = '/signup' render = { () => <SignUpForm onSignUpSubmit = {this.onSignUpSubmit} /> } />
          <Route exact path = '/profile/:id/companies' render = { (routerProps) => (localStorage.token? this.renderManagerProfile(routerProps) : <Home/>)} />
          <Route exact path = '/profile/:id/companies/new-company' render = {routerProps => <NewCompany {...routerProps}/>} />
          <Route exact path = '/profile/:id/companies/:companyId' render = {routerProps => <EmployeeList manager ={this.state.currentUser} {...routerProps}/>}/>
          <Route exact path = '/profile/:id/companies/:companyId/new-employee' render = {routerProps => <NewEmployeeForm {...routerProps}/>} />
          <Route exact path = '/profile/:id/companies/:companyId/schedule' render = {routerProps => <Schedule {...routerProps}/>} />
          <Route render = {routerProps => <NotFound {...routerProps}/>}/>
        </Switch>
      </div>
    );}
}

export default withRouter(App);
