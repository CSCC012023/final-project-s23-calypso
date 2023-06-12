import React from 'react'
import HeaderNavBar from '../components/common/HeaderNavBar'
import LargeStoryCard from '../components/home/LargeStoryCard'

const trendingProducts = [
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
]

type Props = {}

function HomePage({ }: Props) {
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
      <section aria-labelledby="trending-heading" className="bg-white">
        <div className="py-16 sm:py-8 lg:max-w-7xl lg:mx-auto lg:py-16 lg:px-8">
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
                {trendingProducts.map((product) => (
                  <li key={product.id} className="w-64 inline-flex flex-col text-center lg:w-auto">
                    <div className="group relative">

                      {/* Product Image */}
                      <div className="w-full bg-gray-200 rounded-md overflow-hidden aspect-w-1 aspect-h-1">
                        <img
                          src={product.imageSrc}
                          alt={product.imageAlt}
                          className="w-full h-full object-center object-cover group-hover:opacity-75"
                        />
                      </div>

                      {/* Description and Pricing */}
                      <div className="mt-6">
                        <p className="text-sm text-gray-500">{product.color}</p>
                        <h3 className="mt-1 font-semibold text-gray-900">
                          <a href={product.href}>
                            <span className="absolute inset-0" />
                            {product.name}
                          </a>
                        </h3>
                        <p className="mt-1 text-gray-900">{product.price}</p>
                      </div>
                    </div>

                    <h4 className="sr-only">Available colors</h4>
                    <ul role="list" className="mt-auto pt-6 flex items-center justify-center space-x-3">
                      {product.availableColors.map((color) => (
                        <li
                          key={color.name}
                          className="w-4 h-4 rounded-full border border-black border-opacity-10"
                          style={{ backgroundColor: color.colorBg }}
                        >
                          <span className="sr-only">{color.name}</span>
                        </li>
                      ))}
                    </ul>
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


    </div>
  );
}

export default HomePage