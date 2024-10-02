import React from 'react'
import mayaya from "../assets/about.jpg"
const About = () => {
  return (
    <div className='text-white max-w-[1200px] mx-auto my-auto bg-gray-900' id='about'>

        <div className='md:grid md:grid-cols-2 sm:py-16'>
         <div className='mt-0 md:mt-0 text-left  flex'>
          <div className='my-auto mx-12'>
            <h2 className='text-4xl font-bold mb-4 primary-color '>
                About Me

            </h2>
            <p className='text-base lg:text-lg text-justify'>
              Youn9uru it's my nickname mostly people prefer to call me in that way, I'm the fullstack Javascript developer  <strong>ExpressJs</strong> its like a Cup of Coffee  for Every arise morning,Some Cheese and Cup of Buttery a like <strong>CSS3 and TailWindCSS</strong> also <strong>ReactJS</strong> for every free Lunch
                full taste flavour i winded up with Django Flavour at kitchen it"s all filled with fastest package of MYSQL and MoongoseDB where stored items preserved
            </p>

          </div>
         </div>
           <img  className="mx-auto rounded-md m-4 md:py-0" src={mayaya} alt="" width={300} height={300} />
          
        </div>
    </div>
  )
}

export default About