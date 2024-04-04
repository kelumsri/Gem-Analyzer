import React from 'react'
import Topnav from '../components/Topnav'
import Footer from '../components/Footer'
import Top_image from "../assets/top_banner.png"
import background from '../assets/background.png'
import AboutData from '../assets/About.json'

function About() {
  return (
    <>
    <div>
        <Topnav/>
    </div>

    
    <div className="flex flex-col justify-end items-center bg-cover bg-center" style={{backgroundImage: `url(${background})`}}>
        <div className=' w-full h-96'>
        <p class="text-4xl font-bold justify-normal text-center items-center mt-10">About Me</p>
        <p class="text-2xl p-0 m-0 text-center items-center mb-10">GemAnalyzer</p>
        </div>
        <div className=' 2xl:w-6/12  rounded-3xl 2xl:h-64 z-10 absolute '> <img src={Top_image} alt="Gem"  className=' h-64 w-full'/> </div>
    </div>

    <div className=' '>
    
    <p className='ps-44 pe-44 pt-10 sm:text-justify'>{AboutData.section.paragraph1}</p>
    <p className='ps-44 pe-44 pt-4 sm:text-justify'>{AboutData.section.paragraph2}</p>
    <p className='ps-44 pe-44 pt-4 sm:text-justify'>{AboutData.section.paragraph3}</p>
    <p className='ps-44 pe-44 pt-4 sm:text-justify'>{AboutData.section.paragraph4}</p>
    
    </div>
    <div>
        <Footer/>
    </div>
    </>
  )
}

export default About