import React from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar.jsx'
import Footer from './components/Footer/Footer.jsx'
import AboutUs from './components/AboutUs/AboutUs.jsx'
import Home from './components/Home/Home.jsx'
import Scrolltop from './components/Scrolltop.jsx'
import { Routes, Route } from 'react-router-dom';
<<<<<<< HEAD

=======
import Gallery from './components/Gallery/Gallery.jsx'
import Register from './components/Register/Register.jsx'
import Journal from './components/Journal/Journal.jsx'
>>>>>>> 52dc67f5421cfc863b25b46feda4f6dc94f9935a

function App() {
  return (
    <React.Fragment>
      <Scrolltop />
       <Navbar />
     <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/aboutus" element={<AboutUs/>} />
    <Route path="/gallery" element={<Gallery />} />
    <Route path="/journal" element={<JournalPage />} />
    <Route path="/register" element={<Register />} />
    </Routes>
    <Footer />
    </React.Fragment>
  )
}

export default App
