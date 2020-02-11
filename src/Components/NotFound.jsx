import React from 'react'

const NotFound = ({history}) => {
    const onClick = () => {
        history.goBack()
    }
    return (
        <div>
            nothing to see here 
            <button onClick = {onClick}>go back</button>
        </div>
    )
}

export default NotFound
