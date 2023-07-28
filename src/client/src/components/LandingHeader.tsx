import React from 'react'
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { SearchIcon } from '@heroicons/react/solid'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import { ShoppingCartIcon } from '@heroicons/react/outline'



const user = {
  name: 'William Slicer',
  email: 'william@example.com',
}
const navigation = [
  { name: 'Artworks', href: 'http://localhost:3000/artworks', current: false },
  { name: 'Music', href: 'http://localhost:3000/discover/beats', current: false },
  { name: 'Discover', href: 'http://localhost:3000/discover', current: false },
  { name: 'Trending Products', href: 'http://localhost:3000/trending', current: false },
  { name: 'Recommended for You', href: 'http://localhost:3000/discover/deals', current: false },
  { name: 'Messages', href: 'http://localhost:3000/message', current: false },
]
const userNavigation = [
  { name: 'Your Profile', href: 'profile' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function HeaderNavBar() {

  return (
    <div>
      <Disclosure as="header" className="bg-menu fixed w-full top-0 left-0 z-50">
        {({ open }) => (
          <>
           <div className="max-w-8xl mx-auto px-2 lg:divide-y lg:divide-gray-700 lg:px-4">
                <div className="relative h-16 flex">
                    <div className="relative z-10 px-2 flex items-center">
                    <a href='/home'>
                        <img
                        className="block h-14 w-auto"
                        src={require('../assets/logo-withoutbg.png')}
                        alt="Calypso Logo"
                        />
                    </a>
                    </div>
                    <div className="flex items-center justify-center flex-grow"> {/* Updated class here */}
                    <div className="space-x-20 flex"> {/* Added flex to display items in a row */}
                        <h1 className='text-[#ffffff]'>About Us</h1>
                        <h1 className='text-[#ffffff]'>Contact Us</h1>
                        <h1 className='text-[#ffffff]'>Trending</h1>
                        <h1 className='text-[#ffffff]'>Testimonials</h1>
                    </div>
                    </div>
                    <div className="relative z-10 px-2 flex items-center">
                    <button className="bg-[#ffffff] px-4 py-2 rounded-md text-[#000000]">Sign Up</button>
                    </div>
                </div>
            </div>
          </>
        )}
      </Disclosure>
      <div className="pb-20">
        {/* Content below the navbar */}
      </div>
    </div>
  )
}
