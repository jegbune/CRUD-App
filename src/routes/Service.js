import React from 'react'
import NavBar from '../components/Navbar'
import Hero from '../components/Hero'
import ServiceImg from '../assets/img3.jpg'
import Footer from '../components/Footer'
import Trip from '../components/Trip'

function Service() {
    return (
        <>
        <NavBar />
        <Hero 
        cName= 'hero-mid'
        heroImg= {ServiceImg}
        title = 'Service'
        btnClass = 'hide'
        />
        <Trip />
        <Footer />
        </>
    )
}

export default Service
