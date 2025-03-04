import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate  } from 'react-router-dom'
// import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Background from "./components/Background"

import stars from './assets/stars.png'

const App = () => {
  return (
    
      <Router>
          <ScrollToTop />

        <Navbar />
        <Background />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
          <Footer /> 
      </Router>)
}

export default App