import React from 'react'
import {Link} from 'react-router-dom'
const Company = ({match, company}) => {
    console.log(company.id)
    return (
        <div>
            <Link to={`${match.url}/${company.id}`}><p>{company.name}</p></Link>
        </div>
    )
}

export default Company
