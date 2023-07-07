import React from 'react'
import { XIcon } from '@heroicons/react/outline'

interface Props {
  product: {
    id: number,
    name: string,
    artist: string,
    style: string,
    price: number,
    href: string,
    imageSrc: string,
    imageAlt: string,
  },
  handleDeleteClick: any,
  onEditMode: boolean
}

function ProductCard({ product, handleDeleteClick, onEditMode }: Props) {
  return (
    <div className="flex flex-row items-center">
      {onEditMode ? (
        <div className="p-5">
          <button className="flex w-16 h-10 border-2 border-white rounded-lg justify-center items-center p-3 hover:bg-gray-600 active:bg-gray-800" onClick={() => handleDeleteClick(product.id)}>
            <svg color="#FF0000" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
            </svg>
          </button>
        </div>
      ) : null}
      <a href={product.href} className="flex flex-row h-32 w-full bg-darkGrey relative rounded-lg overflow-hidden justify-between">
        <div className="flex flex-row space-x-5">
          <img className="flex-shrink-0 h-32 w-32" src={product.imageSrc} alt={product.imageAlt} />
          <div className="flex flex-col my-2 space-y-1">
            <p className="text-4xl font-semibold text-white">{product.name}</p>
            <p className="text-xl text-gray-300">{product.artist}</p>
            <p className="text-lg text-gray-300 italic">{product.style}</p>
          </div>
        </div>
        <div className="flex flex-col justify-end p-5">
          <p className="text-xl font-bold text-white">$ {product.price}</p>
        </div>
        <div className="w-full h-full absolute bg-white opacity-0 hover:opacity-10"></div>
      </a>
    </div>
  );
}

export default ProductCard;