import React from 'react'
import User from './User'

const Users = ({liste}) => {
    return (
        <div className="list">
            {liste.map((el, key) => <User key={el.id} fullName={el.fullName} image={el.image} description={el.description}/>)}
        </div>
    )
}

export default Users
