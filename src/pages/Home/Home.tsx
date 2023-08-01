import React from 'react'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import OurServices from './components/OurServices'
import OurProjects from './components/OurProjects'
import ContactUs from './components/ContactUs'

const Home = () => {
  return (
    <main
        className='
            flex
            flex-col
            w-full
        '
    >
        <HeroSection />
        <AboutSection />
        <OurServices />
        <OurProjects />
        <ContactUs />
    </main>
  )
}

export default Home