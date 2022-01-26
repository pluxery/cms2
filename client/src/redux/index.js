import {configureStore} from "@reduxjs/toolkit";
import basketReducer from './basket/reducer';

export const store = configureStore({
        reducer: {
            basket: basketReducer,
        },
    },
)