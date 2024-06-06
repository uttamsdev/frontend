import React, { useEffect, useRef } from "react";
//useRef is use for DOM manipulation.
//Kono dom er element e dukhe dom k access korte useRef use kori
//pura component run korear pore useEffect run hoi tar age hoi na
const UseRefForm = () => {
  const myRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log(myRef.current?.value);
  };
  useEffect(() => {
    myRef.current.focus();
  }, []);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input ref={myRef} type="text" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UseRefForm;
