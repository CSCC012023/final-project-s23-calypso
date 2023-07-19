import React from 'react';
import ExampleNavBar from '../components/common/HeaderNavBar';
import previewArt from '../assets/previewArt.jpg'
import samplePanda from '../assets/panda.png'
import sampleProductImage from '../assets/sampleProductImage.png'
import sampleProductImage2 from '../assets/sampleProductImage2.jpg'
import sampleLargeProductImage from '../assets/sampleLargeProductImage.jpg'
import sampleLargeProductImage2 from '../assets/sampleLargeProductImage2.jpg'
import sampleProfilePicture1 from '../assets/sampleProfilePicture1.png'
import ProductsColumn from '../components/product/ProductsColumn';
import ProductsRow2 from '../components/product/ProductsRow2';
type Props = {};

type ProductProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
}

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
  {
    name: 'Semi-Futuristic Super Collection',
    description: '2045 is calling!',
    imageSrc: sampleLargeProductImage,
    imageAlt: 'FUTURE COLLECTION',
    href: 'product',
  },
]

function ProductPage({}: Props) {
  const previewArtPanel = {
    img: require('../assets/previewArt.jpg'),
    name: 'Preview Art',
  };

  return (
    <div className="flex-col bg-darkestGrey min-h-screen">
      <ExampleNavBar />
      <div className="min-w-full w-full sm:pb-16">
        {/* TO DO: Need to make it so width is constant */}
        <ProductsColumn productsList={artworks} categoryTitle="A Maaneth De Silva Original!" id={3} name="testname" price={24.99} imgUrl=""/>
      </div>
      <div className="flex justify-center items-center">
        <ProductsRow2 productsList={collections} categoryTitle="Similar Products" />
      </div>
    </div>
  );
}

export default ProductPage;
