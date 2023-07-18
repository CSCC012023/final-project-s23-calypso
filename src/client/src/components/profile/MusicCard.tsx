import React, { useState } from 'react'

import ConfirmDeletePopup from './ConfirmDeletePopup'

interface Props {
  music: {
    name: string,
    artist: string,
    description: string,
    duration: string,
    genres: string[],
    pic: string,
    price: number
  },
  handleDeleteClick: Function,
  onEditMode: Boolean
}

const defaultImage = "https://t3.ftcdn.net/jpg/03/03/48/34/360_F_303483463_zbI02LCzq9O4IHQ6tJccIVG75dLv2bSs.jpg"

function MusicCard({ music, handleDeleteClick, onEditMode }: Props) {
  const [delPopup, setDelPopup] = useState(false);

  return (
    <div className="group relative w-full">
      {delPopup ? (
          <ConfirmDeletePopup name={music.name} artist={music.artist} handleDeleteClick={() => {handleDeleteClick(music.name, music.artist); setDelPopup(false)}} handleCancelClick={() => setDelPopup(false)} />
        ): null}
      {onEditMode ? (
          <button className="flex w-16 h-10 absolute z-10 bg-black rounded-lg overflow-hidden border-white border-2 justify-center items-center hover:bg-gray-600 active:bg-gray-800"
            onClick={() => setDelPopup(true)}>
            <svg color="#FF0000" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        ): null}
      <div className="flex items-center justify-center w-full aspect-h-1 aspect-w-1 overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
        <img
           src={music.pic || defaultImage}
           alt={music.name.toUpperCase() + " - " + music.artist.toUpperCase()}
           className="h-full w-full object-cover object-center lg:h-full lg:w-full"
         />
      </div>
      <div className="mt-4 mb-2 flex justify-between">
        <div className="overflow-hidden">
          <h3 className="text-lg text-white text-ellipsis overflow-hidden whitespace-nowrap">
            <a href={"http://localhost:3000/product/" + ''}>
              <span aria-hidden="true" className="absolute inset-0" />
              {music.name}
            </a>
          </h3>
          <p className="mt-1 text-sm text-gray-300 text-ellipsis overflow-hidden whitespace-nowrap">{music.artist}</p>
          <p className="mt-1 text-sm text-gray-300 italic text-ellipsis overflow-hidden whitespace-nowrap">{music.genres.map(genre => genre + ', ')}</p>
        </div>
        <p className="text-lg font-medium text-white flex-shrink-0">$ {music.price}</p>
      </div>
    </div>
  );
}

export default MusicCard;
