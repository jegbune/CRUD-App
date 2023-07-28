import React from 'react'
import './TripStyles.css'
function TripData(props) {
    return (
         <div class= 't-card'>
            <div className='t-image'>
            <img alt='t-image' src={props.image} />
            </div>
            <h4>
                {props.heading}
            </h4>
            <p>{props.text}</p>
         </div>
    )
}

export default TripData
