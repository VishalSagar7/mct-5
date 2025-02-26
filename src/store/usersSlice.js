import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'usersArray',
    initialState: {
        usersArray: null,
    },
    reducers: {
        setUsers: (state, action) => {
            state.usersArray = action.payload;
        }
    }
});


export const { setUsers } = userSlice.actions;
export default userSlice.reducer;