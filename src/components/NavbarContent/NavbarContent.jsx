import React from 'react'
import '../Navbar/Navbar.css'
import { BsBasket2, BsFileEarmarkSpreadsheet } from 'react-icons/bs'
import { FaUserAlt } from 'react-icons/fa'
import { AiFillGift } from 'react-icons/ai'
import { NavLink } from 'react-router-dom'
import { BsChevronLeft, BsSpeedometer2 } from 'react-icons/bs'
const NavbarContent = () => {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(!open);
    };
    return (
        <>
            <NavLink to='/' className="navbar__link">
                <div className="navbar__icon" >
                    <BsSpeedometer2 className='icon' />
                </div>
                <div className="navbar__text">
                    Главная
                </div>
            </NavLink >
            <NavLink to='/order' className="navbar__link">
                <div className="navbar__icon" >
                    <BsBasket2 className='icon' />
                </div>
                <div className="navbar__text">
                    Заказы
                </div>
            </NavLink >
            <NavLink to='eticket' className="navbar__link">
                <div className="navbar__icon" >
                    <BsFileEarmarkSpreadsheet className='icon' />
                </div>
                <div className="navbar__text">
                    Этикеты ШК
                </div>
            </NavLink>
            <NavLink to='/user' className="navbar__link">
                <div className="navbar__icon" >
                    <FaUserAlt className='icon' />
                </div>
                <div className="navbar__text">
                    Пользователи
                </div>
            </NavLink>
            <NavLink to='/gift' className="navbar__link">
                <div className="navbar__icon" >
                    <AiFillGift className='icon' />
                </div>
                <div className="navbar__text">
                    Счастливый купон
                </div>
            </NavLink>
            <NavLink to='/promocode' className="navbar__link">
                <div className="navbar__icon" >
                    <AiFillGift className='icon' />
                </div>
                <div className="navbar__text">
                    Промокоды
                </div>
            </NavLink >
            <div className="navbar__link" onClick={handleOpen}>
                <div className="navbar__icon" >
                    <AiFillGift className='icon' />
                </div>
                <div className="navbar__text">
                    Продукция
                </div>
                <div className="dropdown__icon" >
                    <BsChevronLeft />
                </div>
            </div >
            <div className="dropdown__link">
                {open ? (
                    <NavLink to='/promocode' className="dropdown__container">
                        <div className="dropdown__text">
                            Промокоды
                        </div>
                        <div className="dropdown__text">
                            Промокоды
                        </div>
                        <div className="dropdown__text">
                            Промокоды
                        </div>
                    </NavLink >
                ) : null}
            </div>
            <NavLink to='/promocode' className="navbar__link">
                <div className="navbar__icon" >
                    <AiFillGift className='icon' />
                </div>
                <div className="navbar__text">
                    Промокоды
                </div>
            </NavLink >
        </>
    )
}

export default NavbarContent