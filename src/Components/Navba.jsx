import React from 'react'
import { Link } from 'react-router-dom'

const Navba = () => {



  return (
    <div>
        <div className="bg-black text-white px-8 md:px-16 lg:px-24 ">
      <div className=" container py-2 flex justify-center md:justify-between items-center bg-gray-800/90 p-4 rounded-b-lg sticky">
        
        <div className=" text-2xl font-bold hidden md:inline 
        cursor-pointer text-transparent bg-clip-text 
        bg-gradient-to-r from-green-400 to-blue-500">DevCel</div>
       
        <div className="space-x-10 py-10" >
          <a href="#home" className=" hover:text-gray-400/90">HOME</a>
          <a href="#about" className=" hover:text-gray-400/90">ABOUT</a>
          <a href="#service" className=" hover:text-gray-400/90">SERVICES</a>
          <a href="#projects" className=" hover:text-gray-400/90">PROJECTS</a>
          <a href="#contact" className=" hover:text-gray-400/90">CONTACT</a>
        </div>
        <button className=" bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline transform 
        transition-transform duration-300 hover:scale-105
        px-4 py-2 rounded-lg ">Connect Me</button>
      </div>
    </div>
    </div>
  )
}

export default Navba