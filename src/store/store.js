import { configureStore } from '@reduxjs/toolkit';
import productSlice from './productSlice.js';
import userSlice from './usersSlice.js';
import individualProductSlice from './individualProductSlice.js';

const store = configureStore({
    reducer: {
        productsArray: productSlice,
        usersArray: userSlice,
        individualProduct: individualProductSlice
    },
});


export default store;