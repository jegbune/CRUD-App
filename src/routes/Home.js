import React from 'react'
import NavBar from '../components/Navbar'
import Hero from '../components/Hero'
import HomeImg from '../assets/img1.jpg'
import Destination from '../components/Destination'
import Trip from '../components/Trip'
import Footer from '../components/Footer'

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
        <Trip />
        <Footer />
        </>
    )
}

export default Home
