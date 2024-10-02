import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import mayay from "../assets/maya.jpg"
const Hero = () => {
  return (
    <div className='grid gird-cols-1 sm:grid-cols-3 gap-8 max-w-[1200px] md:h-[70vh] mx-auto py-8 bg-gray-900'>
      
            <div className='col-span-1 my-auto mx-auto w-[350px] h-auto lg:w-[300px]'>
                <img src={mayay} alt="" />
            </div>
            <div className='col-span-2 px-5 my-auto'>
                    <h1 className='text-white text-4xl sm:text-5xl lg:text-8xl font-extrabold'>
                        <span className='primary-color'>
                            I'm 
                        </span>
                        <br />
                        <TypeAnimation
                        sequence={[
                            "FullStack Dev",
                            2000,
                            "Web Designer",
                            2000,
                            
                            "IT consultant",
                            2000
                        ]}
                        wrapper='span'
                        speed={50}
                        repeat={Infinity}
                        />
                    </h1>
                    <p className='text-white sm:text-lg my-6 lg:text-xl'>
                    My name is Jackson Mayaya and I have 2+ years experience in FullStack developer
                    </p>
                    <div className='my-8'>
                        {/* <a href='/' className='px-6 py-3 w-full rounded-xl mr-4 
                        bg-gradient-to-br  from-red-950 to-purple-800 text-white'>
                            Download CV
                        </a> */}
                        <a href='#contact' className='px-6 py-3 w-full rounded-xl 
                        bg-gradient-to-br  from-red-950 to-purple-800 text-white hover:border-none'>
                            Contact
                        </a>

                    </div>
            </div>

        

    </div>
  )
}

export default Hero