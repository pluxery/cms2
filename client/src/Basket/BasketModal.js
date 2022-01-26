import React, {useContext, useState} from "react";
import {Button} from "@mui/material";
import {useModal} from "react-hooks-use-modal";
import './BasketModal.css'
import {ThemeContext} from "../Layout/Theme/ThemeContext";
import Checkout from "../Checkout/Checkout";
import axios from "axios";
import {AuthContext} from "../Auth/AuthContext";
import {useSelector} from "react-redux";

function BasketModal({subtotal}) {
    const products = useSelector(state => state.basket.productsBasket);
    const uniqProducts = [...new Set(products)];
    const totalPrice = products.reduce((acc, product) => acc += product.price, 0)

    const [Modal, open, close] = useModal('root', {
        preventScroll: true,
        closeOnOverlayClick: false
    });
    const {isLightTheme, light, dark} = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;

    const currentUser = useContext(AuthContext)

    const [form, setForm] = useState({
            address: '',
            userId: currentUser.userId,
            phone: '',
            date: '',
            name: '',
            email: '',
            orderItems: uniqProducts,
            totalPrice: totalPrice,
        }
    )
    const changeHandler = event => {
        setForm({...form, [event.target.name]: event.target.value})
    }
    const orderHandler = async () => {
        try {
            const response = await axios.post('/api/order', {...form})
        } catch (e) {
        }
    }

    return (
        <>
            <Button className={'basket__button-buy'} onClick={open}>Заказать</Button>
            <Modal>

                <div style={{color: `${theme.text1}`, background: `${theme.mainbg}`}}
                     className={'basketModal__border'}>
                    <div className={'.basketModal__body'}>

                        <input
                            style={{background: `${theme.element}`, color: `${theme.text1}`}}
                            className={theme === dark ? 'basketModal__input-dark' : 'basketModal__input-light'}
                            placeholder={"Телефон: "}
                            type="text"
                            name="phone"
                            value={form.phone}
                            onChange={changeHandler}/>

                        <input
                            style={{background: `${theme.element}`, color: `${theme.text1}`}}
                            className={theme === dark ? 'basketModal__input-dark' : 'basketModal__input-light'}
                            placeholder={"Адрес: "}
                            type="text"
                            name="address"
                            value={form.address}
                            onChange={changeHandler}
                        />

                        <input
                            style={{
                                background: `${theme.element}`,
                                color: `${theme.text1}`
                            }}
                            className={theme === dark ? 'basketModal__input-dark' : 'basketModal__input-light'}
                            placeholder={"Имя: "}
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={changeHandler}/>

                        <input
                            style={{background: `${theme.element}`, color: `${theme.text1}`}}
                            className={theme === dark ? 'basketModal__input-dark' : 'basketModal__input-light'}
                            placeholder={"Время доставки: "}
                            type="text"
                            name="phone"
                            value={form.phone}
                            onChange={changeHandler}/>
                        <input
                            style={{background: `${theme.element}`, color: `${theme.text1}`}}
                            className={theme === dark ? 'basketModal__input-dark' : 'basketModal__input-light'}
                            placeholder={"Email: "}
                            type="text"
                            name="email"
                            value={form.email}
                            onChange={changeHandler}/>


                        <div className={'basketModal__buttons'}>
                            <Button onClick={orderHandler}>Send form</Button>
                            <div onClick={close}>
                                <Checkout subtotal={subtotal}/>
                            </div>
                            <Button className={'basketItem__button-del'} onClick={close}>Отмена</Button>
                        </div>
                    </div>

                </div>
            </Modal>
        </>
    )
}

export default BasketModal;