import {Link, NavLink} from 'react-router-dom';
import {Box, Button} from "@mui/material";
import axios from "axios";
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import React, {useContext} from 'react';

import {ThemeContext} from "../Layout/Theme/ThemeContext";

import '../Order/Order.css'

function PizzaItem({pizza}) {

    const handleDelete = (id) => {
        axios.delete(`/api/pizza/delete/${id}`).then((res) => {
            window.location.href = "/admin/pizza";
        });
    }

    const {isLightTheme, light, dark} = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;

    return (
        <>
            <table className="table">
                <thead>
                <tr>
                    <th style={{background: `${theme.th}`}}>
                        <div>ID</div>
                    </th>
                    <th style={{background: `${theme.th}`}}>
                        <div>Картинка</div>
                    </th>
                    <th style={{background: `${theme.th}`}}>
                        <div>Название</div>
                    </th>
                    <th style={{background: `${theme.th}`}}>
                        <div>Цена</div>
                    </th>
                    <th style={{background: `${theme.th}`}}>
                        <div>Описание</div>
                    </th>
                    <th style={{background: `${theme.th}`}}>
                        <div>Действия</div>
                    </th>
                </tr>
                </thead>
                <tbody>
                <tr style={{background: `${theme.container}`}}>
                    <td>
                        <div>{pizza._id}</div>
                    </td>
                    <td>
                        <img className={'border-radius'} width="80" height="80"
                             src={pizza.image}/>
                    </td>
                    <td>
                        <div>{pizza.name}</div>
                    </td>
                    <td>
                        <div>{pizza.price + 'руб.'}</div>
                    </td>
                    <td>
                        <div>{pizza.compound}</div>
                    </td>

                    <td>
                        <div className={'status'}>
                            <Box component={Link} to={`/admin/edit/${pizza._id}`}>
                                <Button className={theme === dark ? 'button-dark' : 'button-light'}>
                                        <ModeEditOutlineIcon className={'status-icon__edit'}/>
                                </Button>
                            </Box>
                            {' '} / {' '}
                            <Button className={theme === dark ? 'button-dark' : 'button-light'}>
                                <DeleteIcon onClick={() => handleDelete(pizza._id)} className={'status-icon__delete'}/>
                            </Button>
                        </div>
                    </td>
                </tr>
                </tbody>
            </table>
        </>

    );
}

export default PizzaItem;
