import React from 'react'

const Navibar = () => {

  return (
    <div>
         <nav className='bg-black text-white px-8 md:px-16 lg:px-24 p-6  '>
        <div className='container py-2 flex justify-center md:justify-between items-center'>
            <div className='text-2xl font-bold hidden md:inline cursor-pointer text-transparent 
            bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>Delcel</div>
            <div className='space-x-8 text-md'>
                <a href="#home" className='hover:text-gray-400'>Home</a>
                <a href="#about" className='hover:text-gray-400'>About Me</a>
                <a href="#service" className='hover:text-gray-400'>Services</a>
                <a href="#projects" className='hover:text-gray-400'>Projects</a>
                <a href="#contact" className='hover:text-gray-400'>Contact</a>
            </div>
            <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Connect Me</button>
        </div>
    </nav>
    </div>
  )
}

export default Navibar