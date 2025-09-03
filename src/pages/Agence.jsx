import React, { useRef } from 'react'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
function Agence() {
  const imageDivRef = useRef(null);
  const imageRef = useRef(null);
  const imageArray=['https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg','https://k72.ca/uploads/teamMembers/Olivier_480x640-480x640.jpg','https://k72.ca/uploads/teamMembers/Lawrence_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/HugoJoseph_480x640-480x640.jpg','https://k72.ca/uploads/teamMembers/ChantalG_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MyleneS_480x640-480x640.jpg','https://k72.ca/uploads/teamMembers/SophieA_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Claire_480x640-480x640.jpg','https://k72.ca/uploads/teamMembers/Michele_480X640-480x640.jpg','https://k72.ca/uploads/teamMembers/MEL_480X640-480x640.jpg','https://k72.ca/uploads/teamMembers/MAXIME_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/CAMILLE_480X640_2-480x640.jpg',
  ];
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.to(imageDivRef.current, { scrollTrigger:{
    trigger: imageDivRef.current,
    //markers:true,
    start:'top 25%',
    end:'top -90%',
    scrub:true,
    pin:true,
     onUpdate: (elem) => {
      let index;
      if(elem.progress===1){
             index = Math.floor(elem.progress * (imageArray.length));

      }else{
        index = Math.floor(elem.progress * (imageArray.length - 1));
      }
      imageRef.current.src = imageArray[index];
    //  console.log(index);
     }

    } });
  })
  return (
<div>
      <div className='section1'>
      <div ref={imageDivRef} className='absolute top-[25vh] object-cover left-[30vw] w-[15vw] rounded-3xl   h-[20vw] overflow-hidden '>
        <img ref={imageRef} src="https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg" alt="" />
      </div>
    <div className='relative font-[font2]  text-white'>
      <div className='mt-[48vh] '>
      <h1 className='text-white text-[20vw]  flex flex-col justify-center items-center h-screen  leading-[15vw] uppercase'>
        Soixan7e
<br />
Twelve
<br/>

      </h1>
      <div className='pl-[37%] bg-red-500'>
      <p className='text-6xl  '>
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;        Our curiosity&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; feeds our creativity. We remain humble and we say no to big egos, even yours. A brand is alive. It has values, a personality, a history. If we forget that, we can make good numbers in the short term, but we kill it in the long term. That's why we're committed to giving perspective, to build influential brands.
      </p>
            </div>

      </div>
    </div>


    </div>
<div className='section2 h-screen'>


</div>
</div>  )
}

export default Agence