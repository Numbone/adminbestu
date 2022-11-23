import React from 'react'
import './Sidebar.css'
import { BsFileEarmarkSpreadsheetFill, BsSpeedometer2, BsFillTagFill, BsFillBasket2Fill } from 'react-icons/bs'
import { AiFillSetting, AiFillGift, AiOutlineApartment, AiOutlineLeft, AiOutlineDown } from 'react-icons/ai'
import { CiDeliveryTruck } from 'react-icons/ci'
import { MdPeople } from 'react-icons/md'
import { NavLink } from 'react-router-dom'
const SideBar = () => {
    const [open, setOpen] = React.useState(false);
    const [open1, setOpen1] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);
    const [open3, setOpen3] = React.useState(false);
    const handleOpen = () => {
        setOpen(!open);
    };
    const handleOpen1 = () => {
        setOpen1(!open1);
    };
    const handleOpen2 = () => {
        setOpen2(!open2);
    };
    const handleOpen3 = () => {
        setOpen3(!open3);
    };
    return (
        <>
            <div className=" d-flex flex-column flex-shrink-0 p-3 bg-dark" style={{ width: "290px" }}>
                <NavLink to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    <div className="bi pe-none me-2 bg-white" 
                    style={{
                        width:'40px',
                        height:'40px',
                        fontSize:'30px',
                        color:'black',
                        borderRadius:'40px',
                        justifyContent:'center',
                        alignItems:'center',
                        display:'flex',
                        fontWeight:'bold'
                    }}>
                       L 
                    </div>
                    <span className="fs-4">Администрация</span>
                </NavLink>
                <hr></hr>
                <ul className="nav nav-pills flex-column mb-auto">
                    <li className="nav-item ">
                        <NavLink to="/main" className="nav-link text-white ">
                            <BsSpeedometer2 className='bi pe-none me-2' />
                            Главная
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/order" className="nav-link text-white">
                            <BsFillBasket2Fill className='bi pe-none me-2' />
                            Заказы
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/partners" className="nav-link text-white">
                            <AiOutlineApartment className='bi pe-none me-2' />
                            Партнеры
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/eticket" className="nav-link text-white">
                            <BsFileEarmarkSpreadsheetFill className='bi pe-none me-2' />
                            Этикеты ШК
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/users" className="nav-link text-white">
                            <svg className="bi pe-none me-2" width="16" height="16">
                                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                                <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                            </svg>
                            Пользователи
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/category" className="nav-link text-white">
                            <svg className="bi pe-none me-2" width="16" height="16">
                                <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm15 2h-4v3h4V4zm0 4h-4v3h4V8zm0 4h-4v3h3a1 1 0 0 0 1-1v-2zm-5 3v-3H6v3h4zm-5 0v-3H1v2a1 1 0 0 0 1 1h3zm-4-4h4V8H1v3zm0-4h4V4H1v3zm5-3v3h4V4H6zm4 4H6v3h4V8z" />
                            </svg>
                            Категории
                        </NavLink>
                    </li>
                    <li className="d-flex justify-content-md-between ">
                        <div to="/production" className="nav-link text-white" onClick={handleOpen}>
                            <svg className="bi pe-none me-2" width="16" height="16">
                                <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zM2.5 2a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zM1 10.5A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3z" />
                            </svg>
                            Продукции
                        </div>
                        {open
                            ? <div href="#" className=" nav-link text-white">
                                <AiOutlineDown className='bi pe-none me-2' />
                            </div>
                            : <a href="#" className=" nav-link text-white">
                                <AiOutlineLeft className='bi pe-none me-2' />
                            </a>}
                    </li>
                    {open
                        ? <>
                            <li className="d-flex justify-content-md-between text-white nav-link">
                                Все товары
                            </li>
                            <li className="d-flex justify-content-md-between text-white nav-link">
                                Добавить товар
                            </li>
                            <li className="d-flex justify-content-md-between text-white nav-link">
                                Отзывы
                            </li>
                        </>
                        : null}
                    <li className="d-flex justify-content-md-between ">
                        <a href="#" className="nav-link text-white" onClick={handleOpen1}>
                            <CiDeliveryTruck className='bi pe-none me-2' />
                            Доставка
                        </a>
                        {open1
                            ? <a href="#" className=" nav-link text-white">
                                <AiOutlineDown className='bi pe-none me-2' />
                            </a>
                            : <a href="#" className=" nav-link text-white">
                                <AiOutlineLeft className='bi pe-none me-2' />
                            </a>}
                    </li>
                    {open1
                        ? <>
                            <li className="d-flex justify-content-md-between text-white nav-link">
                                Доставка
                            </li>

                        </>
                        : null}
                    <li className="d-flex justify-content-md-between ">

                        <a href="#" className="nav-link text-white" onClick={handleOpen2}>
                            <BsFillTagFill className='bi pe-none me-2' />
                            Промо
                        </a>
                        {open2
                            ? <a href="#" className=" nav-link text-white">
                                <AiOutlineDown className='bi pe-none me-2' />
                            </a>
                            : <a href="#" className=" nav-link text-white">
                                <AiOutlineLeft className='bi pe-none me-2' />
                            </a>}

                    </li>
                    {open2
                        ? <>
                            <li className="d-flex justify-content-md-between text-white nav-link">
                                Промокоды
                            </li>
                            <li className="d-flex justify-content-md-between text-white nav-link">
                                Суммирование кодов
                            </li>
                            <li className="d-flex justify-content-md-between text-white nav-link">
                                Подаричные сертифкаты
                            </li>
                        </>
                        : null}
                    <li className="d-flex justify-content-md-between ">
                        <a href="#" className="d-flex justify-content-md-between nav-link text-white" onClick={handleOpen3}>
                            <AiFillGift className='bi pe-none me-2' />
                            Счастливый купон
                        </a>
                        {open3
                            ? <a href="#" className=" nav-link text-white">
                                <AiOutlineDown className='bi pe-none me-2' />
                            </a>
                            : <a href="#" className=" nav-link text-white">
                                <AiOutlineLeft className='bi pe-none me-2' />
                            </a>}

                    </li>
                    {open3
                        ? <>
                            <li className="d-flex justify-content-md-between text-white nav-link">
                                Подарки
                            </li>
                            <li className="d-flex justify-content-md-between text-white nav-link">
                                Победители
                            </li>
                        </>
                        : null}
                    <li>
                        <a href="#" className="nav-link text-white">
                            <AiFillSetting className='bi pe-none me-2' />
                            Настройки
                        </a>
                    </li>
                    <li>
                        <a href="#" className="nav-link text-white">
                            <MdPeople className='bi pe-none me-2' />
                            Дилеры
                        </a>
                    </li>
                </ul>

            </div>
        </>
    )
}

export default SideBar
