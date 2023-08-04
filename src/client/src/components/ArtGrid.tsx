import axios from 'axios';
import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function ArtGrid(props: any) {
  const artList = props.artList
  const navigate = useNavigate();
  
  const incrementArtworkVisits = async (artworkId: string) => {
    axios.put(`http://localhost:8080/api/v0/artworks/increment/${artworkId}`)
        .then(response => {
            console.log('Successfully incremented artwork visits');
        })
        .catch(error => {
            console.error('Error incrementing artwork visits:', error);
        }
    ); 
}

 const handleArtworkClick = (artworkId: string) => {
    console.log('Clicked artwork ID:' + artworkId);
    incrementArtworkVisits(artworkId);
    navigate('/product/' + artworkId);
};

  return (
    <div className="overflow-clip flex justify-between px-10 py-5">
        {
            [0,1,2,3].map(iter => {
                return (
                    <div className="mb-5 w-1/4 px-2">
        {artList.map((i: any, j: number) => {
          return (
            j % 4 == iter && (
              <button className="py-2 text-left" onClick={() => handleArtworkClick(i.id)}>
                <img src={i.imageSrc} className="w-full object-contain" />
                <div className="flex justify-between">
                  <p className="pt-2 text-xl font-medium">{i.name}</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 mt-3"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                    />
                  </svg>
                </div>
                <p className="text-lg font-medium text-gray-400">{i.artistName}</p>
                <p className="text-md italic font-medium text-gray-400">{i.style}, {i.date}</p>
                <p className="text-md text-right font-medium text-gray-500">$ {i.price}</p>
              </button>
            )
          )
        })}
      </div>
                )
            })
        }
    </div>
  )
}
