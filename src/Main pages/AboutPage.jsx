import React from 'react'
import NavBar from '../components/NavBar'
import Home from '../pages/Home'
import About from '../pages/About'
import Benefits from '../pages/Benefits'
import AppInfo from '../pages/AppInfo'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
const AboutPage = () => {
  return (
    <div>
    <NavBar/>
    <Home imglink={'assets/img2.png'}/>
    <About/>
    <Benefits/>
    <AppInfo/>
    <Contact/>
    <Footer/>
    </div>
  )
}

export default AboutPage