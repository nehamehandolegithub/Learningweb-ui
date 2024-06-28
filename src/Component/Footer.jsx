import React from 'react'
import { FaFacebookSquare,FaInstagramSquare,FaTwitter,FaGithub } from "react-icons/fa";


const Footer = () => {
  return (
    <div className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ... w-full p-4'>
      <div className='max-w-[1240px] mx-auto my-6 md:grid grid-cols-5'>
        <div className='col-span-2 w-[392px]'>
            <h1 className='text-2xl font-bold'>Technologies</h1>
            <p className='text-white py-5'>Technologies involve developing and utilizing tools and systems to solve problems and innovate.</p>
            <ul className='text-white flex gap-9 text-2xl'>
                <li><FaFacebookSquare /></li>
                <li><FaInstagramSquare /></li>
                <li><FaTwitter /></li>
                <li><FaGithub /></li>
            </ul>
        </div>
        <div className='col-span-1 md:mt-0 mt-5'>
            <h1 className='font-bold'>Solutions</h1>
            <ul className='text-white'>
                <li className='py-1'>Analytics</li>
                <li className='py-1'>Marketing</li>
                <li className='py-1'>Commerce</li>
                <li className='py-1'>Insights</li>
            </ul>
        </div>
        <div className='col-span-1 md:mt-0 mt-5'>
            <h1 className='font-bold'>Support</h1>
            <ul className='text-white'>
                <li className='py-1'>Pricing</li>
                <li className='py-1'>Documentation</li>
                <li className='py-1'>Guides</li>
                <li className='py-1'>API Status</li>
            </ul>
        </div>
        <div className='col-span-1 md:mt-0 mt-5'>
            <h1 className='font-bold'>Company</h1>
            <ul className='text-white'>
                <li className='py-1'>About</li>
                <li className='py-1'>Blog</li>
                <li className='py-1'>Jobs</li>
                <li className='py-1'>Press</li>
                <li className='py-1'>Careers</li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer
