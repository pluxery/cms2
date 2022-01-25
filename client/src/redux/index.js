import {configureStore} from "@reduxjs/toolkit";
import basketReducer from './busket/reducer';

export const store = configureStore({
        reducer: {
            basket: basketReducer,
        },
    },
)