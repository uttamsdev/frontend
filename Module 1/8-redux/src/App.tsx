import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './redux/features/counterSlice';

const App = () => {
  const count = useSelector((state) => state.counter.count) // counter is reducer name here
  const dispatch = useDispatch();
  return (
    <div className='h-screen w-full flex items-center justify-center'>
      <div className='p-10 border flex items-center justify-between'>
        <button onClick={() => dispatch(increment())} className='px-3 py-2 bg-orange-500 text-xl text-white rounded'>Increment</button>
        <h1 className='w-10 text-center'>{count}</h1>
        <button onClick={() => dispatch(decrement())} className='px-3 py-2 bg-blue-500 text-xl text-white rounded'>Decrement</button>
      </div>
    </div>
  )
}

export default App