import React, {useEffect, useState} from "react";
import './Main.css'
import ProductBox from "../Product/ProductBox";
import axios from "axios";
import SearchIcon from "@mui/icons-material/Search";


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

    const [value, setValue] = useState('')

    const filteredPizza = pizza.filter(pizzas =>{
        return pizzas.name.toLowerCase().includes(value.toLowerCase())
    })

    return (
        <div className={'main'}>
                <div className={'main-img'}>
                    <img className={'main__poster'}
                         src={'https://cdn.papajohns.ru//images/banners/bfb447d5ba9036a2b5eb0e1941fcd152.webp'}
                         alt={'image not found'}/>
                </div>

            <div className="search">
                <div className="search__input">
                    <SearchIcon className="search__icon"/>
                    <input
                        placeholder="Поиск"
                        type="text"
                        onChange={(event) => setValue(event.target.value)}
                    />
                </div>
            </div>

            <div className={'main__pizza'}>
                {filteredPizza.map(item => (
                    <ProductBox product={item}/>
                ))}
            </div>

        </div>


    );
}

export default Main;