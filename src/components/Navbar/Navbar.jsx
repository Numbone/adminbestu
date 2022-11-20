import React from 'react'
import './Navbar.css'
import NavbarLogo from '../NavbarLogo/NavbarLogo'
import NavbarContent from '../NavbarContent/NavbarContent'
const Navbar = () => {
    return (
        <>
            <div className='navbar__content__top'>
                <div className='navbar__container'>
                    <NavbarLogo />
                </div>
            </div>
            <div className='navbar__content'>
                <div className='navbar__container'>
                    <NavbarContent />
                </div>
            </div>
        </>
    )
}

export default Navbar