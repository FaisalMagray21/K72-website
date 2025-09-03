import React from 'react'
import Video from './Video'

function HomeHeroText() {
  return (
    <div className='font-[font2] pt-5 text-center'>
        <div className='text-[9.5vw] justify-center flex items-center leading-[8vw] uppercase'>
            The spark

        </div>
        <div className='text-[9.5vw] justify-center flex items-center leading-[8vw] uppercase'>
            who
            <div className='h-[6.5vw] w-[15vw] ml-2 mt-1 rounded-full overflow-hidden'>
                <Video/>
            </div>
        </div>
        <div className='text-[9.5vw] justify-center flex items-center leading-[8vw] pt-5 uppercase'>
            Generates
        </div>
        <div className='text-[9.5vw] justify-center flex items-center leading-[8vw] uppercase'>
    the creativity

</div>
    </div>
  )
}

export default HomeHeroText