import React from 'react'
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';
import './carousel.css'
import Wrist from '/public/images/watch2.png';
import Image from 'next/image';
function Carousel({text}) {
  return (
    <div className="hero">
        <MDBCarousel showControls>
      <MDBCarouselItem itemId={1} >
        <div className="flex justify-center items-center gap-6 mx-32">
        <div className="c-left">
          <h1 className="w-32">Limited Weekly Discount</h1>
          <p>Enjoy the sales why you can't</p>
        </div>
        <div className="c-right flex justify-start items-center gap-4">
        <Image src={Wrist}  width={100}
      height={100} className='d-block c-img' alt='...' />
      <div className="details">
        <div className="count-down flex gap-6">
          <div className="count-box">
            <p>Days</p>
            <h1>03</h1>
          </div>
          <div className="count-box">
            <p>Days</p>
            <h1>03</h1>
          </div>
          <div className="count-box">
            <p>Days</p>
            <h1>03</h1>
          </div>
          <div className="count-box">
            <p>Days</p>
            <h1>03</h1>
          </div>
         
        </div>
        <p className="watch-info">Gizmo Vivobook 15 Thin and Light Laptop 15.6" FHD Display</p>
       
        <h1 className="price">$1200 <sup>$1500</sup></h1>
      </div>
        </div>
        </div>
    
      
      </MDBCarouselItem>
      <MDBCarouselItem itemId={2}>
      <div className="flex justify-center items-center gap-6 mx-32">
        <div className="c-left">
          <h1 className="w-32">Limited Weekly Discount</h1>
          <p>Enjoy the sales why you can't</p>
        </div>
        <div className="c-right flex justify-start items-center gap-4">
        <Image src={Wrist}  width={100}
      height={100} className='d-block c-img' alt='...' />
      <div className="details">
        <div className="count-down flex gap-6 text-center">
          <div className="count-box">
            <p>Days</p>
            <h1>03</h1>
          </div>
          <div className="count-box">
            <p>Days</p>
            <h1>03</h1>
          </div>
          <div className="count-box">
            <p>Days</p>
            <h1>03</h1>
          </div>
          <div className="count-box">
            <p>Days</p>
            <h1>03</h1>
          </div>
         
        </div>
        <p>Gizmo Vivobook 15 Thin and Light Laptop 15.6" FHD Display</p>
        <h1>$1200</h1><sup>$1500</sup>
      </div>
        </div>
        </div>
      </MDBCarouselItem>
      <MDBCarouselItem itemId={3}>
      <div className="flex justify-center items-center gap-6 mx-32">
        <div className="c-left">
          <h1 className="w-32">Limited Weekly Discount</h1>
          <p>Enjoy the sales why you can't</p>
        </div>
        <div className="c-right flex justify-start items-center gap-4">
        <Image src={Wrist}  width={100}
      height={100} className='d-block c-img' alt='...' />
      <div className="details">
        <div className="count-down flex gap-6">
          <div className="count-box">
            <p>Days</p>
            <h1>03</h1>
          </div>
          <div className="count-box">
            <p>Days</p>
            <h1>03</h1>
          </div>
          <div className="count-box">
            <p>Days</p>
            <h1>03</h1>
          </div>
          <div className="count-box">
            <p>Days</p>
            <h1>03</h1>
          </div>
         
        </div>
        <p>Gizmo Vivobook 15 Thin and Light Laptop 15.6" FHD Display</p>

        <h1>$1200</h1><sup>$1500</sup>
      </div>
        </div>
        </div>
      </MDBCarouselItem>
    </MDBCarousel>
    </div>
  )
}

export default Carousel