import React, { useEffect, useState } from "react";
import HeaderNavBar from '../components/common/HeaderNavBar'
import HeaderNavBar2 from '../components/LandingHeader'
import landingimg from '../assets/landingimg1.png'
import logo from '../assets/blacklogo.png'

import axios from "axios";

import Footer from '../components/common/Footer'

import { Query } from "@testing-library/react";



export default function Landing2() {


  return (
    // <div className="w-full pt-10 h-screen flex">
    //   <div>
    //     <p className="text-4xl font-bold " data-aos='fade-down' data-aos-delay='400'>Featured Products</p>
    //     <p className="text-2xl font-semibold " data-aos='fade-down' data-aos-delay='500'>Popular Beats</p>
    //   </div>
    //   <div className="flex bg-darkGrey text-2xl text-white rounded-lg" data-aos='fade-down' data-aos-delay='600'>
    //     Hello World
    //   </div>
    // </div>
    <section className="">
      <div data-aos='fade-down' data-aos-delay='1200' data-aos-duration='1000' >
        <HeaderNavBar2 />
      </div>

      <div className="container mx-auto items-center flex justify-center">
        {/*Text*/}
        <div>
          <h1 className="text-[#000000] text-6xl font-bold mb-6" data-aos='fade-down' data-aos-delay='400'>Shop Art Like Never Before</h1>
          <p className="text-[#000000] text-2xl font-semibold mb-6" data-aos='fade-down' data-aos-delay='500'>Discover and Collect Masterpieces at Your Fingertips!</p>
          <a href="/register">
            <button className="btn btn-primary mb-8" data-aos='fade-down' data-aos-delay='600'>
              Get Started
            </button>
          </a>
        </div>
        {/*Image*/}
        <div data-aos='fade-up' data-aos-delay='700'>
          <img style={{width: 600, height: 500}} src={landingimg} alt=""/>
        </div>
      </div>
      {/* <div>
        <Footer />
      </div> */}
    </section>

  )
}