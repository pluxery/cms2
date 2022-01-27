import axios from "axios";
import React, {useContext, useEffect, useState} from 'react';

import {ThemeContext} from "../Layout/Theme/ThemeContext";
import PizzaItem from "./ListOfPizza";

function Pizza() {
    const [pizza, setPizza] = useState([])

    const {isLightTheme, light, dark} = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios('/api/pizza',);
            setPizza(response.data);
        };
        fetchData();
    }, []);


    return (
        <div className={'order'}>
            <div className={'order__body'}>
                <h1 style={{background: `${theme.bgfordvfu}`,
                    color: `${theme.text1}`}}
                    className={'header'}
                >Список Пиццы</h1>
                {pizza.slice(0).reverse().map((item) => {
                        return (
                            <PizzaItem pizza={item}/>
                        )
                    }
                )}
            </div>
        </div>
    );
}

export default Pizza;