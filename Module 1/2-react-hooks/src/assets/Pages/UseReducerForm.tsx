import React, { useReducer } from 'react'

type TAction = {
    type: string;
    payload: string;
}
const InitialState = {name: '', email: ''}

const reducer = (currentState : typeof InitialState, action : TAction) => {
    switch(action.type) {
        case 'addName' : 
        return {...currentState, name: action.payload};
        case 'addEmail': 
        return {...currentState, email: action.payload}
        default:
            return currentState
    }

}
const UseReducerForm = () => {
    const [state, dispatch] = useReducer(reducer, InitialState);

    const handleSubmit = (e : React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(state);
    }
  return (
    <div>
        <form onSubmit={handleSubmit} action="">
        <input onChange={(e) => dispatch({type: 'addName', payload: e.target.value})} type="text" name="name" id="name" />
        <input onChange={(e) => dispatch({type: 'addEmail', payload: e.target.value})}  type="text" name="email" id="email" />
        <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default UseReducerForm