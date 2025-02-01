import React from 'react'
import Logo from '../../assets/logo.png'

const Navigation = ( {sticky} ) => {
  return (
    <nav
    className={`${sticky ? 'bg-[#212EA0] transition-all delay-100 ' :''}fixed w-full z-10 flex items-center justify-evenly py-3`}
    >
        <div className="logo">
            <img 
            className='w-[180px]'
            src={Logo} alt="" />
        </div>
        <ul className='flex items-center justify-evenly text-white gap-9'>
            <li>Home</li>
            <li>Program</li>
            <li>About us</li>
            <li>Campus</li>
            <li>Testimonial</li>
            <li><button className=' px-3 py-2 bg-white text-black rounded-full hover:opacity-80'>
                Contact us
                </button></li>
        </ul>
    </nav>
  )
}

export default Navigation