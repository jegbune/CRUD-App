import React from 'react'
import Mountain1 from '../assets/Mountain.jpg'
import Mountain2 from '../assets/Mountain1.jpg'
import Mountain3 from '../assets/Mountain2.jpg'
import Mountain4 from '../assets/Mountain3.jpg'
import './DestinationStyle.css'

function Destination() {
    return (
       <div className='destination'>
        <h1>Popular Destinations</h1>
        <p>Tours give you the opportunity to see a lot within a time frame. </p>
       
       <div className='first-des'>
        
        <div className='image'>
            <img alt='img' src={Mountain1}/>
            <img alt='img' src={Mountain2}/>
        </div>
       </div>
       
       </div>
    )
}

export default Destination
