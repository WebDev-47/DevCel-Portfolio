import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import Projects from './Components/Projects'
import About from './Components/About'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import Hero from './Components/Hero'
import Services from './Components/Services'
import Navba from './Components/Navba'


const App = () => {
  return (


    <div>
      <Navba />
      <Hero  />
      <About />
      <Services />
      <Projects />
      <Contact />
    
    </div>
  )
}

export default App