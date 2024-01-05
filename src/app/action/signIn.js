import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    signin: false,
    userName: ''
};

export const signInSlice = createSlice({
    name: 'userdata',
    initialState,
    reducers: {
        saveSignIn: (state, action) => {
            return {
                ...state,
                signin: true,
                userName: action.payload.account
            };
        },
        saveSignOut: (state, action) => {
            return {
                ...state,
                signin: false,
                userName: ''
            };
        }
    },

});

// action
export const { saveSignIn, saveSignOut } = signInSlice.actions;

// reducer
export default signInSlice.reducer;