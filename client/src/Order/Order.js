import axios from 'axios'
import React, {useContext, useEffect, useState} from 'react'

import {AuthContext} from "../Auth/AuthContext";
import {ThemeContext} from "../Layout/Theme/ThemeContext";
import OrderItem from "./OrderItem";

import './Order.css'

export default function Order() {
    const currentUser = useContext(AuthContext)
    const [orders, setOrders] = useState([])

    const {isLightTheme, light, dark} = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios('/api/order',);
            setOrders(response.data);
        };
        fetchData();
    }, []);

    return (
        <div className={'order'}>
            <div className={'order__body'}>
                <h1 style= {{color: `${theme.text1}`}}
                    className={'header'}
                >История заказов </h1>
                {orders.slice(0).reverse().map((item) => {
                        if (item.userId === currentUser.userId) {
                            return (
                                <OrderItem order={item}/>
                            )
                        }
                    }
                )}
            </div>
        </div>
    )
}