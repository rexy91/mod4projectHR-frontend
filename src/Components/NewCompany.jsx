import React from 'react'
import {Link} from 'react-router-dom'

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
        e.preventDefault()
        fetch(`http://localhost:3000/new_company`,{
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                accept: 'application/json'
            },
            body: JSON.stringify({
                ...this.state.companyInfo,
                manager_id: this.props.match.params.id
            })
        })
            .then(resp => resp.json())
            .then(this.setState({confirmation: 'Successfully Created a New Company! Click the Back button to see!'}))
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
            {this.state.confirmation ? <h4>{this.state.confirmation}</h4>: ''}
            <Link to = {`/profile/${this.props.match.params.id}/companies`} ><button>Back To Companies</button></Link> <br></br>
        </div>
    )}
}

export default NewCompany
