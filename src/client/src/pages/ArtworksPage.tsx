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




interface QueryParams {
    [key: string]: string[];
}

const artworks2 = [
    {
        id: 1,
        name: 'Lost Girl',
        artist: 'Jennie Li',
        style: 'Oil on canvas',
        price: '$500',
        href: 'product/1',
        imageSrc: sampleProductImage2,
        imageAlt: 'LOST GIRL - JENNIE LI',
    },
    {
        id: 2,
        name: 'Dystopian Future',
        artist: 'Markus Lawerence',
        style: 'Digital',
        price: '$3000',
        href: '#',
        imageSrc: sampleLargeProductImage,
        imageAlt: 'DYSTOPIAN FUTURE - MARKUS LAWERENCE',
    },
    {
        id: 3,
        name: 'Fox-Masked Boy',
        artist: 'Natalie Hall',
        style: 'Watercolor on paper',
        price: '$50',
        href: '#',
        imageSrc: sampleProfilePicture1,
        imageAlt: 'FOX MASKED BOY - NATALIE HALL',
    },
    {
        id: 4,
        name: 'Panda',
        artist: 'Panda Man',
        style: 'Sculpture',
        price: '$900',
        href: '#',
        imageSrc: samplePanda,
        imageAlt: 'PANDA - PANDA MAN',
    },
    {
        id: 5,
        name: 'Mountain Trees',
        artist: 'Betty Whittaker',
        style: 'Photography',
        price: '$500',
        href: '#',
        imageSrc: 'https://images.pexels.com/photos/11157048/pexels-photo-11157048.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        imageAlt: 'MOUNTAIN TREES - BETTY WHITTAKER',
    },
    {
        id: 6,
        name: 'Dystopian Future',
        artist: 'Markus Lawerence',
        style: 'Digital',
        price: '$3000',
        href: '#',
        imageSrc: sampleLargeProductImage,
        imageAlt: 'DYSTOPIAN FUTURE - MARKUS LAWERENCE',
    },
    {
        id: 7,
        name: 'Fox-Masked Boy',
        artist: 'Natalie Hall',
        style: 'Watercolor on paper',
        price: '$50',
        href: '#',
        imageSrc: sampleProfilePicture1,
        imageAlt: 'FOX MASKED BOY - NATALIE HALL',
    },
    {
        id: 8,
        name: 'Panda',
        artist: 'Panda Man',
        style: 'Sculpture',
        price: '$900',
        href: '#',
        imageSrc: samplePanda,
        imageAlt: 'PANDA - PANDA MAN',
    },
]



function ArtworksPage() {

    const navigate = useNavigate();

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

    const incrementArtworkVisits = async (artworkId: string) => {
        axios.put(`http://localhost:8080/api/v0/artworks/increment/${artworkId}`)
            .then(response => {
                console.log('Successfully incremented artwork visits');
            })
            .catch(error => {
                console.error('Error incrementing artwork visits:', error);
            }
        ); 
    }

     const handleArtworkClick = (artworkId: string) => {
        console.log('Clicked artwork ID:' + artworkId);
        incrementArtworkVisits(artworkId);
        navigate('/product/' + artworkId);
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
        <div className="bg-darkestGrey h-screen" >
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
            <div className="">
                <ProductList productsList={artworks} onArtworkClick={handleArtworkClick}/>
            </div>


            {/* Footer */}
            <Footer />
        </div>
    )
}

export default ArtworksPage;
