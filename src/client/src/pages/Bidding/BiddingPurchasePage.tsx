import React from 'react'
import Menu from '../../components/Menu'
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { formatCurrency } from '../../utils/formatCurrency';
import axios from "axios";
import { useNavigate } from 'react-router-dom';


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

type bid = {
  id: number
  productId: number
  userId: number
  bidAmount: number
  startingBid: number
}

interface QueryParams {
  [key: string]: string[];
}

function BiddingPurchasePage({}: any) {

  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product | null>(null);
  const [product2, setProduct2] = useState<Product | null>(null);
  const [bidData, setBidData] = useState<bid | null>(null);
  const [bidAmount, setBidAmount] = useState<string>('');
  const [clicked, setClicked] = useState<boolean>(false);

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

  const postBid = async () => {
    if (bidData == null) {
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:8080/api/v0/bid/post",
        bidData ,
        {
          headers: {
            "Content-Type": "application/json", // Set the Content-Type header to indicate JSON data
          },
        }
      );
      const data = response.data;
      // setProduct(data);
    } catch (error: any) {
      console.error("Error fetching data:", error.response.data);
    }
  };

  useEffect(() => {
    if (bidAmount !== "") {
      setBidData((prevBidData) => ({
        ...prevBidData as any,
        bidAmount: bidAmount,
      }));
    }
  }, [bidAmount]);

  const handleBid = (id: number, productId: number, userId: number, bidAmount: string, startingBid: number) => {
    if (bidAmount !== "") {
      const updatedBidData = {
        id: id,
        productId: productId,
        userId: userId,
        bidAmount: parseInt(bidAmount),
        startingBid: startingBid,
      };
      setBidData(updatedBidData); // Update state, if needed for other purposes
      postBid();
    } else {
      console.error('Invalid bid amount');
    }
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
          <button className="bg-darkGrey text-white text-center font rounded-lg text-2xl px-2 py-2 space-y-5" onClick={() => navigate('/bidding/' + product.id)}>{"<"}</button>
        </div>
        <h1 className="text-4xl font-semibold">Art Name</h1>
        <div className="flex items-center">
          <img className="h-1/12 w-1/12 rounded-full" src={creatorPanel.img} alt="Creator" />
          <p className="text-2xl font-semibold mx-8"> {product.artist} </p>
        </div>

        <img className="h-1/3 w-full object-cover rounded-lg" src={product.imageSrc} alt="Preview Art" />
        <div className="bg-darkGrey rounded-lg p-5 space-y-5">
          <p className="text-xl font-semibold">
            {descriptionPanel.description}
          </p>
          <p className="text-lg font-semibold">
            Product Rarity: {product.rarity} <br/>
            Product Medium: {product.medium} <br/>
            Product Material: {product.material}
          </p>
          <p className="text-xl font-semibold">{formatCurrency(product.price)}</p>
        </div>
        <div className="rounded-lg p-5 space-y-5 text-xl">
          <p className="text-xl font-semibold">Bid Amount</p>
          <div className="flex flex-col md:flex-row justify-between space-y-4 md:space-y-0 md:space-x-4">
          <input
            className="text-black rounded-xl p-4"
            type="text"
            placeholder="Enter Bid Amount"
            pattern="[0-9]+"
            value={bidAmount}
            onChange={(e) => setBidAmount(e.target.value)}
          />
          <button className="bg-white text-black text-center rounded-xl p-4" onClick = {(e) => handleBid(1, product.id, 1, bidAmount, 20)} >Place Bid</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BiddingPurchasePage
