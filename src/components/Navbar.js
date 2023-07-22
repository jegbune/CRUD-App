import { Link } from 'react-router-dom'
import './NavbarStyles.css'
import React, { Component } from 'react'
import { MenuItems } from './menuItems'

class Navbar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <nav className='NavbarItems'>
                <h1 className='navbar-logo'>Trippy</h1>
                <ul className='nav-menu'>
                    {MenuItems.map((item,index)=>{
                        return(
                    <li key={index}>
                        <a href={item.url}>
                        <i className={item.icon} aria-hidden="true"></i>{item.title}
                        </a>
                    </li>
                        )
                    })}
                </ul>
            </nav>
        )
    }
}

export default Navbar