"use client";
// eslint-disable-next-line react/no-unescaped-entities

import dynamic from 'next/dynamic';
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Image from "next/image";
import { useEffect } from "react";
// import "@fortawesome/fontawesome-free/css/all.min.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";


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
      </div>
    </main>
  );
}
