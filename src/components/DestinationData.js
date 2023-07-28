import './DestinationStyle.css'
 import React, { Component } from 'react'

class DestinationData extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <div className={this.props.cName}>
            <div className='des-text'>
            <h2>{this.props.heading}</h2>
            <p>{this.props.text}</p>
            </div>
            <div className='image'>
                <img alt='img' src={this.props.img1}/>
                <img alt='img' src={this.props.img2}/>
            </div>
           </div>   
        )
    }
}

export default DestinationData