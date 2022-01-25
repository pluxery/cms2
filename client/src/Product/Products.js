import React, {useEffect, useState} from "react";
import '../Category/Category.css'
import ProductBox from "./ProductBox";
import axios from "axios";

function Products() {
    const [products, setProduct] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                '/api/drink',
            );
            setProduct(result.data);
        };
        fetchData();
    }, []);
    return (
        <div className={'category'}>

            <div className={'category-row'}>
                {products.map(item => (
                    <ProductBox product={item}/>))}


            </div>
        </div>
    );
}

export default Products;