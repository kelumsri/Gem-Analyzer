import React from 'react'
import Topnav from '../components/Topnav'
import Footer from '../components/Footer'

function About() {
  return (
    <>
    <div>
        <Topnav/>
    </div>
    <div className=" flex flex-col justify-end items-center ">
        <div className=' bg-slate-400 w-full h-96'>
        <p class="text-4xl font-bold justify-normal text-center items-center mt-10">About Me</p>
        <p class="text-2xl p-0 m-0 text-center items-center mb-10">GemAnalyzer</p>
        </div>
        <div className=' bg-black w-6/12 rounded-3xl h-64 z-10 absolute '></div>
    </div>
    <div className=' '>
    
    <p className='ps-44 pe-44 pt-10 text-justify'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
        It has survived not only five centuries, but also the leap into electronic typesetting, 
        remaining essentially unchanged. It was popularised in the 1960s with the release of 
        Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing 
        software like Aldus PageMaker including versions of Lorem Ipsum</p>
    </div>
    <div>
        <Footer/>
    </div>
    </>
  )
}

export default About