import React from 'react'
import { NavLink } from 'react-router-dom'
import '../Navbar/Navbar.css'
const NavbarLogo = () => {
    return (
        <NavLink to='/' className="navbar__top">
            <div className="navbar__logo ">
                L
            </div>
            <div className="navbar__text administrator">
                Администратор
            </div>

        </NavLink>
    )
}

export default NavbarLogo