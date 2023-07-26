import React from 'react'
import NavBar from '../components/Navbar'
import Hero from '../components/Hero'

function About() {
    return (
        <>
        <NavBar />
        <Hero 
        cName= 'hero'
        heroImg= 'https://plus.unsplash.com/premium_photo-1661963922055-ab62205fae9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80'
        title = 'About'
        />
        </>
    )
}

export default About
