import React from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar.jsx'
import Footer from './components/Footer/Footer.jsx'
import AboutUs from './components/AboutUs/AboutUs.jsx'
import Home from './components/Home/Home.jsx'
import Scrolltop from './components/Scrolltop.jsx'

import { Routes, Route } from 'react-router-dom';
import JournalPage from './components/Journal/JournalPage.jsx'

function App() {
  return (
    <React.Fragment>
      <Scrolltop />
       <Navbar />
     <Routes>
   
    <Route path="/" element={<Home />} />
  
    <Route path="/aboutus" element={<AboutUs/>} />

    </Routes>
    <Footer />
    </React.Fragment>
  )
}

export default App
