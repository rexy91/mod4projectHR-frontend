import React from 'react'
import {NavLink} from 'react-router-dom'

const EmployeeContNav = ({managerId, companyId}) => {
    // console.log(managerId, companyId)
    return (
        <div>
            <NavLink to={`/profile/${managerId}/companies/${companyId}/new-employee`}>Create New Employee</NavLink>
        </div>
    )
}

export default EmployeeContNav
