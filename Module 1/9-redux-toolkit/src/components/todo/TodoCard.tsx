import React from 'react'

const TodoCard = () => {
    return (
        <div className='flex items-center justify-between bg-white rounded-md p-3'>
            <input type='checkbox' />
            <p>Todo Title</p>
            <p>Time</p>
            <p>Description</p>
            <div className='flex gap-2.5'>
                <button className='bg-blue-500 text-white p-1 rounded-md'>Edit</button>
                <button className='bg-red-500 text-white p-1 rounded-md'>Delete</button>

            </div>
        </div>
    )
}

export default TodoCard