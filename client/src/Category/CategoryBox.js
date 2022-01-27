import {NavLink} from "react-router-dom";
import React, {useContext} from "react";

import {ThemeContext} from "../Layout/Theme/ThemeContext";

import './CategoryBox.css'

function CategoryBox({image, category, link = '/'}) {

    const {isLightTheme, light, dark} = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;

    return (
        <div
            style={{background: `${theme.element}`,}}
            className={'categoryBox_content'}>

                <div className={'categoryBox__image'}>
                    <img className={'categoryBox__img-size'} src={image} alt={'image not found'}/>
                </div>

                <div className={'categoryBox__name'}>
                    <NavLink to={link} className={'sidebar__text-decoration'}>
                    <p style={{color: `${theme.ctext}`}}
                    >{category}</p>
                    </NavLink>
                </div>
        </div>
    );
}

export default CategoryBox;