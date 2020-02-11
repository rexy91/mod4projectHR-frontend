import React from 'react'
import Company from './Company'

const CompaniesList = ({match, companies}) => {
    return (
        <div>
            {companies.map(company => <Company match = {match} key ={company.name} company = {company} /> )}
        </div>
    )
}

export default CompaniesList
