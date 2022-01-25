import React, { useEffect, useState} from "react";
import './Main.css'
import ProductBox from "../Product/ProductBox";
import axios from "axios";


function Main() {
    const [pizza, setPizza] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                '/api/pizza',
            );
            setPizza(result.data);
        };
        fetchData();
    }, []);


    return (
        <div className={'main'}>
            <div>
                <div className={'main-img'}>
                    <img className={'main__poster'}
                         src={'https://cdn.papajohns.ru//images/banners/bfb447d5ba9036a2b5eb0e1941fcd152.webp'}
                         alt={'image not found'}/>
                </div>

                <div className={'main__pizza-tabs'}>
                    //Search
                </div>
            </div>
            <div className={'main__pizza'}>
                {pizza.map(item => (
                <ProductBox product={item}/>
            ))}
            </div>

        </div>


    );
}

export default Main;