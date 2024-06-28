import React from 'react'
import { ReactTyped } from "react-typed";

const Banner = () => {
    return (
        <div className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ... w-full py-[60px]'>
            <div className='max-w-[1240px] py-[70px] mx-auto text-center font-bold'>
                <div className='text-2xl md:text-3xl md:py-4'>Learn with us</div>
                <div className='text-4xl md:text-6xl py-1 md:py-4 text-white'>Grow with us.</div>
                <div className='text-3xl md:text-4xl py-1 md:py-4 text-white'>Learn <ReactTyped
                    strings={[
                        "Software Developer",
                        "Frontend Developer",
                        "UI/UX Designer",
                        "Shopify Developer"
                    ]}
                    typeSpeed={100}
                    backSpeed={70}
                    loop={true}
                ></ReactTyped></div>
                 <button className='bg-black text-white px-5 py-2 mt-2 rounded'>Get Started</button>
            </div>
        </div>
    )
}

export default Banner
