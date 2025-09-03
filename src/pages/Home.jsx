import React from 'react'
import Video from '../components/Home/Video'
import HomeHeroText from '../components/Home/HomeHeroText'
import HomeBottomText from '../components/Home/HomeBottomText'
function Home() {
  return (
    <>
    <div className="h-screen w-screen  fixed">
      <Video/>
    </div>
    <div className="h-screen w-screen flex flex-col justify-between   relative">
    <HomeHeroText/>
    <HomeBottomText/>
    </div>
</>
  )
}

export default Home