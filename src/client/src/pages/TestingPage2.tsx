import React from 'react'
import { Fragment, useState } from 'react'
import { Dialog, Popover, Tab, Transition } from '@headlessui/react'
import { MenuIcon, SearchIcon, ShoppingCartIcon, UserIcon, XIcon } from '@heroicons/react/outline'
import HeaderNavBar from '../components/common/HeaderNavBar'

const currencies = ['CAD', 'USD', 'AUD', 'EUR', 'GBP']
const navigation = {
    categories: [
        {
            name: 'Women',
            featured: [
                { name: 'Sleep', href: '#' },
                { name: 'Swimwear', href: '#' },
                { name: 'Underwear', href: '#' },
            ],
            collection: [
                { name: 'Everything', href: '#' },
                { name: 'Core', href: '#' },
                { name: 'New Arrivals', href: '#' },
                { name: 'Sale', href: '#' },
            ],
            categories: [
                { name: 'Basic Tees', href: '#' },
                { name: 'Artwork Tees', href: '#' },
                { name: 'Bottoms', href: '#' },
                { name: 'Underwear', href: '#' },
                { name: 'Accessories', href: '#' },
            ],
            brands: [
                { name: 'Full Nelson', href: '#' },
                { name: 'My Way', href: '#' },
                { name: 'Re-Arranged', href: '#' },
                { name: 'Counterfeit', href: '#' },
                { name: 'Significant Other', href: '#' },
            ],
        },
        {
            name: 'Men',
            featured: [
                { name: 'Casual', href: '#' },
                { name: 'Boxers', href: '#' },
                { name: 'Outdoor', href: '#' },
            ],
            collection: [
                { name: 'Everything', href: '#' },
                { name: 'Core', href: '#' },
                { name: 'New Arrivals', href: '#' },
                { name: 'Sale', href: '#' },
            ],
            categories: [
                { name: 'Artwork Tees', href: '#' },
                { name: 'Pants', href: '#' },
                { name: 'Accessories', href: '#' },
                { name: 'Boxers', href: '#' },
                { name: 'Basic Tees', href: '#' },
            ],
            brands: [
                { name: 'Significant Other', href: '#' },
                { name: 'My Way', href: '#' },
                { name: 'Counterfeit', href: '#' },
                { name: 'Re-Arranged', href: '#' },
                { name: 'Full Nelson', href: '#' },
            ],
        },
    ],
    pages: [
        { name: 'Company', href: '#' },
        { name: 'Stores', href: '#' },
    ],
}
const offers = [
    { name: 'Download the app', description: 'Get an exclusive $5 off code', href: '#' },
    { name: "Return when you're ready", description: '60 days of free returns', href: '#' },
    { name: 'Sign up for our newsletter', description: '15% off your first order', href: '#' },
]
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
const testimonials = [
    {
        id: 1,
        quote:
            'My order arrived super quickly. The product is even better than I hoped it would be. Very happy customer over here!',
        attribution: 'Sarah Peters, New Orleans',
    },
    {
        id: 2,
        quote:
            'I had to return a purchase that didn’t fit. The whole process was so simple that I ended up ordering two new items!',
        attribution: 'Kelly McPherson, Chicago',
    },
    {
        id: 3,
        quote:
            'Now that I’m on holiday for the summer, I’ll probably order a few more shirts. It’s just so convenient, and I know the quality will always be there.',
        attribution: 'Chris Paul, Phoenix',
    },
]
const footerNavigation = {
    products: [
        { name: 'Bags', href: '#' },
        { name: 'Tees', href: '#' },
        { name: 'Objects', href: '#' },
        { name: 'Home Goods', href: '#' },
        { name: 'Accessories', href: '#' },
    ],
    customerService: [
        { name: 'Contact', href: '#' },
        { name: 'Shipping', href: '#' },
        { name: 'Returns', href: '#' },
        { name: 'Warranty', href: '#' },
        { name: 'Secure Payments', href: '#' },
        { name: 'FAQ', href: '#' },
        { name: 'Find a store', href: '#' },
    ],
    company: [
        { name: 'Who we are', href: '#' },
        { name: 'Sustainability', href: '#' },
        { name: 'Press', href: '#' },
        { name: 'Careers', href: '#' },
        { name: 'Terms & Conditions', href: '#' },
        { name: 'Privacy', href: '#' },
    ],
    legal: [
        { name: 'Terms of Service', href: '#' },
        { name: 'Return Policy', href: '#' },
        { name: 'Privacy Policy', href: '#' },
        { name: 'Shipping Policy', href: '#' },
    ],
    bottomLinks: [
        { name: 'Accessibility', href: '#' },
        { name: 'Privacy', href: '#' },
        { name: 'Terms', href: '#' },
    ],
}

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export default function TestingPage2() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <div className="bg-white">
         

            <main>
                {/* Featured Story Banner */}
                <div className="flex flex-col border-b border-gray-200 lg:border-0">
                    <div className="relative">
                        <div aria-hidden="true" className="hidden absolute w-1/2 h-full bg-gray-100 lg:block" />
                        <div className="relative bg-gray-100 lg:bg-transparent">
                            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:grid lg:grid-cols-2">
                                <div className="max-w-2xl mx-auto py-24 lg:py-64 lg:max-w-none">
                                    <div className="lg:pr-16">
                                        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl xl:text-6xl">
                                            Focus on what matters
                                        </h1>
                                        <p className="mt-4 text-xl text-gray-600">
                                            All the charts, datepickers, and notifications in the world can't beat checking off some items on
                                            a paper card.
                                        </p>
                                        <div className="mt-6">
                                            <a
                                                href="#"
                                                className="inline-block bg-indigo-600 border border-transparent py-3 px-8 rounded-md font-medium text-white hover:bg-indigo-700"
                                            >
                                                Shop Productivity
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full h-48 sm:h-64 lg:absolute lg:top-0 lg:right-0 lg:w-1/2 lg:h-full">
                            <img
                                src="https://tailwindui.com/img/ecommerce-images/home-page-02-hero-half-width.jpg"
                                alt=""
                                className="w-full h-full object-center object-cover"
                            />
                        </div>
                    </div>
                </div>



                {/* Trending products */}
                <section aria-labelledby="trending-heading" className="bg-white">
                    <div className="py-16 sm:py-24 lg:max-w-7xl lg:mx-auto lg:py-32 lg:px-8">
                        <div className="px-4 flex items-center justify-between sm:px-6 lg:px-0">
                            <h2 id="trending-heading" className="text-2xl font-extrabold tracking-tight text-gray-900">
                                Trending products
                            </h2>
                            <a href="#" className="hidden sm:block text-sm font-semibold text-indigo-600 hover:text-indigo-500">
                                See everything<span aria-hidden="true"> &rarr;</span>
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




                {/* Collections */}
                <section aria-labelledby="collections-heading" className="bg-gray-100">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-2xl mx-auto py-16 sm:py-24 lg:py-32 lg:max-w-none">
                            <h2 id="collections-heading" className="text-2xl font-extrabold text-gray-900">
                                Collections
                            </h2>

                            <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
                                {collections.map((collection) => (
                                    <div key={collection.name} className="group relative">
                                        <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                                            <img
                                                src={collection.imageSrc}
                                                alt={collection.imageAlt}
                                                className="w-full h-full object-center object-cover"
                                            />
                                        </div>
                                        <h3 className="mt-6 text-sm text-gray-500">
                                            <a href={collection.href}>
                                                <span className="absolute inset-0" />
                                                {collection.name}
                                            </a>
                                        </h3>
                                        <p className="text-base font-semibold text-gray-900">{collection.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>




                {/* Sale and testimonials */}
                <div className="relative overflow-hidden">
                    {/* Decorative background image and gradient */}
                    <div aria-hidden="true" className="absolute inset-0">
                        <div className="absolute inset-0 max-w-7xl mx-auto overflow-hidden xl:px-8">
                            <img
                                src="https://tailwindui.com/img/ecommerce-images/home-page-02-sale-full-width.jpg"
                                alt=""
                                className="w-full h-full object-center object-cover"
                            />
                        </div>
                        <div className="absolute inset-0 bg-white bg-opacity-75" />
                        <div className="absolute inset-0 bg-gradient-to-t from-white via-white" />
                    </div>

                    {/* Sale */}
                    <section
                        aria-labelledby="sale-heading"
                        className="relative max-w-7xl mx-auto pt-32 px-4 flex flex-col items-center text-center sm:px-6 lg:px-8"
                    >
                        <div className="max-w-2xl mx-auto lg:max-w-none">
                            <h2
                                id="sale-heading"
                                className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl"
                            >
                                Get 25% off during our one-time sale
                            </h2>
                            <p className="mt-4 max-w-xl mx-auto text-xl text-gray-600">
                                Most of our products are limited releases that won't come back. Get your favorite items while they're in
                                stock.
                            </p>
                            <a
                                href="#"
                                className="mt-6 inline-block w-full bg-gray-900 border border-transparent rounded-md py-3 px-8 font-medium text-white hover:bg-gray-800 sm:w-auto"
                            >
                                Get access to our one-time sale
                            </a>
                        </div>
                    </section>

                    {/* Testimonials */}
                    <section
                        aria-labelledby="testimonial-heading"
                        className="relative py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:py-32 lg:px-8"
                    >
                        <div className="max-w-2xl mx-auto lg:max-w-none">
                            <h2 id="testimonial-heading" className="text-2xl font-extrabold tracking-tight text-gray-900">
                                What are people saying?
                            </h2>

                            <div className="mt-16 space-y-16 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8">
                                {testimonials.map((testimonial) => (
                                    <blockquote key={testimonial.id} className="sm:flex lg:block">
                                        <svg
                                            width={24}
                                            height={18}
                                            viewBox="0 0 24 18"
                                            xmlns="http://www.w3.org/2000/svg"
                                            aria-hidden="true"
                                            className="flex-shrink-0 text-gray-300"
                                        >
                                            <path
                                                d="M0 18h8.7v-5.555c-.024-3.906 1.113-6.841 2.892-9.68L6.452 0C3.188 2.644-.026 7.86 0 12.469V18zm12.408 0h8.7v-5.555C21.083 8.539 22.22 5.604 24 2.765L18.859 0c-3.263 2.644-6.476 7.86-6.451 12.469V18z"
                                                fill="currentColor"
                                            />
                                        </svg>
                                        <div className="mt-8 sm:mt-0 sm:ml-6 lg:mt-10 lg:ml-0">
                                            <p className="text-lg text-gray-600">{testimonial.quote}</p>
                                            <cite className="mt-4 block font-semibold not-italic text-gray-900">
                                                {testimonial.attribution}
                                            </cite>
                                        </div>
                                    </blockquote>
                                ))}
                            </div>
                        </div>
                    </section>
                </div>
            </main>


            {/* Footer */}
            <footer aria-labelledby="footer-heading" className="bg-white">
                <h2 id="footer-heading" className="sr-only">
                    Footer
                </h2>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="border-t border-gray-200">
                        <div className="pt-16 pb-20">
                            <div className="md:flex md:justify-center">
                                <img
                                    src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600"
                                    alt=""
                                    className="h-8 w-auto"
                                />
                            </div>
                            <div className="mt-16 max-w-5xl mx-auto xl:grid xl:grid-cols-2 xl:gap-8">
                                <div className="grid grid-cols-2 gap-8 xl:col-span-2">
                                    <div className="space-y-12 md:space-y-0 md:grid md:grid-cols-2 md:gap-8">
                                        <div>
                                            <h3 className="text-sm font-medium text-gray-900">Products</h3>
                                            <ul role="list" className="mt-6 space-y-6">
                                                {footerNavigation.products.map((item) => (
                                                    <li key={item.name} className="text-sm">
                                                        <a href={item.href} className="text-gray-500 hover:text-gray-600">
                                                            {item.name}
                                                        </a>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div>
                                            <h3 className="text-sm font-medium text-gray-900">Customer Service</h3>
                                            <ul role="list" className="mt-6 space-y-6">
                                                {footerNavigation.customerService.map((item) => (
                                                    <li key={item.name} className="text-sm">
                                                        <a href={item.href} className="text-gray-500 hover:text-gray-600">
                                                            {item.name}
                                                        </a>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="space-y-12 md:space-y-0 md:grid md:grid-cols-2 md:gap-8">
                                        <div>
                                            <h3 className="text-sm font-medium text-gray-900">Company</h3>
                                            <ul role="list" className="mt-6 space-y-6">
                                                {footerNavigation.company.map((item) => (
                                                    <li key={item.name} className="text-sm">
                                                        <a href={item.href} className="text-gray-500 hover:text-gray-600">
                                                            {item.name}
                                                        </a>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div>
                                            <h3 className="text-sm font-medium text-gray-900">Legal</h3>
                                            <ul role="list" className="mt-6 space-y-6">
                                                {footerNavigation.legal.map((item) => (
                                                    <li key={item.name} className="text-sm">
                                                        <a href={item.href} className="text-gray-500 hover:text-gray-600">
                                                            {item.name}
                                                        </a>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="lg:grid lg:grid-cols-2 lg:gap-x-6 xl:gap-x-8">
                            <div className="bg-gray-100 rounded-lg p-6 flex items-center sm:p-10">
                                <div className="max-w-sm mx-auto">
                                    <h3 className="font-semibold text-gray-900">Sign up for our newsletter</h3>
                                    <p className="mt-2 text-sm text-gray-500">
                                        The latest news, articles, and resources, sent to your inbox weekly.
                                    </p>
                                    <form className="mt-4 sm:mt-6 sm:flex">
                                        <label htmlFor="email-address" className="sr-only">
                                            Email address
                                        </label>
                                        <input
                                            id="email-address"
                                            type="text"
                                            autoComplete="email"
                                            required
                                            className="appearance-none min-w-0 w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-4 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                                        />
                                        <div className="mt-3 sm:flex-shrink-0 sm:mt-0 sm:ml-4">
                                            <button
                                                type="submit"
                                                className="w-full bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-indigo-500"
                                            >
                                                Sign up
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>

                            <div className="mt-6 relative py-12 px-6 flex items-center sm:py-16 sm:px-10 lg:mt-0">
                                <div className="absolute inset-0 rounded-lg overflow-hidden">
                                    <img
                                        src="https://tailwindui.com/img/ecommerce-images/footer-02-exclusive-sale.jpg"
                                        alt=""
                                        className="w-full h-full filter saturate-0 object-center object-cover"
                                    />
                                    <div className="absolute inset-0 bg-indigo-600 bg-opacity-90" />
                                </div>
                                <div className="relative max-w-sm mx-auto text-center">
                                    <h3 className="text-2xl font-extrabold tracking-tight text-white">Get early access</h3>
                                    <p className="mt-2 text-gray-200">
                                        Did you sign up to the newsletter? If so, use the keyword we sent you to get access.{' '}
                                        <a href="#" className="font-bold text-white whitespace-nowrap hover:text-gray-200">
                                            Go now<span aria-hidden="true"> &rarr;</span>
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="py-10 md:flex md:items-center md:justify-between">
                        <div className="text-center md:text-left">
                            <p className="text-sm text-gray-500">&copy; 2021 All Rights Reserved</p>
                        </div>

                        <div className="mt-4 flex items-center justify-center md:mt-0">
                            <div className="flex space-x-8">
                                {footerNavigation.bottomLinks.map((item) => (
                                    <a key={item.name} href={item.href} className="text-sm text-gray-500 hover:text-gray-600">
                                        {item.name}
                                    </a>
                                ))}
                            </div>

                            <div className="ml-6 border-l border-gray-200 pl-6">
                                <a href="#" className="flex items-center text-gray-500 hover:text-gray-600">
                                    <img
                                        src="https://tailwindui.com/img/flags/flag-canada.svg"
                                        alt=""
                                        className="w-5 h-auto flex-shrink-0"
                                    />
                                    <span className="ml-3 text-sm">Change</span>
                                    <span className="sr-only">location and currency</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
