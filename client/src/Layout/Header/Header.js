import './Header.css';
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import logo from './logo.png';
import {NavLink, useNavigate} from "react-router-dom";
import React, {useContext} from "react";
import {AuthContext} from "../../Auth/AuthContext";
import { ThemeContext } from "../Theme/ThemeContext";
import {Button} from "@mui/material";

function Header() {
    const navigate = useNavigate()
    const auth = useContext(AuthContext)

    const logoutHandler = event => {
        event.preventDefault()
        auth.logout()
        navigate('/')
    }

    const {isLightTheme, light, dark, toggleTheme} = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;

    return (

        <div style={{
                background: `${theme.bg}`,
                color: `${theme.text}`,
            }}

            className={'header__container'}>
            <div className={'header__title'}>
                <h2 style={{
                        background: `${theme.bgfordvfu}`,
                        color: `${theme.text}`}}
                >WWW.DVFU.RU</h2>
            </div>

            <div style={{background: `${theme.bg}`}}
                className={'header__menu'}>
                <div className={'header__logo-fefu'}>
                    <img src={logo} alt="logo" width="80" height="80"/>
                </div>

                <div className={'header__info'}>

                    <NavLink to={'/contacts'} className={'blue__text'}>
                        <p style={{
                                color: `${theme.textheader}`,
                                background: `${theme.bg}`}}>Контакты</p>
                    </NavLink>

                    <NavLink to={'/help'} className={'blue__text'}>
                        <p style={{
                                color: `${theme.textheader}`,
                                background: `${theme.bg}`}}>Помощь</p>
                    </NavLink>

                    <NavLink to={'/map'} className={'blue__text'}>
                        <p style={{
                                color: `${theme.textheader}`,
                                background: `${theme.bg}`}}>Наш адрес</p>
                    </NavLink>

                    <NavLink to={'/quality'} className={'blue__text'}>
                        <p style={{
                                color: `${theme.textheader}`,
                                background: `${theme.bg}`}} className={'blue__text'}>Качество</p>
                    </NavLink>
                </div>

                <div
                    className={'header__profile'}>

                    <NavLink to={'/order'} className={'header__profile-data-order'}>
                        <p style={{
                            color: `${theme.textheader}`,
                            background: `${theme.bg}`}}>
                           Заказы </p>
                    </NavLink>


                    <NavLink
                        to={'/basket'}
                        className={'sidebar__text-decoration'}>
                        <LocalGroceryStoreOutlinedIcon
                            style={{
                                color: `${theme.textheader}`,
                                background: `${theme.bg}`
                            }}
                            className={'header__profile-data1'}/>
                    </NavLink>

                    <p style={{color: `${theme.textheader}`, background: `${theme.bg}`}}
                        className={'header__profile-data'}
                       onClick={logoutHandler}>
                        Выйти</p>

                    <Button onClick={() => toggleTheme()}>
                        {theme === dark ?  '🌙'  : '☀️'}
                    </Button>

                </div>
            </div>
        </div>
    );
}

export default Header;