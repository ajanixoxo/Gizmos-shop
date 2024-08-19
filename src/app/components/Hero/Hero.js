"use client"
import React from 'react'
// import Carousel from 'react-bootstrap/Carousel';
import Carousel from '../ESI/carousel';
import Catergories from '../Categories/Catergories';


function Hero() {
  return (
  <div className="hero mt-4">
    <Carousel />
    <Catergories />
  </div>
     
    
  )
}

export default Hero