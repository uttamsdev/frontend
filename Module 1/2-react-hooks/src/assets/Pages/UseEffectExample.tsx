import React, { useEffect, useState } from 'react'

const UseEffectExample = () => {
    const [hidden, setHidden] = useState(false);
    
  return (
    <div>
        {!hidden && <Counter/>}
        {!hidden && <ToDo/>}
        <button onClick={()=> setHidden((prev) => !prev)}>{hidden ? 'Show' : 'Hide'}</button>
    </div>
  )
}

const Counter = () => {
    const [count, setCount] = useState(0);
    useEffect(()=>{
        console.log("Render")

        const intervalId = setInterval(()=>{
            setCount((prev) => prev + 1)
        },1000)

        //cleanup -> if we return something from useEffect this is cleanup
        //cleanup call happens first in useEffect then other thing happen

        //cleanup
        return () => {
            console.log("Cleanup"); //cleanup runs first 
            clearInterval(intervalId);
        }
    },[count])
    return <h1>{count}</h1>
}

const ToDo = () => {
    const controller = new AbortController();
    const signal = controller.signal;
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/todos", {signal})
        .then(res => res.json())
        .then(data => alert(data.title))

        return () => {
            controller.abort();
        }
    },[])
    return (
        <div>Todo</div>
    )
}
export default UseEffectExample;