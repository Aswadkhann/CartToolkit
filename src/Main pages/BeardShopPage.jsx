import React from 'react'
import NavBar from '../components/NavBar'
import Home from '../pages/Home'
import MostVisited from '../pages/MostVisited'
import Locations from '../pages/Locations'
import AppInfo from '../pages/AppInfo'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Shops from '../pages/Shops'
import BarberdetailPage from '../pages/BarberdetailPage'
const BeardShopPage = ({data}) => {
  return (
    <div>
        <NavBar/>
        <Home imglink={'assets/img4.png'}/>
        <Shops 
        data={data}
         heading={'Most Visited'}
          para
          search
          />
        <BarberdetailPage/>
        <MostVisited/>
        <Locations/>
        <AppInfo/>
        <Contact/>
        <Footer/>
        
    </div>
  )
}

export default BeardShopPage