import React from 'react'
import './cat.css'
import { CIcon } from '@coreui/icons-react';
import { cilWatch, cilTv, cilHeadphones, cilLaptop, cilCamera, cliGamepad, cilBox, cliFridge, cilGamepad, cilSquare } from '@coreui/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Catergories() {
        return (
                <div className="bg-white">
                        <div className="categories-container flex justify-between items-center align-center mx-4 ">
                                <div className="cate flex flex-col justify-center items-center m-2">
                                        <CIcon icon={cilCamera} className="cate-icon mb-2 w-8 md:w-8 md:w-10  text-black"  />
                                        <h6 className="text-[12px] font-semibold w-max" >Camera</h6>
                                </div>
                                <div className="cate flex flex-col justify-center items-center m-2">
                                        <CIcon icon={cilGamepad} className="cate-icon mb-2 w-8 md:w-10  text-black" size="sm" />
                                        <h6 className="text-[12px] font-semibold w-max">Video Games</h6>
                                </div>
                                <div className="cate flex flex-col justify-center items-center m-2">
                                        <CIcon icon={cilLaptop} className="cate-icon mb-2 w-8 md:w-10  text-black" size="sm" />
                                        <h6 className="text-[12px] font-semibold w-max">Tablet & Phone</h6>
                                </div>
                                <div className="cate flex flex-col justify-center items-center m-2">
                                        <CIcon icon={cilWatch} className="cate-icon mb-2 w-8 md:w-10  text-black" size="sm" />
                                        <h6 className="text-[12px] font-semibold w-max">Appliance</h6>
                                </div>
                                <div className="cate flex flex-col justify-center items-center m-2">
                                        <CIcon icon={cilTv} className="cate-icon mb-2 w-8 md:w-10  text-black" size="sm" />
                                        <h6 className="text-[12px] font-semibold w-max">TV & Audio</h6>
                                </div>
                                <div className="cate flex flex-col justify-center items-center m-2">
                                        <CIcon icon={cilHeadphones} className="cate-icon mb-2 w-8 md:w-10  text-black" size="sm" />
                                        <h6 className="text-[12px] font-semibold w-max">HeadPhones</h6>
                                </div>
                                <div className="cate flex flex-col justify-center items-center m-2">
                                        <CIcon icon={cilSquare} className="cate-icon mb-2 w-8 md:w-10  text-black" size="sm" />
                                        <h6 className="text-[12px] font-semibold w-max">Laundry</h6>
                                </div>
                                <div className="cate flex flex-col justify-center items-center m-2">
                                        <CIcon icon={cilSquare} className="cate-icon mb-2 w-8 md:w-10  text-black" size="sm" />
                                        <h6 className="text-[12px] font-semibold w-max">Fridge</h6>
                                </div>
                        </div></div>
        )
}

export default Catergories