import React from 'react'
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { SearchIcon } from '@heroicons/react/solid'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import { ShoppingCartIcon } from '@heroicons/react/outline'
import profilePicture from '../../assets/sampleProfilePicture1.png'
import { useShoppingCart } from '../../context/ShoppingCartContext'
import axios from 'axios'


const user = {
  name: 'William Slicer',
  email: 'william@example.com',
  imageUrl: profilePicture,
}
const navigation = [
  { name: 'Home', href: 'http://localhost:3000/home', current: false },
  { name: 'Artworks', href: 'http://localhost:3000/artworks', current: false },
  { name: 'Music', href: 'http://localhost:3000/discover/beats', current: false},
  { name: 'Discover', href: 'http://localhost:3000/discover', current: false },
  { name: 'Trending Products', href: 'http://localhost:3000/discover/trending', current: false},
  { name: 'Recommended for You', href: 'http://localhost:3000/discover/deals', current: false },
  { name: 'Dashboard', href: 'http://localhost:3000/dashboard/seller', current: false },
  { name: 'Messages', href: 'http://localhost:3000/message', current: false },
]
const userNavigation = [
  { name: 'Your Profile', href: 'http://localhost:3000/profile' },
  { name: 'My Dashboard', href: 'http://localhost:3000/dashboard/seller' },
  { name: 'Sign out', href: 'http://localhost:3000/login' },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const incrementPageVisits = async (page: string) => {
  axios.put(`http://localhost:8080/api/v0/dashboard/increment/${page}`)
    .then(response => {
      console.log('Successfully incremented page visits');
    })
    .catch(error => {
      console.error('Error incrementing page visits:', error);
    }
    );
}

export default function HeaderNavBar() {
  const { openCart, cartQuantity } = useShoppingCart()
  return (
    <div>
      <Disclosure as="header" className="bg-menu fixed w-full top-0 left-0 z-50">
        {({ open }) => (
          <>
            <div className="max-w-8xl mx-auto px-2 sm:px-4 lg:divide-y lg:divide-gray-700 lg:px-8">
              <div className="relative h-16 flex justify-between">
                <div className="relative z-10 px-2 flex lg:px-0">
                  <div className="flex-shrink-0 flex items-center">
                    <a href='/landing'>
                      <img
                      className="block h-16 w-auto"
                      src={require('../../assets/logo-withoutbg.png')}
                      alt="Calypso Logo"
                    />
                    </a>
                    
                  </div>
                </div>
                <div className="relative z-0 flex-1 px-2 flex items-center justify-center sm:absolute sm:inset-0">
                  <div className="w-full sm:max-w-xs">
                    <label htmlFor="search" className="sr-only">
                      Search
                    </label>
                    <div className="relative">
                      <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                        <SearchIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                      </div>
                      <input
                        id="search"
                        name="search"
                        className="block w-full md:w-96 bg-gray-700 border border-transparent rounded-md py-2 pl-10 pr-3 text-sm placeholder-gray-400 focus:outline-none focus:bg-white focus:border-white focus:ring-white focus:text-gray-900 focus:placeholder-gray-500 sm:text-sm"
                        placeholder="Search"
                        type="search"
                      />
                    </div>
                  </div>
                </div>
                <div className="relative z-10 flex items-center lg:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="hidden lg:relative lg:z-10 lg:ml-4 lg:flex lg:items-center space-x-2">
                  {/* Shopping cart sidebar */}
                  
                    <button
                      type="button"
                      className="relative ml-auto flex-shrink-0 bg-gray-800 rounded-full p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                      onClick={openCart}
                    >
                      <span className="sr-only">View shopping cart</span>
                      <ShoppingCartIcon className="h-6 w-6" aria-hidden="true" />
                      {cartQuantity > 0 && ( 
                      <div className="rounded-full text-sm bg-red-600 flex justify-center items-center text-white w-5 h-5 absolute -bottom-1 -right-1 translate-x-1/4 translate-y-1/4">
                        {cartQuantity}
                      </div>
                      )}
                    </button>
                 
                    <button
                      type="button"
                      className="bg-gray-800 flex-shrink-0 rounded-full p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                    >
                      <span className="sr-only">View notifications</span>
                      <BellIcon className="h-6 w-6" aria-hidden="true" />
                    </button>

                  {/* Profile dropdown */}
                  <Menu as="div" className="flex-shrink-0 relative ml-4">
                    <div>
                      <Menu.Button className="bg-gray-800 rounded-full flex text-sm text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                        <span className="sr-only">Open user menu</span>
                        <img className="h-8 w-8 rounded-full" src={user.imageUrl} alt="" />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 py-1 focus:outline-none">
                        {userNavigation.map((item) => (
                          <Menu.Item key={item.name}>
                            {({ active }) => (
                              <a
                                href={item.href}
                                className={classNames(
                                  active ? 'bg-gray-100' : '',
                                  'block py-2 px-4 text-sm text-gray-700'
                                )}
                              >
                                {item.name}
                              </a>
                            )}
                          </Menu.Item>
                        ))}
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
              <nav className="hidden lg:py-2 lg:flex lg:space-x-8" aria-label="Global">
                {navigation.map((item) => (
                  <a
                    onClick={() => incrementPageVisits(item.name)}
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.current ? 'bg-gray-700 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'rounded-md py-2 px-3 inline-flex items-center text-sm font-medium'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </a>
                ))}
              </nav>
            </div>

            <Disclosure.Panel as="nav" className="lg:hidden" aria-label="Global">
              <div className="pt-2 pb-3 px-2 space-y-1">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'block rounded-md py-2 px-3 text-base font-medium'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
              <div className="border-t border-gray-700 pt-4 pb-3">
                <div className="px-4 flex items-center">
                  <div className="flex-shrink-0">
                    <img className="h-10 w-10 rounded-full" src={user.imageUrl} alt="" />
                  </div>
                  <div className="ml-3">
                    <div className="text-base font-medium text-white">{user.name}</div>
                    <div className="text-sm font-medium text-gray-400">{user.email}</div>
                  </div>
                  <button
                    type="button"
                    className="ml-auto flex-shrink-0 bg-gray-800 rounded-full p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  >
                    <span className="sr-only">View notifications</span>
                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <div className="mt-3 px-2 space-y-1">
                  {userNavigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className="block rounded-md py-2 px-3 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      <div className="pb-28">
        {/* Content below the navbar */}
      </div>
    </div>
  )
}


