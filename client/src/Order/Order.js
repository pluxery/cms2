import React, {useContext, useEffect, useState} from 'react'
import axios from 'axios'
import OrderItem from "./OrderItem";
import './Order.css'
import {AuthContext} from "../Auth/AuthContext";
import {useSelector} from "react-redux";


export default function Order() {
    const currentUser = useContext(AuthContext)
    const [orders, setOrders] = useState([])

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
                <h1>История заказов </h1>
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