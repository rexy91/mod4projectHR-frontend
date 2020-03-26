import React from 'react'
import {Link} from 'react-router-dom'
const Company = ({match, company, deleteCompany}) => {

    const onClickDelete = () =>{
        deleteCompany(company.id)
    }
    
    return (
        <div>
            <Link to={`${match.url}/${company.id}`}><p>{company.name}</p></Link>
            <button onClick = {onClickDelete}> Delete {company.name}</button>
        </div>
    )
}

export default Company
