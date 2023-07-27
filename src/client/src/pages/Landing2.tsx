import React, { useEffect, useState } from "react";
import Menu from '../components/Menu'
import MusicList from "../components/MusicList";
import HeaderNavBar from '../components/common/HeaderNavBar'
import ProductList from "../components/allproducts/ProductList";
import previewArt from '../assets/previewArt.jpg'
import samplePanda from '../assets/panda.png'
import sampleProductImage from '../assets/sampleProductImage.png'
import sampleProductImage2 from '../assets/sampleProductImage2.jpg'
import sampleLargeProductImage from '../assets/sampleLargeProductImage.jpg'
import sampleLargeProductImage2 from '../assets/sampleLargeProductImage2.jpg'
import sampleProfilePicture1 from '../assets/sampleProfilePicture1.png'
import HeroBanner from "../components/allproducts/HeroBanner";
import { useNavigate } from 'react-router-dom';
import LargeStoryCard from '../components/home/LargeStoryCard'
import landingimg from '../assets/landingimg1.png'

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
    <section className="lg: h-[900px] py-12">
      <div className="container mx-auto items-center flex justify-center">
        {/*Text*/}
        <div>
          <h1 className="text-[#000000] text-6xl font-bold mb-6" data-aos='fade-down' data-aos-delay='400'>Shop Art Like Never Before</h1>
          <p className="text-[#000000] text-large font-semibold mb-6" data-aos='fade-down' data-aos-delay='500'>Discover and Collect Masterpieces at Your Fingertips!</p>
          <button className="btn btn-primary mb-8" data-aos='fade-down' data-aos-delay='600'>Get Started</button>
        </div>
        {/*Image*/}
        <div data-aos='fade-down' data-aos-delay='700'>
          <img style={{width: 700, height: 550}} src={landingimg} alt=""/>
        </div>
      </div>
    </section>

  )
}