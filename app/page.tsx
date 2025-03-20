import React from 'react'
import AboutUs from './(pages)/aboutus/page'
import ContactUs from './(pages)/contactus/page'
import Projects from './(pages)/projects/page'
import Hero from './(pages)/hero/page'
import Skills from './(pages)/skills/page'
import Reviews from './(pages)/reviews/page'

function page() {
  return (

    <div>
      <Hero />
      <AboutUs />
      <Projects/>
      <Skills/>
      <Reviews/>
      <ContactUs/>
       </div>
  )
}

export default page