import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByValue } from './redux/features/counterSlice';
import { RootState } from './redux/store';
import { useAppDispatch, useAppSelector } from './hooks/hook';

const App = () => {
  // const count = useSelector((state : RootState) => state.counter.count) // counter is reducer name here
  // const dispatch = useDispatch();

  // type safe for ts
  const count = useAppSelector((state : RootState) => state.counter.count) // counter is reducer name here
  const dispatch = useAppDispatch();
  return (
    <div className='h-screen w-full flex items-center justify-center'>
      <div className='p-10 border flex items-center justify-between'>
        <button onClick={() => dispatch(increment())} className='px-3 py-2 bg-orange-500 text-xl text-white rounded'>Increment</button>
        <h1 className='w-10 text-center'>{count}</h1>
        <button onClick={() => dispatch(decrement())} className='px-3 py-2 bg-blue-500 text-xl text-white rounded'>Decrement</button>
        <button onClick={() => dispatch(incrementByValue({value: 5}))} className='px-3 py-2 bg-blue-500 text-xl text-white rounded'>Increment By Value</button>

      </div>
    </div>
  )
}

export default App