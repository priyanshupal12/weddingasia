import React from 'react'
import './App.css'
import Hero from './components/Hero/Hero.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import AboutUs from './components/AboutUs/AboutUs.jsx'

import { Routes, Route } from 'react-router-dom';

function App() {
  

  return (
    <React.Fragment>
       <Navbar />
     <Routes>
   
    <Route path="/" element={<Hero />} />
    <Route path="/aboutus" element={<AboutUs/>} />
    </Routes>
    </React.Fragment>
  )
}

export default App
