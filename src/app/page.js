"use client";
// eslint-disable-next-line react/no-unescaped-entities

import dynamic from 'next/dynamic';
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Image from "next/image";
import { useEffect } from "react";
import Carousel2 from "./components/ESI/carousel2"
import Featured from './components/FeaturedP/Featured';
// import "@fortawesome/fontawesome-free/css/all.min.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import Banner from './components/Banner/Banner';
import Banner3 from './components/Banner/Banner3';
import Banner4 from './components/Banner/Banner4';
import Product from './components/Card-Product/Product';
import Monitor from '/public/images/monitor.png';
import Featured2 from './components/FeaturedP/Featured2'

export default function Home() {
  // useEffect(() => {
  //   MDBCSS();
  //   FontAwesomeCSS();
  // }, []);

  return (
    <main>
      <Navbar />
      <div>
       <Hero />
        <Banner />
       <Featured  title="Featured Product" />
      {/*     <Carousel2 />
        <Featured  title="Related Product" />
        <Banner3 />
      <Featured2 />
      <Banner4 /> */}



      </div>

    </main>
  );
}
