import React, { useReducer } from "react";

const initialState = { count: 0 };

const reducer = (currentState, action) => {
  //handle business logic
  switch (action.type) {
    case "increment":
      return { count: currentState.count + 1 };
    case "decrement":
      return { count: currentState.count - 1 };
    case "incrementByAmount":
      return { count: currentState.count + action.payload };
  }
};
const UseReducerExample = () => {
  const [state, dispatch] = useReducer(reducer, initialState); //reducer takes two thing in parameter reducer function and initial state
  return (
    <div>
      <h1>Count: {state?.count}</h1>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
      <button
        onClick={() => dispatch({ type: "incrementByAmount", payload: 3 })}
      >
        Increment by 3
      </button>
    </div>
  );
};

export default UseReducerExample;
