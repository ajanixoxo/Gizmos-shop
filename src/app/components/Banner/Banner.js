import React from 'react'
import './banner.css'
import Image from 'next/image'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAngleRight} from '@fortawesome/free-solid-svg-icons'
import Drone from '/public/images/Drone.png'
import Phone from '/public/images/phone.png'


function Banner() {
  return (
    <div className="banner-container m-4 flex justify-center gap-4 ">
        <div className="banner-left bg-blue-100 flex justify-between p-4">
            <div className="flex flex-col justify-between">
                <h3 className="text-black">Drones & Gadget</h3>
                <h4  className="text-black">Shop Now <FontAwesomeIcon icon={faAngleRight} /> </h4>
            </div>
            <div>
                <Image src={Drone} alt="" />
            </div>

        </div>
        <div className="banner-right bg-blue-100 flex justify-between p-4">
        <div className="flex flex-col justify-between">
                <h3  className="text-black">Smartphones and Tablet</h3>
                <h4  className="text-black" >Shop Now <FontAwesomeIcon icon={faAngleRight} /></h4>
            </div>
            <div>
                <Image src={Phone} alt="" />
            </div>
        </div>

    </div>
  )
}

export default Banner