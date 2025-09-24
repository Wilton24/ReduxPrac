import { configureStore, createSlice } from "@reduxjs/toolkit"

const initialState = { count: 0, showCounter: true, isAuthenticated: false };

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

const initialAuthState = { isAuthenticated: false };

const authSlice = createSlice({
    name: 'authentication',
    initialState: initialAuthState,
    reducers: {
        login(state) {
            state.isAuthenticated = true;
        },
        logout(state) {
            state.isAuthenticated = false;
        }
    }
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        auth: authSlice.reducer
    }
});

export default store;
