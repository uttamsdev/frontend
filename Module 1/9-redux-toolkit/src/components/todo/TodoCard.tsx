import { removeTodo, toggleComplete } from '@/redux/features/toDoSlice';
import { useAppDispatch } from '@/redux/hooks/hook'
import React from 'react'

const TodoCard = ({ data }) => {
    const dispatch = useAppDispatch();

    const toggleState = () => {
        dispatch(toggleComplete(data?.id))
    }
    return (
        <div className='flex items-center justify-between bg-white rounded-md p-3 border'>
            <input onChange={toggleState} name='complete' id='complete' type='checkbox' />
            <p>{data?.title}</p>
            <p>{data?.isCompleted ? 'Done' : 'Pending'}</p>
            <p>{data?.description}</p>
            <div className='flex gap-2.5'>
                <button className='bg-blue-500 text-white p-1 rounded-md'>Edit</button>
                <button onClick={() => dispatch(removeTodo(data?.id))} className='bg-red-500 text-white p-1 rounded-md'>Delete</button>

            </div>
        </div>
    )
}

export default TodoCard