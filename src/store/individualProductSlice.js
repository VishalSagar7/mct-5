
import { createSlice } from "@reduxjs/toolkit";

const individualProductSlice = createSlice({
    name: "individualProduct",
    initialState: {
        individualProduct: null,
    },
    reducers: {

        setIndividualProduct: (state, action) => {
            state.individualProduct = action.payload;
        },

    },
});


export const { setIndividualProduct } = individualProductSlice.actions;

export default individualProductSlice.reducer;