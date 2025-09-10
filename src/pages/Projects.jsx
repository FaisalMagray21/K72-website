import { useGSAP } from '@gsap/react'
import ProjectCard from '../components/projects/ProjectCard'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'


const Projects = () => {

  const projects = [{
    image1: 'https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960-1280x960.jpg',
    image2: 'https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail-1280x960.jpg'
  }, {
    image1: 'https://k72.ca/uploads/caseStudies/OKA/OKA_thumbnail-1280x960.jpg',
    image2: 'https://k72.ca/uploads/caseStudies/Opto/thumbnailimage_opto-1280x960.jpg'
  }, {
    image1: 'https://k72.ca/uploads/caseStudies/LAMAJEURE_-_Son_sur_mesure/chalaxeur-thumbnail_img-1280x960.jpg',
    image2: 'https://k72.ca/uploads/caseStudies/SHELTON/thumbnailimage_shelton-1280x960.jpg'
  }]


  gsap.registerPlugin(ScrollTrigger)

  useGSAP(function () {
    gsap.from('.hero', {
      height: '100px',
      stagger: {
        amount: 0.4
      },
      scrollTrigger: {
        trigger: '.lol',
        start: 'top 100%',
        end: 'top -150%',
        scrub: true
      }
    })
  })

  return (
    <div className='lg:p-4 p-2 mb-[100vh]'>
      <div className=' pt-[45vh]'>
        <h2 className='font-[font2] lg:text-[9.5vw] text-7xl uppercase'>Projets</h2>
      </div>
      <div className='-lg:mt-20 lol'>
        {projects.map(function (elem, idx) {
          return <div key={idx} className='hero w-full lg:h-[850px] mb-4 flex lg:flex-row flex-col lg:gap-4 gap-2'>
            <ProjectCard image1={elem.image1} image2={elem.image2} />
          </div>
        })}

      </div>
            {/* Social + Contact Buttons */}
      <div className="bg-black py-8 w-full flex flex-row gap-4 items-center px-10">
        <div className="flex flex-row gap-4">
          <button className="cursor-pointer text-white text-2xl border border-white rounded-full px-4 py-2 transition duration-300 hover:text-blue-500 hover:border-blue-500">
            FB
          </button>
          <button className="cursor-pointer text-white text-2xl border border-white rounded-full px-4 py-2 transition duration-300 hover:text-blue-500 hover:border-blue-500">
            IG
          </button>
          <button className="cursor-pointer text-white text-2xl border border-white rounded-full px-4 py-2 transition duration-300 hover:text-blue-500 hover:border-blue-500">
            IN
          </button>
          <button className="cursor-pointer text-white text-2xl border border-white rounded-full px-4 py-2 transition duration-300 hover:text-blue-500 hover:border-blue-500">
            BE
          </button>
        </div>

        <button className="cursor-pointer text-white text-2xl border border-white rounded-full px-4 py-2 transition duration-300 hover:text-blue-500 hover:border-blue-500 ml-auto">
          Contact
        </button>
      </div>
      


    </div>
  )
}

export default Projects

