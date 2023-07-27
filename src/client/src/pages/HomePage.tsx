import React, { useEffect, useState } from 'react'
import HeaderNavBar from '../components/common/HeaderNavBar'
import Footer from '../components/common/Footer'

import LargeHeroBanner from '../components/home/LargeHeroBanner'
import LargeStoryCard from '../components/home/LargeStoryCard'
import SmallProductCard from '../components/home/SmallProductCard'
import CollectionCard from '../components/home/CollectionCard'
import ProductsRow from '../components/home/ProductsRow'

import previewArt from '../assets/previewArt.jpg'
import samplePanda from '../assets/panda.png'
import sampleProductImage from '../assets/sampleProductImage.png'
import sampleProductImage2 from '../assets/sampleProductImage2.jpg'
import sampleLargeProductImage from '../assets/sampleLargeProductImage.jpg'
import sampleLargeProductImage2 from '../assets/sampleLargeProductImage2.jpg'
import sampleProfilePicture1 from '../assets/sampleProfilePicture1.png'
import { get } from 'http'
import axios from 'axios'



const collections = [
  {
    id: 1,
    name: 'Best Sceneries of 2023',
    description: 'The very best.',
    imageSrc: previewArt,
    imageAlt: 'BEST SCENERIES OF 2023',
    href: 'http://localhost:3000/discover/scenery',
  },
  {
    id: 2,
    name: 'The Lonely Classical Collection',
    description: 'All things lonely and dark.',
    imageSrc: sampleProductImage2,
    imageAlt: 'LONELY COLLECTION',
    href: 'http://localhost:3000/discover/classical',
  },
  {
    id: 3,
    name: 'Futuristic Digital Collection',
    description: '2070 is calling!',
    imageSrc: sampleLargeProductImage,
    imageAlt: 'FUTURE COLLECTION',
    href: 'http://localhost:3000/discover/digital',
  },
]

const heroSlideshow = [
  previewArt,
  sampleLargeProductImage,
  sampleLargeProductImage2
]


function HomePage() {

  const [featuredArtworks, setFeaturedArtworks] = useState([]);
  const [newestArtworks, setNewestArtworks] = useState([]);
  const [cheapestArtworks, setCheapestArtworks] = useState([]);

  const getFeaturedArtworks = async () => {
    axios.get(`http://localhost:8080/api/v0/artworks/home/featured`, {
    })
      .then(response => {
        const data = response.data;
        setFeaturedArtworks(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }

  const getNewestArtworks = async () => {
    axios.get(`http://localhost:8080/api/v0/artworks/home/newest`, {
    })
      .then(response => {
        const data = response.data;
        setNewestArtworks(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }

  const getCheapestArtworks = async () => {
    axios.get(`http://localhost:8080/api/v0/artworks/home/pricelow`, {
    })
      .then(response => {
        const data = response.data;
        setCheapestArtworks(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }

  useEffect (() => {
    getFeaturedArtworks();
    getNewestArtworks();
    getCheapestArtworks();
  });


  return (

    // Header Navigation Bar
    <div className="bg-darkestGrey h-screen" >
      <div>
        <HeaderNavBar />
      </div>


      {/* Large hero banner */}
      <LargeHeroBanner
        titleText='New arrivals are here'
        bodyText='New music, new artworks, new artists, new everything.  Check out the new arrivals on Calypso now!'
        buttonText='Shop New Arrivals'
        images={heroSlideshow}
        imageAlt='NEW_ARRIVALS1'
        href='discover/new'
      />


      {/* Featured artworks */}
      <section aria-labelledby="trending-heading" className="bg-gray-200">
        <ProductsRow categoryTitle="Featured artworks" productsList={featuredArtworks} categoryLink='featured' />
      </section>

      {/* Collections */}
      <section aria-labelledby="collections-heading" className="bg-darkGrey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto py-32 sm:py-24 lg:py-32 lg:max-w-none">
            <h2 id="collections-heading" className="text-2xl font-extrabold text-white">
              Collections
            </h2>

            <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
              {collections.map((collection) => (
                <CollectionCard collectionProp={collection} />
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* Newly added */}
      <section aria-labelledby="trending-heading" className="bg-gray-200">
        <ProductsRow categoryTitle="Newly Added Products" productsList={newestArtworks} categoryLink='newest' />
      </section>


      {/* Featured artists carousel */}
      <div className="max-w-8xl mx-auto px-4 sm:px-8 lg:px-16 py-32 bg-menu">
        <div className="max-w-7xl mx-auto">
          {<LargeStoryCard
            smallTitleText="Spotlighted Seller"
            titleText="Buy Austin Bartolome’s newly released music"
            bodyText="Find out why Austin is becoming one of the fastest growing sellers on Calypso.  Buy his new music now!"
            buttonText="Discover Now"
            href="http://localhost:3000/discover/trending" />}
        </div>
      </div>


      {/* Cheapest Finds */}
      <section aria-labelledby="trending-heading" className="bg-gray-200">
        <ProductsRow categoryTitle="Cheapest Finds" productsList={cheapestArtworks} categoryLink='pricelow' />
      </section>

      {/* Footer */}
      <Footer />

    </div>
  );
}

export default HomePage
