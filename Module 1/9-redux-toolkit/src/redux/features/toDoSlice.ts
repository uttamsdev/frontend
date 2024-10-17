import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos: []
}
const todoSlice = createSlice({
    name: 'todo',
    initialState: initialState,
    reducers: {

    }
})

export default todoSlice.reducer