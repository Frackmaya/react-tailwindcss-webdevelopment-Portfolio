import React from 'react'

import uidesign from "../assets/Screenshot_20240417-143720_1.jpg"
import web from "../assets/Screenshot_20240422-230420.jpg"

const Work = () => {
  return (
    <div className='max-w-[1250px] mx-auto p-5' id='work'>
   <div className='pb-8'>
   <p className='text-4xl mb-3 font-bold primary-color'>Work</p>
   <p className='text-gray-400'>check out some of my recent work</p>
   </div>
   <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
    <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden
    shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center
    mx-auto content-div h-[300px] bg-cover relative'>
      <img src={uidesign} layout="fill" objectFit='cover' alt='' />
      <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center'>
        <span className='text-2xl font-bold text-white tracking-wider'>Project one</span>
        <div className='pt-8 text-center'>
          <a href="/">
            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
              Live
            </button>
          </a>

        </div>
      </div>


    </div>

    <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden
    shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center
    mx-auto content-div h-[300px] bg-cover relative'>
      <img src={web} layout="fill" objectFit='cover' alt='' />
      <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center'>
        <span className='text-2xl font-bold text-white tracking-wider'>Project two</span>
        <div className='pt-8 text-center'>
          <a href="/">
            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
              Live
            </button>
          </a>

        </div>
      </div>


    </div>

    
    <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden
    shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center
    mx-auto content-div h-[300px] bg-cover relative'>
      <img src={web} layout="fill" objectFit='cover' alt='' />
      <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center'>
        <span className='text-2xl font-bold text-white tracking-wider'>Project two</span>
        <div className='pt-8 text-center'>
          <a href="/">
            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
              Live
            </button>
          </a>

        </div>
      </div>


    </div>
   </div>
   
    </div>
  )
}

export default Work