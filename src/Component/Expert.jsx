import React from 'react'
import lappy from "../assets/images/laptop.jpg"

const Expert = () => {
  return (
    <div className='max-w-[1240px] mx-auto p-2 my-10 md:grid grid-cols-2'>
      <div className='col-span-1 md:w-[80%]'><img src={lappy} alt="" /></div>
      <div className='col-span-1 flex flex-col justify-center'>
        <h1 className='text-green-400 font-bold my-2'>LEARN FROM EXPERTS</h1>
        <p className='my-2 text-justify'>Learning from experts accelerates your understanding and skills by providing valuable insights, best practices, and advanced techniques, helping you achieve your goals more efficiently.</p>
        <button className='w-[40%] md:w-[25%] bg-black text-white px-4 py-1 rounded'>Get Started</button>
      </div>
    </div>
  )
}

export default Expert
