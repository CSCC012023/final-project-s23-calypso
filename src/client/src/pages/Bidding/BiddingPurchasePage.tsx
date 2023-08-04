import React from 'react'
import Menu from '../../components/Menu'
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { formatCurrency } from '../../utils/formatCurrency';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie'
import ErrorPage from "../Error/ErrorPage"
import { format, parseISO, parse, differenceInSeconds, isAfter } from 'date-fns';
import HeaderNavBar from '../../components/common/HeaderNavBar';
import { v4 as uuidv4 } from 'uuid';


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
  id: string
  productId: string
  userId: string
  bidAmount: number
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

function BiddingPurchasePage({}: any) {
  const uniqueId = uuidv4();
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product | null>(null);
  const [product2, setProduct2] = useState<Product | null>(null);
  const [bidData, setBidData] = useState<bid | null>(null);
  const [bidAmount, setBidAmount] = useState<string>('');
  const [clicked, setClicked] = useState<boolean>(false);
  const [bidProduct, setBidProduct] = useState<bidProduct | null>(null);
  const [pageError, setPageError] = useState<boolean>(false);
  const [user, setUser] = useState<any>(initUser); // For determining the current user
  const [artUser, setArtUser] = useState<any>(initUser); // For determining the user owning the artwork
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [cookies, setCookie, removeCookie] = useCookies(['token']);
  const [less, setLess] = useState<boolean>(false);

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

  
  function getUserByID(id: string) {
    axios.get(`http://localhost:8080/api/v0/users/${id}`)
      .then(response => {
        if (response.status === 200) {
          const data = response.data;
          setUser(data);
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
          setArtUser(data);
        } else {
          setPageError(true);
        }
      })
      .catch(err => setPageError(true));
  }

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

    // New useEffect to fetch the current user's data
    useEffect(() => {
      const fetchUserData = async () => {
        if (!cookies.token) {
          console.log("No token found. User is not authenticated.");
          return;
        }
    
        try {
          const { data } = await axios.post(
            '/api/users/verify',
            {}
          );
    
          const { status, id } = data;
          if (status) {
            setIsLoggedIn(true);
            getUserByID(id); // Fetch the current user's data
          } else {
            console.log("Token is invalid. User is not authenticated.");
          }
        } catch (error) {
          console.error("Error fetching data:", error);
          setPageError(true); // Set an error state in case of an error
        }
      };
    
      fetchUserData();
    }, [cookies.token, setIsLoggedIn]);
  

  useEffect(() => {
    const postBid = async () => {
      if (bidData == null) {
        return;
      }

      try {
        const response = await axios.post(
          "http://localhost:8080/api/v0/bid/post",
          bidData,
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

    if (bidData !== null) {
      postBid();
      setLess(false);
    }
  }, [bidData]);

  const handleBid = (productId: string, userId: string, bidAmount: string, startingBid: number) => {
    const parsedBidAmount = parseInt(bidAmount);
    if (bidProduct != null && parsedBidAmount < bidProduct.startingBid) { //TODO: Change this to the current bid amount instead of 20
      setLess(true);
      return;
    } else {
      setLess(false); // Reset the error message when the bid amount is valid
    }

    const uniqueId = uuidv4();

    if (bidAmount !== "") {
      const updatedBidData = {
        id: uniqueId,
        productId: productId,
        userId: userId,
        bidAmount: parseInt(bidAmount),
      };
      setBidData(updatedBidData); // Update state, if needed for other purposes
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

  // Fetch bid product data
  useEffect(() => {
    if (!product) {
      return;
    }
    const queryParams: QueryParams = {};
    getBidProduct(queryParams);
  }, [product]);

  useEffect(() => {
    getUserByUsername(product?.artist);
  }, [product]);



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
    return (
      <div>
        Loading...
      </div>
    );
  }

  if (!bidProduct ) {
    return (
    <div> 
      {/* Bid Item does not exist */}
      {/* <ErrorPage /> */}
    </div>);
  }
  

  return (
    <div className="flex flex-col bg-darkestGrey text-white min-h-screen items-center">
      <HeaderNavBar />
      <div className="w-full px-10 py-10 space-y-5">
        <div className="space-y-3">
          <button className="bg-darkGrey text-white text-center font text-sm rounded-lg px-3 py-2 ml-28" onClick={() => navigate('/bidding/' + product.id)}>{"Go Back"}</button>
          <h1 className="text-6xl font-semibold ml-28">{product.name}</h1>
          <div className="flex items-center space-x-4 ml-28">
            <div className="flex items-center space-x-4">
              <img className="h-16 w-16 rounded-full object-cover" src={user?.pic} alt={user?.pic} />
              <p className="text-lg font-semibold mx-4"> By {product.artist} </p>
            </div>
            {bidProduct && isAfter(new Date(), parse(bidProduct.endDate, 'yyyy-MM-dd', new Date())) ? (
              <p className="text-lg font-semibold text-red-300">
                Bidding Closed Time Up!
              </p>
            ) : (
              <p className="text-lg font-semibold">
                Bid Until: {format(parse(bidProduct.endDate, 'yyyy-MM-dd', new Date()), 'MMMM dd, yyyy')}
              </p>
            )}
          </div>
          <div className="flex justify-center items-center space-x-24 ml-28">
            <div className="w-auto h-96 rounded-lg overflow-hidden">
              <img className="w-full h-full object-cover object-center" src={product.imageSrc} alt="Preview Art" />
            </div>
            <div className="bg-darkGrey rounded-lg p-5 space-y-5">
              <p className="text-xl font-semibold">
                Details:
              </p>
              <p className="text-md opacity ml-4">
                Product Rarity: {product.rarity} <br/>
                Product Medium: {product.medium} <br/>
                Product Material: {product.material}
              </p>
              <p className="text-xl font-semibold">Original Price: {formatCurrency(product.price)}</p>
              <p className="text-xl font-semibold">Starting Price: {formatCurrency(bidProduct?.startingBid)} </p>
            </div>
          </div>
          <div className="rounded-lg p-4 space-y-3 text-center">
            <p className="text-xl font-semibold">Bid Amount</p>
            {less && <p className="text-red-500 text-sm">* Bid amount must be greater than {bidProduct.startingBid}</p>}
            <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
              <input
                className={`rounded-xl p-4 text-md ${isAfter(new Date(), parse(bidProduct?.endDate, 'yyyy-MM-dd', new Date())) ? 'text-gray-400 cursor-not-allowed' : 'text-black'}`}
                type="text"
                placeholder={isAfter(new Date(), parse(bidProduct?.endDate, 'yyyy-MM-dd', new Date())) ? "Bidding Closed" : "Enter Bid Amount"}
                pattern="[0-9]+"
                value={isAfter(new Date(), parse(bidProduct?.endDate, 'yyyy-MM-dd', new Date())) ? "Bidding Closed" : bidAmount}
                onChange={(e) => setBidAmount(e.target.value)}
              />
              <button
                className={`bg-white text-black text-center rounded-xl p-4 text-md ${isAfter(new Date(), parse(bidProduct?.endDate, 'yyyy-MM-dd', new Date())) ? 'cursor-not-allowed' : ''}`}
                onClick={(e) => handleBid((product.id).toString(), user.id, bidAmount, bidProduct?.startingBid)}
                disabled={isAfter(new Date(), parse(bidProduct?.endDate, 'yyyy-MM-dd', new Date()))}
              >
                Place Bid
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BiddingPurchasePage
