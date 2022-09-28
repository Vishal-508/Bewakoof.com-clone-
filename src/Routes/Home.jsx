import React, { useContext, useEffect, useState } from 'react'
import {  getMen } from '../Apis';
import Footer from '../Components/Footer'
import { HomeElements } from '../Components/HomeElements';
import MensHome from '../Components/MensHome';
import Navbar from '../Components/Navbar'
import WomenHome from '../Components/WomenHome';
import { AppContext } from '../Context/AppContext';

const Home = () => {

const{state} =useContext(AppContext);

  return (
    <div>
      
      <div style={{position:"sticky", top:"0px", zIndex:"2"}} >
        <Navbar/>
        <HomeElements/>
      </div>
     {state.isMen && <MensHome/>}
     {state.isWomen && <WomenHome/>}
        
        
    <Footer/>
    </div>
  )
}

export default Home
// loding logo gif
// https://images.bewakoof.com/web/bwkf-loading-anim-common.gif
