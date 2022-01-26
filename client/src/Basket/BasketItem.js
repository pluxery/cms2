import React, {useContext, useState} from "react";
import './Basket.css'
import {Button} from "@mui/material";
import {useDispatch} from "react-redux";
import {delProduct} from "../redux/basket/reducer";
import {ThemeContext} from "../Layout/Theme/ThemeContext";

function Basket({product: item}) {
    const dispatch = useDispatch()

    const delToBasketHandler = (e) => {
        e.stopPropagation();
        dispatch(delProduct(item.id));
    }

    const {isLightTheme, light, dark} = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;

    return (
        <div style={{color: `${theme.text1}`}}
            className={'basketItem__row'}>
            <div className={'basketItem__first'}>
                <img className={'basket__img'} src={item.image} alt={'image not found'}/>
                <p className={'text-weight'}>{item.name}</p>
            </div>

            <div className={'basketItem__two'}>
                <p className={'text-weight'}>{item.price + 'руб.'}</p>

                <Button onClick={delToBasketHandler} className={'basketItem__button-del'}>Удалить</Button>
            </div>
        </div>

    );
}

export default Basket;