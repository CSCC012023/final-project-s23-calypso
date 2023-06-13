import React from 'react'

type Props = {}

function LandingPage({}: Props) {
  const logo = {
    img: require("../assets/logo.jpg"),
  }
  const artist = {
    img: require("../assets/panda.png"),
  }
  const preview = {
    img: require("../assets/previewArt.jpg"),
  }
  const product = {
    img: require("../assets/sampleProductImage.png"),
  }
  const temp_image = {
    img: require("../assets/sampleProductImage2.jpg"),
  }
  const product2 = {
    img: require("../assets/sampleProfilePicture1.png"),
  }
  const product3 = {
    img: require("../assets/sampleUserBanner.jpg"),
  }
  
  return (
    <>
    <div className="flex justify-between" style={{backgroundImage: `url(https://png.pngtree.com/thumb_back/fh260/background/20201026/pngtree-blue-ink-abstract-acrylic-background-marbling-artwork-texture-agate-ripple-pattern-image_433228.jpg`}}>
      <img className="h-20" src={logo.img} />
      <div className="inline-flex py-5 px-4">
        <div className="px-3">
          <form action="http://localhost:3000/login" method="get">
            <button
              className="inline-block rounded border-2 border-neutral-50 px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
              data-te-ripple-init>
              Log In
            </button>
          </form>
        </div>
        <div className="px-3">
          <form action="http://localhost:3000/register" method="get">
            <button
              className="inline-block rounded border-2 border-neutral-50 px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
              data-te-ripple-init>
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
    <div className="bg-gray-900 px-5 py-15 text-white" >
      <div className='flex py-20 px-15 '>
        <h1 className="text-6xl text-gray-300 font-serif float-left">
          An online marketplace where you can <span className="text-white italic bold">buy, sell, meet, and collaborate</span> with other artists!
        </h1>
      </div>

      <div className="max-w-m bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
        <p className='text-3xl py-2 flex justify-center'>Preview the amazing art pieces offered in Calypso!</p>
        <div className="justify-center items-center flex p-3">
        <form className=""action="http://localhost:3000/product" method="get">
            <button>
            <img className="object-contain h-48 w-96" src={artist.img} />
            </button>
        </form>
        <form className=""action="http://localhost:3000/product" method="get">
            <button>
            <img className="object-contain h-48 w-96" src={preview.img} />
            </button>
        </form>
        <form className=""action="http://localhost:3000/product" method="get">
            <button>
            <img className="object-contain h-48 w-96" src={product.img} />
            </button>
        </form>
        <form className=""action="http://localhost:3000/product" method="get">
            <button>
            <img className="object-contain h-48 w-96" src={product3.img} />
            </button>
        </form>
        <form className=""action="http://localhost:3000/product" method="get">
            <button>
            <img className="object-contain h-48 w-96" src={temp_image.img} />
            </button>
        </form>
        <form className=""action="http://localhost:3000/product" method="get">
            <button>
            <img className="object-contain h-48 w-96" src={product2.img} />
            </button>
        </form>
        </div>
      </div>
      <div className="text-center">
      <div className="max-w-m bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img className="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
        </a>
        <div className="p-5 ">
          <a href="#">
            <h5 className="py-3 mb-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">Like what you see?</h5>
          </a>
          <p className="mb-3 py-1 text-2xl font-normal text-gray-700 dark:text-gray-400">Discover even more on Calypso.</p>
          <form className="py-4"action="http://localhost:3000/discover" method="get">
            <button className="inline-flex items-center px-3 py-2 text-lg font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Explore Calypso
            </button>
          </form>
        </div>
      </div>
      <div className="py-20 text-4xl flex justify-center">
        <p>Join <span className="text-teal-500 italic bold">Calypso</span> and express your <span className='text-teal-500 hover:italic'>creativity</span>!</p>
        <img className="h-12 px-5" src="https://i.pinimg.com/originals/63/b7/2b/63b72b35478044500002e67b82cac12a.gif"></img>
      </div>
      <div className="" style={{backgroundImage: `url(https://cutewallpaper.org/28/desktop-video-wallpaper-universe/sky-stars-space-star-universe-galaxies-background-texture-motion-graphics-%E2%80%93-free-video-library-%E2%80%93-yl-computing.png`}}>
      <div>
        <img className="h-20 inline-flex justify-center items-center" src={logo.img} />
        <p className="flex justify-center text-gray-400">We strive to offer the best available services, and access to a flourishing community.</p>
      </div>
      <div className="justify-center items-center inline-flex p-3">
          <form className="px-2"action="http://localhost:3000" method="get">
            <button>
            <img className="h-20" src={temp_image.img} />
            Home
            </button>
          </form>
          <form className="px-2"action="http://localhost:3000/discover" method="get">
            <button>
            <img className="h-20" src={artist.img} />
            Discover
            </button>
          </form>
        </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default LandingPage