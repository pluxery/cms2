import React, {useContext} from "react";

import {ThemeContext} from "../Layout/Theme/ThemeContext";
import CategoryBox from "./CategoryBox";

import './Category.css'

function Category({category}) {

    const {isLightTheme, light, dark} = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;

    return (
        <div
            style={{ background: `${theme.cbg}`,}}
            className={'category'}>
            <div
                className={'category-row'}>

                {category.map(item => (
                    <CategoryBox image={item.image} category={item.name} link={item.link}/>
                ))}

            </div>
        </div>
    );
}

export default Category;