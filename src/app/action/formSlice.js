import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: '',
    age: 0
};

export const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        saveFormData: (state, action) => {
            // console.log('action.paload:' + action.payload.name);
            state = { ...action.payload };
            return state;
        }
    },

});

// action
export const { saveFormData } = formSlice.actions;

// reducer
export default formSlice.reducer;