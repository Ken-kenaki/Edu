import React from 'react'
import TItle from '../TItle/TItle.jsx'
import Program_1 from '../../assets/gallery-1.png'
import Program_2 from '../../assets/gallery-2.png'
import Program_3 from '../../assets/gallery-3.png'
import Program_4 from '../../assets/gallery-4.png'
import Arrow from '../../assets/white-arrow.png'

const Campus = () => {
  return (
    <>
    <TItle 
    subtitle = "Our Campus"
    title = "Welcome to Our Campus"
    />
    <section className="campus flex gap-5 mt-10 items-center flex-wrap w-[80vw] mx-auto">
        <img src={Program_1}
        className='w-85 object-cover rounded-2xl'
        alt="" />
        <img src={Program_2}
        className='w-85 object-cover rounded-2xl'
        alt="" />
        <img src={Program_3}
        className='w-85 object-cover rounded-2xl'
        alt="" />
        <img src={Program_4}
        className='w-85 object-cover rounded-2xl'
        alt="" />
    </section>
    <div className="btn flex justify-center mt-10 items-center">
                <button className='px-6 py-3 bg-blue-900 text-white rounded-full hover:opacity-90 group'>
                    See More Here
                    <img 
                    className='inline-block w-6 ml-2 group-hover:animate-ping'
                    src={Arrow} alt="" />
                </button>
                </div>
    </>
  )
}

export default Campus