import React from 'react'

const Employee = ({employee}) => {
    console.log('erfi')
    return (
        <div>
            Employee Name: {employee.name}
            <br></br>
            Email: {employee.email}
            <hr></hr>
        </div>
    )
}

export default Employee
