import React, { useState, useEffect } from 'react'

import UserCard from "../components/profile/UserCard"
import ArtworkList from "../components/profile/ArtworksList"
import MusicsList from '../components/profile/MusicsList'

import HeaderNavBar from "../components/common/HeaderNavBar"
import Footer from "../components/common/Footer"

import ErrorPage from "./Error/ErrorPage"
import { get } from 'http'

const artworks1 = [
  {
    id: 1,
    name: 'Lost Girl',
    artist: 'Jennie Li',
    style: 'Oil on canvas',
    price: 500,
    href: 'artwork',
    material: 'canvas',
    medium: 'oil',
    rarity: 'open',
    imageSrc: require('../assets/sampleProductImage2.jpg'),
    imageAlt: 'LOST GIRL - JENNIE LI'
  },
  {
    id: 2,
    name: 'Dystopian Future',
    artist: 'Markus Lawerence',
    style: 'Digital',
    price: 3000,
    href: 'artwork',
    material: 'digital',
    medium: 'digital',
    rarity: 'limited',
    imageSrc: require('../assets/sampleLargeProductImage2.jpg'),
    imageAlt: 'DYSTOPIAN FUTURE - MARKUS LAWERENCE'
  },
  {
    id: 3,
    name: 'Fox-Masked Boy Fox-Masked Boy Fox-Masked Boy',
    artist: 'Natalie Hall',
    style: 'Watercolor on paper',
    price: 50,
    href: 'artwork',
    material: 'paper',
    medium: 'watercolor',
    rarity: 'open',
    imageSrc: require('../assets/sampleProfilePicture1.png'),
    imageAlt: 'FOX MASKED BOY - NATALIE HALL'
  },
  {
    id: 4,
    name: 'Panda',
    artist: 'Panda Man',
    style: 'Sculpture',
    price: 900,
    href: 'artwork',
    material: 'clay',
    medium: 'sculpture',
    rarity: 'unique',
    imageSrc: require('../assets/panda.png'),
    imageAlt: 'PANDA - PANDA MAN'
  }
];

const musics1 = [
  {
    name: 'song1',
    artist: 'prodeye',
    description: 'beats song',
    price: 3.92,
    pic: require('../assets/sampleProductImage2.jpg'),
    duration: '3:23',
    genres: ['beats', 'afrobeats']
  },
  {
    name: 'song2',
    artist: 'prodeye',
    description: 'beats song',
    price: 3.92,
    pic: require('../assets/sampleLargeProductImage2.jpg'),
    duration: '3:23',
    genres: ['beats', 'afrobeats']
  },
  {
    name: 'song3',
    artist: 'prodeye',
    description: 'beats song',
    price: 3.92,
    pic: require('../assets/sampleProfilePicture1.png'),
    duration: '3:23',
    genres: ['beats', 'afrobeats']
  },
  {
    name: 'song4',
    artist: 'prodeye',
    description: 'beats song',
    price: 3.92,
    pic: require('../assets/panda.png'),
    duration: '3:23',
    genres: ['beats', 'afrobeats']
  }
]

const initUser = {
  id: 0,
  username: 'username',
  description: 'description',
  pic: require('../assets/sampleProfilePicture1.png'),
  banner: require('../assets/sampleLargeProductImage2.jpg')
}

function ProfilePage() {
  const [user, setUser] = useState<any>(initUser);
  const [artworks, setArtworks] = useState<any[]>(artworks1);
  const [musics, setMusics] = useState<any[]>(musics1);
  const [pageError, setPageError] = useState<boolean>(false);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  function updateUser(user: { id: number, username: string, description: string, pic: any, banner: any }) {
    // update user in DB
    const request = new Request(`http://localhost:8080/api/v0/users/${user.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ user })
    });

    fetch(request)
      .then(async response => {
        if (response.ok) {
          const data = await response.json();
          setUser(data);
        } else {
          window.alert('something went wrong');
        }
      });
  }

  function removeArtwork(id: string) {
    // delete artwork in DB
    fetch(`http://localhost:8080/api/v0/artworks/delete/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(async response => {
        if (response.ok) {
          setArtworks(prev => prev.filter(artwork => artwork.id !== id));
        } else {
          window.alert('something went wrong');
        }
      });
  }

  function addArtwork(artwork: { id: string, name: string, artist: string, style: string, price: number, href: string, material: string, medium: string, rarity: string, imageSrc: string, imageAlt: string }) {
    // add artwork in DB
    fetch(`http://localhost:8080/api/v0/artworks/post/userid/${user.id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ artwork })
    })
      .then(async response => {
        if (response.ok) {
          const data = await response.json();
          setArtworks(prev => [data, ...prev]);
        } else {
          window.alert('something went wrong');
        }
      });
  }

  function removeMusic(name: string, artist: string) {
    // update musics in DB
    setMusics(prev => prev.filter(music => music.name !== name && music.artist !== artist));
  }

  function addMusic(music: { name: string, artist: string, description: string, duration: string, genres: string[], pic: string, price: number }) {
    // update musics in DB
    setMusics(prev => [music, ...prev]);
  }

  function getUserByID(id: string) {
    fetch(`http://localhost:8080/api/v0/users/${id}`)
      .then(async response => {
        if (response.ok) {
          const data = await response.json();
          setUser(data);
        } else {
          setPageError(true);
        }
      });
  }

  function getArtworksByUserID(id: string) {
    fetch(`http://localhost:8080/api/v0/artworks/userid/${id}`)
      .then(async response => {
        if (response.ok) {
          const data = await response.json();
          setArtworks(data);
        } else {
          window.alert('something went wrong');
        }
      });
  }

  function getUserByUsername(username: string | undefined) {
    fetch(`http://localhost:8080/api/v0/users/user/${username}`)
      .then(async response => {
        if (response.ok) {
          const data = await response.json();
          setUser(data);
        } else {
          setPageError(true);
        }
      })
  }

  function getArtworksByUsername(username: string | undefined) {
    fetch(`http://localhost:8080/api/v0/artworks/username/${username}`)
      .then(async response => {
        if (response.ok) {
          const data = await response.json();
          setArtworks(data);
        } else {
          window.alert('something went wrong');
        }
      });
  }

  useEffect(() => {
    const url = window.location.pathname;
    const username = url.split('/').filter(Boolean).at(-1)
    if (username !== 'profile') {
      getUserByUsername(username);
      getArtworksByUsername(username);
    } else {
      // change to currently logged in user
      setIsLoggedIn(true);
      getUserByID('1');
      getArtworksByUserID('1');
    }
  }, []);

  return (
    !pageError ? (
    <div className="flex flex-col bg-darkestGrey">
      <HeaderNavBar />
      <div className="w-full min-h-screen">
        <div className="p-10 bg-darkestGrey">
          <UserCard user={user} updateUser={updateUser} isLoggedIn={isLoggedIn} />
        </div>
        <div className="w-full mx-auto px-4 py-16 sm:px-6 sm:py-10 lg:px-10">
          <ArtworkList artworks={artworks} addArtwork={addArtwork} removeArtwork={removeArtwork} isLoggedIn={isLoggedIn} />
        </div>
        <div className="w-full mx-auto px-4 py-16 sm:px-6 sm:py-10 lg:px-10">
          <MusicsList musics={musics} addMusic={addMusic} removeMusic={removeMusic} isLoggedIn={isLoggedIn} />
        </div>
      </div>
      <Footer />
    </div>
    ) : (<ErrorPage />)
  );
}

export default ProfilePage;