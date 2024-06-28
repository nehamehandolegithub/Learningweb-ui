import React from 'react'
import single from "../assets/images/single.png"
import double from "../assets/images/double.png"
import triple from "../assets/images/triple.png"

const Cards = () => {
    return (
        <div className='my-[100px]'>
            <div className='max-w-[1240px] mx-auto md:grid grid-cols-3 gap-8 cursor-pointer'>
                <div className='shadow-xl h-[450px] text-center flex flex-col items-center gap-7 p-4 hover:bg-gray-200 hover:scale-105 duration-500'>
                    <img src={single} alt="" className='w-16' />
                    <h1 className='text-2xl font-bold'>Web Development</h1>
                    <h1 className='text-2xl font-bold'>$149</h1>
                    <p>Creating a website involves planning, designing user-friendly interfaces, developing both front-end and back-end, testing for compatibility, and deploying with regular maintenance.</p>
                    <button className='bg-green-400 px-9 py-2 rounded font-semibold hover:bg-black hover:text-green-400'>Start Trial</button>
                </div>
                <div className='shadow-xl h-[450px] text-center flex flex-col items-center gap-7 p-4 hover:bg-gray-200 hover:scale-105 duration-500 mt-6 md:mt-0 '>
                    <img src={double} alt="" className='w-16' />
                    <h1 className='text-2xl font-bold'>Digital Marketing</h1>
                    <h1 className='text-2xl font-bold'>$149</h1>
                    <p>Digital marketing involves planning strategies, creating engaging content, leveraging SEO, managing social media, running ads, and analyzing performance  and achieve marketing goals.</p>
                    <button className='bg-green-400 px-9 py-2 rounded font-semibold hover:bg-black hover:text-green-400'>Start Trial</button>
                </div>
                <div className='shadow-xl h-[450px] text-center flex flex-col items-center gap-7 p-4 hover:bg-gray-200 hover:scale-105 duration-500 mt-6 md:mt-0 '>
                    <img src={triple} alt="" className='w-16' />
                    <h1 className='text-2xl font-bold'>App Development</h1>
                    <h1 className='text-2xl font-bold'>$149</h1>
                    <p>Digital marketing involves planning strategies, creating content, leveraging SEO, managing social media, running ads, and analyzing performance to achieve marketing goals.</p>
                    <button className='bg-green-400 px-9 py-2 rounded font-semibold hover:bg-black hover:text-green-400'>Start Trial</button>
                </div>
            </div>
        </div>
    )
}

export default Cards
