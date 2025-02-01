import React from 'react'

const TItle = (props) => {
    const {subtitle, title} = props
  return (
    <div className="title text-center p-3 mt-4">
        <p className='font-bold text-xl text-[#212EA0] uppercase'>{subtitle}</p>
        <h2 className='font-extrabold text-4xl text-[#000F38] uppercase mt-5'>{title}</h2>
    </div>
  )
}

export default TItle