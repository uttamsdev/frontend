import { useState } from 'react'
import './App.css'

import UseStateExample from './assets/Pages/UseStateExample'
import Form from './assets/Pages/Form';
import UseReducerExample from './assets/Pages/UseReducerExample';
import UseReducerForm from './assets/Pages/UseReducerForm';
import UseEffectExample from './assets/Pages/UseEffectExample';

function App() {
  const [counter, setCounter] = useState(0);
  return (
    <>
      {/* <UseStateExample counter={counter} setCounter={setCounter}/> */}
      {/* <Form/> */}
      <UseReducerExample/>
      {/* <UseReducerForm/> */}
      {/* <UseEffectExample/> */}
    </>
  )
}

export default App
