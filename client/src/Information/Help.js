import MarkEmailUnreadIcon from '@mui/icons-material/MarkEmailUnread';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import React, {useContext} from "react";

import {ThemeContext} from "../Layout/Theme/ThemeContext";

import "./Information.css"
import img2 from './Image/img2.png';

function Help() {

    const {isLightTheme, light, dark} = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;

    return (
        <div className={'contacts'}>
            <div className={'contacts-container'}>
                <div
                    style={{background: `${theme.inf}`}}
                    className={'contacts-container__info'}>
                    <h2 style={{color: `${theme.text1}`}}>Обратная Связь</h2>
                </div>

                <div style={{background: `${theme.inf}`}}
                    className={'contacts-container__info'}>
                    <h2 style={{color: `${theme.text1}`,}}>Телефон горячей линии: </h2>
                    <div className={'contacts-container__desc'}>
                        <PhoneInTalkIcon className={'contacts-container__icon2'}/>
                        <p style={{color: `${theme.text2}`}}>+79600410790</p>
                    </div>
                </div>

                <div
                    style={{background: `${theme.inf}`}}
                    className={'contacts-container__info'}>
                    <h2 style={{color: `${theme.text1}`}}>Наша почта: </h2>
                    <div className={'contacts-container__desc'}>
                        <MarkEmailUnreadIcon className={'contacts-container__icon3'}/>
                        <p style={{color: `${theme.text2}`}}>afanaseva.sd@students.dvfu.ru</p>
                    </div>
                </div>

            </div>
            <div className={'contacts-img'}>
                <img src={img2} alt="image2" width="500" height="500"/>
            </div>
        </div>
    );
}

export default Help;