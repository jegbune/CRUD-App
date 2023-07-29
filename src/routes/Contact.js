import React from 'react'
import NavBar from '../components/Navbar'
import Hero from '../components/Hero'
import ContactImg from '../assets/img3.jpg'
import Footer from '../components/Footer'

function Contact() {
    return (
        <>
        <NavBar />
        <Hero 
        cName= 'hero-mid'
        heroImg= {ContactImg}
        title = 'Contact'
        btnClass = 'hide'
        />
        <Footer />
        </>
    )
}

export default Contact
