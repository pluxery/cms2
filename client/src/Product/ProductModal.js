import React, {useContext, useState} from "react";
import {useDispatch} from "react-redux";
import './Product.css'
import {Button} from "@mui/material";
import {useModal} from "react-hooks-use-modal";
import {addProduct} from "../redux/busket/reducer";
import {ThemeContext} from "../Layout/Theme/ThemeContext";

function ProductModal({product}) {

    const dispatch = useDispatch()
    const {isLightTheme, light, dark} = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;

    const addToBasketHandler = (e) => {
        e.stopPropagation()
        dispatch(addProduct(product))
    }

    const [Modal, open, close] = useModal('root', {
        preventScroll: true,
        closeOnOverlayClick: false
    });

    return (
        <>
            <Button
                style={{color: `${theme.text2}`}}
                onClick={open}>Купить</Button>
            <Modal>
                <div
                    style={{color: `${theme.text1}`}}
                    className={theme === dark ? 'product-border-dark' : 'product-border-light'}>
                    <div style={{background: `${theme.mainbg}`}}
                         className={'product'}>
                        <div>
                            <img className={'product__img-size'} src={product.image} alt={'image not found'}/>
                        </div>

                        <div className={'product__info'}>
                            <p className={'product__category-text'}>{product.name}</p>
                            <p className={'product__price-text'}>{product.price + " рублей"}</p>
                            <p className={'product__compound-text'}>{"Состав: " + product.compound}</p>

                            <Button
                                onClick={addToBasketHandler}
                                className={theme === dark ? 'product__button-add-dark' : 'product__button-add-light'}>
                                <p onClick={close}>Добавить</p>
                            </Button>
                        </div>
                    </div>
                    <div
                        style={{background: `${theme.mainbg}`}}
                        className={'product__footer'}>
                        <Button
                            className={'product__button-close'} onClick={close}>Х</Button>
                    </div>
                </div>
            </Modal>
        </>
    )
}

export default ProductModal