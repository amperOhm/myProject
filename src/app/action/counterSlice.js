import { createSlice } from '@reduxjs/toolkit';
// , PayloadAction

const initialState = {
    numOfCoffee: 20,
    numOfCoffeeBean: 20,
    numOfCake: 20,
}

export const coffeeSlice = createSlice({
    name: 'coffee',
    initialState,
    reducers: {
        // 這裡固定會有 sate & action 兩參數，直接對應於上面的 state
        coffeeOrdered: (state, action) => {
            console.log('action.payload : ' + action.payload);
            state.numOfCoffee = state.numOfCoffee - action.payload
            console.log('state.numOfCoffee : ' + state.numOfCoffee);
            return state;
        },
        coffeeRestocked: (state, action) => {
            state.numOfCoffee = state.numOfCoffee + action.payload
            return state;
        },
    },
});

// action creators
export const { coffeeOrdered, coffeeRestocked } = coffeeSlice.actions;

// reducer
export default coffeeSlice.reducer;
// module.exports = coffeeSlice.reducer;