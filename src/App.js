import React from 'react';
import AuthForm from './Components/AuthForm'
import './App.css';

class App extends React.Component {

  // Initialize state token nto be empty

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
        headers: {
          "Authorization": `bearer ${token}`
        }
      })
      .then(r => r.json())
      .then((data) => {
        console.log(data)
        if (data.token) {
          localStorage.setItem("token", data.token)
          this.setState({
            user: data.user,
            token: data.token
          // }, () => {
          //   console.log(data)
          })
        }
      })


    }
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
          // 2nd call back to push user to url.
        })
      }
      else{
        console.log(loggedInUserFromBackEnd) // Else will be returning an error message. 
      }
    })
  }

     render(){
      return (
      <div className="App">
      <AuthForm onLogInSubmit = {this.onLogInSubmit}  />
      </div>
    );}
}

export default App;
