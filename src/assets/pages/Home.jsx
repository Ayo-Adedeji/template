import React from 'react'
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import School from '../components/School'
import WorkingExp from '../components/WorkingExp'

import Referee from '../components/Referee'
import Certificates from '../components/Certificates'
import Skills from '../components/Skills'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import WhatsAppModal from '../components/WhatsAppModal'

const Home = () => {
  return (
    <div>
  <HeroSection/>
  <AboutSection/>
  <School/>
  <WorkingExp/>
  <Certificates/>
  <Referee/>
  <Skills/>
  <Footer/>
  <Navbar/>
  <WhatsAppModal/>
    </div>
  )
}

export default Home