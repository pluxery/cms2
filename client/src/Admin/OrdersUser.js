import React, {useContext, useEffect, useState} from 'react'
import axios from 'axios'
import ListOfOrders from "./ListOfOrders";
import '../Order/Order.css'
import {ThemeContext} from "../Layout/Theme/ThemeContext";
import './Admin.css'

export default function OrdersUser() {

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
                            return (
                                <ListOfOrders order={item}/>
                            )
                    }
                )}
            </div>
        </div>
    )
}