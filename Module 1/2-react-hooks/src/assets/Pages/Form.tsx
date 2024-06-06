import React, { useState } from "react";

const Form = () => {
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');

  // handle useState in object

  const [user, setUser] = useState({ name: "", email: "" });
  // console.log(email, name)

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(user);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(user);
  };
  return (
    <div>
      <form onSubmit={handleSubmit} action="">
        <input onChange={handleChange} type="text" name="name" id="name" />
        <input onChange={handleChange} type="text" name="email" id="email" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
