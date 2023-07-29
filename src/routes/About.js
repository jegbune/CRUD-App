import React from 'react'
import NavBar from '../components/Navbar'
import Hero from '../components/Hero'
import AboutImg from '../assets/img2.jpg'
import Footer from '../components/Footer'
import AboutUs from '../components/AboutUs'

function About() {
    return (
        <>
        <NavBar />
        <Hero 
        cName= 'hero-mid'
        heroImg= {AboutImg}
        title = 'About'
        btnClass = 'hide'
        />
        <AboutUs />
        <Footer />
        </>
    )
}

export default About
