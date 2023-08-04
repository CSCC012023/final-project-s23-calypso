import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom'

import UserCard from "../components/profile/UserCard"
import ArtworkList from "../components/profile/ArtworksList"
import MusicsList from '../components/profile/MusicsList'

import HeaderNavBar from "../components/common/HeaderNavBar"
import Footer from "../components/common/Footer"

import ErrorPage from "./Error/ErrorPage"


const initUser = {
  id: 0,
  username: 'username',
  name: "First Last",
  description: 'description',
  pic: require('../assets/sampleProfilePicture1.png'),
  banner: require('../assets/sampleLargeProductImage2.jpg')
}

function ProfilePage() {
  const [user, setUser] = useState<any>(initUser);
  const [artworks, setArtworks] = useState<any[]>([]);
  const [musics, setMusics] = useState<any[]>([]);
  const [pageError, setPageError] = useState<boolean>(false);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [cookies, setCookie, removeCookie] = useCookies(['token']);
  const navigate = useNavigate();

  function updateUser(user1: { id: number, username: string, name: string, description: string, pic: any, banner: any, visits: number }) {
    if (user.username !== user1.username || user.name !== user1.name) {
      // update artworks in DB
      artworks.forEach(artwork => {
        artwork.artist = user1.username;
        artwork.artistName = user1.name;
        artwork.imageAlt = artwork.name.toUpperCase() + '-' + artwork.artistName.toUpperCase();
        axios.put(`http://localhost:8080/api/v0/artworks/update/${artwork.id}`, { artwork }, {
          headers: {
            'Content-Type': 'application/json'
          }
        })
          .then(response => {
            if (response.status === 200) {
              const data = response.data;
            } else {
              window.alert('something went wrong');
            }
          })
          .catch(err => console.log(err));
      });

      // update musics in DB
      musics.forEach(music => {
        music.artist = user1.username;
        music.artistName = user1.name;
        axios.put(`http://localhost:8080/api/music/update/${music.name}/${user.username}`, { music }, {
          headers: {
            'Content-Type': 'application/json'
          }
        })
          .then(response => {
            if (response.status === 200) {
              const data = response.data;
            } else {
              window.alert('something went wrong');
            }
          })
          .catch(err => console.log(err));
      });
    }

    // update user in DB
    axios.put(`http://localhost:8080/api/v0/users/${user.id}`, { user: user1 }, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        if (response.status === 200) {
          const data = response.data;
          console.log(data);
          setUser(data);
          console.log("worked");
        } else {
          window.alert('something went wrong');
        }
      })
      .catch(err => console.log(err));
  }

  function removeArtwork(id: string) {
    // delete artwork in DB
    axios.delete(`http://localhost:8080/api/v0/artworks/delete/${id}`)
      .then(response => {
        if (response.status === 200) {
          setArtworks(prev => prev.filter(artwork => artwork.id !== id));
        } else {
          window.alert('something went wrong');
        }
      })
      .catch(err => console.log(err));
  }

  function addArtwork(artwork: { id: string, name: string, artist: string, artistName: string, style: string, price: number, href: string, material: string, medium: string, rarity: string, imageSrc: string, imageAlt: string, visits: number }) {
    // add artwork in DB
    artwork.artist = user.username;
    artwork.artistName = user.name;
    artwork.imageAlt = artwork.name.toUpperCase() + '-' + artwork.artistName.toUpperCase();
    axios.post(`http://localhost:8080/api/v0/artworks/post/`, { artwork }, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        if (response.status === 200) {
          const data = response.data;
          setArtworks(prev => [data, ...prev]);
        } else {
          window.alert('something went wrong');
        }
      })
      .catch(err => console.log(err));
  }

  function removeMusic(name: string, artist: string) {
    // update musics in DB
    axios.delete(`http://localhost:8080/api/music/delete/${name}/${artist}`)
      .then(response => {
        if (response.status === 200) {
          setMusics(prev => prev.filter(music => music.name !== name || music.artist !== artist));
        } else {
          window.alert('something went wrong');
        }
      })
      .catch(err => console.log(err));
  }

  function addMusic(music: { name: string, artist: string, artistName: string, description: string, duration: string, genres: string[], pic: string, price: number, visits: number }) {
    // update musics in DB
    music.artist = user.username;
    music.artistName = user.name;
    axios.post(`http://localhost:8080/api/music/post`, { music }, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        if (response.status === 200) {
          const data = response.data;
          setMusics(prev => [data, ...prev]);
        } else {
          window.alert('something went wrong');
        }
      })
      .catch(err => console.log(err));
  }

  function getUserByID(id: string) {
    axios.get(`http://localhost:8080/api/v0/users/${id}`)
      .then(response => {
        if (response.status === 200) {
          const data = response.data;
          setUser(data);
          getArtworksByUserID(data.id);
          getMusicByUserID(data.id);
        } else {
          setPageError(true);
        }
      })
      .catch(err => setPageError(true));
  }

  function getArtworksByUserID(id: string) {
    axios.get(`http://localhost:8080/api/v0/artworks/userid/${id}`)
      .then(response => {
        if (response.status === 200) {
          const data = response.data;
          setArtworks(data);
        } else {
          window.alert('something went wrong');
        }
      })
      .catch(err => console.log(err));
  }

  function getMusicByUserID(id: string) {
    axios.get(`http://localhost:8080/api/music/userid/${id}`)
      .then(response => {
        if (response.status === 200) {
          const data = response.data;
          setMusics(data);
        } else {
          window.alert('something went wrong');
        }
      })
      .catch(err => console.log(err));
  }

  function getUserByUsername(username: string | undefined) {
    axios.get(`http://localhost:8080/api/v0/users/user/${username}`)
      .then(response => {
        if (response.status === 200) {
          const data = response.data;
          setUser(data);
          getArtworksByUsername(data.username);
          getMusicByUsername(data.username);
          //addVisit(data.id);
        } else {
          setPageError(true);
        }
      })
      .catch(err => setPageError(true));
  }

  function getArtworksByUsername(username: string | undefined) {
    axios.get(`http://localhost:8080/api/v0/artworks/username/${username}`)
      .then(response => {
        if (response.status === 200) {
          const data = response.data;
          setArtworks(data);
        } else {
          window.alert('something went wrong');
        }
      });
  }

  function getMusicByUsername(username: string | undefined) {
    axios.get(`http://localhost:8080/api/music/username/${username}`)
      .then(response => {
        if (response.status === 200) {
          const data = response.data;
          setMusics(data);
        } else {
          window.alert('something went wrong');
        }
      });
  }

  function addVisit(id: string) {
    axios.put(`http://localhost:8080/api/v0/users/increment/${id}`)
      .then(response => {
        if (response.status === 200) {
          const data = response.data;
          setUser(data);
        } else {
          window.alert('something went wrong');
        }
      })
      .catch(err => console.log(err));
  }

  useEffect(() => {
    const url = window.location.pathname;
    if (url === "/profile" || url === "/profile/") {
      // change to currently logged in user
      const verify = async () => {
        if (!cookies.token) {
          navigate("/login");
        }

        const { data } = await axios.post(
          '/api/users/verify', {}
        );

        const { status, id } = data;
        if (status) {
          setIsLoggedIn(true);
          getUserByID(id);
        } else {
          removeCookie('token');
          navigate("/login");
        }
      }
      verify();
    } else {
      const username = url.split('/').filter(Boolean).at(-1)
      setIsLoggedIn(false);
      getUserByUsername(username);
    }
  }, [navigate, removeCookie]);

  return (
    !pageError ? (
      <div className="flex flex-col bg-darkestGrey">
        <HeaderNavBar />
        <div className="w-full min-h-screen">
          <div className="w-full px-0 py-0 sm:px-6 lg:px-10">
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