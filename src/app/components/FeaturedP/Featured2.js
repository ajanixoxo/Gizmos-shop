import React from 'react'
import './fea.css'
import Product from '../Card-Product/Product'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import Monitor from '/public/images/monitor.png'

function Featured2(){

    return(
         <div>
          <h6 className="text-black m-4 font-bold">New Arrivals</h6>
          <div className="mt-2 gap-4 grid grid-cols-2 md:grid-cols-5 product-section md:overflow-x-scroll ">
                <Product name="Smart TV Keyboard and Mouse" cate="Power Banks" price="590" image={Monitor} />
                <Product name="Smart TV Keyboard and Mouse" cate="Power Banks" price="590" image={Monitor} />
                <Product name="Smart TV Keyboard and Mouse" cate="Power Banks" price="590" image={Monitor} />
                <Product name="Smart TV Keyboard and Mouse" cate="Power Banks" price="590" image={Monitor} />
                <Product name="Smart TV Keyboard and Mouse" cate="Power Banks" price="590" image={Monitor} />
            </div>
        </div>
    )
   
}
export default Featured2