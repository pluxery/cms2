import {createSlice} from "@reduxjs/toolkit";

const basketSlice = createSlice({
    name: 'basket',
    initialState: {
        productsBasket: [],
    },
    reducers: {
        addProduct: (state, action) => {
            state.productsBasket.push(action.payload)
        },
        delProduct: (state, action) => {
            const index = state.productsBasket.findIndex((product) => product.id === action.payload);
            state.productsBasket.splice(index, 1);
        },
        delAllProducts: (state, action) => {
            state.productsBasket.splice(0, action.payload.length)
        }
    }x``
});

export const {addProduct, delProduct, delAllProducts} = basketSlice.actions;
export default basketSlice.reducer;