import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Layout from "./Layout/Layout";
import MyMap from "./Information/MyMap";
import Contacts from "./Information/Contacts";
import Quality from "./Information/Quality";
import Help from "./Information/Help";
import Basket from "../../client/src/Basket/Basket";
import Main from "../../client/src/Main/Main";
import Category from "../../client/src/Category/Category";
import categoryWater from "../../client/src/Data/categoryWater";
import categoryDessert from "../../client/src/Data/categoryDessert";
import categoryCombo from "../../client/src/Data/categoryCombo";
import Products from "../../client/src/Product/Products";

import {AuthPage} from "./Auth/AuthPage";

const apiDrinks = "/api/drink";
const apiDesserts = "/api/dessert";

export const useRoutes = isAuthenticated => {
    if (isAuthenticated) {
        return (
            <Routes>
                <Route path="/" exact element={<AuthPage/>}/>
                <Route path="/map" exact element={<Layout children={<MyMap/>}/>}/>
                <Route path="/contacts" exact element={<Layout children={<Contacts/>}/>}/>
                <Route path="/quality" exact element={<Layout children={<Quality/>}/>}/>
                <Route path="/help" exact element={<Layout children={<Help/>}/>}/>
                <Route path="/basket" exact element={<Layout children={<Basket/>}/>}/>
                <Route path="/main" exact element={<Layout children={<Main/>}/>}/>

                <Route path="/drinks" exact element={<Layout children={<Category category={categoryWater}/>}/>}/>
                <Route path="/desserts" exact element={<Layout children={<Category category={categoryDessert}/>}/>}/>
                <Route path="/combo" exact element={<Layout children={<Category category={categoryCombo}/>}/>}/>


                <Route path="/beer" exact
                       element={<Layout children={<Products category={"beer"} url={apiDrinks}/>}/>}/>
                <Route path="/drinks/ice" exact
                       element={<Layout children={<Products category={"ice"} url={apiDrinks}/>}/>}/>
                <Route path="/drinks/hot" exact
                       element={<Layout children={<Products category={"hot"} url={apiDrinks}/>}/>}/>
                <Route path="/drinks/milk" exact
                       element={<Layout children={<Products category={"milk"} url={apiDrinks}/>}/>}/>

                <Route path="/desserts/ice-cream" exact
                       element={<Layout children={<Products category={"ice-cream"} url={apiDesserts}/>}/>}/>
                <Route path="/desserts/gingerbread" exact
                       element={<Layout children={<Products category={"donut"} url={apiDesserts}/>}/>}/>
                <Route path="/desserts/cake" exact
                       element={<Layout children={<Products category={"cake"} url={apiDesserts}/>}/>}/>

            </Routes>
        )
    }

    return (
        <Routes>
            <Route path="/" exact element={<AuthPage/>}/>
        </Routes>
    )
}