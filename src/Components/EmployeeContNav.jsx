import React from 'react'
import {NavLink} from 'react-router-dom'

const EmployeeContNav = ({managerId, companyId}) => {
    // console.log(managerId, companyId)
    return (
        <div>
            <NavLink to={`/profile/${managerId}/companies/${companyId}/new-employee`}><button>Create New Employee</button></NavLink> 
            <br></br>
            <NavLink to={`/profile/${managerId}/companies/${companyId}/schedule`} > <button>View Schedule</button> </NavLink>
            <br></br>
            <NavLink to = {`/profile/${managerId}/companies`} ><button>Back To Companies</button></NavLink>
        </div>
    )
}

export default EmployeeContNav
