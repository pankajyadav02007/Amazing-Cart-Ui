import React from 'react'

const HomePage = () => {
  return (
    <>
<section>
  <img className='md:h-screen md:w-screen object-cover' src='https://i.pinimg.com/736x/94/fd/a6/94fda628a26e98979e6156422f8a6206.jpg'/>
</section>    
 <section className='mt-5'>
 <h2 className='text-2xl font-bold'>Suggestion For You</h2>
 <div className='grid grid-cols-5  mt-5'>
<div className='h-100'>
<img className='h-[300px]' src='suggestion-logo1.jpg'/>
<div className='text-center '>
  <h1 className='text-2xl font-bold'>Carpet - 0010</h1>
  <p>Lorem ipsum dolor sit amet.ipsum dolor sit amet.</p>
</div>
</div>
 </div>
</section>
</>
  )
}

export default HomePage
