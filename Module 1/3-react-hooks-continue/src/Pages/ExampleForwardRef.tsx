import React, { useEffect, useRef } from 'react'
import CustomInput from '../components/CustomInput';

const ExampleForwardRef = () => {
    //forward ref is used for share ref between components. we cannot directly share ref in props that is why we use forwardref
    const myRef = useRef<HTMLInputElement | null>(null);
    
    useEffect(() => {
        myRef.current.focus();
    },[])
  return (
    <div>
        <CustomInput className="border" ref={myRef}/>
    </div>
  )
}

export default ExampleForwardRef;