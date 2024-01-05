import { createSlice } from "@reduxjs/toolkit";

const initialState =
    [
        { account: 'test', password: 'test' }
    ]
    ;

export const userSlice = createSlice({
    name: 'userdata',
    initialState,
    reducers: {
        saveUserData: (state, action) => {
            return [...state, { account: action.payload.account, password: action.payload.password }];

        }
    },

});

// action
export const { saveUserData } = userSlice.actions;

// reducer
export default userSlice.reducer;