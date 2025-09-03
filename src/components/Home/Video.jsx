import React from 'react'

function Video() {
  return (
    <div className='h-full w-full '>
        <video src="/public/video.mp4"  autoPlay muted loop  />
    </div>
  )
}

export default Video