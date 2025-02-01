import React from 'react'
import hero from '../../assets/hero.png'
import Arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <section className="relative bg-linear-to-r from-[rgba(8,0,58,0.7)] to-[rgba(8,0,58,0.7)] w-full h-screen bg-cover bg-center flex flex-col items-center justify-center gap-3">
        <img 
        className='absolute inset-0 -z-1 w-full h-full object-cover'
        src={hero} alt="" />
        <h1 className="title text-5xl font-extrabold text-white text-center line-clamp-3">
            We Ensure Better Education <br />For A Better World.
        </h1>
        <p className='text-white text-center max-w-[600px] mt-5 mb-5'>
            Our cutting edge curriculum is designed to ensure that you are job ready upon graduation, and can secure a job in the tech industry.
        </p>
        <div className="button">
            <button className='px-6 py-2 bg-white text-gray-900 rounded-full hover:opacity-80 group'>
                Explore More
                <img 
                className='inline-block w-6 ml-2 group-hover:animate-ping'
                src={Arrow} alt="" />
            </button>
        </div>
    </section>
  )
}

export default Hero