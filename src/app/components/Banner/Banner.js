import React from 'react'
import './banner.css'
import Image from 'next/image'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAngleRight} from '@fortawesome/free-solid-svg-icons'
import Drone from '/public/images/Drone.png'
import Phone from '/public/images/phone.png'


function Banner() {
  return (
    <div className="banner-container m-4 flex flex-col md:flex-row justify-center gap-4">
        <div className="banner-left bg-blue-100 flex justify-between p-2 md:p-4 w-full md:w-1/2 rounded-md">
            <div className="flex flex-col justify-between">
                <h3 className="text-black text-[15px] md:text-lg font-semibold">Drones & Gadget</h3>
                <h4  className="text-black text-[12px] md:text-base font-semibold w-max">Shop Now <FontAwesomeIcon icon={faAngleRight} /> </h4>
            </div>
            <div>
                <Image src={Drone} className="w-full" alt="" />
            </div>

        </div>
        <div className="banner-right bg-blue-100 flex justify-between p-2 w-full md:w-1/2 rounded-md">
        <div className="flex flex-col justify-between">
                <h3  className="text-black text-[15px] md:text-lg font-semibold">Smartphones and Tablet</h3>
                <h4  className="text-black text-[12px] md:text-base font-semibold w-max" >Shop Now <FontAwesomeIcon icon={faAngleRight} /></h4>
            </div>
            <div>
                <Image src={Phone} className="w-full" alt="" />
            </div>
        </div>

    </div>
  )
}

export default Banner