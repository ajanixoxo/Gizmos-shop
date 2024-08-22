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
   <div className="banner3 text-center p-4 relative mx-10 "
  >
    
        <h1 className="text-white">
            10% Off when paying by debit card
        </h1>
     
        <div className="tag absolute right-4 top-6">
        <CIcon icon={cilTag} className="text-white" width={50} height={50} />
            </div>


   </div>
    
  )
}

export default Banner3