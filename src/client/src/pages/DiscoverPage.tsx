import React, { useEffect, useState } from 'react'
import HeroBanner from '../components/allproducts/HeroBanner'
import HeaderNavBar from '../components/common/HeaderNavBar'
import Footer from '../components/common/Footer'

import sampleLargeProductImage from '../assets/sampleLargeProductImage.jpg'
import axios from 'axios'

export default function DiscoverPage() {
  const username = 'cassy' //for testing api
  const artCategories = [
    {
      name: 'Sculptures',
      bg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDAB6dPplY78j2wFW4wCxzKUuToO8WgII0Rg&usqp=CAU',
      href: '/artworks?filter=sculpture',
    },
    {
      name: 'Oil',
      bg: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c32e9ac6-a733-407e-8633-98063d432e97/dfnzmsr-11134f6c-fb51-4610-a6be-f1c0d0ed23b7.jpg/v1/fill/w_800,h_534,q_75,strp/wall_art__home_decor__oil_painting__374__by_nct_art_dfnzmsr-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTM0IiwicGF0aCI6IlwvZlwvYzMyZTlhYzYtYTczMy00MDdlLTg2MzMtOTgwNjNkNDMyZTk3XC9kZm56bXNyLTExMTM0ZjZjLWZiNTEtNDYxMC1hNmJlLWYxYzBkMGVkMjNiNy5qcGciLCJ3aWR0aCI6Ijw9ODAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.gvOgZ5FZ5g7zMcHXbxw_ftl5sw3YJNsxrwJG_BxR0g8',
      href: '/artworks?filter=oil',
    },
    {
      name: 'Photography',
      bg: 'https://expertphotography.b-cdn.net/wp-content/uploads/2018/07/close-up-photography-of-leaves.jpg',
      href: '/artworks?filter=photography',
    },
    {
      name: 'Painting',
      bg: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/640px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg',
      href: '/artworks?filter=painting',
    },
  ]

  const musicCategories = [
    {
      name: 'New',
      bg: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b3be1dae-3caa-4d45-be6c-3de586ba95e2/derrop5-0e313434-78a9-46b7-876e-15008d7ca3f2.jpg/v1/fill/w_1192,h_670,q_70,strp/flowing__by_bisbiswas_derrop5-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTAwIiwicGF0aCI6IlwvZlwvYjNiZTFkYWUtM2NhYS00ZDQ1LWJlNmMtM2RlNTg2YmE5NWUyXC9kZXJyb3A1LTBlMzEzNDM0LTc4YTktNDZiNy04NzZlLTE1MDA4ZDdjYTNmMi5qcGciLCJ3aWR0aCI6Ijw9MTYwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.rX9u-SwZHSyaW_CuvribV7KhXPd_7KZ1Y0FQ5wr3Xh0',
    },
    {
      name: 'Digital',
      bg: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2780767c-1e4e-4a64-af2b-1f5fa8e7b082/de7pzy3-b9b97f10-d3d3-461e-ac34-a7d13fbc9cf7.jpg/v1/fill/w_1192,h_670,q_70,strp/northen_light_by_kvacm_de7pzy3-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvMjc4MDc2N2MtMWU0ZS00YTY0LWFmMmItMWY1ZmE4ZTdiMDgyXC9kZTdwenkzLWI5Yjk3ZjEwLWQzZDMtNDYxZS1hYzM0LWE3ZDEzZmJjOWNmNy5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.CjzGrK3hRsajoHdY52Ye1Qn--A6GjO4LWNXN9i2dhMM',
    },
    {
      name: 'Classical',
      bg: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b3be1dae-3caa-4d45-be6c-3de586ba95e2/deybf0e-3de7365e-6c7f-4e6c-a593-0bf743398d6f.jpg/v1/fill/w_1192,h_670,q_70,strp/on_a_trip_by_bisbiswas_deybf0e-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTAwIiwicGF0aCI6IlwvZlwvYjNiZTFkYWUtM2NhYS00ZDQ1LWJlNmMtM2RlNTg2YmE5NWUyXC9kZXliZjBlLTNkZTczNjVlLTZjN2YtNGU2Yy1hNTkzLTBiZjc0MzM5OGQ2Zi5qcGciLCJ3aWR0aCI6Ijw9MTYwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.j5zCWocNaXLpXpRDSIMyd41b7p1QjaAe8TUVDDRugJE',
    },
    {
      name: 'Portraits',
      bg: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6c147535-fed3-4eaa-9feb-220ab7531223/d5bjwe2-1a1421d0-2320-4193-a7fb-cbfa4a7b29bb.png/v1/fill/w_1165,h_686,q_70,strp/illusions_by_sewer_pancake_d5bjwe2-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzU0IiwicGF0aCI6IlwvZlwvNmMxNDc1MzUtZmVkMy00ZWFhLTlmZWItMjIwYWI3NTMxMjIzXC9kNWJqd2UyLTFhMTQyMWQwLTIzMjAtNDE5My1hN2ZiLWNiZmE0YTdiMjliYi5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.DIgEkYnhalNd4vtk5YanF-lZZuN2NVBmG2g-o8eaWOU',
    },
  ]

  const [artworks, setArtworks] = useState([])

  const getArtworks = async () => {
    axios
      .get('http://localhost:8080/api/v0/artworks/all', {})
      .then((response) => {
        const data = response.data
        console.log(data)
        setArtworks(data)
      })
      .catch((error) => {
        console.error('Error fetching data:', error)
      })
  }

  useEffect(() => {
    getArtworks()
    console.log(artworks)
  }, [])

  return (
    <>
      <div className="">
        {/* Header Navigation bar */}
        <div className="">
          <HeaderNavBar />
        </div>

        {/* Hero Banner */}
        <div className=" ">
          <HeroBanner
            titleText="Discover"
            bodyText={`Check out popular art and music`}
            imageSrc={sampleLargeProductImage}
            imageAlt="NEW_ARRIVALS1"
            href="discover/"
          />
        </div>

        <div
          className="flex bg-menu text-gray-300 px-10 py-3 space-x-10"
          aria-label="Global"
        ></div>
        <div className="mb-10 mx-10">
          <div className="flex justify-between">
            <p className="text-2xl pb-3 pt-10 font-bold">
              Popular Sceneric Art
            </p>
            <a
              href={'/artworks?filter=digitalmedium'}
              className="text-lg pb-3 pt-10 font-semibold text-blue-900"
            >
              View more
            </a>
          </div>

          <div className="flex space-x-5">
            <div className="">
              <div className="flex space-x-5">
                {artworks
                  .filter((a: any) => {
                    return a.style == 'scenery'
                  })
                  .map((i: any, j) => {
                    return (
                      j < 4 && (
                        <img
                          src={i.imageSrc}
                          className="h-72 w-72 object-cover"
                        />
                      )
                    )
                  })}
              </div>
            </div>
          </div>

          <div className="flex justify-between">
            <p className="text-2xl pb-3 pt-10 font-bold">
              Browse Art Categories
            </p>
          </div>
          <div className="flex">
            {artCategories.map((c, i) => {
              return (
                <a
                  href={c.href}
                  style={{ backgroundImage: `url(${c.bg})` }}
                  className="py-5 w-1/6 mr-4 rounded-lg text-center"
                >
                  <h1 className="text-center text-white text-2xl">{c.name}</h1>
                </a>
              )
            })}
          </div>
          <div className="flex justify-between">
            <p className="text-2xl pb-3 pt-10 font-bold">Sculptures</p>
            <a
              href={'/artworks'}
              className="text-lg pb-3 pt-10 font-semibold text-blue-900"
            >
              View more
            </a>
          </div>

          <div className="flex space-x-5">
            <div className="">
              <div className="flex space-x-5">
                {artworks
                  .filter((a: any) => {
                    return a.medium == 'sculpture'
                  })
                  .map((i: any, j) => {
                    return (
                      j < 4 && (
                        <img
                          src={i.imageSrc}
                          className="h-72 w-72 object-cover"
                        />
                      )
                    )
                  })}
              </div>
            </div>
          </div>
          <div className="flex justify-between">
            <p className="text-2xl pb-3 pt-10 font-bold">Photography</p>
            <a
              href={'/artworks'}
              className="text-lg pb-3 pt-10 font-semibold text-blue-900"
            >
              View more
            </a>
          </div>

          <div className="flex space-x-5">
            <div className="">
              <div className="flex space-x-5">
                {artworks
                  .filter((a: any) => {
                    return a.style == 'Photo'
                  })
                  .map((i: any, j) => {
                    return (
                      j < 4 && (
                        <img
                          src={i.imageSrc}
                          className="h-72 w-72 object-cover"
                        />
                      )
                    )
                  })}
              </div>
            </div>
          </div>
          <div className="flex justify-between">
            <p className="text-2xl pb-3 pt-10 font-bold">
              Browse Music Categories
            </p>
          </div>
          <div className="flex">
            {musicCategories.map((c, i) => {
              return (
                <a
                  href={'/music/'}
                  style={{ backgroundImage: `url(${c.bg})` }}
                  className="py-5 w-1/6 mr-4 rounded-lg text-center"
                >
                  <h1 className="text-center text-white text-2xl">{c.name}</h1>
                </a>
              )
            })}
          </div>
        </div>
        {/* Footer */}
        <Footer />
      </div>
    </>
  )
}
