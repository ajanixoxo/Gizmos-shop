import React from 'react'
import './fea.css'
import Product from '../Card-Product/Product'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAngleRight, faAngleLeft} from '@fortawesome/free-solid-svg-icons'
import Monitor from '/public/images/monitor.png'
function Featured() {
  return (
    <div>
        <div className="product-nav flex  items-center flex-col mx-4"> 
            <div  className="title">
                <h1 className="h1">Featured Product </h1>
            </div>
            <div className='flex justify-between title2 '>
            <div >
                <ul className="flex gap-4">
                    <li className="active">Show All</li>
                    <li>Power Bank</li>
                    <li>Earphones</li>
                </ul>
            </div>
            <div className="flex gap-2">
                <FontAwesomeIcon icon={faAngleLeft} />
                <FontAwesomeIcon icon={faAngleRight} />

            </div></div>
        </div>
        <div className="mt-2 gap-4 flex justify-start items-start product-section ">
            <Product name="Smart TV Keyboard and Mouse" cate="Power Banks" price="590" image={Monitor}/>
            <Product name="Smart TV Keyboard and Mouse" cate="Power Banks" price="590" image={Monitor}/>
            <Product name="Smart TV Keyboard and Mouse" cate="Power Banks" price="590" image={Monitor}/>
            <Product name="Smart TV Keyboard and Mouse" cate="Power Banks" price="590" image={Monitor}/>
            <Product name="Smart TV Keyboard and Mouse" cate="Power Banks" price="590" image={Monitor}/>
        </div>
    </div>
  )
}

export default Featured