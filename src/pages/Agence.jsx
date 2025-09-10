import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

const Agence = () => {
  gsap.registerPlugin(ScrollTrigger)

  const imageDivRef = useRef(null)
  const imageRef = useRef(null)

  const imageArray = [
    'https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Olivier_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Lawrence_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/HugoJoseph_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/ChantalG_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MyleneS_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/SophieA_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Claire_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Michele_480X640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MEL_480X640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/CAMILLE_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MAXIME_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MEGGIE_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/joel_480X640_3-480x640.jpg',
  ]

  useGSAP(() => {
    gsap.to(imageDivRef.current, {
      scrollTrigger: {
        trigger: imageDivRef.current,
        start: 'top 28%',
        end: 'top -70%',
        pin: true,
        pinSpacing: true,
        pinReparent: true,
        pinType: 'transform',
        scrub: 1,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (elem) => {
          let imageIndex
          if (elem.progress < 1) {
            imageIndex = Math.floor(elem.progress * imageArray.length)
          } else {
            imageIndex = imageArray.length - 1
          }
          imageRef.current.src = imageArray[imageIndex]
        },
      },
    })
  })

  return (
    <div className="relative bg-black text-white overflow-hidden">
      {/* Image that changes on scroll (Background style) */}
      <div
        ref={imageDivRef}
        className="absolute overflow-hidden 
        h-[40vw] w-[30vw] sm:h-[30vw] sm:w-[20vw] 
        md:h-[25vw] md:w-[15vw] 
        rounded-xl sm:rounded-2xl 
        top-20 sm:top-40 md:top-60 
        left-1/2 -translate-x-1/2 md:left-[30vw] md:translate-x-0
        z-0"
      >
        <img
          ref={imageRef}
          className="h-full w-full object-cover"
          src="https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg"
          alt="team"
        />
      </div>

      {/* Heading and Text */}
      <div className="relative font-[font2] text-white z-10">
        <div className="mt-[35vh] md:mt-[45vh] text-center">
          <h1 className="text-[15vw] sm:text-[12vw] md:text-[9vw] lg:text-[7vw] uppercase leading-[13vw] sm:leading-[10vw] md:leading-[8vw] lg:leading-[6vw]">
            Soixan7e <br /> Douze
          </h1>
        </div>
        <div className="mt-6 md:mt-12 lg:mt-16 max-w-4xl mx-auto px-4">
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl leading-relaxed">
            Our curiosity feeds our creativity. We remain humble and we say
            no to big egos, even yours. A brand is alive. It has values, a
            personality, a history. If we forget that, we can make good numbers
            in the short term, but we kill it in the long term. That’s why we’re
            committed to giving perspective, to build influential brands.
          </p>
        </div>
      </div>

      {/* Section 2 placeholder */}
      <div id="page2" className="h-screen"></div>
    </div>
  )
}

export default Agence
