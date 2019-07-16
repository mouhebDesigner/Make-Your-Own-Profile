import React from 'react'

export default function MyProfile(props){
    return (
        <div>
            <img src={props.Photo} />
            <h3>{props.FirstName}</h3>
            <h3>{props.LastName}</h3>
            <h3>{props.ProfileLink}</h3>
        </div>
    )
}