import { Dispatch } from "react";
type TCounter = {
    counter : number;
    setCounter: React.Dispatch<React.SetStateAction<number>>
}

const UseStateExample = ({counter , setCounter} : TCounter) => {
  
    
   
  return (
    <div>
        <h1>{counter}</h1>
        <button className="" onClick={()=>{setCounter(counter+1)}}>Increment</button>
        {/* <button onClick={handleDecrement}>Async Increment</button>
        <button onClick={()=>setCounter(0)}>Reset</button> */}
    </div>
  )
}

export default UseStateExample;