import React from 'react';
import Menu from '../../components/Menu';
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { formatCurrency } from '../../utils/formatCurrency';
import { useNavigate } from 'react-router-dom';
import axios from "axios";

type Product = {
  id: number
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

interface QueryParams {
  [key: string]: string[];
}

function BiddingPage({}: any) {
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);

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

  // Navigates to the bidding purchase page
  const handleArtworkClick = (artworkId: number) => {
    navigate('/bidding/purchase/' + artworkId);
  };

  const previewArtPanel = {
    img: require("../../assets/previewArt.jpg"),
    name: 'Preview Art',
  };

  const creatorPanel = {
    img: require("../../assets/sampleProfilePicture1.png"),
  };

  const descriptionPanel = {
    description: 'Description:',
    price: 'Current Price:',
  };
  // Render loading state or error state if product is still loading or not found
  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex bg-darkestGrey text-white overflow-clip">
      <Menu />
      <div>
        <button className="bg-darkGrey text-white text-center ml-8 mt-8 font rounded-lg text-2xl p-3 space-y-5" onClick={() => navigate('/product/' + product.id)}>{"<"}</button>
      </div>
      <div className="bg-darkestGrey text-white h-screen w-3/4 mx-auto my-20 space-y-5">
        <h1 className="text-4xl font-semibold">Art Name</h1>
        <div className="flex items-center">
          <img className="h-1/12 w-1/12 rounded-full" src={creatorPanel.img} alt="Creator" />
          <p className="text-2xl font-semibold mx-8">{product.artist}</p>
        </div>

        <img className="h-1/3 w-full object-cover rounded-lg" src={product.imageSrc} alt="Preview Art" />
        <div className="bg-darkGrey rounded-lg p-5 space-y-5">
          <p className="text-xl font-semibold">
            {descriptionPanel.description}
          </p>
          <p className="text-md font-semibold">
            Product Rarity: {product.rarity} <br/>
            Product Medium: {product.medium} <br/>
            Product Material: {product.material}
          </p>
          <p className="text-xl font-semibold">{formatCurrency(product.price)}</p>
        </div>
        <div className="rounded-lg p-5 space-y-5 my-auto">
          <div className="flex justify-between ml-20 mr-40 space-x-4 md:space-x-16 text-xl">
            <button className="bg-white text-black text-center rounded-xl p-4" onClick={() => navigate('/product/' + product.id)}>Purchase for myself</button>
            <button className="bg-white text-black text-center rounded-xl p-4" onClick={ () => handleArtworkClick(product.id)}>Place Bid</button>
            <button className="bg-white text-black text-center rounded-xl p-4">Purchase as a gift</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BiddingPage;
