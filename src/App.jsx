import React, { useRef } from 'react'
import { Routes,Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Agence from './pages/Agence'
import Projects from './pages/Projects'
import Navbar from './components/Navigation/Navbar'
function App() {
  return (
    <div className='text-black '>
      <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/agence" element={<Agence />} />
      <Route path="/projects" element={<Projects />} />
    
    </Routes>
    </div>
  )
}

export default App