import React, {useContext} from "react";
import {Button} from "@mui/material";
import {useModal} from "react-hooks-use-modal";
import './BasketModal.css'
import RadioBox from "./RadioBox";
import {ThemeContext} from "../Layout/Theme/ThemeContext";
import Checkout from "../Checkout/Checkout";

function BasketModal( {subtotal}) {
    const [Modal, open, close] = useModal('root', {
        preventScroll: true,
        closeOnOverlayClick: false
    });

    const {isLightTheme, light, dark} = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;

    return (
        <>
            <Button className={'basket__button-buy'} onClick={open}>Заказать</Button>
            <Modal>
                <div style={{
                    color: `${theme.text1}`,
                    background: `${theme.mainbg}`
                }}
                     className={'basketModal__border'}>
                    <div className={'.basketModal__body'}>

                        <input
                            style={{
                                background: `${theme.element}`,
                                color: `${theme.text1}`
                            }}
                            className={theme === dark ? 'basketModal__input-dark' : 'basketModal__input-light'}
                            placeholder={"Телефон: "}/>
                        <input
                            style={{
                                background: `${theme.element}`,
                                color: `${theme.text1}`
                            }}
                            className={theme === dark ? 'basketModal__input-dark' : 'basketModal__input-light'}
                            placeholder={"Адрес: "}/>
                        <input
                            style={{
                                background: `${theme.element}`,
                                color: `${theme.text1}`
                            }}
                            className={theme === dark ? 'basketModal__input-dark' : 'basketModal__input-light'}
                            placeholder={"Имя: "}/>
                        <input
                            style={{
                                background: `${theme.element}`,
                                color: `${theme.text1}`
                            }}
                            className={theme === dark ? 'basketModal__input-dark' : 'basketModal__input-light'}
                            placeholder={"Время доставки: "}/>
                        <input
                            style={{
                                background: `${theme.element}`,
                                color: `${theme.text1}`
                            }}
                            className={theme === dark ? 'basketModal__input-dark' : 'basketModal__input-light'}
                            placeholder={"Email (необязательно): "}/>

                        {/*<RadioBox/>*/}

                        <div className={'basketModal__buttons'}>
                            <div onClick={close}>
                            <Checkout subtotal={subtotal} />
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