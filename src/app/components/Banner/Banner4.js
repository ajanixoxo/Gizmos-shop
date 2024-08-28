import React from 'react'
import Image from 'next/image'
import EP from '/public/images/b4.png'
import EP2 from '/public/images/earphone.png'

function Banner4() {
  return (
    <div className="bg-center bg-cover rounded-[10px] flex justify-center md:justify-between bg-[#F1F5FB] mx-4  mt-2 rounded[10px] bg-no-repeat relative md:mx-10"
//   style={{background:"url(/images/earphone.png)"}}
    >
        <div className="b4-left m-4" >
            <h1 className="text-black text-[20px] md:text-[40px] w-[200px] md:w-[400px]">
                Incredible features and fresh new ideas
            </h1>
            <div>
                <p className="text-sm">WEEKEND SALES</p>
                <h1 className="text-black text-2xl md:text-4xl" >20% OFF</h1>
            </div>
        </div>
        <div className="b4-right flex justify-center items-center">
            <Image className=" hidden md:flex md:w-[500px] h-[100%]" src={EP}  alt="" />
            <Image className="md:hidden w-full h-[100px]" src={EP2}  alt="" />
        </div>
    </div>
  )
}

export default Banner4