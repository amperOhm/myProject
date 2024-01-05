import { configureStore } from '@reduxjs/toolkit';
import coffeeReducer from './action/counterSlice';
import formReducer from './action/formSlice';
import usersData from './action/usersData';
import signIn from './action/signIn';

const store = configureStore({
    reducer: {
        counter: coffeeReducer,
        form: formReducer,
        usersData: usersData,
        signIn: signIn,
    },
});

export default store;