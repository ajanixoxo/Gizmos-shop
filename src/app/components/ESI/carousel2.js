
import React from 'react'
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';
import './carousel.css'
import Headphone from '/public/images/HeadP.png';
import Image from 'next/image';
function Carousel2({text}) {
  return (
    <div className="hero">
        <MDBCarousel showControls>
      <MDBCarouselItem itemId={1} >
        <div className="flex justify-center items-center gap-6  car-left" >
        <div className="c-left2">
          <div>
         
          <h1 className="">Connecting  Better than ever before</h1>
          <p>ASUS CX70 2QF-62XPLl</p></div>
           <div>
            <p>STARTING AT </p>
              <h5>$789</h5>
           </div>
        </div>
        <div className="c-right2">
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