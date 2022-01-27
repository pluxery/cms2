import React, {useContext, useEffect, useState} from 'react';
import axios from "axios";
import {NavLink, useParams} from "react-router-dom";
import {ThemeContext} from "../Layout/Theme/ThemeContext";
import {Button} from "@mui/material";
import "./Admin.css"

function EditPizza() {

    const params = useParams();

    const [pizza, setPizza] = useState([])
    useEffect(async () => {
        try {
            const response = await axios.post(`/api//pizza/find/${params.id}`)
            setPizza(response.data)

        } catch (e) {
        }
    }, [setPizza])

    const [form, setForm] = useState({
        image: pizza.image,
        name: pizza.name,
        price: pizza.price,
        compound: pizza.compound,
    })

    const changeHandler = event => {
        setForm({...form, [event.target.name]: event.target.value})
    }
    const editHandler = async () => {
        try {
            const response = await axios.put(`/api//pizza/update/${params.id}`, {...form})
        } catch (e) {
        }
    }

    const {isLightTheme, light, dark} = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;

    return (
        <div className={'admin__100vw-center'}>

            <div className={'pizza-body'}>

                <img src={pizza.image}/>

                <div className={'pizza-text'}>
                    <h2>{pizza.name}</h2>
                    <p>{pizza.compound}</p>
                    <b>{pizza.price + "руб."}</b>
                </div>

            </div>


            <div className={'edit-content'}>
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
                        <Button className={'basket__button-buy'} onClick={editHandler}>Изменить</Button>
                    </NavLink>
                </div>
            </div>

        </div>
    );
}

export default EditPizza;