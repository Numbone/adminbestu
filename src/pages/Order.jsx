import React from 'react'
import { Form, InputGroup } from 'react-bootstrap'
import '../assets/css/Order.css'
import {BsCalendarFill} from 'react-icons/bs'
const Order = () => {
    return (
        <div>
            <div className="universial_text">
                Заказы
            </div>
            <div className="custom__container">
                <div className="data__time ">
                    <div className="row">
                        <div className="from__time  col-6">
                            <div className="uni__text">
                                Заказы от даты
                            </div>
                            <div className="data__input">
                                <input type='date' className='data__time form-control' valueAsDate='none' id='date' required></input>
                            </div>
                        </div>
                        <div className="to__time col-6">
                            <div className="uni__text">
                                Заказы до даты
                            </div>
                            <div className="data__input">
                            <input type='date' className='data__time form-control' valueAsDate='none' id='date' required></input>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-3">
                            <div className="uni__text">
                                ID заказа
                            </div>
                            <div className="data__input">
                                <input type="text" id='date'  className='form-control'/>
                            </div>
                        </div>
                        <div className="col-9">
                            <div className="uni__text">
                                Имя,email телефон
                            </div>
                            <div className="data__input">
                                <input type="text" id='date'  className='form-control'/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="uni__text">
                                Кроме IDs(несколько через запятую )
                            </div>
                            <div className="data__input">
                                <input type="text" id='date'  className='form-control'/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="from__time  col-6">
                            <div className="uni__text">
                                Заказы от даты
                            </div>
                            <div className="data__input">
                                <input className='form-control'  id='date'   required></input>
                            </div>
                        </div>
                        <div className="to__time col-6">
                            <div className="uni__text">
                                Заказы до даты
                            </div>
                            <div className="data__input">
                            <input  className=' form-control'  id='date' required></input>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="uni__text">
                                Товар в корзине 
                            </div>
                            <div className="data__input">
                                <input type="text" id='date'  className='form-control'/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="uni__text">
                                Товар не в корзине 
                            </div>
                            <div className="data__input">
                                <input type="text" id='date'  className='form-control'/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="uni__text">
                                Партнер
                            </div>
                            <div className="data__input">
                                <input type="text" id='date'  className='form-control'/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="uni__text">
                                Из Сахара
                            </div>
                            <div className="data__input">
                                <input type="text" id='date'  className='form-control'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Order