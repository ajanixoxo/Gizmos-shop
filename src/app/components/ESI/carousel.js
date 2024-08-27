
import React from 'react'
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';
import './carousel.css'
import Wrist from '/public/images/watch2.png';
import Image from 'next/image';
function Carousel({text}) {
  return (
    <div className="hero bg-[#F5e6fB] text-black flex justify-center items-center">
        <MDBCarousel showControls>
      <MDBCarouselItem itemId={1}  >
        <div className="flex flex-col md:flex-row justify-center md:justify-center items-center gap-10  car-left w-full" >
        <div className="c-left mt-2 p-0 md:p-4 md:mt-0 text-left md:w-40 md:ml-2 ">
          <h1 className="main-text font-semibold w-max md:w-20 ">Limited Weekly Discount</h1>
          <p className="text-gray-500 text-[12px] font-semibold md:text-sm md:w-max text-center">Enjoy the sales why you can&apos;t</p>
        </div>
        <div className="c-right flex 
        flex-col md:flex-row 
        md:w-5/6
        justify-start items-center gap-4 md:gap-0 ">
        <Image src={Wrist}  width={300}
      height={300} className='d-block c-img ' alt='...' />
      <div className="details flex flex-col justify-center items-center">
        <div className="count-down flex gap-2 mb-4">
          <div className="count-box text-center border-2 border-gray-400 rounded-lg bg-white p-2 w-16 ">
            <p className="text-gray-400 uppercase text-[8px] m-0 text-left font-bold">Days</p>
            <h1 className="m-0 text-right text-3xl font-semibold">03</h1>
          </div>
          <div className="count-box text-center border-2 border-gray-400 rounded-lg bg-white p-2 w-16 ">
            <p className="text-gray-400 uppercase text-[8px] m-0 text-left font-bold">Hours</p>
            <h1 className="m-0 text-right text-3xl font-semibold">14</h1>
          </div>
          <div className="count-box text-center border-2 border-gray-400 rounded-lg bg-white p-2 w-16 ">
            <p className="text-gray-400 uppercase text-[8px] m-0 text-left font-bold">Minutes</p>
            <h1 className="m-0 text-right text-3xl font-semibold">25</h1>
          </div>
         
         <div className="count-box text-center border-2 border-gray-400 rounded-lg bg-white p-2 w-16 ">
            <p className="text-gray-400 uppercase text-[8px] m-0 text-left font-bold">Days</p>
            <h1 className="m-0 text-right text-3xl font-semibold">05</h1>
          </div>
       
         
        </div>
        <p className="watch-info text-[15px]  md:text-xs font-bold w-8/12 text-center">Gizmo Vivobook 15 Thin and Light Laptop 15.6" FHD Display</p>
       
        <h1 className="price text-3xl">$12.050 <sup className="text-lg text-gray-400 line-through">$1500</sup></h1>
      </div>
        </div>
        </div>
    
      
      </MDBCarouselItem>
     
     
    </MDBCarousel>
    </div>
  )
}

export default Carousel