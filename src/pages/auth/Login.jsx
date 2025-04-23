import { Lock, User } from 'lucide-react'
import React from 'react'

const LoginPage = () => {
  return (
    <>
    <section className='flex items-center justify-center'>
    <div className=' h-80 w-150 md:h-120 md:w-200 bg-white border-gray-400 border-2  rounded flex  gap-20 p-10 shadow-2xl'>
      {/* image-container */}
      <div>
        <img className='md:h-100' src='./rugsimg.jpeg'/>
      </div>
      {/* content-container */}
      <div className='text-xl grid gap-5 '>
        <img className='h-14' src='rugs.jpg'/>
        <h2 >Welcome to Carpet Me,</h2>
        <h2>Please Log in to your account.</h2>
        <div>
        <p className='text-[14px]'>Email Address</p>
        <div className='flex border rounded p-2 '>
          <User/>
        <input className=' pl-2 outline-none' type='email' placeholder='Enter your Email'/>
        </div>
      </div>
        <div>
        <p className='text-[14px]'>Password</p>
        <div className='flex border rounded p-2'>
          <Lock/>
        <input className=' pl-2 outline-none' type='password' />
        </div>
      </div>
      <button className='bg-blue-600 text-white rounded w-72 h-10'>Login Now</button>
      </div>
    </div>
    </section>
    </>
  )
}

export default LoginPage
