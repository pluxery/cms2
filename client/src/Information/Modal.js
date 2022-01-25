import React, {useContext} from "react";
import "./Map.css";
import logo from "../Layout/Header/logo.png";
import {ThemeContext} from "../Layout/Theme/ThemeContext";

function Modal({setOpenModal}) {
    const {isLightTheme, light, dark} = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;
    return (
        <div
            className={theme === dark ? 'modal-background-dark' : 'modal-background-light'}>
            <div
                style={{background: `${theme.element}`}}
                className="modalContainer">
                <div className="titleCloseBtn">
                    <button
                        style={{color: `${theme.ctext}`}}
                        onClick={() => {
                            setOpenModal(false)
                        }}> X
                    </button>
                </div>
                <div className="title">
                    <h2 style={{color: `${theme.text1}`}}>Pizza FEFU</h2>
                    <img src={logo} alt="logo" width="100" height="80"/>
                </div>
                <div className="body">
                    <h5 style={{color: `${theme.text1}`}}>Наш телефон</h5>
                    <p style={{color: `${theme.text1}`}}>89274376886</p>
                    <h5 style={{color: `${theme.text1}`}}>Наш адрес</h5>
                    <p style={{color: `${theme.text1}`}}>п. Аякс, д. 10, корп. A, Владивосток, Приморский край,
                        690922</p>
                    <h5 style={{color: `${theme.text1}`}}>Режим работы</h5>
                    <p style={{color: `${theme.text1}`}}>10:00 - 22:00</p>
                </div>
            </div>
        </div>
    );
}

export default Modal;