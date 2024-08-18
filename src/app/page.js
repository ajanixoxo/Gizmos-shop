"use client"
// eslint-disable-next-line react/no-unescaped-entities

import Image from "next/image";
import Navbar from "./components/Navbar/Navbar"
import Hero from "./components/Hero/Hero";
import {useState} from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Important for functionality like carousel
import 'mdb-react-ui-kit/dist/css/mdb.min.css';


export default function Home() {
  
  return (
  <main>
   <Navbar/>
   <div>
<Hero />
   </div>
  </main>
  );
}
