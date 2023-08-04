import { Disclosure } from '@headlessui/react'

export default function HeaderNavBar() {

  return (
    <div>
      <Disclosure as="header" className="bg-menu fixed w-full top-0 left-0 z-50">
        {({ open }) => (
          <>
           <div className="max-w-8xl mx-auto px-2 lg:divide-y lg:divide-gray-700 lg:px-4">
                <div className="relative h-20 flex">
                    <div className="relative z-10 px-2 flex items-center">
                    <a href='/landing'>
                        <img
                        className="block h-16 w-auto"
                        src={require('../assets/logo-withoutbg.png')}
                        alt="Calypso Logo"
                        />
                    </a>
                    </div>
                    <div className="flex items-center justify-center flex-grow"> 
                      <div className="space-x-20 flex"> 
                          <a href="#about-section" className='font-medium text-gray-400 hover:text-gray-200 text-lg'>About Us</a>
                          <a href="#features-section" className='font-medium text-gray-400 hover:text-gray-200 text-lg'>Features</a>
                          <a href="#testimonial-section" className='font-medium text-gray-400 hover:text-gray-200 text-lg'>Testimonials</a>
                          <a href="#about-section" className='font-medium text-gray-400 hover:text-gray-200 text-lg'>Contact Us</a>
                      </div>
                    </div>
                    <div className="relative px-2 flex items-center">
                      <a href="/login">
                        <button
                          className=" px-3 pb-[8px] pt-[10px] text-sm font-medium text-neutral-50 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200"
                          >
                          Sign In
                        </button>
                      </a>
                      <a href="/register">
                        <button
                          className="rounded border-2 border-neutral-50 px-2 pb-[5px] pt-[5px] text-sm font-medium text-neutral-50  hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200"
                          >
                          Register
                        </button>
                      </a>
                    </div>
                </div>
            </div>
          </>
        )}
      </Disclosure>
      <div className="pb-20"></div>
    </div>
  )
}
