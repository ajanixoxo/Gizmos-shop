import React from 'react'
import './product.css'
import Image from 'next/image'
import { CIcon } from '@coreui/icons-react';
import { cilHeart} from '@coreui/icons';
import {FontAwesomeIcon }from '@fortawesome/react-fontawesome';
import {faArrowRightArrowLeft} from '@fortawesome/free-solid-svg-icons';
import Monitor from '/public/images/monitor.png'
function Product({name, cate, image, price}) {
  return (
    <div className="product border-2 border-gray-400 rounded-md p-2 m-2">
       <div className="product-cate flex justify-between">
        <h5 className="text-[8px] font-bold md:text-[10px] ">{cate}</h5>
        <div>
            <CIcon icon={cilHeart} className="pro-icon" />
            <FontAwesomeIcon icon={faArrowRightArrowLeft} className="pro-icon" />
             </div>
        </div>
        <div>
            <Image src={image} className="product-img" alt="" />
        </div>
        <div className="product-details">
            <h6 className="text-black text-[13px] md:text-[14px] font-semibold ">{name}</h6>
            <h4 className="text-black text-[14px] md:text-[15px] ">${price}</h4>
        </div>
    </div>
  )
}

export default Product