"use client"
import './navbar.css'
import {useState} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faPager, faLocationDot, faTruck, faUser, faAngleRight, faMagnifyingGlass, faHeadphones, faArrowRightArrowLeft, faHeart, faCartShopping, faBars  } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
  return (
    <nav className="bg-white  mt-2 m-nav w-full">
        <div className="flex justify-between items-center font-bold px-4 text-gray-400 m-wel">
            <div>
            <FontAwesomeIcon icon={faPager} className="text-xs nav-i" /> <span className="text-xs">WELCOME TO WORLD WIDE GIZMOS SHOP</span>
            </div>
            <div className="flex justify-between items-center gap-4 m-nf">
                <div>
                    <FontAwesomeIcon icon={faLocationDot} className="text-xs nav-i  " /> <span className="text-xs">STORE LOCATION</span>
                </div>
                <div>
                    <FontAwesomeIcon icon={faTruck} className="text-xs nav-i  " /> <span className="text-xs">FREE SHIPPING & RETURNS </span>
                </div>
                <div>
                    <FontAwesomeIcon icon={faUser}  className="text-xs text-gray-600  nav-i" /> <span className="text-xs">MY ACCOUNTS </span>
                </div>
            </div>
            
        </div>
    <div className="max-w-8xl mx-auto my-2 px-2 sm:px-6 lg:px-8 first-nav">
      <div className="relative flex items-center justify-between h-16 nav1">
        {/* Logo */}
        <div className="">
          <a href="#" className="text-black text-xl font-bold">Gizmos</a>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            aria-controls="mobile-menu"
            aria-expanded={isOpen ? 'true' : 'false'}
          >
            <span className="sr-only">Open main menu</span>
            {/* Hamburger Icon */}
            {!isOpen ? (
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            ) : (
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            )}
          </button>
        </div>

      
        <div className="flex items-center justify-center gap-4 px-1 border sm:items-stretch sm:justify-start search">
        <div className="flex gap-16 justify-center items-center">
            <h1 className="text-lg mt-2">All Categories</h1>
        <FontAwesomeIcon icon={faAngleRight} />
        </div>
        <div className="border flex justify-center items-center p-2 gap-2">
            <input type="text"  placeholder="Search for Products" className="w-68 p-1"/>
            <FontAwesomeIcon icon={faMagnifyingGlass} className=' ' />
            </div>
        </div>
        <div className="flex justify-center items-center gap-2 nav-item2"> 
         <FontAwesomeIcon icon={faHeadphones} className='text-4xl call-icon ' />
         <div>
            <h1 className="font-bold text-lg m-0">+0080 1234 56 789</h1>
            <p className=" text-xs text-right">gizmos@example.com</p>
         </div>
        </div>
      
      </div>
    </div>

   
    <div className="font-bold text-xl bg-blue-700 w-full text-white flex justify-between nav3">
    <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
        <div className="!flex !justify-center items-center gap-2 px-4">
            <FontAwesomeIcon icon={faBars} />
            <h3 className="text-sm mt-2">Shop By Categories</h3>
        </div>
          <div className="hidden sm:block sm:ml-6">
            <div className="flex space-x-4">
            <a href="#" className="text-white hover:bg-white hover:!text-black px-3 py-2  text-sm font-medium">Home</a>
              <a href="#" className="text-white hover:bg-white hover:!text-black px-3 py-2  text-sm font-medium">Shop</a>
              <a href="#" className="text-white hover:bg-white hover:!text-black px-3 py-2  text-sm font-medium">About</a>
              <a href="#" className="text-white hover:bg-white hover:!text-black px-3 py-2  text-sm font-medium">Contact</a>
            </div>
          </div>
        </div>
        <div className="flex gap-10 justify-center items-center px-2">
           <FontAwesomeIcon icon={faArrowRightArrowLeft } />
           <FontAwesomeIcon icon={faUser} className='out' />
           <FontAwesomeIcon icon={faHeart} className='out' />
           <div className="flex gap-2 mt-2">
           <FontAwesomeIcon icon={faCartShopping} />
        
        <span><h2 className="text-sm">$0</h2></span>
           </div>
        
        </div>
    </div>
    

    {/* Mobile Menu */}
    {isOpen && (
      <div className="sm:hidden absolute bg-white w-full z-4 mobile-menu" id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1">
          <a href="#" className="text-gray-500 hover:bg-white hover:text-blue-500 block px-3 py-2 rounded-md text-base font-medium">Home</a>
          <a href="#" className="text-gray-500 hover:bg-white hover:text-blue-500 block px-3 py-2 rounded-md text-base font-medium">Shop</a>
          <a href="#" className="text-gray-500 hover:bg-white hover:text-blue-500 block px-3 py-2 rounded-md text-base font-medium">About</a>
          <a href="#" className="text-gray-500 hover:bg-white hover:text-blue-500 block px-3 py-2 rounded-md text-base font-medium">Contact</a>
          <a href="#" className="text-gray-500 hover:bg-white hover:text-blue-500 block px-3 py-2 rounded-md text-base font-medium">Login</a>
          <a href="#" className="text-gray-500 hover:bg-white hover:text-blue-500 block px-3 py-2 rounded-md text-base font-medium">Cart</a>
          <a href="#" className="text-gray-500 hover:bg-white hover:text-blue-500 block px-3 py-2 rounded-md text-base font-medium">Wishlist</a>
          <input type="text" placeholder="Search for product" className="p-2 mx-2" />
        </div>
      </div>
    )}
  </nav>
  )
}

export default Navbar