import React from 'react'
import Navigation from './components/Navigation/Navigation'
import Hero from './components/Hero/Hero'
import Program from './components/Progams/Program'
import TItle from './components/TItle/TItle'
import About from './components/About/About'
import { useState } from 'react'
import { useEffect } from 'react'
import Campus from './components/Campus/Campus'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'


const App = () => {

  const [sticky, setSticky] = useState(false)

  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      window.scrollY > 50 ? setSticky(true) : setSticky(false)
    })
  },[])

  return (
    <>
    <Navigation 
    sticky = {sticky}
    />
    <Hero />
   <TItle 
   subtitle = "Our Progams"
   title = "What we Offer ?"
   />

      <Program />
      <About />

      <Campus />

      <Testimonials />

      <Contact />
    </>
  )
}

export default App