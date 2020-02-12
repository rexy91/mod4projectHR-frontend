import React from 'react'
import Employee  from './Employee'
import {Link} from 'react-router-dom'
import EmployeeContNav from './EmployeeContNav'
class EmployeeList extends React.Component {

    state = {
        company: {},
        employees: []
    }

    returnEmployees = () => {
        let employeesComponents = this.state.employees.map(employee => <Employee key = {`${employee.id}-${employee.name}`} employee ={employee}/>)
        return employeesComponents
    }

    componentDidMount(){
        let companyId = this.props.match.params.companyId
        fetch(`http://localhost:3000/companies/${companyId}`)
            .then(resp => resp.json())
            .then(company => this.setState({company: company, employees: company.employees}))
    }

    
    render(){
        return (
        <div>
            <EmployeeContNav managerId = {this.props.manager.id} companyId = {this.state.company.id}/>
            <h2>{`${this.props.manager.firstName}'s employees in ${this.state.company.name}`}</h2>
            <Link to = {`/profile/${this.props.manager.id}/companies`} ><button>go back</button></Link> 
            {this.returnEmployees()}
        </div>
    )}
}

export default EmployeeList
