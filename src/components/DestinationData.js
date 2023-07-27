import './DestinationStyle.css'

import React, { Component } from 'react'

class DestinationData extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <div className='des-text'>
            <h2>Taal Volcano, Batangas</h2>
            <p>One of the most iconic views in Luzon, Mt. Taal boasts a volcano inside a lake inside an island. if you fancy a closer look, the hike up to the crater is a mere 45 minutes, and is easy enough for beginners, Guides will assist you most of the way, and you'll see the peculiar environment found on an active volcano, including volcanic rocks and steam vents. The hike can be dusty and hot, so plan for an early morning trip. and then unwind with some bulalo before heading back home!</p>
            </div>   
        )
    }
}

export default DestinationData