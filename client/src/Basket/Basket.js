import React, {useContext} from "react";
import {useDispatch, useSelector} from "react-redux";
import './Basket.css'
import BasketItem from "./BasketItem";
import BasketModal from "./BasketModal";
import {ThemeContext} from "../Layout/Theme/ThemeContext";


function Basket() {
    const products = useSelector(state => state.basket.productsBasket);
    const totalPrice = products.reduce((sum, product) => sum += product.price, 0)

    const {isLightTheme, light, dark} = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;

    return (
        <div className={'basket'}>
            <div>
                <div className={'basket__header'}>
                    <h1 style={{color: `${theme.text1}`}}>У вас отличный вкус!</h1>
                </div>

                <div className={'basket__body'}>
                    {products.length > 0 ?
                        products.map(item => (
                            <BasketItem product={item}/>
                        )) : <h1 style={{background: `${theme.mainbg}`}}
                            className={'header__profile-data'}>Корзина пуста</h1>}
                </div>
                <h2 style={{color: `${theme.text1}`}}>{'Итого: ' + totalPrice + 'руб.'}</h2>

                <div className={'basket__footer'}>
                    <BasketModal/>
                </div>
            </div>

        </div>
    );
}

export default Basket;