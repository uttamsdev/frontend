import React, { useRef } from 'react'

const UseRefExample = () => {
    //useState useReducer Array return array
    //useRef returns an object {current: ""}
    //ref done's call rerender
    //useState rerender call kore.
    const myRef = useRef(0);

    const increment = () => {
        myRef.current = myRef.current + 1;
    }
    console.log(myRef)
  return (
    <div>
        <button onClick={increment}>Increment</button>
    </div>
  )
}

export default UseRefExample;  