import React from 'react'
import './HeroStyle.css'
function Hero(props) {
    return (
        <>
        <div className='hero'>
            <img alt='HerpImg' src='https://images.unsplash.com/photo-1586016413664-864c0dd76f53?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' />

            <div className='hero-text'>
                <h1>Your Journey Your Story</h1>
                <p>Choose Your Favourite Destination.</p>
                <a href ='/'>
                    Travel Plan 
                </a>
            </div>
            </div>
            </>
    )
}

export default Hero
