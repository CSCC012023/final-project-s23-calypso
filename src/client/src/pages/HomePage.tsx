import React from 'react'
import HeaderNavBar from '../components/common/HeaderNavBar'
import LargeStoryCard from '../components/home/LargeStoryCard'
import SmallProductCard from '../components/home/SmallProductCard'
import CollectionCard from '../components/home/CollectionCard'
import previewArt from '../assets/previewArt.jpg'
import ProductsRow from '../components/home/ProductsRow'
import Footer from '../components/common/Footer'

const trendingArtworks = [
  {
    id: 1,
    name: 'Machined Pen',
    color: 'Black',
    price: '$35',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-product-01.jpg',
    imageAlt: 'Black machined steel pen with hexagonal grip and small white logo at top.',
    availableColors: [
      { name: 'Black', colorBg: '#111827' },
      { name: 'Brass', colorBg: '#FDE68A' },
      { name: 'Chrome', colorBg: '#E5E7EB' },
    ],
  },
  {
    id: 2,
    name: 'Machined Pen',
    color: 'Black',
    price: '$35',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-product-01.jpg',
    imageAlt: 'Black machined steel pen with hexagonal grip and small white logo at top.',
    availableColors: [
      { name: 'Black', colorBg: '#111827' },
      { name: 'Brass', colorBg: '#FDE68A' },
      { name: 'Chrome', colorBg: '#E5E7EB' },
    ],
  },
]

const collections = [
  {
    name: 'Desk and Office',
    description: 'Work from home accessories',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg',
    imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
    href: '#',
  },
  {
    name: 'Self-Improvement',
    description: 'Journals and note-taking',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg',
    imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
    href: '#',
  },
  {
    name: 'Travel',
    description: 'Daily commute essentials',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg',
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    href: '#',
  },
]

function HomePage() {
  return (
    <div className="bg-darkestGrey h-screen" >
      <div className="">
        <HeaderNavBar />
      </div>

      {/* For large hero banner */}
      <div className="relative bg-gray-900">
        {/* Decorative image and overlay */}
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
            The new arrivals have, well, newly arrived. Check out the latest options from our summer small-batch release
            while they're still in stock.
          </p>
          <a
            href="#"
            className="mt-8 inline-block bg-white border border-transparent rounded-md py-3 px-8 text-base font-medium text-gray-900 hover:bg-gray-100"
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
        <ProductsRow categoryTitle="Featured artworks" productsList={trendingArtworks} />
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
        <ProductsRow categoryTitle="Newly Added Products" productsList={trendingArtworks} />
      </section>


      {/* Featured artists carousel */}          
      <div className="max-w-8xl mx-auto px-4 sm:px-8 lg:px-16 py-32 bg-menu">
        <div className="max-w-7xl mx-auto">{<LargeStoryCard />}</div>
      </div>


      {/* Thematic products */}
      <section aria-labelledby="trending-heading" className="bg-gray-200">
        <ProductsRow categoryTitle="Thematic Products" productsList={trendingArtworks} />
      </section>

      {/* Footer */}
      <Footer />

    </div>
  );
}

export default HomePage