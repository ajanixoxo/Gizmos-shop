import React from 'react'
import Image from 'next/image'
import EP from '/public/images/earphone.png'

function Banner4() {
  return (
    <div className="banner4 flex justify-start items-center p-6 mt-2">
        <div className="b4-left " >
            <h1 className="text-black">
                Incredible features and fresh new ideas
            </h1>
            <div>
                <p className="text-sm">WEEKEND SALES</p>
                <h1 className="text-black" >20% OFF</h1>
            </div>
        </div>
        {/* <div className="b4-right flex justify-center items-center">
            <Image className="img" src={EP}  alt="" />
        </div> */}
    </div>
  )
}

export default Banner4