import React from 'react'

import About from '../pages/About'

import Home from '../pages/Home'
import NavBar from '../components/NavBar.jsx'
import AppInfo from '../pages/AppInfo'
import BeardContest from '../pages/BeardContest'
import StampPage from '../pages/StampPage'
import Contact from '../components/Contact'
import Facts from '../pages/Facts'
import Footer from '../components/Footer'
import Shop from '../pages/Shop'
import Shops from '../pages/Shops'
const LandingPage = ({data}) => {
  return (
    <>
    <NavBar/>
    
      <Home imglink={'assets/bhude.png'}/>
      <About/>
      <AppInfo/>
      <BeardContest/>
       <Shop/> 
       <StampPage/> 
       <Shops
           data={data} heading={'Latest Products'}/>
      <Facts/>
      <Contact/>
          <Footer/> 
    </>)
}

export default LandingPage