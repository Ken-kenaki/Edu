import React from 'react'
import about from '../../assets/about.png'
import TItle from '../TItle/TItle'
import Play_icon from '../../assets/play-icon.png'

const About = () => {
  return (
    <section className="about flex w-[80vw] gap-10 mx-auto my-20">
      <div className="about-left basis-1/3 relative">
        <img 
        className=''
        src={about} alt="" />
        <img src={Play_icon} 
        className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer w-20'
        alt="" />
</div>

<div className="about-right basis-1/2">
        <TItle 
        subtitle = "About University"
        title = "About Me"
        />
        <p className='text-gray-600'>
          We are a team of talented designers making websites with Bootstrap. we have created a lot of websites for companies and individuals. we are based in Dhaka, Bangladesh. we are a team of talented designers making websites with Bootstrap. we have created a lot of websites for companies and individuals. we are based in Dhaka, Bangladesh.<br/> <br/>
          We are a team of talented designers making websites with Bootstrap. we have created a lot of websites for companies and individuals. we are based in Dhaka, Bangladesh. we are a team of talented designers making websites with Bootstrap. we have created a lot of websites for companies and individuals. we are based in Dhaka, Bangladesh.<br/> <br/>
          Our team is passionate about creating websites that are both visually appealing and user-friendly. We take the time to understand your business and create a custom website that meets your specific needs. Whether you need a simple one-page website or a complex e-commerce site, we can help. Contact us today to learn more about our web design services. 
        </p>
</div>


    </section>
  )
}

export default About