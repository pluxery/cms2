import React from "react";
import {useDispatch, useSelector} from "react-redux";
import './Basket.css'
import BasketItem from "./BasketItem";
import BasketModal from "./BasketModal";


function Basket() {
    const products = useSelector(state => state.basket.productsBasket);
    const totalPrice = products.reduce((sum, product) => sum += product.price, 0)

    return (
        <div className={'basket'}>
            <div>
                <div className={'basket__header'}>
                    <h1>У вас отличный вкус!</h1>
                </div>

                <div className={'basket__body'}>
                    {products.length > 0 ?
                        products.map(item => (
                            <BasketItem product={item}/>
                        )) : <h1 className={'header__profile-data'}>Корзина пуста</h1>}
                </div>
                <h2>{'Итого: ' + totalPrice + 'руб.'}</h2>

                <div className={'basket__footer'}>
                    <BasketModal/>
                </div>
            </div>

        </div>
    );
}

export default Basket;