import { Link } from 'react-router-dom'
import './NavbarStyles.css'
import React, { Component } from 'react'
import { MenuItems } from './menuItems'

class Navbar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            clicked : false
        }
    }

    
    handleClick = () => {
            this.setState({clicked: !this.state.clicked })
    }

    render() {
        return (
            <nav className='NavbarItems'>
                <h1 className='navbar-logo'>Trippy</h1>

                <div className='menu-icons' onClick={this.handleClick}>
                    <i className={this.state.clicked ? "fas fa-times" :  "fas fa-bars"}></i>
                </div>

                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu' }>
                    {MenuItems.map((item,index)=>{
                        return(
                    <li key={index}>
                        <Link className={item.cName} to={item.url}>
                         <i className={item.icon} aria-hidden="true"></i>
                        {item.title}
                        </Link>
                    </li>
                        )
                    })}
                    <button> Sign Up</button>
                </ul>
            </nav>
        )
    }
}

export default Navbar