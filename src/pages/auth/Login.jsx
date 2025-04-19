import React from 'react'

const LoginPage = () => {
  return (
    <>
    <section className='flex items-center justify-center'>
    <div className='h-80 w-150 md:h-120 md:w-200 bg-white border rounded flex gap-20 p-10'>
      {/* image-container */}
      <div>
        <img className='md:h-100' src='./rugsimg.jpeg'/>
      </div>
      {/* content-container */}
      <div className='text-xl'>
        <img className='h-14' src='rugs.jpg'/>
        <h2 >Welcome to Carpet Me,</h2>
        <h2>Please Log in to your account.</h2>
        <div>
        <p className='text-[14px]'>Email Address</p>
        <input className=' border' type='email' placeholder='abc1234@gmail.com'/>
      </div>
        <div>
        <p className='text-[14px]'>Password</p>
        <input className=' border' type='password' />
      </div>
      </div>
    </div>
    </section>
    </>
  )
}

export default LoginPage
