import React, { useEffect, useState } from "react";
import axios from "axios";

import HeaderNavBar from '../components/common/HeaderNavBar'
import Footer from '../components/common/Footer'

import FilterBar from "../components/allproducts/FilterBar";
import ProductList from "../components/allproducts/ProductList";

import previewArt from '../assets/previewArt.jpg'
import samplePanda from '../assets/panda.png'
import sampleProductImage from '../assets/sampleProductImage.png'
import sampleProductImage2 from '../assets/sampleProductImage2.jpg'
import sampleLargeProductImage from '../assets/sampleLargeProductImage.jpg'
import sampleLargeProductImage2 from '../assets/sampleLargeProductImage2.jpg'
import sampleProfilePicture1 from '../assets/sampleProfilePicture1.png'
import HeroBanner from "../components/allproducts/HeroBanner";
import { Query } from "@testing-library/react";
import { useNavigate } from 'react-router-dom';
import ArtGrid from "../components/ArtGrid";




interface QueryParams {
    [key: string]: string[];
}

export default function ArtworksPage() {
    const [artworks, setArtworks] = useState([]);

    const getArtworks = async (queryParams: QueryParams) => {
        axios.get('http://localhost:8080/api/v0/artworks/all', {
            params: queryParams
        })
            .then(response => {
                const data = response.data;
                setArtworks(data);
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
        getArtworks(queryParams);
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
                    titleText='All Artworks'
                    bodyText='Our thoughtfully designed workspace objects are crafted in limited runs. Improve your productivity and
                organization with these sale items before we run out.'
                    imageSrc={sampleLargeProductImage}
                    imageAlt='NEW_ARRIVALS1'
                    href='discover/new'
                />
            </div>

            {/* Filter Bar */}
            <div className="">
                <FilterBar />
            </div>

            {/* Product List */}
            <div className="px-10">
                <ArtGrid artList={artworks} />
            </div>


            {/* Footer */}
            <Footer />
        </div>
    )
}