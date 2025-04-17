import { Menu, Search, ShoppingBag, ShoppingBagIcon, ShoppingCart } from 'lucide-react'
import React from 'react'
import { NavLink } from 'react-router'

const Navbar = () => {
  return (
<>
<section className='h-15 bg-amber-100 w-[100%]  flex items-center justify-between pr-10 pl-10 '>
<div className='flex justify-center items-center  gap-2'>
         <img className='h-[100%] w-20  object-cover p-2 rounded-2xl border-white bg-white' src='https:static.vecteezy.com/system/resources/previews/026/426/593/non_2x/carpet-design-texture-persian-and-tebriz-rugs-design-print-fabric-design-vector.jpg'/>
       <h1 className='text-3xl'>Rugs</h1>
</div> 
<div className='border rounded-2xl h-8 flex justify-center items-center  p-3 '>
        <input  className='outline-none   p-1 ' type='text' placeholder='Search '/>
        <Search className='h-5'/>
</div> 
<button className='h-[30px] w-[60px]  rounded- bg-orange-400 rounded-2xl '>
        <ShoppingCart className='h-10 flex items-center justify-center ml-4 mt-[-5px] text-white'/>
        </button> 
        <button className='border rounded-2xl h-[40px] w-[50px]'></button>
</section>
     <section className='h-20 bg-blue-300 min-w-[600px] flex  items-center justify-between pl-10 pr-10 sticky top-0 left-0 right-0'>
       
       <div className='md:flex items-centwer justify-center gap-5 text-[18px] hidden font-semibold'>
       <NavLink className={({isActive})=>`text-red-400 ${isActive}` }>
       <h1>Home</h1>
       </NavLink>
       <NavLink className={({isActive})=>`hover:text-red-400 ${isActive}` }>
       <h1>About</h1>
       </NavLink>
       <NavLink className={({isActive})=>`hover:text-red-400 ${isActive}` }>
       <h1>Services</h1>
       </NavLink>
       <NavLink className={({isActive})=>`hover:text-red-400 ${isActive}` }>
       <h1>Contact</h1>
       </NavLink>
       </div>
       <Menu className='md-screen md:hidden'/>
       <div>

       </div>
     </section>
    </>
  )
}

export default Navbar
