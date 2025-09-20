import { configureStore, createSlice } from "@reduxjs/toolkit"

const initialState = { count: 0, showCounter: true };

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment(state) {
            state.count++;
        },
        decrement(state) {
            state.count--;
        },
        incrementBy5(state) {
            state.count += 5;
        },
        toggle(state) {
            state.showCounter = !state.showCounter;
        }
    }
});

export const counterActions = counterSlice.actions;

const store = configureStore({
    reducer: counterSlice.reducer
});

export default store;
