import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
    reducerPath: 'pokemonApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
    tagTypes: ['todo'],
    endpoints: (builder) => ({
        getTodos: builder.query({
            query: () => ({
                method: 'GET',
                url: `/tasks`,
            }),
            providesTags: ['todo'], //get todos er tag nam dilam todo
        }),

        addTodo: builder.mutation({
            query: (data) => {
                return {
                    method: 'POST',
                    url: `/task`,
                    body: data
                }
            },
            invalidatesTags: ['todo'], //add todo er por tag invalid kore dibe and refetch hobe provider
        }),
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetTodosQuery, useAddTodoMutation } = baseApi