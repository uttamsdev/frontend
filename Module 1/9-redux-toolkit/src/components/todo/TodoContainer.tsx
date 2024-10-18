import React from 'react'
import TodoCard from './TodoCard'
import { Button } from '../ui/button'
import { AddTodoModal } from './AddTodoModal'
import FilterDropdown from './FilterDropdown'
import { useGetTodosQuery } from '@/redux/query/TodoQuery'

const TodoContainer = () => {
    // const todos = useAppSelector((state) => state.todos.todos)
    const { data: todos, isError, isLoading, refetch } = useGetTodosQuery(undefined)
    return (
        <div className=' '>
            <div className='flex items-center justify-between mb-4'>
                <AddTodoModal todoRefetch={refetch} />
                <FilterDropdown />
            </div>
            <div className='bg-blue-500 p-2 rounded-xl'>

                <div className='bg-white  p-3 rounded space-y-3'>

                    {
                        todos?.data?.map((item, i) => <TodoCard data={item} key={i} />)
                    }
                </div>
            </div>
        </div>
    )
}

export default TodoContainer