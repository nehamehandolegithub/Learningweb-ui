import React from 'react'

const Newssection = () => {
    return (
        <div className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ... w-full p-4'>
            <div className='max-w-[1240px] mx-auto md:grid grid-cols-2 py-14 text-white'>
                <div>
                    <h1 className='text-[25px] md:text-3xl font-bold'>What to learn latest I.T skills?</h1>
                    <h1>Sign up to our newsletter and stay up to date.</h1>
                </div>
                <div className='md:pl-28 mt-10'>
                    <div>
                        <input type="email" placeholder='Enter Email' className='p-1 w-[50%] rounded text-slate-600 outline-none'/>
                        <button className='bg-black rounded ml-4 py-1 px-4'>Notify Me</button>
                    </div>
                    <h2 className='pt-5'>We care about the protection of your data . Read our <br/><a href='' className='text-blue-950 cursor-pointer'>privacy policy</a> </h2>
                </div>
            </div>
        </div>
    )
}

export default Newssection
