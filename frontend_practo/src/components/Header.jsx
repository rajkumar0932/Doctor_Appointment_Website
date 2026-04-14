import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
<div className="flex flex-col md:flex-row flex-wrap bg-primary rounded-lg px-6 md:px-10">
       
        {/**left side of hero section */}

 <div className="md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]">

  {/* Heading */}
  <h1 className="text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight">
    Book Appointment <br className='hidden sm: block'/> With Trusted Doctors
  </h1>

  {/* Sub section with image + text */}
  <div className="flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light">
    <img
      className="w-28"
      src={assets.group_profiles}
      alt=""
    />
    <p>
      Simply browse through our extensive list of trusted doctors,
      schedule your appointment hassle-free.
    </p>
  </div>

  {/* Button */}
  <a
    href="#speciality"
    className="flex items-center gap-2 bg-white px-8 py-3 rounded-full text-gray-600 text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300"
  >
    Book Appointment
    <img className="w-3" src={assets.arrow_icon} alt="" />
  </a>

</div>

     
        {/* -------- Right Side -------- */}
<div className="md:w-1/2 relative flex justify-center items-end">

  <img
    src={assets.header_img}
    alt="Doctor"
    className="w-full h-auto md:absolute bottom-0 rounded-lg"
  />

</div>

      
    </div>
  )
}

export default Header
