import React, {useContext} from 'react'
import './SidebarItem.css'
import {ThemeContext} from "../Theme/ThemeContext";

function SidebarItem({text, Icon}) {

    const {isLightTheme, light, dark} = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;

    return (
        <span
            style={{
                color: `${theme.text1}`,
                background: `${theme.mainbg}`
            }}
            className={"sidebarItem"}>
            <Icon/>
            <h2>{text}</h2>
        </span>
    )
}

export default SidebarItem;