import React, { useEffect, useState } from "react";
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
import { useParams } from 'react-router-dom';
import axios from "axios";


type Props = {
  product : {
    pid: string,
    name: string,
    artist: string,
    style: string,
    price: number,
    href: string,
    imageSrc: string,
    imageAlt: string,
    date: number,
    rarity: string,
    medium: string,
    material: string,
  }
};

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

interface QueryParams {
  [key: string]: string[];
}

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

function ProductPage({}: any) {

  const { id } = useParams();
  // const descriptionText = 'Artwork ID:' + id;

  const previewArtPanel = {
    img: require('../assets/previewArt.jpg'),
    name: 'Preview Art',
  };
  const [product, setProduct] = useState([]);

  const getArtworkById = async (queryParams: QueryParams) => {
    axios.get(`http://localhost:8080/api/v0/artworks/id/${id}`, {
        params: queryParams
    })
        .then(response => {
            const data = response.data;
            setProduct(data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
        console.log(product);
  };

  // Fetch artwork details when the component mounts
  useEffect(() => {
    const queryParams: QueryParams = {};
    // Add any query parameters if needed
    getArtworkById(queryParams);
  }, []);

  // Render loading state or error state if product is still loading or not found
  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex-col bg-darkestGrey min-h-screen">
      <ExampleNavBar />
      <div className="min-w-full w-full sm:pb-16">
        {/* TO DO: Need to make it so width is constant */}
        <ProductsColumn product={product} categoryTitle="" />
        
        {/* <ProductsColumn productsList={artworks} categoryTitle= {descriptionText} /> */}
      </div>
      <div className="flex justify-center items-center">
        <ProductsRow2 productsList={collections} categoryTitle="Similar Products" />
      </div>
    </div>
  );
}

export default ProductPage;
