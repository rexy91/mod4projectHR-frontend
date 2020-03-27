import React from 'react'
import Company from './Company'

const CompaniesList = ({match, companies, deleteCompany}) => {
    return (
        <div>
            { companies ? companies.map(company => <Company match = {match} key ={company.name} company = {company} deleteCompany = {deleteCompany} /> ):null}
        </div>
    )
}

export default CompaniesList
