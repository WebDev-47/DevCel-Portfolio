import React from 'react'
import DevCelo from '../assets/DevCelo.png'

const Hero = () => {
  return (


    <div className=' bg-black text-white text-center py-16'>
        <img src={DevCelo}  alt="" 
        className='mx-auto mb-10 w-[12rem] rounded-full object-cover transform transition-transform
        duration-300 hover:scale-105 bg-gray-300' />
        <h1 className=' text-4xl font-bold'>
          I'm {''}
          <span className=' cursor-pointer text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>DevCel E.O,</span> <br />
          Frontend Developer
          <p className=' text-sm text-gray-400'>HTML, CSS, Javascript, Reactjs & Tailwindcss</p>
        </h1>

        <p className='mt-4 text-lg text-gray-300'>
          I specialize in buiding modern and responsive web application.
        </p>

        <div className=' mt-8 space-x-6'>
          <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105
        px-4 py-2 rounded-lg'>Contact with me</button>

        <button className='bg-gradient-to-r from-pink-500 to-yellow-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105
        px-4 py-2 rounded-lg'>Resume</button>

        
        </div>
    </div>
  )
}

export default Hero