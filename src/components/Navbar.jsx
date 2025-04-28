import { Heart, LogIn, LogInIcon, LucideLogIn, Menu, Search, SearchCheck, ShoppingBag, ShoppingBagIcon, ShoppingCart, User, User2 } from 'lucide-react'
import React from 'react'
import { NavLink } from 'react-router'

const Navbar = () => {
  return (
<>
<section className='h-15 bg-amber-100 md:w-[100%]  flex items-center gap-25 md:justify-between  p-5  md:pr-10 md:pl-10 z-10 sticky top-0 left-0 right-0'>
<div className='flex justify-center items-center  gap-2'>
         <img className='h-[100%] w-20  object-cover p-2 rounded-2xl border-white bg-white' src='carpet-logo.jpg'/>
       <h1 className='text-xl  md:text-3xl '>Rugs</h1>
</div> 
<div className='flex gap-4 '>
<div className='group border rounded-2xl h-8 md:flex justify-center items-center  p-3 hidden '>
        <input  className='w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded outline-none px-2 py-1' type='text' placeholder='Search '/>
        <Search className='h-5 cursor-pointer'/>
</div> 
        <ShoppingCart className='h-[36px] w-[36px] p-2 border rounded-2xl bg-orange-400 text-white cursor-pointer'/>
        <User2 className='h-[32px] w-[32px] p-1 border rounded-2xl cursor-pointer'/>
        </div>
</section>
     <section className='h-12 md:h-18 bg-blue-300   flex  items-center justify-between md:justify-center p-5 sticky top-0 left-0 right-0'>
       
       <div className='md:flex items-center justify-center gap-15 text-[18px] hidden font-semibold'>
       <NavLink className={({isActive})=>`text-red-400  ${isActive}` }>
       <h1>Home</h1>
       </NavLink>
       <NavLink className={({isActive})=>`hover:text-red-400  ${isActive}` }>
       <h1>About</h1>
       </NavLink>
       <NavLink className={({isActive})=>`hover:text-red-400 ${isActive}` }>
       <h1>Services</h1>
       </NavLink>
       <NavLink className={({isActive})=>`hover:text-red-400 ${isActive}` }>
       <h1>Contact</h1>
       </NavLink>
       <NavLink className={({isActive})=>`hover:text-red-400 ${isActive}` }>
       <h1>products</h1>
       </NavLink>
       </div>
       <Menu className='md-screen md:hidden'/>
       <div className='md:hidden flex gap-3'>
        <Search/>
        <Heart/>
       </div>
     </section>
    </>
  )
}

export default Navbar
