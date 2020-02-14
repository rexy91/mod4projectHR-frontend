import React from 'react'

import ReactDataSheet from 'react-datasheet';
import 'react-datasheet/lib/react-datasheet.css';
import {Link} from 'react-router-dom'
import ScheduleInstructions from './Components/ScheduleInstructions';

class Schedule extends React.Component {
    state = {
        company: {},
        employees: [],
        data: [],
        instructions: false
    }

    componentDidMount(){
        let companyId = this.props.match.params.companyId
        fetch(`http://localhost:3000/companies/${companyId}`)
            .then(resp => resp.json())
            .then(company => {
                // default attribute a new company schedule is an empty array
                if(typeof company.schedule[0] === 'object'){
                    let schedule = company.schedule
                    let employees= company.employees
                    let employeeIdArr= company.employees.map(employee => employee.id)
                    let scheduleIdArr = []
                    for(let i =1; i<schedule.length;i++){
                        scheduleIdArr.push(schedule[i][0].value)
                    }
                    for(let x = 0; x<employeeIdArr.length; x++){
                        // does the schedule array include all created employees? if no, create a new schedule row for new employee
                        if(!scheduleIdArr.includes(employeeIdArr[x])){
                            let newArr = new Array(9)
                            for(let y = 0; y<newArr.length; y++){
                                newArr[y]= {value: ''}
                            }
                            newArr[0].value = employeeIdArr[x]
                            let employee = employees.find(emp => emp.id === employeeIdArr[x])
                            newArr[1].value = employee.name
                            schedule.push(newArr)
                        }
                    }
                    for(let z = 0; z < scheduleIdArr.length; z++){
                        //does the employee array include all scheduled employees? if no, then remove excess employees from the schedule
                        if(!employeeIdArr.includes(scheduleIdArr[z])){
                            let foundRow = schedule.find(row => row[0].value === scheduleIdArr[z])
                            let rowIndex = schedule.indexOf(foundRow)
                            schedule.splice(rowIndex,1)
                        }
                    }
                    this.setState({data: schedule})
                    
                } else {
                    this.setState({company: company, employees: company.employees},()=> this.populateSpreadsheet())
                }
                }
            )
    }

    populateSpreadsheet = () => {
        let spreadsheet = new Array(this.state.employees.length)
        for(let i = 0; i < this.state.employees.length; i++){
            let newArr = new Array(9)
            spreadsheet[i] = newArr
        }
        spreadsheet.forEach(row => row.fill({value: ''}))
        for(let i =0; i<this.state.employees.length; i++){
            let id = this.state.employees[i].id
            let name = this.state.employees[i].name
            spreadsheet[i][0] = {value: id}
            spreadsheet[i][1] = {value: name}
        }
        console.log(spreadsheet)
        let header = ["ID (ignore)",'Employees','Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
        let headerForSpreadsheet = header.map(cell => {
            return {value: cell}
        })
        spreadsheet.unshift(headerForSpreadsheet)
        this.setState({data: spreadsheet})
    }

    onClickSave =() => {
        console.log('hello')
        let companyId = this.props.match.params.companyId
        fetch(`http://localhost:3000/companies/${companyId}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                accept: 'application/json'
            },
            body: JSON.stringify({
                schedule: this.state.data
            })
        })
        .then(resp => resp.json())
        .then(console.log)
    }


    toggleInstructions = () => {
        this.setState({instructions: !this.state.instructions})
    }

    render(){
        return (
        <div> 
            <ReactDataSheet
                valueRenderer={(cell) => cell.value}
                data = {this.state.data} 
                overflow='wrap'
                onCellsChanged={changes => {
                    const data = this.state.data.map(row => [...row])
                    changes.forEach(({cell, row, col, value}) => {
                        data[row][col] = {...data[row][col], value}
                    })
                    this.setState({data})
                }}
            />
            <button onClick = {this.onClickSave}> Save </button>
            <Link to ={`/profile/${this.props.match.params.id}/companies/${this.props.match.params.companyId}`}><button >Back to Your Companies</button></Link>
            <button onClick = {this.toggleInstructions}>Toggle Instructions</button>
            {this.state.instructions ? <ScheduleInstructions/> : null}
        </div>
        )
    }
}

export default Schedule
