import React from 'react';
import ExampleNavBar from '../components/common/HeaderNavBar';

type Props = {};

function ProductPage({}: Props) {
  const previewArtPanel = {
    img: require('../assets/previewArt.jpg'),
    name: 'Preview Art',
  };

  return (
    <div className="flex flex-col bg-darkestGrey h-screen w-screen">
      <ExampleNavBar />
      <div className="flex flex-col items-center">
        <div className = "justify-center"
          style={{
            width: '900px',
            height: '500px',
            position: 'absolute',
            top: '250px',
            //left: '250px',
            overflow: 'auto',
          }}
        >
          <img
            src={previewArtPanel.img}
            alt="Image"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div className="text-white text-center mt-auto bottom-0 left-0 w-full">
            {previewArtPanel.name}
          </div>
        </div>

        <div
          className="flex justify-center mt-4"
          style={{ width: '900px', backgroundColor: 'gray' }}
        >
          <div className="bg-lightGrey p-4">
            <p className="text-black">A Maaneth De Silva Original piece !</p>
          </div>
        </div>
        <div className="flex justify-center mt-4">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
            Add to cart
          </button>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ml-2">
            Place a bid
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
