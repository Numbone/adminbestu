import React from 'react'

const Order = () => {
    return (
        <div>
            <div className="universial_text">
                Заказы
            </div>
            <div className="container">
                <div className="data__time ">
                    <div className="row">
                        <div className="from__time  col-6">
                            <div className="uni__text-">
                                Заказы от даты
                            </div>
                            <div className="data__input">
                                <input type='date'  placeholder=' asdsad'></input>
                            </div>
                        </div>
                        <div className="to__time col-6">
                        <div className="uni__text-">
                                Заказы от даты
                            </div>
                            <div className="data__input">
                                <input type='date'  placeholder=' asdsad'></input>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Order