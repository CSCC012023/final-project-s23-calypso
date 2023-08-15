import React, { useState } from 'react'

import MusicCard from './MusicCard'
import AddMusicPopup from './AddMusicPopup'

interface Props {
  musics: {
    name: string,
    artist: string,
    artistName: string,
    description: string,
    duration: string,
    genres: string[],
    pic: string,
    price: number,
    visits: number
  }[],
  addMusic: Function,
  removeMusic: Function,
  isLoggedIn: Boolean
}

function MusicsList({ musics, addMusic, removeMusic, isLoggedIn }: Props) {
  const [musicEditMode, setMusicEditMode] = useState<Boolean>(false);
  const [addMusicIsOpen, setAddMusicIsOpen] = useState<Boolean>(false);

  function handleMusicDelete(name: string, artist: string) {
    removeMusic(name, artist);
  }

  async function checkNameAndArtist(name: string) {
    if (musics.find(music => music.name === name)) {
      return false;
    }
    return true;
  }

  async function handleAddClick(name: string, description: string, duration: string, genres: string, pic: string, price: number) {
    if (await checkNameAndArtist(name)) {
      const newMusic = {
        name: name,
        artist: "",
        artistName: "",
        description: description,
        duration: duration,
        genres: genres.split(",").map((genre: string) => genre.trim()),
        pic: pic,
        price: price,
        visits: 0
      };
      addMusic(newMusic);
      setAddMusicIsOpen(false);
    } else {
      window.alert("Music with this name and artist already exists");
    }
  }

  return (
    <div className="flex flex-col">
      {addMusicIsOpen ? <AddMusicPopup handleAddClick={handleAddClick} handleCancelClick={() => setAddMusicIsOpen(false)} /> : null}
      <div className="flex flex-row justify-between w-full">
        <h2 className="text-2xl font-bold tracking-tight text-white">Music for Sale</h2>
        {isLoggedIn ? (
          <button className="ml-auto h-8 w-16 rounded-full p-1 bg-gray-300 hover:bg-gray-400 active:bg-gray-600"
            onClick={() => setMusicEditMode(!musicEditMode)} >
            {musicEditMode ? "Done" : "Edit"}
          </button>
        ) : null}
      </div>
      <div className="mt-6 flex flex-row space-x-6 xl:space-x-8 w-full overflow-x-auto rounded-md">
        {musicEditMode ? (
          <div className="flex flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
            <button className="flex h-full w-full border-2 border-dashed border-green-500 text-green-500 rounded-lg items-center justify-center space-x-3 hover:bg-gray-800 hover:border-green-400 hover:text-green-400 active:bg-gray-900"
              onClick={() => { setAddMusicIsOpen(true) }}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-12 h-12">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
              <p className="text-2xl font-semibold">Add Music</p>
            </button>
          </div>
        ) : null}
        {musics.length > 0 ? musics.map((music) => (
          <div key={music.name + '-' + music.artist} className="flex flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
            <MusicCard music={music} handleDeleteClick={handleMusicDelete} onEditMode={musicEditMode} />
          </div>
        )) : (
          <div className="flex w-full items-center justify-center">
            <p className="text-center text-2xl font-bold text-gray-500">No music to show</p>
          </div>
        )}
      </div>
    </div>
  )
}


export default MusicsList;
