import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TTodo = {
    id: string;
    title: string;
    description: string;
    isCompleted?: boolean
}

type TInitalState = {
    todos: TTodo[]
}
const initialState: TInitalState = {
    todos: []
}
const todoSlice = createSlice({
    name: 'todo',
    initialState: initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<TTodo>) => {
            state.todos.push({ ...action.payload, isCompleted: false })
        },
        removeTodo: (state, action : PayloadAction<string>) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },

        toggleComplete: (state, action) => {
            const task = state.todos.find((todo) => todo.id === action.payload);
            if (task) {
                task.isCompleted = !task.isCompleted;
            }
        }
    }
})

export const { addTodo, removeTodo, toggleComplete } = todoSlice.actions
export default todoSlice.reducer