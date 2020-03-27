import React from 'react'
import {Link} from 'react-router-dom'
import Swal from 'sweetalert2'



class NewCompany extends React.Component {

    state = {
        companyInfo:{
            name: ''
        },
        confirmation: null
    }

    onChange = (e)=> {
        // console.log(e.target.value)
        this.setState({ companyInfo:{ 
            name: e.target.value
        }} )
    }

    onSubmit = (e) => {
        const testUrl = 'http://localhost:3000/new_company'
        const realUrl = `https://yourteamtimebackend.herokuapp.com/new_company`
        e.preventDefault()
        let token = localStorage.getItem("token")

        fetch(testUrl,{
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                accept: 'application/json',
                'Authorization': `bearer ${token}`
            },
            body: JSON.stringify({
                ...this.state.companyInfo,
                manager_id: this.props.match.params.id
            })
        })
            .then(resp => resp.json())
            .then(this.setState({confirmation: 'Successfully Created a New Company! Click the Back button to see!', companyInfo: {name: ''}}))
    }

    alertNewCompany = () => {
        Swal.fire({icon: 'success', text: this.state.confirmation})
        this.setState({confirmation: null})
    }
    
    render(){
        // console.log(this.props)
        
        
        return (
        <div>
            <form onSubmit = {this.onSubmit}>
                <label>Company Name:</label>
                <input type = 'text' name='name' value ={this.state.companyInfo.name} onChange ={this.onChange} />
                <input type = 'submit'/>
            </form>
            <br></br>
            {this.state.confirmation ? this.alertNewCompany(): null}
            <Link to = {`/profile/${this.props.match.params.id}/companies`} ><button>Back To Companies</button></Link> <br></br>
        </div>
    )}
}

export default NewCompany