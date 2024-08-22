
import React from 'react'
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';
import './carousel.css'
import Headphone from '/public/images/HeadP.png';
import Image from 'next/image';
function Carousel2({text}) {
  return (
    <div className="hero2  ">
        <MDBCarousel showControls>
      <MDBCarouselItem itemId={1} >
        <div className="flex justify-center items-center  c-container " >
        <div className="c-left2">
          <div>
         
          <h1 className="c2">Connecting easier than ever before</h1>
          <p className="text-sm text-bold text-gray-500">ASUS CX70 2QF-62XPLl</p></div>
           <div>
            <p className="text-sm text-bold text-gray-500">STARTING AT </p>
              <h5 className="text-4xl text-black">$789</h5>
           </div>
        </div>
        <div className="c-right2 ">
        <Image src={Headphone}  width={400}
      height={400} className='c-img2' alt='...' />

        </div>
        </div>
      </MDBCarouselItem>
  
    </MDBCarousel>
    </div>
  )
}

export default Carousel2