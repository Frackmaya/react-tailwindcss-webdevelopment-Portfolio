import React from 'react'
import node from "../assets/node.jpg"
import html from "../assets/html.png"
import react from "../assets/react.png"
import tail from "../assets/tailw.jpeg"
import css from "../assets/css.png"
const Skills = () => {
  return (
    <div className='border border-gray-600 bg-gray-900 text-gray-400 md:h-[150px] max-w-[1200px] mx-auto grid grid-cols-6
    place-items-center md:flex md:justify-between md:items-center'>

        <h2 className='text-gray-700 text-xl md:text-4xl font-bold m-4'>
            My<br/>
            Tech <br/>
            Stack
            <br/>

        </h2>
        <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
           <img src={html} alt="" className='w-[40px] h-[40px] rounded-full' />
        <p className='mt-2'>HTML</p>
         
        </div>
        <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[80px]'>
        <img src={css} alt=""  className='w-[40px] h-[40px] rounded-full'/>
       
        <p className='mt-2'>CSS</p>
           </div>
        <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
           <img src={react} alt=""className='w-[40px] h-[40px] rounded-full' />
           <p className='mt-2'>ReactJS</p>
           </div>
           <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
        <img src={tail} alt="" className='w-[40px] h-[40px] rounded-full'/>
       
        <p className='mt-2'>TailWind</p>
           </div>
            <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
           <img src={node} alt="" className='w-[40px] h-[40px] rounded-full'/>
           <p className='mt-2'>NodeJS</p>
           </div>

    </div>
  )
}

export default Skills