
import React from 'react'
import {useSelector} from "react-redux";




export default function Order(){
    const products = useSelector(state => state.basket.productsBasket);
    const totalPrice = products.reduce((acc, product) => acc += product.price, 0)
    return(
        <>
            <h1>Order</h1>
            total price: {totalPrice}
            products:{products}
        </>
    )
}