import React from 'react'
import './banner.css'
import Image from 'next/image'
import {CIcon} from '@coreui/icons-react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAngleRight} from '@fortawesome/free-solid-svg-icons'
import BG from '/public/images/b3.jpg'
import { cilHeart, cilTag} from '@coreui/icons';



function Banner3() {
  return (
   <div className="banner3 bg-center bg-cover rounded-[10px] mx-2 text-center p-4 relative md:mx-10 "
  style={{background:"url(/images/b3.jpg)"}}>
    
        <h1 className="text-white text-lg md:text-2xl">
            10% Off when paying by debit card
        </h1>
     
        <div className="tag absolute right-2 top-6">
        <CIcon icon={cilTag} className="text-white md:w-50" width={30} height={30} />
            </div>


   </div>
    
  )
}

export default Banner3