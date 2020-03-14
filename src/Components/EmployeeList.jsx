import React from 'react'
import Employee  from './Employee'
import {Link} from 'react-router-dom'
import EmployeeContNav from './EmployeeContNav'
class EmployeeList extends React.Component {

    state = {
        company: {},
        employees: []
    }

    deleteEmployee = (id) => {
        console.log('employee id', id)
        // fetch(`http://localhost:3000/employees/${id}`,{method: 'DELETE'})
        fetch(`https://mod4hrprojectbackend.herokuapp.com/${id}`,{method: 'DELETE'})
        
        .then(resp => resp.json())
        .then(json => {
            let newEmployees = this.state.employees.filter(employee => employee.id !== id)
            this.setState({employees: newEmployees})
        })
    }
    returnEmployees = () => {
        let employeesComponents = this.state.employees.map(employee => <Employee key = {`${employee.id}-${employee.name}`} deleteEmployee = {this.deleteEmployee} employee ={employee}/>)
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
            <h1>{`${this.props.manager.firstName}'s employees in ${this.state.company.name}`}</h1> 
            {this.returnEmployees()}
        </div>
    )}
}

export default EmployeeList
