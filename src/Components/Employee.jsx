import React from 'react'

const Employee = (props) => {

    const onClickDelete = () => {
        props.deleteEmployee(props.employee.id)
    }
    
    return (
        <div>
            Employee Name: {props.employee.name}
            <br></br>
            Email: {props.employee.email}
            <br></br>
            <button onClick = {onClickDelete}>Delete</button>
            <hr></hr>
        </div>
    )
}

export default Employee
