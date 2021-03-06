import React from 'react'
import { NavLink } from 'react-router-dom'
import "./NavBar.css"

const NavBar = () => {
  return (
    <header>
        <nav id="nav1">
            <h1><a href="/" className="logo" >nstp<span>G8</span></a></h1>
            <ul>
                <li>
                    <NavLink to="/">HOME</NavLink>
                    <NavLink to="/donate">DONATE</NavLink>
                    <NavLink to="/need-help">i-NEED HELP</NavLink>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default NavBar