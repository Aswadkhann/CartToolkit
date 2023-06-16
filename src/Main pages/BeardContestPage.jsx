import React from 'react'
import NavBar from '../components/NavBar'
import Home from '../pages/Home'
import Shops from '../pages/Shops'
import ContestPage from '../pages/ContestPage'
import Contact from '../components/Contact'
import AppInfo from '../pages/AppInfo'
import Footer from '../components/Footer'
const BeardContestPage = ({data}) => {
  return (
    <div>
        <NavBar/>
        <Home imglink={'assets/img3.png'}/>
        <Shops data={data} heading = {'Top Contestent'} mainheading para/>
        <ContestPage/>
        <AppInfo/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default BeardContestPage