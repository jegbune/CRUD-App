import React from 'react'
import TripData from './TripData'
import './TripStyles.css'
import Trip1 from '../assets/img1.jpg'
import Trip2 from '../assets/img2.jpg'
import Trip3 from '../assets/img3.jpg'

function Trip() {
    return (
       <div className='trip'>
        <h1>
            Recent Trips
        </h1>
        <p> Your can discover unique destination using Google Maps.</p>

        <div className='tripcard'>

        <TripData 
        image = {Trip1}
        heading = 'Trip in Indonesia'
        text = 'Indonesia officially the Republic of Indonesia, is a country in Southeast Asia and Oceania between the indian and Pacific oceans. it consists of over 17,000 islands, including Sumatra, Java, Sulwest, and parts of Bornea and New Guinea'
         />
        <TripData 
        image = {Trip2}
        heading = 'Trip in Indonesia'
        text = 'Indonesia officially the Republic of Indonesia, is a country in Southeast Asia and Oceania between the indian and Pacific oceans. it consists of over 17,000 islands, including Sumatra, Java, Sulwest, and parts of Bornea and New Guinea'
         />
        <TripData 
        image = {Trip3}
        heading = 'Trip in Indonesia'
        text = 'Indonesia officially the Republic of Indonesia, is a country in Southeast Asia and Oceania between the indian and Pacific oceans. it consists of over 17,000 islands, including Sumatra, Java, Sulwest, and parts of Bornea and New Guinea'
         />

        </div>

       </div> 
    )
}

export default Trip
