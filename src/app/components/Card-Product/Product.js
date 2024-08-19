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
    <div className="product p-2 m-2">
       <div className="product-cate flex justify-between">
        <h5>{cate}</h5>
        <div>
            <CIcon icon={cilHeart} className="pro-icon" />
            <FontAwesomeIcon icon={faArrowRightArrowLeft} className="pro-icon" />
             </div>
        </div>
        <div>
            <Image src={image} className="product-img" alt="" />
        </div>
        <div className="product-details">
            <h6>{name}</h6>
            <h4>${price}</h4>
        </div>
    </div>
  )
}

export default Product