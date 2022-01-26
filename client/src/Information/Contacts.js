import React, {useContext} from "react";
import img1 from './Image/img1.png';
import "./Information.css"
import InstagramIcon from '@mui/icons-material/Instagram';
import {Icon24LogoVk} from '@vkontakte/icons';
import TwitterIcon from '@mui/icons-material/Twitter';
import {ThemeContext} from "../Layout/Theme/ThemeContext";

function Contacts() {

    const {isLightTheme, light, dark} = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;

    return (
        <div className={'contacts'}>
            <div className={'contacts-img'}>
                <img src={img1} alt="image1" width="500" height="500"/>
            </div>
            <div className={'contacts-container'}>
                <div
                    style={{background: `${theme.inf}`}}
                    className={'contacts-container__info'}>
                    <h2 style={{color: `${theme.text1}`}}>Мы в Истаграме :</h2>
                    <div className={'contacts-container__desc'}>
                        <InstagramIcon className={'contacts-container__icon1'}/>
                        <a style={{color: `${theme.text2}`}}
                            href={"https://www.instagram.com/bobiklovik/"}> https://www.instagram.com/bobiklovik</a>
                    </div>
                </div>
                <div
                    style={{background: `${theme.inf}`}}
                    className={'contacts-container__info'}>
                    <h2 style={{color: `${theme.text1}`}}>Мы Вконтакте :</h2>
                    <div className={'contacts-container__desc'}>
                        <Icon24LogoVk className={'contacts-container__icon2'}/>
                        <a style={{color: `${theme.text2}`}}
                            href={"https://vk.com/clecka"}> https://vk.com/clecka</a>
                    </div>
                </div>
                <div
                    style={{background: `${theme.inf}`}}
                    className={'contacts-container__info'}>
                    <h2 style={{color: `${theme.text1}`}}>Мы в Твиттере :</h2>
                    <div className={'contacts-container__desc'}>
                        <TwitterIcon className={'contacts-container__icon2'}/>
                        <a style={{color: `${theme.text2}`}}
                            href={"https://twitter.com"}> https://twitter.com</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contacts;