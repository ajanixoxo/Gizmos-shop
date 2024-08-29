
import React from 'react'
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';
import './carousel.css'
import Headphone from '/public/images/HeadP.png';
import Image from 'next/image';
function Carousel2({ text }) {
  return (
    <div className="hero2 bg-blue-100   ">
      <MDBCarousel showControls>
        <MDBCarouselItem itemId={1} >
          <div className="flex justify-between m-2 md:m-0 md:justify-center md:gap-8 items-center c-container z-20" >
            <div className=" w-1/2 md:w-[25%] z-10">
              <div className="">

                <h1 className="c2 text-[20px] md:text-[40px] text-black w-[200px] md:w-[400px]">Connecting easier than ever before</h1>
                <p className="text-sm text-bold text-gray-500">ASUS CX70 2QF-62XPLl</p></div>
              <div>
                <p className="text-sm text-bold text-gray-500">STARTING AT </p>
                <h5 className="text-2xl md:text-4xl text-black">$789</h5>
              </div>
            </div>

            <Image src={Headphone} width={400}
              height={400} className='m-0 w-[600px] md:w-[500px] overflow-hidden' alt='...' />


          </div>
        </MDBCarouselItem>
     

      </MDBCarousel>
    </div>
  )
}

export default Carousel2