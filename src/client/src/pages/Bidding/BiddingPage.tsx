import React from 'react';
import Menu from '../../components/Menu';
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { formatCurrency } from '../../utils/formatCurrency';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import ErrorPage from "../Error/ErrorPage"
import HeaderNavBar from '../../components/common/HeaderNavBar';

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

type bidProduct = {
  id: number // Synonymous with the product id
  startingBid: number
  endDate: string
}

interface QueryParams {
  [key: string]: string[];
}

const initUser = {
  id: 0,
  username: 'username',
  description: 'description',
  pic: require('../../assets/sampleProfilePicture1.png'),
  banner: require('../../assets/sampleLargeProductImage2.jpg')
}

function BiddingPage({}: any) {
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [bidProduct, setBidProduct] = useState<bidProduct | null>(null);
  const [pageError, setPageError] = useState<boolean>(false);
  const [user, setUser] = useState<any>(initUser); // For determining the current user

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

  function getBidProduct(queryParams: QueryParams) {
    axios.get(`http://localhost:8080/api/v0/bid/bidProduct/${id}`, { params: queryParams })
      .then(response => {
        if (response.status === 200) {
          const data = response.data;
          setBidProduct(data);
        } else {
          setPageError(true);
        }
      })
      .catch(err => setPageError(true));
  }

  function getUserByUsername(username: string | undefined) {
    axios.get(`http://localhost:8080/api/v0/users/user/${username}`)
      .then(response => {
        if (response.status === 200) {
          const data = response.data;
          setUser(data);
          //addVisit(data.id);
        } else {
          setPageError(true);
        }
      })
      .catch(err => setPageError(true));
  }

  useEffect(() => {
    getUserByUsername(product?.artist);
  }, [product]);

    // Fetch bid product data
    useEffect(() => {
      if (!product) {
        return;
      }
      const queryParams: QueryParams = {};
      getBidProduct(queryParams);
    }, [product]);

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

  // Render loading state or error state if product is still loading or not found
  if (!product) {
    return <div>Loading...</div>;
  }

  const startingPriceText = bidProduct ? (
    <p className="text-xl font-semibold">Starting Price: {formatCurrency(bidProduct?.startingBid)}</p>
  ) : null;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-darkestGrey text-white">
      <HeaderNavBar />
      <div className="w-full px-10 space-y-5">
        <div className="bg-darkestGrey text-white w-3/4 mx-auto my-10 space-y-5">
          <h1 className="text-6xl font-semibold">{product.name}</h1>
          <div className="flex items-center space-x-8">
            <img className="h-16 w-16 rounded-full object-cover" src={user?.pic} alt={user?.pic} />
            <p className="text-lg font-semibold"> By {product.artist} </p>
          </div>
          <div className="flex justify-center space-x-24">
            <div className="w-auto h-96 rounded-lg overflow-hidden">
              <img className="w-full h-full object-cover object-center" src={product.imageSrc} alt="Preview Art" />
            </div>
            
            <div className="bg-darkGrey rounded-lg p-5 space-y-5">
              <p className="text-2xl font-semibold">
                Details:
              </p>
              <p className="text-md opacity ml-4">
                Product Rarity: {product.rarity} <br/>
                Product Medium: {product.medium} <br/>
                Product Material: {product.material}
              </p>
              <p className="text-xl font-semibold">Original Price: {formatCurrency(product.price)}</p>
              {startingPriceText}
            </div>
          </div>
          <div className="flex justify-center space-x-4 md:space-x-16 text-md mt-5">
            <button className="bg-white text-black text-center rounded-xl p-4" onClick={() => navigate('/product/' + product.id)}>Purchase for myself</button>
            {bidProduct ? (
              <button className="bg-white text-black text-center rounded-xl p-4" onClick={() => handleArtworkClick(product.id)}>Place Bid</button>
            ) : (
              <button className="bg-darkGrey text-white text-center rounded-xl p-4 cursor-not-allowed" disabled>Not up for bid</button>
            )}
            <button className="bg-white text-black text-center rounded-xl p-4">Purchase as a gift</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BiddingPage;
