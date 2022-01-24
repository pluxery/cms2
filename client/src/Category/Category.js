import React from "react";
import './Category.css'
import CategoryBox from "./CategoryBox";


function Category({category}) {
    return (
        <div className={'category'}>

            <div className={'category-row'}>

                {category.map(item => (
                    <CategoryBox image={item.image} category={item.name} link={item.link}/>
                ))}

            </div>
        </div>
    );
}

export default Category;