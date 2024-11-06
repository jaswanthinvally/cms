import React, { useState } from 'react';

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  async function handlesubmit(e) {
    e.preventDefault();
    const response = await fetch("http://localhost:3000/api/v1/signup", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, password }),
    });
    
  }

  return (
    <div className='bg-sky-950 h-screen font-poppins text-md font-semibold text-white flex flex-col justify-center items-center'>
      <div className='bg-sky-500 rounded-xl w-auto p-3 flex flex-col'>
        <h1 className='text-center text-xl'>Login</h1>
        <label>Username</label>
        <input
          className='rounded-md text-sky-950 focus:outline-none px-2'
          value={name}
          onChange={(e) => setName(e.target.value)} 
        /><br />
        <label>Password</label>
        <input
          className='rounded-md text-sky-950 focus:outline-none px-2'
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className='bg-sky-950 w-1/2 rounded p-1 mt-3'
          onClick={handlesubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Login;
