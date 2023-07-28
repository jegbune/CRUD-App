import React from 'react'
import TripData from './TripData'
import './TripStyles'


function Trip() {
    return (
       <div className='trip'>
        <h1>
            Recent Trips
        </h1>
        <p> Your can discover unique destination using Google Maps.</p>

        <TripData 
        image = ''
        title = 'Trip in Indonesia'
        desc = 'Indonesia officially the Republic of Indonesia, is a country in Southeast Asia and Oceania between the indian and Pacific oceans. it consists of over 17,000 islands, including Sumatra, Java, Sulwest, and parts of Bornea and New Guinea'

         />

       </div> 
    )
}

export default Trip
