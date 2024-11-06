import React from 'react'
import { Link } from 'react-router-dom'
import Signup from './Signup'
import Login from './Login'

const Home = () => {
  return (
    <div className=' bg-sky-950 text-sky-500 h-screen flex justify-center items-center flex-col'>
    <div className=''>
    <div className=' flex flex-col justify-center'>
    <h1 className='font-semibold text-2xl font-poppins '>welcome to next generation </h1>
    <h2 className='font-semibold text-xl font-poppins text-center'>collage management system</h2>
    </div>
    <div className='flex justify-center mt-2'>
      <Link to='/api/signup'><button className='bg-sky-500 text-white font-semibold p-2 rounded-md px-2 font-poppins mx-2'>signup</button></Link>
      <Link to='/api/login'><button className='bg-sky-500 text-white font-semibold p-2 rounded-md px-2 font-poppins mx-2'>login</button></Link>
    </div>
    </div>
    </div>
  )
}

export default Home