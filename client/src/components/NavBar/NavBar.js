import React from 'react'
import { NavLink } from 'react-router-dom'
import "./NavBar.css"

const NavBar = () => {
  return (
    <header>
        <nav id="nav1">
            <ul>
                <li>
                    <NavLink to="/home">HOME</NavLink>
                    <NavLink to="/donate">DONATE</NavLink>
                    <NavLink to="/need-help">NEED HELP</NavLink>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default NavBar