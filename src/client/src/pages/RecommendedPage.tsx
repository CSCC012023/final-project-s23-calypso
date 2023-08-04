import React, { useEffect, useState } from "react";
import axios from "axios";

import HeaderNavBar from '../components/common/HeaderNavBar'
import Footer from '../components/common/Footer'

import FilterBar from "../components/allproducts/FilterBar";
import sampleLargeProductImage from '../assets/sampleLargeProductImage.jpg'
import HeroBanner from "../components/allproducts/HeroBanner";
import { Query } from "@testing-library/react";
import { useNavigate } from 'react-router-dom';
import ArtGrid from "../components/ArtGrid";
import { useCookies } from "react-cookie";
import MusicGrid from "../components/MusicGrid";




interface QueryParams {
    [key: string]: string[];
}

export default function RecommendedPage() {
    // const [cookies, setCookie, removeCookie] = useCookies(['token']);
    // const navigate = useNavigate();
    // async function verify() {
    //     if (!cookies.token) {
    //         navigate("/login");
    //     }

    //     const { data } = await axios.post('/api/users/verify', {});
    //     const { status, id } = data;
    //     if (status) {
    //         console.log(id)
    //     } else {
    //         removeCookie('token');
    //         navigate('/login');
    //     }

    // }

    // useEffect(() => { 
    //     verify();
    // }, []);

    const [artworks, setArtworks] = useState([]);

    const getArtworks = async () => {
        axios.get(`http://localhost:8080/api/v0/artworks/recommended/cassy`)
            .then(response => {
                const data = response.data;
                setArtworks(data)
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    };

    const [music, setMusic] = useState([]);

    const getMusic = async () => {
        axios.get(`http://localhost:8080/api/music/recommended/cassy`)
            .then(response => {
                const data = response.data;
                setMusic(data)
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
        getArtworks();
        getMusic();
    });
    const [show, setShow] = useState(0)

    return (
        <div className=" h-screen" >
            {/* Header Navigation bar */}
            <div className="">
                <HeaderNavBar />
            </div>

            {/* Hero Banner */}
            <div className=" ">
                <HeroBanner
                    titleText='Recommended for you'
                    bodyText='Our thoughtfully designed workspace objects are crafted in limited runs. Improve your productivity and
                organization with these sale items before we run out.'
                    imageSrc={sampleLargeProductImage}
                    imageAlt='NEW_ARRIVALS1'
                    href='discover/new'
                />
            </div>

            <div
          className="flex bg-menu text-gray-300 px-10 py-3 space-x-10"
          aria-label="Global"
        >
          <button onClick={() => setShow(0)}
          className={show == 0 ? "text-white font-bold": ""}>Music</button>
          <button onClick={() => setShow(1)}
          className={show == 1 ? "text-white font-bold": ""}>Art</button>
          {/* <a onClick={() => setShow(2)}
          className={show == 2 ? "text-white font-bold": ""}>Artists</a> */}
        </div>
        <div className="">
          {show == 0 ? (
            <>
              <MusicGrid musicList={music} />
            </>
          ) : (
            <>
              <ArtGrid artList={artworks} />
            </>
          )}
          </div>

            {/* Footer */}
            <Footer />
        </div>
    )
}