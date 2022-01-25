import React, {useContext} from "react";
import {useDispatch, useSelector} from "react-redux";
import './Basket.css'
import BasketModal from "./BasketModal";
import {ThemeContext} from "../Layout/Theme/ThemeContext";
import BasketItem from "./BasketItem";
import {Button} from "@mui/material";
import {delAllProducts} from "../redux/busket/reducer";


function Basket() {

    const products = useSelector(state => state.basket.productsBasket);
    const uniqProducts = [...new Set(products)];
    const totalPrice = products.reduce((acc, product) => acc += product.price, 0)

    const {isLightTheme, light, dark} = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;
    const dispatch = useDispatch()

    const delAllToBasketHandler = (e) => {
        e.stopPropagation();
        dispatch(delAllProducts(products));
    }

    return (
        <div className={'basket'}>
            <div>
                <div className={'basket__header'}>
                    <h1 style={{color: `${theme.text1}`}}>У вас отличный вкус!</h1>
                </div>

                <div className={'basket__body'}>
                    {products.length > 0 ?
                        uniqProducts.map(item => (
                            <BasketItem product={item}/>
                        )) :
                        <h1 style={{background: `${theme.mainbg}`}}
                            className={'header__profile-data'}>Корзина пуста</h1>}
                </div>
                <h2 style={{color: `${theme.text1}`}}>{'Итого: ' + totalPrice + 'руб.'}</h2>
                <h3 style={{color: `${theme.text1}`}}>{'Товаров в корзине: ' + products.length}</h3>

                <div className={'basket__footer'}>
                    <Button onClick={delAllToBasketHandler} className={'basketItem__button-del'}>Удалить все</Button>
                    <BasketModal/>
                </div>
            </div>

        </div>
    );
}

export default Basket;