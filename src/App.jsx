import React from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar.jsx'
import Footer from './components/Footer/Footer.jsx'
import AboutUs from './components/AboutUs/AboutUs.jsx'
import Home from './components/Home/Home.jsx'
import Scrolltop from './components/Scrolltop.jsx'
import { Routes, Route } from 'react-router-dom';
import Gallery from './components/Gallery/Gallery.jsx'
import GalleryDetails from './components/Gallery/GalleryDetails.jsx'
import Register from './components/Register/Register.jsx'
import JournalPage from './components/Journal/JournalPage.jsx'
import JournalDetails from './components/Journal/JournalDetails.jsx'

function App() {
  return (
    <React.Fragment>
      <Scrolltop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route>
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/gallery/:id" element={<GalleryDetails />} />
        </Route>
        {/* <Route path="/podcast" element={<JournalPage />} /> */}
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </React.Fragment>
  )
}

export default App
