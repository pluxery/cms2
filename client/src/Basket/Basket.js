import React, {useState} from "react";
import './Basket.css'
import {Button} from "@mui/material";
import BasketItem from "./BasketItem";
import BasketModal from "./BasketModal";
import pizza from "../Data/Pizza";
import CategoryBox from "../Category/CategoryBox";

function Basket({products = pizza}) {

    return (
        <div className={'basket'}>
            <div>
                <div className={'basket__header'}>
                    <h1>У вас отличный вкус!</h1>
                </div>

                <div className={'basket__body'}>

                    {products.map(item => (
                        <BasketItem product={item}/>
                    ))}
                </div>

                <div className={'basket__footer'}>
                    <BasketModal/>
                </div>
            </div>

        </div>
    );
}

export default Basket;