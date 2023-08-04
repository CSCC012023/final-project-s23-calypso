import React, { useEffect, useState } from "react";
import axios from "axios";

import HeaderNavBar from '../components/common/HeaderNavBar'
import Footer from '../components/common/Footer'

import FilterBar from "../components/allproducts/FilterBar";
import ProductList from "../components/allproducts/ProductList";

import HeroBanner from "../components/allproducts/HeroBanner";
import { useNavigate } from 'react-router-dom';
import MusicGrid from "../components/MusicGrid";




interface QueryParams {
    [key: string]: string[];
}

function MusicPage() {

    
    const sampleLargeProductImage = require('../assets/sampleLargeProductImage.jpg')

    const [music, setMusic] = useState([]);
    const [search, setSearch] = useState('');

    const getMusic = async (queryParams: QueryParams) => {
        axios.get('http://localhost:8080/api/music/', {
            params: queryParams
        })
            .then(response => {
                const data = response.data;
                setMusic(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    };

    useEffect(() => {
        const queryParams: QueryParams = {};
        const params = new URLSearchParams(window.location.search);
        params.forEach((value, key) => {
            if (queryParams[key]) {
                queryParams[key].push(value);
            } else {
                queryParams[key] = [value];
            }
        });
        getMusic(queryParams);
    });

    return (
        <div className=" h-screen" >
            {/* Header Navigation bar */}
            <div className="">
                <HeaderNavBar />
            </div>

            {/* Hero Banner */}
            <div className=" ">
                <HeroBanner
                    titleText='All Music'
                    bodyText='Enjoy looking at all kinds of music, ranging from popular beats to orchestrated music for cinematography'
                    imageSrc={sampleLargeProductImage}
                    imageAlt='NEW_ARRIVALS1'
                    href='discover/new'
                />
            </div>
            <form className='bg-grey-100 border-b border-gray-200'>
              <label className='w-full p-10'>
                <input className='bg-white w-full border-gray-300' type="text" placeholder="Search"  onChange={e => setSearch(e.target.value)}/>
              </label>
            </form>

            {/* Product List */}
            <div className="">
                <MusicGrid musicList={music.filter((i: any, n) =>
                  i.name.toLowerCase().includes(search.toLowerCase())
                  || i.artistName.toLowerCase().includes(search.toLowerCase())
                )} />
                {/* <ArtGrid artList={artworks} /> */}
            </div>


            {/* Footer */}
            <Footer />
        </div>
    )
}

export default MusicPage;