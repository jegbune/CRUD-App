import React from 'react'
import './TripStyles'
function TripData(props) {
    return (
         <div class= 't-card'>
            <img alt='Trip-image' src={props.image} />
            <h1>
                {props.title}
            </h1>
            <p>{props.desc}</p>
         </div>
    )
}

export default TripData
