import AboutUs from '@/components/Aboutus'
import Contactus from '@/components/Contactus'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Projects from '@/components/Projects'
import Reviews from '@/components/Reviews'
import Skills from '@/components/Skills'
import React from 'react'

function page() {
  return (

    <div>
      <Header />
      <Navbar />
      <Hero />
      <AboutUs />
      <Projects/>
      <Skills/>
      <Reviews/>
      <Contactus/>
      <Footer />
       </div>
  )
}

export default page