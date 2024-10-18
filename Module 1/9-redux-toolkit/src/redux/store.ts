import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './features/toDoSlice'
import { baseApi } from './query/TodoQuery'
export const store = configureStore({
  reducer: {
    todos: todoReducer,
    [baseApi.reducerPath] : baseApi.reducer //connect the baseApi reducer to the store
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(baseApi.middleware) //connect the baseApi middleware to the store
})
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch