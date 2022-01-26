import React, {useContext, useEffect, useState} from "react";
import '../Category/Category.css'
import ProductBox from "./ProductBox";
import axios from "axios";
import {ThemeContext} from "../Layout/Theme/ThemeContext";

function Products({category, url}) {
    const [products, setProduct] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(url);
            setProduct(result.data);
        };
        fetchData();
    }, []);

    const {isLightTheme, light, dark} = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;

    return (
        <div style={{background: `${theme.cbg}`}}
            className={'category'}>
            <div
                className={'category-row'}>
                {products.map((item) => {
                    if(category === 'combo'){
                        return(
                            <ProductBox product={item}/>
                        )
                    }
                    if (item.category === category) {
                        return (
                            <ProductBox product={item}/>
                        )
                    }
                })}
            </div>
        </div>
    );
}

export default Products;