import React, { useState } from 'react'


const Signup = () => {
  const[name,setname] =  useState('')
  const[email,setemail] = useState('')
  const [password,setpassword] = useState('')


  const handlesubmit = async (e) => {
    

    const userdata = {name,email,password}
    if(!name || !email || !password) {
      alert("enter all the required credentials")
    }
    
    

    try {
      const response = await fetch('http://localhost:3000/api/signup',{
        method:"POST",
        headers: {
          "Content-Type":"application/json"
        },
        body: JSON.stringify(userdata)
      })

      console.log(response.json())
      
    } catch (error) {
      alert(error)
    }
    

  }

  return (
    <div className='bg-sky-950 h-screen font-poppins text-md font-semibold  flex flex-col justify-center items-center'>
      <div className='bg-sky-500 rounded-xl w-auto p-3 flex flex-col'>
        <h1 className='text-center text-xl'>sign up</h1>
        <label>name</label>
        <input 
        className=' rounded-md text-sky-950 focus:outline-none px-2'
        value={name}
        onChange={(e) => setname(e.target.value)}
         /><br />
        <label>email</label>
        <input 
        className=' rounded-md text-sky-950 focus:outline-none px-2' 
        value={email}
        onChange={(e) => setemail(e.target.value)}
        /><br />
        <label>password</label>
        <input
         className=' rounded-md text-sky-950 focus:outline-none px-2 '
         value={password}
         onChange={(e) => setpassword(e.target.value)}
          type='password'
        />


        <button 
        className='bg-sky-950 w-1/2 rounded p-1 mt-3'
        onClick={handlesubmit}
        >submit</button>




      </div>
    </div>
  )
}

export default Signup