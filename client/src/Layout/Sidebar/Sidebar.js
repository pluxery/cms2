import React, {useContext} from "react";
import "./Sidebar.css"
import SidebarItem from "./SidebarItem";

import LocalCafeOutlinedIcon from '@mui/icons-material/LocalCafeOutlined';
import IcecreamOutlinedIcon from '@mui/icons-material/IcecreamOutlined';
import LocalPizzaOutlinedIcon from '@mui/icons-material/LocalPizzaOutlined';
import DiningOutlinedIcon from '@mui/icons-material/DiningOutlined';
import LiquorOutlinedIcon from '@mui/icons-material/LiquorOutlined';
import {NavLink} from "react-router-dom";
import {ThemeContext} from "../Theme/ThemeContext";


function Sidebar() {
    const {isLightTheme, light, dark} = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;

    return (
        <div
            style={{background: `${theme.mainbg}`}}
            className={'sidebar'}>
            <NavLink
                style={{
                    color: `${theme.text1}`,
                }}
                to={'/main'} className={'sidebar__text-decoration'}>
                <SidebarItem
                    Icon={LocalPizzaOutlinedIcon} text={"Пицца"}/>
            </NavLink>

            <NavLink
                style={{
                    color: `${theme.text1}`,
                }}
                to={'/drinks'} className={'sidebar__text-decoration'}>
                <SidebarItem Icon={LocalCafeOutlinedIcon} text={"Напитки"}/>
            </NavLink>

            <NavLink
                style={{
                    color: `${theme.text1}`,
                }}
                to={'/desserts'} className={'sidebar__text-decoration'}>
                <SidebarItem
                    Icon={IcecreamOutlinedIcon} text={"Десерты"}/>
            </NavLink>

            <NavLink
                style={{
                    color: `${theme.text1}`,
                }}
                to={'/combo'} className={'sidebar__text-decoration'}>
                <SidebarItem Icon={DiningOutlinedIcon} text={"Комбо"}/>
            </NavLink>

            <NavLink
                style={{
                    color: `${theme.text1}`,
                }}
                to={'/beer'} className={'sidebar__text-decoration'}>
                <SidebarItem
                    style={{
                        color: `${theme.text1}`,
                    }}
                    Icon={LiquorOutlinedIcon} text={"Пиво!"}/>
            </NavLink>
        </div>
    )
}

export default Sidebar;