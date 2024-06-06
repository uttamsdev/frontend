import React from 'react'
import { useFormContext } from 'react-hook-form';

const InputField = () => {
    const {register, watch} = useFormContext()
  return (
    <div>
        <input type='text'/>
    </div>
  )
}

export default InputField;