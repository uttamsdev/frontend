import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type TCounter = {
    count: number;
}
const initialState : TCounter = { count: 0 }
const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        //functions

        increment: (state) => {
            state.count = state.count + 1;
        },

        decrement: (state) => {
            state.count = state.count - 1;
        },

        incrementByValue: (state, action : PayloadAction<number>) => {
            state.count = state.count + action.payload.value;
        }
    }
})

export const {increment, decrement, incrementByValue} = counterSlice.actions;

export default counterSlice.reducer;