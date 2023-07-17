import React from 'react'

interface Props {
  artwork: {
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
  },
  handleDeleteClick: any,
  onEditMode: boolean
}

function ArtworkCard({ artwork, handleDeleteClick, onEditMode }: Props) {
  return (
    <div className="group relative w-full">
      {onEditMode ? (
          <button className="flex w-16 h-10 absolute z-10 bg-black rounded-lg overflow-hidden border-white border-2 justify-center items-center hover:bg-gray-600 active:bg-gray-800"
            onClick={() => handleDeleteClick(artwork.id)}>
            <svg color="#FF0000" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        ): null}
      <div className="flex items-center justify-center w-full aspect-h-1 aspect-w-1 overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
        <img
           src={artwork.imageSrc}
           alt={artwork.imageAlt}
           className="h-full w-full object-cover object-center lg:h-full lg:w-full"
         />
      </div>
      <div className="mt-4 mb-2 flex justify-between">
        <div className="overflow-hidden">
          <h3 className="text-lg text-white text-ellipsis overflow-hidden whitespace-nowrap">
            <a href={"http://localhost:3000/product/" + artwork.href}>
              <span aria-hidden="true" className="absolute inset-0" />
              {artwork.name}
            </a>
          </h3>
          <p className="mt-1 text-sm text-gray-300 text-ellipsis overflow-hidden whitespace-nowrap">{artwork.artist}</p>
          <p className="mt-1 text-sm text-gray-300 italic text-ellipsis overflow-hidden whitespace-nowrap">{artwork.style}</p>
        </div>
        <p className="text-lg font-medium text-white flex-shrink-0">$ {artwork.price}</p>
      </div>
    </div>
  );
}

export default ArtworkCard;