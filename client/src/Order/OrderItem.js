import React from 'react';
import './Order.css'
import {useSelector} from "react-redux";

function OrderItem({order}) {
    const products = useSelector(state => state.basket.productsBasket);
    const uniq = [...new Set(order.orderItems)];


    return (<>
            <table className="table">
                <thead>
                <tr>
                    <th>
                        <div className={'order__body'}>Телефон</div>
                    </th>
                    <th>
                        <div className={'order__body'}>Адресс доставки</div>
                    </th>
                    <th>
                        <div className={'order__body'}>Товары</div>
                    </th>
                    <th>
                        <div className={'order__body'}>Кол-во</div>
                    </th>
                    <th>
                        <div className={'order__body'}>Сумма заказа</div>
                    </th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>
                        <div className={'order__body'}>{order.phone}</div>
                    </td>
                    <td>
                        <div className={'order__body'}>{order.address}</div>
                    </td>
                    <td>
                        <div className={'order__body'}>
                            {order.uniq.map(item => {
                                return <b>{item.name}</b>
                            })}

                        </div>
                    </td>
                    <tb>
                        <div className={'order__body'}> {order.uniq.map(item => {
                            return <b>{order.orderItems.filter(e => e.name === item.name).length}</b>
                        })}</div>
                    </tb>
                    <td>
                        <div className={'order__body'}>{order.totalPrice + 'руб.'}</div>
                    </td>
                </tr>
                </tbody>
            </table>
        </>

    );
}

export default OrderItem;
