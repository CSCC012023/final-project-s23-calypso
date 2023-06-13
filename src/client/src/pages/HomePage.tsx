import React from 'react'
import HeaderNavBar from '../components/common/HeaderNavBar'
import LargeStoryCard from '../components/home/LargeStoryCard'
import SmallProductCard from '../components/home/SmallProductCard'
import CollectionCard from '../components/home/CollectionCard'

const trendingArtWorks = [
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

      {/* For full screen width card */}
      {/* <div className="">{<LargeStoryCard />}</div> */}

      {/* For sectioned middle width card */}
      <div className="max-w-8xl mx-auto px-4 sm:px-8 lg:px-16 py-16">
        <div className="max-w-7xl mx-auto">{<LargeStoryCard />}</div>
      </div>

      {/* Featured artworks */}
      <section aria-labelledby="trending-heading" className="bg-gray-200">
        <div className="py-24 lg:max-w-7xl lg:mx-auto sm:py-8 lg:py-24 lg:px-8">
          <div className="px-4 flex items-center justify-between sm:px-6 lg:px-0">
            <h2 id="trending-heading" className="text-2xl font-extrabold tracking-tight text-gray-900">
              Featured Art Works
            </h2>
            <a href="#" className="hidden sm:block text-sm font-semibold text-sky-600 hover:text-indigo-500">
              See more<span aria-hidden="true"> &rarr;</span>
            </a>
          </div>

          <div className="mt-8 relative">
            <div className="relative w-full overflow-x-auto">
              <ul
                role="list"
                className="mx-4 inline-flex space-x-8 sm:mx-6 lg:mx-0 lg:space-x-0 lg:grid lg:grid-cols-4 lg:gap-x-8"
              >
                {/* Product */}
                {trendingArtWorks.map((product) => (
                  <li key={product.id} className="w-64 inline-flex flex-col text-center lg:w-auto">
                    <SmallProductCard productProp={product} />
                  </li>
                ))}

              </ul>
            </div>
          </div>

          <div className="mt-12 px-4 sm:hidden">
            <a href="#" className="text-sm font-semibold text-indigo-600 hover:text-indigo-500">
              See everything<span aria-hidden="true"> &rarr;</span>
            </a>
          </div>
        </div>
      </section>

      {/* Collections */}
      <section aria-labelledby="collections-heading" className="bg-darkGrey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto py-24 sm:py-16 lg:py-24 lg:max-w-none">
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


    </div>
  );
}

export default HomePage