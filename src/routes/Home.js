import React from 'react'
import NavBar from '../components/Navbar'
import Hero from '../components/Hero'
import HomeImg from '../assets/img1.jpg'
import Destination from '../components/Destination'

function Home() {
    return (
        <>
        <NavBar />
        <Hero
        cName= 'hero'
        heroImg= {HomeImg}
        title = 'Your Journey Your Story'
        text = 'Choose Your Favourite Destination'
        buttonText ='Travel Plan'
        url = '/'
        btnClass = 'show' 
        />
        <Destination />
        </>
    )
}

export default Home
