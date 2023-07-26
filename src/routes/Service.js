import React from 'react'
import NavBar from '../components/Navbar'
import Hero from '../components/Hero'

function Service() {
    return (
        <>
        <NavBar />
        <Hero 
        cName= 'hero-mid'
        heroImg= 'https://images.unsplash.com/photo-1614130020598-093435d7f1a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80'
        title = 'Service'
        btnClass = 'hide'
        />
        </>
    )
}

export default Service
