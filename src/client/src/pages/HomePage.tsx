import React from 'react'
import HeaderNavBar from '../components/common/HeaderNavBar'
import LargeStoryCard from '../components/home/LargeStoryCard'
import SmallProductCard from '../components/home/SmallProductCard'
import CollectionCard from '../components/home/CollectionCard'
import ProductsRow from '../components/home/ProductsRow'
import Footer from '../components/common/Footer'

import previewArt from '../assets/previewArt.jpg'
import samplePanda from '../assets/panda.png'
import sampleProductImage from '../assets/sampleProductImage.png'
import sampleProductImage2 from '../assets/sampleProductImage2.jpg'
import sampleLargeProductImage from '../assets/sampleLargeProductImage.jpg'
import sampleProfilePicture1 from '../assets/sampleProfilePicture1.png'


const artworks = [
  {
    id: 1,
    name: 'Lost Girl',
    artist: 'Jennie Li',
    style: 'Oil on canvas',
    price: '$500',
    href: 'product',
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
]

const collections = [
  {
    name: 'Best Sceneries of 2023',
    description: 'The very best.',
    imageSrc: previewArt,
    imageAlt: 'BEST SCENERIES OF 2023',
    href: 'discover/scenery',
  },
  {
    name: 'The Lonely Classical Collection',
    description: 'All things lonely and dark.',
    imageSrc: sampleProductImage2,
    imageAlt: 'LONELY COLLECTION',
    href: 'discover/classical',
  },
  {
    name: 'Futuristic Digital Collection',
    description: '2070 is calling!',
    imageSrc: sampleLargeProductImage,
    imageAlt: 'FUTURE COLLECTION',
    href: 'discover/digital',
  },
]

function HomePage() {
  return (
    
    // Header Navigation Bar
    <div className="bg-darkestGrey h-screen" >
      <div className="">
        <HeaderNavBar />
      </div>


      {/* Large hero banner */}
      <div className="relative bg-gray-900">
        <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
          <img
            src={previewArt}
            alt=""
            className="w-full h-full object-center object-cover"
          />
        </div>
        <div aria-hidden="true" className="absolute inset-0 bg-gray-900 opacity-50" />
        <div className="relative max-w-3xl mx-auto py-32 px-6 flex flex-col items-center text-center sm:py-64 lg:px-0">
          <h1 className="text-4xl font-extrabold tracking-tight text-white lg:text-6xl">New arrivals are here</h1>
          <p className="mt-4 text-xl text-white">
            New music, new artworks, new artist, new everything.  Check out the new arrivals on Calypso now!
          </p>
          <a
            href="new"
            className="mt-8 inline-block bg-white border border-transparent rounded-md py-3 px-8 text-lg font-medium text-gray-900 hover:bg-gray-200"
          >
            Shop New Arrivals
          </a>
        </div>
      </div>


      {/* For sectioned middle width banner
      <div className="max-w-8xl mx-auto px-4 sm:px-8 lg:px-16 py-16">
        <div className="max-w-7xl mx-auto">{<LargeStoryCard />}</div>
      </div> */}


      {/* Featured artworks */}
      <section aria-labelledby="trending-heading" className="bg-gray-200">
        <ProductsRow categoryTitle="Featured artworks" productsList={artworks} />
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
        <ProductsRow categoryTitle="Newly Added Products" productsList={artworks} />
      </section>


      {/* Featured artists carousel */}
      <div className="max-w-8xl mx-auto px-4 sm:px-8 lg:px-16 py-32 bg-menu">
        <div className="max-w-7xl mx-auto">{<LargeStoryCard 
        smallTitleText="Spotlighted Seller" 
        titleText="Buy Austin Bartolome’s newly released music" 
        bodyText="Find out why Austin is becoming one of the fastest growing sellers on Calypso.  Buy his new music now!"
        buttonText="Discover Now"
        href="discover/trending"/>}
        </div>
      </div>


      {/* Thematic products */}
      <section aria-labelledby="trending-heading" className="bg-gray-200">
        <ProductsRow categoryTitle="Thematic Products" productsList={artworks} />
      </section>

      {/* Footer */}
      <Footer />

    </div>
  );
}

export default HomePage
