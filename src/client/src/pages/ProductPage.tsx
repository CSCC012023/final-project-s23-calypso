import React from 'react';
import ExampleNavBar from '../components/common/HeaderNavBar';
import previewArt from '../assets/previewArt.jpg'
import samplePanda from '../assets/panda.png'
import sampleProductImage from '../assets/sampleProductImage.png'
import sampleProductImage2 from '../assets/sampleProductImage2.jpg'
import sampleLargeProductImage from '../assets/sampleLargeProductImage.jpg'
import sampleLargeProductImage2 from '../assets/sampleLargeProductImage2.jpg'
import sampleProfilePicture1 from '../assets/sampleProfilePicture1.png'
import ProductsColumn from '../components/home/ProductsColumn';
import ProductsRow2 from '../components/home/ProductsRow2';
type Props = {};

const artworks = [
  {
    id: 1,
    name: 'Lost Girl',
    artist: 'Jennie Li',
    style: 'Oil on canvas',
    price: '$500',
    href: 'product',
    imageSrc: sampleProductImage2,
    imageAlt: 'LOST GIRL - JENNIE LI',
  },
]

const collections = [
  {
    name: 'Best Sceneries of 2023',
    description: 'The very best.',
    imageSrc: previewArt,
    imageAlt: 'BEST SCENERIES OF 2023',
    href: 'discover/scenery',
  },
  {
    name: 'The Lonely Classical Collection',
    description: 'All things lonely and dark.',
    imageSrc: sampleProductImage2,
    imageAlt: 'LONELY COLLECTION',
    href: 'discover/classical',
  },
  {
    name: 'Futuristic Digital Collection',
    description: '2070 is calling!',
    imageSrc: sampleLargeProductImage,
    imageAlt: 'FUTURE COLLECTION',
    href: 'discover/digital',
  },
]

function ProductPage({}: Props) {
  const previewArtPanel = {
    img: require('../assets/previewArt.jpg'),
    name: 'Preview Art',
  };

  return (
    <div className="flex flex-col bg-darkestGrey min-h-screen">
      <ExampleNavBar />
      <div className="flex justify-center items-center">
        <ProductsColumn productsList={artworks} categoryTitle="A Maaneth De Silva Original" />
      </div>
      <div className="flex justify-center items-center">
        <ProductsRow2 productsList={collections} categoryTitle="Similar Products" />
      </div>
      {/* <div className="flex flex-col items-center">
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

      </div> */}
    </div>
  );
}

export default ProductPage;
