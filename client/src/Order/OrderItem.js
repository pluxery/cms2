import React, {useContext} from 'react';
import './Order.css'
import {useSelector} from "react-redux";
import {ThemeContext} from "../Layout/Theme/ThemeContext";

function OrderItem({order}) {
    const products = useSelector(state => state.basket.productsBasket);
    const uniq = [...new Set(order.orderItems)];

    const {isLightTheme, light, dark} = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;


    return (<>
            <table className="table">
                <thead>
                <tr>
                    <th style= {{background: `${theme.th}`}}>
                        <div>Телефон</div>
                    </th>
                    <th style= {{background: `${theme.th}`}}>
                        <div>Адрес доставки</div>
                    </th>
                    <th style= {{background: `${theme.th}`}}>
                        <div>Товары</div>
                    </th>
                    <th style= {{background: `${theme.th}`}}>
                        <div>Кол-во</div>
                    </th>
                    <th style= {{background: `${theme.th}`}}>
                        <div>Сумма заказа</div>
                    </th>
                </tr>
                </thead>
                <tbody>
                <tr style= {{background: `${theme.container}`}}>
                    <td>
                        <div>{order.phone}</div>
                    </td>
                    <td>
                        <div>{order.address}</div>
                    </td>
                    <td>
                        <>
                            {order.uniq.map(item => {
                                return <div>{item.name}</div>
                            })}
                        </>
                    </td>
                    <td>
                        <> {order.uniq.map(item => {
                            return <div className={'quality'}>{order.orderItems.filter(e => e.name === item.name).length}
                            </div>
                        })}</>
                        <>{' '}</>
                    </td>
                    <td>
                        <div>{order.totalPrice + 'руб.'}</div>
                    </td>
                </tr>
                </tbody>
            </table>
        </>

    );
}

export default OrderItem;
