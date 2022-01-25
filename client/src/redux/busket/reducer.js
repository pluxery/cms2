import {createSlice} from "@reduxjs/toolkit";

const basketSlice = createSlice({
    name: 'basket',
    initialState: {
        productsBasket: []
    },
    reducers: {
        addProduct: (state, action) => {
            state.productsBasket.push(action.payload)
        },
        delProduct: (state, action) => {
            state.productsBasket = state.productsBasket.filter(product => product.id !== action.payload)
        }
    }
});

export const {addProduct, delProduct} = basketSlice.actions;
export default basketSlice.reducer;