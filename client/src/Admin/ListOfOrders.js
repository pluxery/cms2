import React, {useContext, useEffect, useState} from 'react';
import '../Order/Order.css'
import {useSelector} from "react-redux";
import {ThemeContext} from "../Layout/Theme/ThemeContext";
import {Button} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import axios from "axios";

function OrderItem({order}) {
    const products = useSelector(state => state.basket.productsBasket);
    const uniq = [...new Set(order.orderItems)];

    const [id, setId] = useState(order._id)
    const delOrderHandler = () => {
        const response = axios.post('api/order/deleteOrder', id)
    }

    const {isLightTheme, light, dark} = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;

    const [click, setClick] = useState(false);

    return (<>
            <table className="table">
                <thead>
                <tr>
                    <th style={{background: `${theme.th}`}}>
                        <div>ID</div>
                    </th>
                    <th style={{background: `${theme.th}`}}>
                        <div>Имя</div>
                    </th>
                    <th style={{background: `${theme.th}`}}>
                        <div>Телефон</div>
                    </th>
                    <th style={{background: `${theme.th}`}}>
                        <div>Адрес доставки</div>
                    </th>
                    <th style={{background: `${theme.th}`}}>
                        <div>Товары</div>
                    </th>
                    <th style={{background: `${theme.th}`}}>
                        <div>Кол-во</div>
                    </th>
                    <th style={{background: `${theme.th}`}}>
                        <div>Сумма заказа</div>
                    </th>
                    <th style={{background: `${theme.th}`}}>
                        <div>Статус</div>
                    </th>

                </tr>
                </thead>
                <tbody>
                <tr style={{background: `${theme.container}`}}>
                    <td>
                        <div>{order.userId}</div>
                    </td>
                    <td>
                        <div>{order.name}</div>
                    </td>
                    <td>
                        <div>{order.phone}</div>
                    </td>
                    <td>
                        <div>{order.address}</div>
                    </td>
                    <td>
                        <div>
                            {order.uniq.map(item => {
                                return <div>{item.name}</div>
                            })}

                        </div>
                    </td>
                    <td>
                        <div> {order.uniq.map(item => {
                            return <div className={'quantity'}
                            >{order.orderItems.filter(e => e.name === item.name).length}</div>
                        })}</div>
                    </td>
                    <td>
                        <div>{order.totalPrice + 'руб.'}</div>
                    </td>
                    <td>
                        <div className={'status'}>
                        <Button className={theme === dark ? 'button-dark' : 'button-light'}
                            onClick={() => setClick(!click)}>{click ? 'Готово ✅' : 'Готовится ⏳'}</Button>
                        <DeleteIcon onClick={delOrderHandler} className={'status-icon'}/>
                        </div>
                    </td>
                </tr>
                </tbody>
            </table>
        </>

    );
}

export default OrderItem;
