import React, {useEffect, useState} from "react";
import '../Category/Category.css'
import ProductBox from "./ProductBox";
import axios from "axios";

function Products({category, url}) {
    const [products, setProduct] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(url);
            setProduct(result.data);
        };
        fetchData();
    }, []);

    return (
        <div className={'category'}>

            <div className={'category-row'}>
                {products.map((item) => {
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