import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import HeaderNavBar from '../components/common/HeaderNavBar'
import Footer from '../components/common/Footer'
import { useNavigate, useParams } from 'react-router-dom'
import { AiFillPlayCircle, AiFillPauseCircle } from 'react-icons/ai' // icons for play and pause
import { IconContext } from 'react-icons' // for customazing the icons

export default function MusicStream({}: any) {
  const navigate = useNavigate()
  var { artist, song } = useParams();

  const [play, setPlay] = useState(false);
  const songRef = useRef<HTMLAudioElement>(null);
  const MAX = 20;

  const toggleAudio = () => {
    if (play) {
      songRef.current?.pause();
      setPlay(false);
    } else {
      void songRef.current?.play();
      setPlay(true);
    }
  }


  console.log(artist, song)

  const [music, setMusic] = useState({
    url: '',//'https://dl.sndup.net/njdv/drakeTest.mp3',
    name: '',
    artist: '',
    price: -1,
    pic: ''
  })

    useEffect(() => {
        axios.get(`http://localhost:8080/api/music/find/${artist}/${song}`, {})
        .then(response => {
            const data = response.data;
            setMusic(data[0]);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
    }, [])

  return (
    <div className=" h-screen">
      {/* Header Navigation bar */}
      <div className="">
        <HeaderNavBar />
      </div>

      <div className="h-screen bg-darkestGrey p-10">
        <div className="flex text-white">
          <img
            className="h-96 w-96 object-cover"
            src={music.pic}
          />
          <div className="pl-10">
            <div className='flex'>
            {!play ? (
                <button className="pr-5" onClick={toggleAudio}>
                  <IconContext.Provider
                    value={{ size: '72px', color: '#ffffff' }}
                  >
                    <AiFillPlayCircle />
                  </IconContext.Provider>
                </button>
              ) : (
                <button className="pr-5" onClick={toggleAudio}>
                  <IconContext.Provider
                    value={{ size: '72px', color: '#ffffff' }}
                  >
                    <AiFillPauseCircle />
                  </IconContext.Provider>
                </button>
              )}
                <div>
                    <p className="text-4xl">{music.name}</p>
                    <p className="text-2xl">{music.artist}</p>
                </div>
            </div>
            <p className="py-10">Description</p>
            <p className="text-2xl">$ {music.price != -1 && music.price}</p>
              
          </div>
          <audio ref={songRef} loop src={music.url} />
          
        </div>
        <form className='text-white pt-20 text-3xl space-x-10'>
            <a href="/" className='border-white border py-3 px-5 rounded-lg'>
              Place bid
            </a>
            <a href="/" className='border-white border py-3 px-5 rounded-lg'>
              Purchase
            </a>
          </form>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  )
}
