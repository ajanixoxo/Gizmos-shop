"use client";
// eslint-disable-next-line react/no-unescaped-entities

import dynamic from 'next/dynamic';
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Image from "next/image";
import { useEffect } from "react";

// Dynamically import client-side libraries
const BootstrapCSS = dynamic(() => import('bootstrap/dist/css/bootstrap.min.css'), { ssr: false });
const BootstrapJS = dynamic(() => import('bootstrap/dist/js/bootstrap.bundle.min.js'), { ssr: false });
const MDBCSS = dynamic(() => import('mdb-react-ui-kit/dist/css/mdb.min.css'), { ssr: false });
const FontAwesomeCSS = dynamic(() => import("@fortawesome/fontawesome-free/css/all.min.css"), { ssr: false });

export default function Home() {
  useEffect(() => {
    BootstrapCSS();
    BootstrapJS();
    MDBCSS();
    FontAwesomeCSS();
  }, []);

  return (
    <main>
      <Navbar />
      <div>
        <Hero />
      </div>
    </main>
  );
}
