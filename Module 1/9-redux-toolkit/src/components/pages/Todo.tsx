import React from 'react'
import TodoContainer from '../todo/TodoContainer'
import TodoCard from '../todo/TodoCard'

const Todo = () => {
    return (
        <div className='container mx-auto'>
            <p className='text-center text-xl font-semibold'>My ToDos:</p>
            <TodoContainer />
        </div>
    )
}

export default Todo