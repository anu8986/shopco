import { configureStore } from "@reduxjs/toolkit";
import productslice from '../redux/moreproduct'

export const store = configureStore({
    reducer: {
        product: productslice
    }
})
