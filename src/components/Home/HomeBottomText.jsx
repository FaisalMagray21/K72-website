import React from 'react'
import { Link } from 'react-router-dom'
function HomeBottomText() {
  return (
    <div className='font-[font2] flex items-center justify-center pt-96 gap-6  '>
      <Link to="/Projects" className=' hover:text-[#D3FD50] hover:border-[#D3FD50] text-[6.5vw] leading-[7vw] border-5 border-white px-10 pt-1 pb-0 rounded-full uppercase' >
        Projects
      </Link>
      <Link to="/Agence" className='hover:text-[#D3FD50] hover:border-[#D3FD50] text-[6.5vw] leading-[7vw] border-5 border-white px-10 pt-1 pb-0 rounded-full uppercase' >
        Agency
      </Link>
    </div>
  )
}

export default HomeBottomText