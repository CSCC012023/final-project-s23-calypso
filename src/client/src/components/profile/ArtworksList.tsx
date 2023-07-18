import React from 'react'
import { useState } from 'react'
import { nanoid } from 'nanoid'

import ArtworkCard from './ArtworkCard'
import AddArtworkPopup from './AddArtworkPopup'

interface Props {
  artworks: {
    id: string,
    name: string,
    artist: string,
    style: string,
    price: string,
    href: string,
    material: string,
    medium: string,
    rarity: string,
    imageSrc: string,
    imageAlt: string,
  }[],
  addArtwork: Function,
  removeArtwork: Function,
  isLoggedIn: Boolean
}

function ArtworksList({ artworks, addArtwork, removeArtwork, isLoggedIn }: Props) {
  const [artworkEditMode, setArtworkEditMode] = useState(false);
  const [addArtworkIsOpen, setAddArtworkIsOpen] = useState(false);

  async function getNewID(): Promise<string> {
    const id = nanoid();
    const response = await fetch(`http://localhost:8080/api/v0/artworks/id/${id}`);
    const data = await response.json();
    if (data === null) {
      return id;
    } else {
      return getNewID();
    }
  }

  function handleArtworkDelete(id: number) {
    removeArtwork(id);
  }

  async function handleAddClick(name: string, artist: string, style: string, material: string, medium: string, rarity: string, image: string, price: string) {
    const newArtwork = {
      id: await getNewID(),
      name: name,
      artist: artist,
      style: style,
      price: price,
      href: "#",
      material: material,
      medium: medium,
      rarity: rarity,
      imageSrc: image,
      imageAlt: name.toUpperCase() + " - " + artist.toUpperCase()
    };
    addArtwork(newArtwork);
    setAddArtworkIsOpen(false);
  }

  return (
    <div className="flex flex-col">
      {addArtworkIsOpen ? <AddArtworkPopup handleAddClick={handleAddClick} handleCancelClick={() => setAddArtworkIsOpen(false)} /> : null}
      <div className="flex flex-row justify-between w-full">
        <h2 className="text-2xl font-bold tracking-tight text-white">Artworks for Sale</h2>
        {isLoggedIn ? (
          <button className="ml-auto h-8 w-16 rounded-full p-1 bg-gray-300 hover:bg-gray-400 active:bg-gray-600"
            onClick={() => setArtworkEditMode(!artworkEditMode)} >
            {artworkEditMode ? "Done" : "Edit"}
          </button>
        ) : null}
      </div>
      <div className="mt-6 flex flex-row space-x-6 xl:space-x-8 w-full overflow-x-auto rounded-md">
        {artworkEditMode ? (
          <div className="flex flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
            <button className="flex h-full w-full border-2 border-dashed border-green-500 text-green-500 rounded-lg items-center justify-center space-x-3 hover:bg-gray-800 hover:border-green-400 hover:text-green-400 active:bg-gray-900 mb-2"
              onClick={() => { setAddArtworkIsOpen(true) }}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-12 h-12">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
              <p className="text-2xl font-semibold">Add Artwork</p>
            </button>
          </div>
        ) : null}
        {artworks.length > 0 ? artworks.map((artwork) => (
          <div key={artwork.id} className="flex flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
            <ArtworkCard artwork={artwork} handleDeleteClick={handleArtworkDelete} onEditMode={artworkEditMode} />
          </div>
        )) : (
          <div className="flex w-full items-center justify-center">
            <p className="text-center text-2xl font-bold text-gray-500">No artworks to show</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ArtworksList;