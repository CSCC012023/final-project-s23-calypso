import React, { useEffect, useState } from 'react'
import Menu from '../components/Menu'
import MusicList from '../components/MusicList'
import ArtList from '../components/ArtList'
import HeaderNavBar from '../components/common/HeaderNavBar'
import sampleLargeProductImage from '../assets/sampleLargeProductImage.jpg'
import HeroBanner from '../components/allproducts/HeroBanner'
import axios from 'axios'
import Footer from '../components/common/Footer'
//import Menu from '../components/Menu'

export default function TrendingPage() {
  const username = 'cassy' // Change later for api call purposes

  const [artworks, setArtworks] = useState([])

  const [show, setShow] = useState(0)

  const getArtworks = async () => {
    axios
      .get('http://localhost:8080/api/v0/artworks/all?sort=visits', {})
      .then((response) => {
        const data = response.data
        setArtworks(data)
      })
      .catch((error) => {
        console.error('Error fetching data:', error)
      })
  }

  const categories = [
    {
      name: 'Trending',
      bg: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/bca5ab6d-3c49-43ee-afbf-890918073516/dfwnwr2-c1eead6d-2361-4f13-9bdd-cee0f0e007f6.png/v1/fill/w_1168,h_684,q_70,strp/magic_forest___monday_by_darkmaster777_dfwnwr2-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzUwIiwicGF0aCI6IlwvZlwvYmNhNWFiNmQtM2M0OS00M2VlLWFmYmYtODkwOTE4MDczNTE2XC9kZndud3IyLWMxZWVhZDZkLTIzNjEtNGYxMy05YmRkLWNlZTBmMGUwMDdmNi5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.t8gi8iY6g52oQ0cYfJTQdTk5PQMW2WMcFyRn9k9EDBg',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-24 h-24 mx-auto"
        >
          <path
            fill-rule="evenodd"
            d="M15.22 6.268a.75.75 0 01.968-.432l5.942 2.28a.75.75 0 01.431.97l-2.28 5.941a.75.75 0 11-1.4-.537l1.63-4.251-1.086.483a11.2 11.2 0 00-5.45 5.174.75.75 0 01-1.199.19L9 12.31l-6.22 6.22a.75.75 0 11-1.06-1.06l6.75-6.75a.75.75 0 011.06 0l3.606 3.605a12.694 12.694 0 015.68-4.973l1.086-.484-4.251-1.631a.75.75 0 01-.432-.97z"
            clip-rule="evenodd"
          />
        </svg>
      ),
    },
  ]

  const [trendingSongs, setTrendingSongs] = useState([])

  useEffect(() => {
    fetch(`http://localhost:8080/api/music`).then(async (response) => {
      if (response.ok) {
        const data = await response.json()
        console.log(data)
        setTrendingSongs(data)
      } else {
        window.alert('something went wrong')
      }
    })
    // const queryParams: QueryParams = {};
    getArtworks()
  }, [])

  return (
    <>
      <div className=" h-screen">
        {/* Header Navigation bar */}
        <div className="">
          <HeaderNavBar />
        </div>

        {/* Hero Banner */}
        <div className=" ">
          <HeroBanner
            titleText="Trending Products"
            bodyText={`Check out popular art and music`}
            imageSrc={sampleLargeProductImage}
            imageAlt="NEW_ARRIVALS1"
            href="discover/new"
          />
        </div>

        <div
          className="flex bg-menu text-gray-300 px-10 py-3 space-x-10"
          aria-label="Global"
        >
          <button onClick={() => setShow(0)}
          className={show == 0 ? "text-white font-bold": ""}>Music</button>
          <button onClick={() => setShow(1)}
          className={show == 1 ? "text-white font-bold": ""}>Art</button>
          {/* <a onClick={() => setShow(2)}
          className={show == 2 ? "text-white font-bold": ""}>Artists</a> */}
        </div>
        <div className="m-10">
          {show == 0 ? (
            <>
              <p className="text-2xl pb-3 font-bold">Top Global 10 Songs</p>
              <MusicList musicList={trendingSongs.slice(0,10)} />
            </>
          ) : (
            <>
              <p className="text-2xl font-bold">Top Global 10 Art</p>
              <ArtList artList={artworks.slice(0,10)} />
            </>
          )}

          {/* <div className="flex justify-between">
            <p className="text-2xl pb-3 pt-10 font-bold">
              Popular Sceneric Art
            </p>
            <p className="text-lg pb-3 pt-10 font-semibold text-blue-900">
              View more
            </p>
          </div>
          <div className="flex space-x-5 pb-10">
            <div className="overflow-scroll">
              <div className="flex space-x-5 mb-5">
                {popularDigitalArt.map((i, j) => {
                  return <img src={i} className="w-72 h-72 object-cover" />
                })}
              </div>
            </div>
              </div> */}
        </div> 

        {/* Footer */}
        <Footer />
      </div>
    </>
  )
}

// CREATE
//   (:Music {
//     pic: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f305fd5d-9181-411b-bf23-2daea267b63d/dfw9u64-1486a4e6-4453-4f08-a39d-489cd1e9b11c.png/v1/fill/w_894,h_894,q_70,strp/minerva_adoptable_by_ceroticart_dfw9u64-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAyNCIsInBhdGgiOiJcL2ZcL2YzMDVmZDVkLTkxODEtNDExYi1iZjIzLTJkYWVhMjY3YjYzZFwvZGZ3OXU2NC0xNDg2YTRlNi00NDUzLTRmMDgtYTM5ZC00ODljZDFlOWIxMWMucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.0hqyUEtFzp1YHMX5eP4dPqt3H4gXUwWiKJvgm7eclsI', genres: ['beats'], artist: 'prodaye', description: 'beats song',  name: 'Beat 1', price: 4.99, duration: '4:32'
//   }),
//   (:Music { pic: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f305fd5d-9181-411b-bf23-2daea267b63d/dfw8w0p-b440a95d-466d-4bf4-986b-5f04700148d6.png/v1/fill/w_894,h_894,q_70,strp/grim_adoptable__limited_edition_ultra_rare__by_ceroticart_dfw8w0p-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAyNCIsInBhdGgiOiJcL2ZcL2YzMDVmZDVkLTkxODEtNDExYi1iZjIzLTJkYWVhMjY3YjYzZFwvZGZ3OHcwcC1iNDQwYTk1ZC00NjZkLTRiZjQtOTg2Yi01ZjA0NzAwMTQ4ZDYucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.cTWvB_ay92dr7YVy73fI_gAWQjJNvAXSigPKXcK8itI', genres: ['beats'], artist: 'prodaye', description: 'beats song',  name: 'Beat 2', price: 3.99, duration: '2:34'
//   }),
//   (:Music { pic: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f305fd5d-9181-411b-bf23-2daea267b63d/dfw9u64-1486a4e6-4453-4f08-a39d-489cd1e9b11c.png/v1/fill/w_894,h_894,q_70,strp/minerva_adoptable_by_ceroticart_dfw9u64-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAyNCIsInBhdGgiOiJcL2ZcL2YzMDVmZDVkLTkxODEtNDExYi1iZjIzLTJkYWVhMjY3YjYzZFwvZGZ3OXU2NC0xNDg2YTRlNi00NDUzLTRmMDgtYTM5ZC00ODljZDFlOWIxMWMucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.0hqyUEtFzp1YHMX5eP4dPqt3H4gXUwWiKJvgm7eclsI', genres: ['beats'], artist: 'prodaye', description: 'beats song',  name: 'Beat 3', price: 3.99, duration: '2:34'
//   }),
//   (:Music { pic: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f305fd5d-9181-411b-bf23-2daea267b63d/dfw9u64-1486a4e6-4453-4f08-a39d-489cd1e9b11c.png/v1/fill/w_894,h_894,q_70,strp/minerva_adoptable_by_ceroticart_dfw9u64-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAyNCIsInBhdGgiOiJcL2ZcL2YzMDVmZDVkLTkxODEtNDExYi1iZjIzLTJkYWVhMjY3YjYzZFwvZGZ3OXU2NC0xNDg2YTRlNi00NDUzLTRmMDgtYTM5ZC00ODljZDFlOWIxMWMucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.0hqyUEtFzp1YHMX5eP4dPqt3H4gXUwWiKJvgm7eclsI', genres: ['beats'], artist: 'prodaye', description: 'beats song',  name: 'Beat 4', price: 4.99, duration: '4:32'
//   }),
//   (:Music { pic: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f305fd5d-9181-411b-bf23-2daea267b63d/dfw8w0p-b440a95d-466d-4bf4-986b-5f04700148d6.png/v1/fill/w_894,h_894,q_70,strp/grim_adoptable__limited_edition_ultra_rare__by_ceroticart_dfw8w0p-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAyNCIsInBhdGgiOiJcL2ZcL2YzMDVmZDVkLTkxODEtNDExYi1iZjIzLTJkYWVhMjY3YjYzZFwvZGZ3OHcwcC1iNDQwYTk1ZC00NjZkLTRiZjQtOTg2Yi01ZjA0NzAwMTQ4ZDYucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.cTWvB_ay92dr7YVy73fI_gAWQjJNvAXSigPKXcK8itI', genres: ['beats'], artist: 'prodaye', description: 'beats song',  name: 'Beat 5', price: 3.99, duration: '2:34'
//   }),
//   (:Music { pic: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f305fd5d-9181-411b-bf23-2daea267b63d/dfw9u64-1486a4e6-4453-4f08-a39d-489cd1e9b11c.png/v1/fill/w_894,h_894,q_70,strp/minerva_adoptable_by_ceroticart_dfw9u64-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAyNCIsInBhdGgiOiJcL2ZcL2YzMDVmZDVkLTkxODEtNDExYi1iZjIzLTJkYWVhMjY3YjYzZFwvZGZ3OXU2NC0xNDg2YTRlNi00NDUzLTRmMDgtYTM5ZC00ODljZDFlOWIxMWMucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.0hqyUEtFzp1YHMX5eP4dPqt3H4gXUwWiKJvgm7eclsI', genres: ['beats'], artist: 'prodaye', description: 'beats song',  name: 'Beat 6', price: 3.99, duration: '2:34'
//   }),
//   (:Music { pic: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f305fd5d-9181-411b-bf23-2daea267b63d/dfw9u64-1486a4e6-4453-4f08-a39d-489cd1e9b11c.png/v1/fill/w_894,h_894,q_70,strp/minerva_adoptable_by_ceroticart_dfw9u64-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAyNCIsInBhdGgiOiJcL2ZcL2YzMDVmZDVkLTkxODEtNDExYi1iZjIzLTJkYWVhMjY3YjYzZFwvZGZ3OXU2NC0xNDg2YTRlNi00NDUzLTRmMDgtYTM5ZC00ODljZDFlOWIxMWMucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.0hqyUEtFzp1YHMX5eP4dPqt3H4gXUwWiKJvgm7eclsI', genres: ['beats'], artist: 'prodaye', description: 'beats song',  name: 'Beat 7', price: 4.99, duration: '4:32'
//   }),
//   (:Music { pic: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f305fd5d-9181-411b-bf23-2daea267b63d/dfw8w0p-b440a95d-466d-4bf4-986b-5f04700148d6.png/v1/fill/w_894,h_894,q_70,strp/grim_adoptable__limited_edition_ultra_rare__by_ceroticart_dfw8w0p-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAyNCIsInBhdGgiOiJcL2ZcL2YzMDVmZDVkLTkxODEtNDExYi1iZjIzLTJkYWVhMjY3YjYzZFwvZGZ3OHcwcC1iNDQwYTk1ZC00NjZkLTRiZjQtOTg2Yi01ZjA0NzAwMTQ4ZDYucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.cTWvB_ay92dr7YVy73fI_gAWQjJNvAXSigPKXcK8itI', genres: ['beats'], artist: 'prodaye', description: 'beats song',  name: 'Beat 8', price: 3.99, duration: '2:34'
//   })

// To use to find specific songs

// function findByName(props: any) {
//   // update user in DB
//   const request = new Request(`http://localhost:8080/api/music/find`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({ props })
//   });
//   console.log('body', JSON.stringify({ props }))

//   fetch(request)
//     .then(async response => {
//       if (response.ok) {
//         const data = await response.json();
//         console.log(data)
//       } else {
//         console.error('something went wrong');
//       }
//     });
// }
// findByName({name: "Beat 1", artist: "prodaye"})
