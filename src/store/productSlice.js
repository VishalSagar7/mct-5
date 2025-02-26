import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: "productsArray", 
    initialState: {
        productsArray: null, 
    },
    reducers: {
        
        setProductsArray: (state, action) => {
            state.productsArray = action.payload; 
        },
       
    },
});


export const { setProductsArray } = productSlice.actions;

export default productSlice.reducer;