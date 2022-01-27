import React, {useContext, useEffect, useState} from 'react';
import axios from "axios";
import {NavLink, useParams} from "react-router-dom";
import {ThemeContext} from "../Layout/Theme/ThemeContext";
import {Button} from "@mui/material";
import "./Admin.css"

function AddPizza() {

    const [form, setForm] = useState({
        image: '',
        name: '',
        price: '',
        compound: '',
    })

    const changeHandler = event => {
        setForm({...form, [event.target.name]: event.target.value})
    }

    const addHandler = () => {
        const response = axios.post(`/api/pizza/`, {...form})
    }

    const {isLightTheme, light, dark} = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;

    return (
        <div className={'admin__100vw-center'}>
            <div className={'edit-content'}>

                <h1>Добавить пиццу</h1>

                <input
                    style={{background: `${theme.element}`, color: `${theme.text1}`}}
                    className={theme === dark ? 'basketModal__input-dark' : 'basketModal__input-light'}
                    placeholder={"URL картинки "}
                    type="text"
                    name="image"
                    value={form.image}
                    onChange={changeHandler}/>

                <input
                    style={{background: `${theme.element}`, color: `${theme.text1}`}}
                    className={theme === dark ? 'basketModal__input-dark' : 'basketModal__input-light'}
                    placeholder={"Название "}
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={changeHandler}
                />

                <input
                    style={{
                        background: `${theme.element}`,
                        color: `${theme.text1}`
                    }}
                    className={theme === dark ? 'basketModal__input-dark' : 'basketModal__input-light'}
                    placeholder={"Цена "}
                    type="text"
                    name="price"
                    value={form.price}
                    onChange={changeHandler}/>

                <input
                    style={{background: `${theme.element}`, color: `${theme.text1}`}}
                    className={theme === dark ? 'basketModal__input-dark' : 'basketModal__input-light'}
                    placeholder={"Состав "}
                    type="text"
                    name="compound"
                    value={form.compound}
                    onChange={changeHandler}/>
                <div className={'product__footer'}>
                    <NavLink to={'/admin/pizza'} className={'sidebar__text-decoration'}>
                        <Button className={'basket__button-buy'} onClick={addHandler}>Добавить</Button>
                    </NavLink>
                </div>
            </div>

        </div>
    )
        ;
}

export default AddPizza;