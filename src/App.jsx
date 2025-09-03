import React from 'react'
import { Routes,Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Agence from './pages/Agence'
import Projects from './pages/Projects'
function App() {
  return (
    <div className='text-white '>
      <div>
        <div className='h-screen w-full flex fixed z-20 top-0 '>
          <div className='h-full w-1/5 bg-black'></div>
          <div className='h-full w-1/5 bg-white'></div>
          <div className='h-full w-1/5 bg-black'></div>
          <div className='h-full w-1/5 bg-white'></div>
          <div className='h-full w-1/5 bg-black'></div>

        </div>
      </div>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/agence" element={<Agence />} />
      <Route path="/projects" element={<Projects />} />
    
    </Routes>
    </div>
  )
}

export default App