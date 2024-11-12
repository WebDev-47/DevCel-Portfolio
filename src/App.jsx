import React from 'react'
import NavBar from './COmponents/NavBar'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import Projects from './Components/Projects'
import Services from './Components/Services'
import About from './Components/About'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import Hero from './COmponents/Hero'


const App = () => {
  return (


    <div>
      <NavBar />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Contact />
    
    </div>
  )
}

export default App