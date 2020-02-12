import React from 'react'

import ReactDataSheet from 'react-datasheet';
import 'react-datasheet/lib/react-datasheet.css';
// import './schedule.css'

class Schedule extends React.Component {
    state = {
        company: {},
        employees: [],
        data: []
    }

    
    componentDidMount(){
        let companyId = this.props.match.params.companyId
        fetch(`http://localhost:3000/companies/${companyId}`)
            .then(resp => resp.json())
            .then(company => this.setState({
                company: company, 
                employees: company.employees
            },
            ()=> this.populateSpreadsheet()))
            
    }

    populateSpreadsheet = () => {
        let spreadsheet = new Array(this.state.employees.length)
        for(let i = 0; i < this.state.employees.length; i++){
            let newArr = new Array(8)
            spreadsheet[i] = newArr
        }
        // loop through each employee. for each one, fi
        console.log(this.state.employees[1].name)
        spreadsheet.forEach(row => row.fill({value: ''}))
 

        for(let i =0; i<this.state.employees.length; i++){
            let name = this.state.employees[i].name
            spreadsheet[i][0] = {value: name}
        }
        console.log(spreadsheet)
        let header = ['Employees','Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
        let headerForSpreadsheet = header.map(cell => {
            return {value: cell}
        })
        spreadsheet.unshift(headerForSpreadsheet)
        this.setState({data: spreadsheet})
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
        </div>
        )
    }
}

export default Schedule
