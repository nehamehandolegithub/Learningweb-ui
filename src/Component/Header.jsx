import React, { useState } from 'react'
import { AiOutlineMenu,AiOutlineClose } from "react-icons/ai";


const Header = () => {

    const [toggle,setToggle] = useState(false)

  return (
    <div className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ... p-4'>
      <div className='max-w-[1240px] mx-auto flex justify-between items-center py-3'>
        <div className='text-3xl font-bold cursor-pointer'>
            Technologies
        </div>
        {toggle ? <AiOutlineClose onClick={() => {setToggle(!toggle)}} className='text-3xl md:hidden block'/> : <AiOutlineMenu onClick={() => {setToggle(!toggle)}} className='text-3xl md:hidden block'/>}
        

        <ul className='hidden md:flex gap-10 cursor-pointer text-white'>
            <li>Home</li>
            <li>Company</li>
            <li>Resources</li>
            <li>About</li>
            <li>Contact</li>
        </ul>

        {/* for mobile responsive */}
        <ul className={`duration-500 md:hidden gap-10 cursor-pointer fixed bg-black text-white w-full top-[92px] ${toggle ? 'left-[0]' : 'left-[-100%]' }  `}>
            <li className='p-4'>Home</li>
            <li className='p-4'>Company</li>
            <li className='p-4'>Resources</li>
            <li className='p-4'>About</li>
            <li className='p-4'>Contact</li>
        </ul>
      </div>
    </div>
  )
}

export default Header
