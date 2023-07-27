import React from 'react'
import Menu from '../../components/Menu'
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { formatCurrency } from '../../utils/formatCurrency';
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

function BiddingPurchasePage({}: any) {

  const { id } = useParams();

  const [product, setProduct] = useState<Product | null>(null);
  const [product2, setProduct2] = useState<Product | null>(null);

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

  const postBid = async (queryParams: QueryParams) => {
    axios.post(`http://localhost:8080/api/v0/bidding/id/${id}`, {
        params: queryParams
    })
        .then(response => {
            const data = response.data;
            // setProduct(data);
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

  const previewArtPanel = {
    img: require("../../assets/previewArt.jpg"),
    name: 'Preview Art',
  }

  const creatorPanel = {
    img: require("../../assets/sampleProfilePicture1.png"),
  }

  const descriptionPanel = {
    description: 'Description:',
    price: 'Current Price:'
  }

  // Render loading state or error state if product is still loading or not found
  if (!product) {
    return <div>Loading...</div>;
  }
  

  return (
    <div className="flex bg-darkestGrey text-white h-screen overflow-clip">
      <Menu />
      <div className="bg-darkestGrey text-white h-screen w-full px-10 mx-auto py-10 space-y-5 overflow-scroll">
        <div>
          <a href="/bidding" className="bg-darkGrey text-white text-center font rounded-lg text-2xl px-2 py-2 space-y-5">{"<"}</a>
        </div>
        <h1 className="text-4xl font-semibold">Art Name</h1>
        <div className="flex items-center">
          <img className="h-1/12 w-1/12 rounded-full" src={creatorPanel.img} alt="Creator" />
          <p className="text-2xl font-semibold mx-8"> {product.artist} </p>
        </div>

        <img className="h-1/3 w-full object-cover" src={product.imageSrc} alt="Preview Art" />
        <div className="bg-darkGrey rounded-lg p-5 space-y-5">
          <p className="text-xl font-semibold mb-40">{descriptionPanel.description}</p>
          <p className="text-xl font-semibold">{formatCurrency(product.price)}</p>
        </div>
        <div className="rounded-lg p-5 space-y-5 text-xl">
          <p className="text-xl font-semibold">Bid Amount</p>
          <div className="flex flex-col md:flex-row justify-between space-y-4 md:space-y-0 md:space-x-4">
            <input className="text-black rounded-xl p-4" type="text" placeholder="Enter Bid Amount" pattern="[0-9]+" />
            <button className="bg-white text-black text-center rounded-xl p-4">Place Bid</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BiddingPurchasePage
