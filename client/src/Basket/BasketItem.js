import React, {useContext, useState} from "react";
import './Basket.css'
import {Button} from "@mui/material";

import {useDispatch, useSelector} from "react-redux";
import {addProduct, delProduct} from "../redux/basket/reducer";

import {ThemeContext} from "../Layout/Theme/ThemeContext";

function BasketItem({product: item}) {

    const products = useSelector(state => state.basket.productsBasket);
    const dispatch = useDispatch()
    const {isLightTheme, light, dark} = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;
    const [count, setCount] = useState(1);

    const addToBasketHandler = (e) => {
        e.stopPropagation();
        setCount(count + 1)
        dispatch(addProduct(item));
    }

    const delToBasketHandler = (e) => {
        e.stopPropagation();
        setCount(count - 1)
        dispatch(delProduct(item.id));
    }

    return (
        <div style={{color: `${theme.text1}`}}
             className={'basketItem__row'}>
            <div className={'basketItem__first'}>
                <img className={'basket__img'} src={item.image} alt={'image not found'}/>
                <p className={'text-weight'}>{item.name}</p>
            </div>

            <div className={'basketItem__two'}>
                <p className={'text-weight'}>{item.price + 'руб.'}</p>
                <Button className={"basketItem__add"} onClick={addToBasketHandler}>+</Button>
                <p className={'text-weight'}>{products.filter((el) => el === item).length}</p>
                <Button className={"basketItem__add"} onClick={delToBasketHandler}>-</Button>
            </div>
        </div>

    );
}

export default BasketItem;