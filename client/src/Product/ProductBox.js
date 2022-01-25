import React, {useContext} from "react";
import ProductModal from "./ProductModal";
import {ThemeContext} from "../Layout/Theme/ThemeContext";
import "./Product.css"


function ProductBox({product}) {

    const {isLightTheme, light, dark} = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;

    return (
        <div className={'product__body'}>
            <div
                style={{
                    background: `${theme.mainbg}`,
                }}
                className={'categoryBox_content'}>
                <div className={'categoryBox__image'}>
                    <img className={'categoryBox__img-size'} src={product.image} alt={'image not found'}/>
                </div>
                <div className={'categoryBox__name'}>
                    <p
                        style={{
                            color: `${theme.text1}`,
                        }}
                    >{product.name}</p>
                    <p
                        style={{
                            color: `${theme.text1}`,
                        }}
                    >{product.price + ' руб.'}</p>
                    <ProductModal
                        product={product}/>
                </div>
            </div>
        </div>
    )
}

export default ProductBox;