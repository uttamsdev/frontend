import React from 'react'
import TodoCard from './TodoCard'

const TodoContainer = () => {
    return (
        <div className='bg-red-500 p-4 rounded-xl space-y-3'>
            <TodoCard />
            <TodoCard />
            <TodoCard />
        </div>
    )
}

export default TodoContainer